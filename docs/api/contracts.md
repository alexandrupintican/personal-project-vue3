# API Contracts

Shared source of truth between `vue3-typescript-specialist` (consumer, repo
`personal-project-vue3`) and `java-springboot-specialist` (owner/implementer,
repo `personal-info-service`) for every API endpoint the frontend calls.
Because the two agents live in separate git repositories, **this file is
mirrored** — an identical copy exists in both repos' `docs/api/`. Whichever
agent changes it should update both copies. The machine-readable equivalent
lives in [`openapi.yaml`](openapi.yaml) (also mirrored) — that file must
never drift from what's documented and implemented here.

**Rule:** neither agent changes an existing entry below without stating
whether the change is breaking, updating this file (both copies),
`openapi.yaml` (both copies), and the corresponding tests/client code on
both sides.

## Conventions

### Naming
- URL paths: kebab-case, plural nouns for collections — `/api/v1/user-profiles`.
- JSON fields: `camelCase` on both request and response bodies.
- Path params identify a single resource: `/api/v1/orders/{orderId}`.

### Versioning
- URI versioning: `/api/v1/...`. A breaking change ships as `/api/v2/...`
  rather than mutating `v1` in place; `v1` keeps working until consumers have
  migrated.

### Authentication & authorization — NOT YET DECIDED, do not assume bearer JWT
- `personal-info-service` currently depends on
  `spring-boot-starter-security-oauth2-client` — an **OAuth2 Client** setup
  (this service authenticates itself against an external identity provider,
  e.g. a browser login redirect flow), **not** an OAuth2 Resource Server
  issuing/validating its own bearer JWTs.
- This means: do not implement `Authorization: Bearer <jwt>` handling on
  either side as if it were already decided. Before implementing any
  authenticated endpoint, `java-springboot-specialist` must confirm with the
  user (or via an ADR) how the frontend is actually meant to authenticate
  against the gateway/backend — e.g. session cookie from the OAuth2 login
  redirect vs. adding a Resource Server role later vs. something else.
- Once decided, replace this section with the concrete mechanism (flow,
  token lifetime/refresh, cookie vs. header) and keep it in sync with the
  real Spring Security config.
- Whatever the mechanism, authorization is enforced server-side, per
  endpoint, based on the authenticated principal's roles/claims — the
  frontend hiding a button is never the enforcement mechanism.

### Pagination
- Query params: `page` (0-indexed), `size` (default 20, max 100).
- Response envelope for paginated collections:
  ```json
  {
    "content": [ /* items */ ],
    "page": 0,
    "size": 20,
    "totalElements": 137,
    "totalPages": 7
  }
  ```

### Filtering & sorting
- Filtering: plain query params matching the field name, e.g. `?status=ACTIVE`.
- Sorting: `?sort=fieldName,direction` (direction: `asc`|`desc`), repeatable
  for multi-field sort — `?sort=createdAt,desc&sort=name,asc`.

### Date/time format
- All dates/timestamps are ISO 8601, UTC, e.g. `2026-09-16T14:30:00Z`.

### Error response format
All non-2xx responses use this shape:
```json
{
  "status": 404,
  "error": "NOT_FOUND",
  "message": "Order 123 was not found",
  "path": "/api/v1/orders/123",
  "timestamp": "2026-09-16T14:30:00Z",
  "validationErrors": [
    { "field": "email", "message": "must be a valid email address" }
  ]
}
```
`validationErrors` is present only for 400 validation failures.

## Endpoints

_No endpoints have been implemented in `personal-info-service` yet. The
frontend's temporary Hono placeholder currently serves `GET /api/technologies`
directly against Postgres (not documented as a real contract entry below,
since it's expected to be superseded once the equivalent lands in
`personal-info-service` behind the gateway)._

Add one entry per endpoint as it's designed or built, in this format:

### `METHOD /api/v1/<path>`

- **Purpose:**
- **Auth required:** yes/no — required role(s)/scope(s)
- **Request DTO:**
  ```ts
  interface ExampleRequest {
    field: string;
  }
  ```
- **Response DTO (2xx):**
  ```ts
  interface ExampleResponse {
    id: string;
  }
  ```
- **Error responses:** which status codes, when
- **Owning service:**
- **Status:** proposed | in-progress | implemented
