# Architecture Decision Log

Record every significant architectural decision here — service splits,
gateway technology choice, auth mechanism choices, schema tradeoffs,
anything that would confuse a future reader (human or agent) if left
unexplained. Both `vue3-typescript-specialist` (repo `personal-project-vue3`)
and `java-springboot-specialist` (repo `personal-info-service`) may add
entries. **This file is mirrored in both repos** — update both copies when
adding an entry, since neither agent can see the other repo by default.

Format:

```
## ADR-000N: <short title>
Date: YYYY-MM-DD
Status: proposed | accepted | superseded by ADR-000M

**Context:** what problem/requirement prompted this decision.
**Decision:** what was decided.
**Consequences:** tradeoffs, what this rules out, what it enables.
```

---

## ADR-0001: Start as a modular monolith, not microservices
Date: 2026-09-16
Status: accepted

**Context:** The multi-service reference architecture in this project's
agent briefs shows a Vue frontend behind an API gateway fanning out to
several independent Spring Boot services, each with its own database. At
present this application has one backend service (`personal-info-service`)
with no genuinely independent scaling, deployment, or ownership needs.

**Decision:** New backend business logic starts inside `personal-info-service`
as a single Spring Boot service (a modular monolith), organized into
packages by business capability, backed by one PostgreSQL database.
Additional services beyond the gateway (see ADR-0002) are introduced only
when a concrete requirement demands it (see criteria in
[`../architecture/README.md`](../architecture/README.md)), with the
justification recorded here at that time.

**Consequences:** Faster iteration and simpler operations now; a future
service split is expected to extract a module along its existing package
boundary rather than requiring a redesign, as long as module boundaries are
kept clean (no cross-module direct repository access).

---

## ADR-0002: Introduce a dedicated API Gateway in front of backend services
Date: 2026-09-16
Status: accepted (existence only) — technology/routing scope not yet decided

**Context:** The frontend (`personal-project-vue3`) needs a stable place to
send API requests as the backend grows beyond a single service. The user
confirmed (2026-09-16) that a dedicated API Gateway component is intended,
rather than the frontend calling `personal-info-service` directly or relying
on a dev-only proxy long-term.

**Decision:** A dedicated API Gateway service will sit between the Vue
frontend and backend services, starting with `personal-info-service`. Its
existence is settled. Its technology choice (e.g. Spring Cloud Gateway vs.
something else), routing rules, and whether it terminates
authentication/authorization are **not yet decided** — do not implement or
assume specifics for the gateway itself until that work is explicitly
scoped with the user. Until the gateway exists, the frontend's temporary
Hono backend (`personal-project-vue3/server.ts`) continues to stand in for
it.

**Consequences:** New backend business logic should be built in
`personal-info-service` (not the Hono placeholder) so it isn't lost when the
placeholder is retired. When the gateway is scoped, add a new ADR here
recording the technology choice and update
[`../architecture/README.md`](../architecture/README.md)'s diagram/table
accordingly.
