# Legacy

**Legacy: Build What Outlives You.** This is an educational app for learning about trusts and building generational wealth, with freemium lessons and a hand-off to Trust & Will (affiliate) when a user is ready to set up a trust.

> **Status: early scaffold.** The repo currently has the Next.js root layout (`app/layout.tsx`) and global styles (`app/globals.css`), but **no pages yet**. There's no `app/page.tsx`, so `/` returns a 404 until one is added. The build succeeds and outputs only the default 404 route.

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Plain CSS (`app/globals.css`)

## Getting started

Requires Node 18.17+ (Node 20 or 22 recommended) and npm.

```bash
npm ci          # install exact versions from package-lock.json
npm run dev     # http://localhost:3000
```

## Scripts

| Script | Does |
|---|---|
| `npm run dev` | Next dev server |
| `npm run build` | Production build (`.next/`) |
| `npm start` | Serves the production build |
| `npm run lint` | `next lint`. ESLint isn't configured yet, so the first run prompts you to set it up. |

## Environment variables

None are needed yet. When some are added, list the names in a committed `.env.example` and keep real values in `.env.local`, which is gitignored.

## Layout

| Path | What it is |
|---|---|
| `app/layout.tsx` | Root layout and site metadata |
| `app/globals.css` | Global styles |
| `next.config.js` | Next config (`reactStrictMode`) |
