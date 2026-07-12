# Portfolio Website

Astro portfolio site with cookie-based login, middleware-protected routes, and Vercel deployment support.

## Local commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Deployment target

This project uses server-side rendering because it includes:

- `src/middleware.ts`
- `src/pages/api/login.ts`
- `src/pages/api/logout.ts`

It is configured for Vercel with the official Astro adapter in `astro.config.mjs`.

## Deploy to Vercel

The simplest path is through the Vercel dashboard:

1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Keep the detected build command as `npm run build`.
4. Keep the output setting managed by Astro/Vercel.
5. Deploy.

Vercel should detect the Astro app automatically.

## Notes

- The previous Firebase Hosting setup files were removed because Firebase SSR would require the Blaze plan for this app.
- No Firebase-specific configuration is required for the current deployment target.
