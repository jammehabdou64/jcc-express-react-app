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