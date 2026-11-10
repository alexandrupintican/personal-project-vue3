# Personal Portfolio – Vue 3

A single-page personal portfolio built with **Vue 3**, **TypeScript**, and **Vite**. It shows a hero, an about section with stats, skills, experience, testimonials and a contact footer. Skills data comes from a separate Spring Boot service ([`personal-info-service`](#backend-personal-info-service)). The other sections use local mock data until their endpoints exist.

## Features

- ⚡ Vue 3 (Composition API, `<script setup>`) + Vite
- 🟦 TypeScript throughout, with typed env vars and API models
- 🎨 SCSS partials with global theme tokens, and a single bundled stylesheet in dev and prod
- 📱 Responsive layout with a mobile drawer, using a breakpoint helper and the flyout system
- 🪟 Flyout system (drawers/modals) with queueing, direction and transition options
- 🧩 Reusable UI components (`AppButton`, `AppIcon`, `SkillBar`)
- 🖼️ SVGs imported as Vue components (`vite-svg-loader`)
- 🏷️ Per-page `<head>`/meta tags via `@unhead/vue`
- 🔌 Typed API client and response-model wrappers
- 🐳 Dockerfile for a dev-mode container

---

## Tech Stack

| Technology         | Purpose                                                  |
| ------------------ | -------------------------------------------------------- |
| Vue 3              | Frontend framework                                       |
| TypeScript         | Static typing                                            |
| Vite               | Build tool and dev server (with API proxy)               |
| Vue Router         | Single catch-all route; pages are switched in-app        |
| @unhead/vue        | `<head>` and meta tag management                         |
| SCSS (sass)        | Styling                                                  |
| vite-svg-loader    | SVG → Vue component imports                              |
| Hono (Node)        | Temporary API-gateway placeholder (`server.ts`)          |
| Docker             | Containerized dev environment                            |

---

## Project Structure

```text
.
├── docs/                   # Architecture, API contract & ADRs (mirrored with personal-info-service)
│   ├── api/                # contracts.md + openapi.yaml
│   ├── architecture/
│   └── decisions/
├── public/                 # Static assets (favicon, icons, resume.pdf)
├── src/
│   ├── api/                # Typed API client (fetch wrapper + services)
│   ├── assets/
│   │   ├── style/          # SCSS partials (_variables, _mixins, _theme, global)
│   │   └── svg/            # SVG icons + index.ts barrel
│   ├── components/
│   │   ├── content/        # Homepage sections (Hero, About, Skills, Experience, Testimonials)
│   │   ├── flyouts/        # Flyout shell, FlyoutManager and flyout contents
│   │   ├── footer/
│   │   ├── header/
│   │   └── ui/             # Generic building blocks (AppButton, AppIcon, SkillBar)
│   ├── composables/        # Shared state/logic (useLayout, usePages, useFlyout, useTechnologies)
│   ├── layouts/            # Layout components
│   ├── mock/               # Placeholder data for sections without an API yet
│   ├── models/             # Classes wrapping raw API responses with getX() accessors
│   ├── pages/              # Page components (HomePage)
│   ├── plugins/            # vault (shared-state DI), breakpoint helpers
│   ├── router/             # Single catch-all route
│   ├── types/              # Raw response types (types/models) and env typings
│   ├── utils/
│   ├── views/              # PageView: picks the active page
│   ├── App.vue / AppRender.vue
│   ├── entry.ts            # Bootstraps and mounts the app
│   └── main.ts             # createCustomApp()
├── tools/branch.sh         # Branch-creation helper
├── vite/devSingleCss.ts    # Dev plugin: serves all SCSS as one stylesheet
├── server.ts               # Hono placeholder API (port 3001)
├── Dockerfile
├── vite.config.js
├── tsconfig.json           # Frontend TS config
└── tsconfig.server.json    # Isolated TS config for server.ts
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- Yarn 1 (`packageManager: yarn@1.22.22`)
- For live skills data: [`personal-info-service`](#backend-personal-info-service) running on `http://localhost:8080`

### Installation

```bash
git clone https://github.com/alexandrupintican/personal-project-vue3.git
cd personal-project-vue3
yarn install
```

### Environment

Create a `.env` file in the repo root. It is gitignored.

```dotenv
CLIENT_PORT=3000      # informational only; the Vite port is hardcoded in vite.config.js
SERVER_PORT=3001      # port for the Hono placeholder (server.ts)
VITE_API_URL=/api/v1  # base path the API client prefixes onto every request
```

Add any new `VITE_*` variable to `src/types/env.d.ts` as well.

---

## Development

The frontend and the placeholder backend run as two separate processes:

```bash
yarn dev      # frontend at http://localhost:3000
yarn server   # Hono placeholder at http://localhost:3001 (optional, it has no routes right now)
```

In dev, Vite proxies API calls:

| Request path  | Proxied to                                     |
| ------------- | ---------------------------------------------- |
| `/api/v1/*`   | `http://localhost:8080` (personal-info-service) |
| `/api/*`      | `http://localhost:3001` (Hono placeholder)      |

If `personal-info-service` isn't running, the skills data fails to load. The other sections still render from `src/mock/`.

### Backend: personal-info-service

`personal-info-service` is a Spring Boot app in a sibling repo. It owns the real API, currently `GET /api/v1/technologies`. Start it from that repo with `mvnw.cmd spring-boot:run`. See that repo's README for its database prerequisites. The API contract shared by the two repos lives in [`docs/api/contracts.md`](docs/api/contracts.md) and [`docs/api/openapi.yaml`](docs/api/openapi.yaml).

---

## Production Build

```bash
yarn build     # type-aware build to dist/
yarn preview   # serve the built output locally
```

---

## Docker

```bash
docker build -t personal-project-vue3 .
docker run -p 3000:3000 personal-project-vue3
```

The image runs `yarn dev`, so it is a **dev-mode** container, not a production server. It only runs the frontend, without `server.ts` or the backend. Vite only listens on localhost by default, so you may need to run it with `--host` before the container is reachable from the host.

---

## Available Scripts

| Command        | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `yarn dev`     | Start the frontend dev server (port 3000)                           |
| `yarn build`   | Build for production into `dist/`                                   |
| `yarn preview` | Preview the production build                                        |
| `yarn server`  | Start the Hono placeholder API with nodemon (port 3001)             |
| `yarn branch`  | Interactively create a `feature-`/`chore-`/`fix-` branch off `develop` |

There is no test suite or lint script yet. ESLint and Prettier are applied through the editor (format on save).

---

## Architecture

The main conventions are summarized below. The full details are in [`CLAUDE.md`](CLAUDE.md) and [`docs/architecture/README.md`](docs/architecture/README.md).

- **Routing:** Vue Router has a single catch-all route that renders `PageView.vue`. The active page and layout are chosen in-app through the `usePages` and `useLayout` composables, not through separate routes.
- **Shared state:** the project has no Pinia. A small `vault` plugin (`src/plugins/vault.ts`) provides app-wide storage, and each composable uses it as a get-or-create singleton.
- **API data:** raw response types live in `src/types/models/`. Components use wrapper classes from `src/models/` (e.g. `TechnologyModel.getName()`) rather than raw fields. Sections that don't have an endpoint yet read the same types from `src/mock/`.
- **Flyouts:** `useFlyout().openFlyout(name, params)` opens one registered flyout at a time and queues any further requests. `FlyoutManager.vue` renders the active one.
- **Backend direction:** `server.ts` is a temporary stand-in for a planned API Gateway (ADR-0002). New backend logic goes into `personal-info-service`.

---

## Future Improvements

- Replace mock data with real `personal-info-service` endpoints
- Unit and end-to-end tests
- Committed ESLint/Prettier config and CLI scripts
- CI/CD pipeline
- Production Docker image
- Accessibility improvements

---

## License

This project is available under the MIT License unless otherwise specified.

---

## Author

Developed by **Alexandru Pintican**.
