# Luxury Engagement Rings London — Vercel Ready

This project is now configured as a **static Vite + React website** for simple hosting on **Vercel**.

## What was prepared

- Vite React project dependencies are defined in `package.json`.
- SPA routing is configured for Vercel via `vercel.json`.
- SEO metadata is set per page (title + description).
- Pre-render snapshots are configured with `react-snap` during build.

## What "this folder" means

Use the **project root folder** named `london-engagement-rings-v2` (or whatever name you saved it as).
It is the folder that contains files like:

- `package.json`
- `index.html`
- `App.tsx`
- `vercel.json`

Upload that whole folder to GitHub (not just one file inside it).

## Super simple publish steps (no command line)

1. Open [github.com](https://github.com) and create a new repository.
2. In that repository, click **Add file → Upload files**.
3. Drag all files from your project root folder (`london-engagement-rings-v2`) into the upload area.
4. Click **Commit changes**.
5. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
6. Click **Add New → Project**.
7. Select the repository you just uploaded.
8. Click **Deploy** (leave all default settings).

Done. Your website will be live in a few minutes.

## Notes for SEO users

- You can edit page titles/descriptions in `App.tsx` under `pageMetadata`.
- The build creates static files in `/dist`.
- Deep links (for example `/locations/mayfair`) work on Vercel because of the rewrite rule in `vercel.json`.
