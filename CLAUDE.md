# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn install      # install dependencies (Yarn 1, see packageManager in package.json)
yarn dev           # start frontend dev server at http://localhost:3000
yarn build         # type-aware production build, outputs to dist/
yarn preview       # preview the production build locally
yarn server        # start the backend API (nodemon + ts-node) at http://localhost:3001
yarn branch        # interactive helper (tools/branch.sh) to cut a feature-/chore-/fix- branch off develop
```

Frontend and backend are run as two separate processes in dev (`yarn dev` + `yarn server`); there is no single command that starts both.

`.env` (gitignored) is required for the backend: `SERVER_PORT`. `CLIENT_PORT` is also defined there but the Vite dev server port is actually hardcoded in `vite.config.js` (`server.port`), not read from this var.

The `personal-info-service` Spring Boot app (sibling repo, run via `docker compose up` there) must be running and reachable at `http://localhost:8080` for `/api/v1/*` calls (e.g. technologies data) to resolve in dev — see `docs/architecture/README.md` and `docs/api/contracts.md`.

There is no test suite and no lint/format script defined in package.json — ESLint and Prettier are installed as devDependencies and wired into the editor (`.vscode/settings.json`: format-on-save + `source.fixAll` via `esbenp.prettier-vscode`), but there is no committed ESLint/Prettier config file and no CLI script to invoke them from the terminal.

Docker: `docker build -t personal-project-vue3 .` then `docker run -p 8080:80 personal-project-vue3` (Dockerfile runs `yarn dev`, not a production server — it's a dev-mode container). The Dockerfile only runs the frontend; it does not start the backend.

## Architecture

This is a single-page personal portfolio. The routing/page model is intentionally not one-Vue-Router-route-per-page:

- `vue-router` ([src/router/index.ts](src/router/index.ts)) has exactly one catch-all route (`/:pathMatch(.*)*`) that always renders [src/views/PageView.vue](src/views/PageView.vue).
- Actual "page" selection happens inside `PageView.vue` via a `pageRef` from the `usePages` composable, which switches between components in a local `Pages` map (`homePage`, `flowerPage` from [src/utils/pages.ts](src/utils/pages.ts) `PageAliases` enum). Adding a new page means adding an entry to the `Pages` map in `PageView.vue`, an alias in `PageAliases`, and calling `setPage(...)`.
- Layout selection works the same way one level up: `AppRender.vue` → `App.vue` picks a layout component from a local `Layouts` map via the `useLayout` composable.

### The "vault" DI store ([src/plugins/vault.ts](src/plugins/vault.ts))

State that needs to survive across component instances (like `pageRef`/`layoutRef` above) is not done with Pinia/Vuex — there's a small custom plugin instead:

- `vaultPlugin` provides a single empty `vault` object into the app via `app.provide("vault", vault)`.
- `initVault<T>(vaultKey)` (called from within a composable) injects that vault, lazily creates a namespace under `vaultKey`, and returns `{ get, storeAndGet }`.
- The convention used by every composable in `src/composables/` (`useLayout.ts`, `usePages.ts`) is: check `storage.get(key)` for an already-initialized instance; if present return it as a singleton; otherwise create the refs/functions and register them with `storage.storeAndGet(key, {...})`.

When adding a new composable that needs shared, app-wide reactive state, follow this same `initVault` get-or-create pattern rather than introducing a new state library.

### Backend ([server.ts](server.ts)) and `personal-info-service`

`server.ts` is a minimal Hono API at the repo root, separate from the Vite-built frontend. Per `docs/decisions/architecture-decisions.md` (ADR-0002), it's a temporary stand-in for a not-yet-built API Gateway — new backend business logic goes into the sibling `personal-info-service` Spring Boot repo instead, not here.

- `server.ts` currently exposes no routes of its own; the DB-backed `GET /api/technologies` route it used to serve has been retired now that `GET /api/v1/technologies` is implemented by `personal-info-service` (see `docs/api/contracts.md`). Keep adding any *new* placeholder gateway routes here only if they don't already have a home in `personal-info-service`.
- It has its own TS project, [tsconfig.server.json](tsconfig.server.json), which extends the root `tsconfig.json` but overrides `module`/`moduleResolution` to CommonJS/`node` and narrows `include`/`exclude` to just `server.ts`. This isolation is required: the root tsconfig uses `moduleResolution: "bundler"` for the frontend, and letting the server config's `include` inherit the root's `src/**` glob causes TypeScript to re-check every Vue/frontend file under Node resolution and break `vue`'s package-export resolution. Any new server-side file must be added to this narrowed `include`, not the root tsconfig.
- `yarn server` runs it via `nodemon` + `ts-node -P tsconfig.server.json`, independent of `yarn dev`.
- In dev, `vite.config.js`'s `server.proxy` forwards `/api/v1/*` requests to `http://localhost:8080` (`personal-info-service`, run via `docker compose up` in that repo) and all other `/api/*` requests to `http://localhost:3001` (the Hono placeholder), so frontend code can call `fetch("/api/...")` with no CORS handling needed either way.

### Response-model wrapper convention

Raw API/DB response shapes (defined as plain types under `src/types/models/`, e.g. `AppResponse`, `Technology`) are not consumed directly in components. Each has a paired class in `src/models/` (`AppModel`, `TechnologyModel`) that wraps the raw object and exposes `getX()` accessor methods instead of raw field access — see `AppModel.getTitle()`/`getMetaTags()` and `TechnologyModel.getName()`/`getConfidence()`/`getCategory()`. Follow this wrapper pattern for new API-backed data rather than typing components directly against the raw response shape.

### Other structure

- `src/entry.ts` → `src/main.ts` (`createCustomApp`) → `AppRender.vue` (wraps `App.vue` in `<Suspense>`) → `App.vue` (layout switch + `<RouterView>`) → `PageView.vue` (page switch).
- `@unhead/vue` handles `<head>`/meta tags per page (see `useHead` call in [src/pages/HomePage.vue](src/pages/HomePage.vue)); `AppModel` ([src/models/AppModel.ts](src/models/AppModel.ts)) wraps an `AppResponse` payload (`title`, `_metaTags`) for this purpose.
- Path aliases (in both `vite.config.js` and `tsconfig.json`): `@` → `src/`, `@globalStyle` → `src/assets/style/`.
- SCSS partials live in `src/assets/style/` (`_variables.scss`, `_mixins.scss`, `_theme.scss`, `_keyframes.scss`, `global.scss`).
- In dev mode, [vite/devSingleCss.ts](vite/devSingleCss.ts) is a custom Vite plugin that concatenates every transformed `.scss` module into one compiled stylesheet served at `/@dev-bundled-styles.css` and injected into `<head>`, rather than relying on Vite's normal per-module CSS injection — this exists to make the dev experience match the single-bundle CSS output (`build.cssCodeSplit: false`) used in production.
- SVGs are imported as Vue components via `vite-svg-loader`.
- Env vars are typed in [src/types/env.d.ts](src/types/env.d.ts) (`ImportMetaEnv`) — add new `VITE_*` vars there.
