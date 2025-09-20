# Copilot Instructions for CURDAPP

## Project Overview
- This is a React CRUD app scaffolded with Vite, using Tailwind CSS for styling and Material Tailwind for UI components.
- Data is managed via `json-server` (see `db.json`), enabling RESTful API operations for local development.
- Routing is handled by `react-router-dom`.
- State management and data fetching use `@tanstack/react-query` and `axios`.

## Key Directories & Files
- `src/components/`: Main React components (e.g., `Home.jsx`, `Proudcts.jsx`).
- `src/hooks/`: Custom hooks (e.g., `Prouducts.jsx` for product logic).
- `db.json`: Local mock database for `json-server`.
- `tailwind.config.js`, `postcss.config.js`: Tailwind and PostCSS setup.
- `vite.config.js`: Vite configuration.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Vite, HMR enabled)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint with React and hooks plugins)
- **Mock API:** `npx json-server --watch db.json --port 3001`

## Patterns & Conventions
- **Component Structure:** Functional components, hooks for data logic, Tailwind utility classes for styling.
- **API Calls:** Use `axios` and custom hooks (see `src/hooks/Prouducts.jsx`).
- **React Query:** For caching and updating server state.
- **Routing:** All navigation via `react-router-dom`.
- **Naming:** Some files/components use non-standard spelling (e.g., `Proudcts.jsx`, `Prouducts.jsx`).
- **Styling:** Prefer Tailwind classes; Material Tailwind for advanced UI.

## Integration Points
- **json-server:** Local REST API, update `db.json` for mock data.
- **Material Tailwind:** UI components, see usage in `src/components/`.
- **React Query:** Data fetching and mutation logic, see hooks.

## Examples
- To add a new product, update `db.json` and use the form in `Proudcts.jsx`.
- For new API endpoints, update `db.json` and adjust hooks/components as needed.

## Tips for AI Agents
- Always check for non-standard naming in files/components.
- Follow the established pattern for hooks and API calls.
- Reference `README.md` and config files for build/lint/test commands.
- Use Tailwind and Material Tailwind for UI consistency.

---
For questions or unclear conventions, ask for clarification or review recent code in `src/components/` and `src/hooks/`.
