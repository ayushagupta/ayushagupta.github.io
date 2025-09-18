# Portfolio (React)

Modern, responsive portfolio built with React. Content is loaded at runtime from `public/data` (markdown + images). Deployed to GitHub Pages via GitHub Actions. Client-side routing uses HashRouter for reliable deep links on Pages.

## Quick start

```bash
npm install
npm start
```
Open http://localhost:3000

## Content structure (no hardcoding)

All user data lives under `public/data`:
- `intro/index.md`
- `contact/index.md`
- `education/<slug>/index.md`
- `experience/<slug>/index.md`
- `projects/<slug>/index.md`
- `blogs/<slug>/index.md`

Each collection folder has a `manifest.json` listing slugs to load, e.g. `public/data/projects/manifest.json`.

Images go under `public/data/<section>/<slug>/images/` and are referenced by filename in frontmatter. Paths are resolved at runtime.

## Add or edit content

1) Add a slug to the relevant manifest, e.g. `public/data/projects/manifest.json`.
2) Create `public/data/projects/<your-slug>/index.md` with YAML frontmatter (title, description, images, etc.).
3) Put images in `public/data/projects/<your-slug>/images/` and reference filenames in the frontmatter.

Blogs: add a slug to `public/data/blogs/manifest.json` and create `public/data/blogs/<slug>/index.md`.

## Deployment (GitHub Pages)

This repo uses GitHub Actions to build and publish to Pages.
- Settings → Pages → Source: GitHub Actions
- Workflow: `.github/workflows/deploy-pages.yml`
- On push to `main`, the site is built and deployed automatically.

Deep links: the app uses HashRouter, so blog URLs look like `/#/blog/<slug>`. A minimal `public/404.html` redirects 404s to the hash route.

## Scripts

- `npm start` – dev server (CRA)
- `npm run build` – production build

## Tech

- React 18, react-router-dom (HashRouter)
- marked, js-yaml for parsing markdown/frontmatter

## License

MIT
