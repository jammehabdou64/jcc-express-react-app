# AGENTS.md

# JCC Express MVC Agent Instructions

These instructions apply to all code generation, modifications, and refactoring within this project.

## Documentation First (Required)

<jcc-express-mvc-guidelines>

Before writing, modifying, or reviewing any code:

1. Read the relevant documentation in:
   `node_modules/jcc-express-mvc/final-documentation/`

2. Base all implementations on the documented JCC APIs, conventions, and best practices.

3. Do **not** assume JCC behaves exactly like Express, Laravel, NestJS, or any other framework.

4. If the documentation conflicts with prior knowledge, **always follow the JCC documentation**.

5. If the required behavior is not documented or is ambiguous, ask for clarification instead of guessing.

</jcc-express-mvc-guidelines>

## Local development (recommended)

Use **two terminals**:

```bash
# Terminal 1 — Vite (writes public/hot for asset URLs)
npm run watch

# Terminal 2 — Laravel-style backend watcher (silent reloads, stable session port)
npm run serve
# same as: bun artisanNode serve  (alias: watch)
```

- If `PORT` (default `5500`) is busy, `serve` tries the next free port **without killing** the other process (Laravel-style). Use the URL printed in the terminal.
- Only **`.env` changes** show a visible restart banner; code reloads stay silent.
- Simpler alternative: `npm run dev` (`bun --watch server.ts`) — no Laravel-style watcher or `public/hot` integration.

Production: `npm run build` then `npm run start`.

## Framework package

This app consumes **`jcc-express-mvc` from npm** (compiled framework + bundled `final-documentation/`). Do not copy framework source from the monorepo `build/` folder unless explicitly linking for debug.

After a new npm release, bump `"jcc-express-mvc"` in `package.json` and reinstall.

## Optional features (opt-in)

- **Socket.IO** — Register a `SocketProvider` subclass in `bootstrap/providers.ts`. HTTP apps work without it.
- **Tinker** — `bun artisanNode tinker`: auto-awaited ORM calls, `user = User.first()`, `_`, `dump` / `dd`.
- **Monitor / Cloudinary** — `bun artisanNode publish Monitor` / `publish Cloudinary` (see docs).

## Framework Guidelines

- Prefer built-in JCC features over third-party libraries.
- Follow the JCC MVC architecture and project structure.
- Reuse existing services, providers, middleware, helpers, and utilities whenever possible.
- Keep implementations simple, maintainable, and consistent with the existing codebase.
- Do not introduce unnecessary abstractions or dependencies.

## Code Quality

- Write clean, readable, and well-typed TypeScript.
- Follow existing naming conventions and project patterns.
- Keep functions focused and single-purpose.
- Handle errors appropriately.
- Remove unused imports, variables, and dead code.

## When Unsure

Never invent APIs or framework features.

Consult the documentation first. If the answer cannot be determined from the documentation or project source, ask for clarification.
