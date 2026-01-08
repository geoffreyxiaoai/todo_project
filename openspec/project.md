# Project Context

## Purpose
A modern, responsive Todo application for personal task management. The app allows users to create, toggle, delete, and filter todos with data persisted locally in the browser.

## Tech Stack
- **React 19** — UI components with functional components and hooks
- **Vite 7** — Fast build tool and dev server with HMR
- **TailwindCSS 4** — Utility-first CSS framework for styling
- **TanStack Query (React Query) 5** — Server state management and caching
- **JavaScript (ES Modules)** — No TypeScript, using JSX for components
- **localStorage** — Client-side data persistence (no backend)
- **Lucide React** — Icon library
- **clsx / tailwind-merge** — Conditional class utilities

## Project Conventions

### Code Style
- **Components**: PascalCase filenames matching export (e.g., `TodoFilter.jsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useTodos.js`)
- **Functional React**: Prefer functional components with hooks over class components
- **Props**: Pass props explicitly; avoid prop drilling with excessive nesting
- **Styling**: Use Tailwind utility classes inline; use `clsx` for conditional classes
- **Imports**: ES modules with explicit imports; avoid default exports for utilities

### Architecture Patterns
- **Hooks for state**: Business logic and state management live in custom hooks (`useTodos`)
- **Separation of concerns**: UI logic in components, persistence in `src/api.js`
- **TanStack Query**: Use queries for reads, mutations for writes; always invalidate after mutations
- **Colocation**: Components in `src/components/`, hooks in `src/hooks/`, API layer in `src/api.js`

### Testing Strategy
- **Current state**: No automated tests implemented yet
- **Future tests**: Colocate with source files or in `__tests__/` directories
- **Manual verification**: Test add/toggle/delete flows and localStorage behavior when making changes
- **Test runner**: Document any new test scripts in `package.json`

### Git Workflow
- **Commit messages**: Concise, present-tense (e.g., `Add todo filter component`)
- **Branching**: Feature branches prefixed with `feature/` (e.g., `feature/todo-filter`)
- **PRs**: Include purpose, key changes, testing performed, and screenshots for UI changes
- **Diffs**: Keep small and focused; separate PRs for unrelated changes

## Domain Context
- **Todo states**: A todo has `id`, `text`, and `completed` boolean
- **Filter modes**: All, Active (not completed), Completed
- **Storage key**: `todos-react-query` in localStorage
- **No authentication**: Single-user, browser-local data only

## Important Constraints
- **No backend**: All data is stored in localStorage; no API server
- **No sensitive data**: Avoid storing secrets or PII in localStorage
- **Browser-only**: App requires JavaScript; no SSR or static generation
- **Query invalidation**: Mutations must invalidate queries to keep UI in sync

## External Dependencies
- **None**: This is a fully client-side application with no external APIs or services
