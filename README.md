# informatica-suite

The start of a full-stack suite for the Informatica cluster: a SvelteKit frontend and a Go API, in one repository.

| Folder | What's there now |
|--------|------------------|
| `informatica-web/` | A fresh SvelteKit 2 / Svelte 5 app (TypeScript, Tailwind CSS 4 with forms and typography, ESLint, Prettier, `adapter-auto`). The page is still the "Welcome to SvelteKit" starter |
| `informatica-api/` | Only `go.mod` (module `informatica-suite/informatica-api`, Go 1.25). No code yet |

## Run the frontend

```bash
cd informatica-web
pnpm install      # or npm install
pnpm dev          # vite dev
pnpm build && pnpm preview
```
