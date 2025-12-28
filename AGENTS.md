# Repository Guidelines

## Project Structure & Module Organization
- App code lives in `src/` (React components, hooks, and localStorage-backed API). Entry is `src/main.jsx`; UI composition is in `src/App.jsx`. Reusable UI pieces sit in `src/components/`.
- Static assets and HTML shell are in `public/` and `index.html`. Vite configuration is in `vite.config.js`; styling utilities come from Tailwind via `src/index.css`.
- No dedicated test directory exists; add future tests alongside source or in `__tests__` near modules.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start Vite dev server with HMR.
- `npm run build` — production build output in `dist/`.
- `npm run preview` — serve the production build locally.
- `npm run lint` — run ESLint checks.

## Coding Style & Naming Conventions
- JavaScript/JSX with ES modules. Prefer functional React components and hooks. Keep state in hooks (`useTodos`) and pass props explicitly.
- Styling uses Tailwind utility classes; favor `clsx` for conditional classes and `tailwind-merge` if you need to resolve class collisions.
- Name components in `PascalCase` (`TodoFilter.jsx`), hooks in `camelCase` with `use` prefix (`useTodos.js`), and files matching their exported component.
- Keep UI logic in components and persistence in `src/api.js`; avoid mixing concerns.

## Testing Guidelines
- No automated tests are defined yet. If you add them, colocate with source or under `__tests__/`, and keep test names mirroring module names.
- Use `npm test` once a test runner is added; document any new scripts in `package.json`.
- Manually verify add/toggle/delete flows and localStorage behavior when making changes.

## Commit & Pull Request Guidelines
- Use concise, present-tense commit messages (e.g., `Add todo filter component`, `Fix toggle mutation invalidation`).
- For pull requests, include: purpose/summary, key changes, testing performed (commands run), and screenshots or GIFs for UI tweaks. Link related issues when applicable.
- Keep diffs small and focused; prefer separate PRs for unrelated changes.

## Security & Configuration Tips
- Data persists in browser `localStorage` (`todos-react-query` key); avoid storing secrets or sensitive user data.
- Before shipping, validate that mutations still invalidate queries (`useTodos`) and that any new storage keys are documented.
