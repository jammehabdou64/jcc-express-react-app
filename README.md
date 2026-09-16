# JCC Express MVC + Inertia (React)

Starter app using [`jcc-express-mvc`](https://www.npmjs.com/package/jcc-express-mvc) from npm.

## Setup

```bash
cp .env.example .env
bun install   # or npm install
bun artisanNode key:generate
bun artisanNode migrate
```

## Development

```bash
npm run watch    # Terminal 1 — Vite
npm run serve    # Terminal 2 — recommended backend (bun artisanNode serve)
```

Open the URL from the serve terminal (usually `http://localhost:5500`, or the next free port if busy).

Alternative backend: `npm run dev` (Bun `--watch` only).

## Docs

`node_modules/jcc-express-mvc/final-documentation/` — see `AGENTS.md` for agent guidelines.
