# Harman Kailey Portfolio

An Astro portfolio with a concise professional overview, detailed work and
project pages, and a separate cooking journal. Vercel Edge Middleware keeps the
site behind a signed, expiring passcode session.

## Local development

```sh
npm install
```

Set a local passcode before starting Astro. In PowerShell:

```powershell
$env:PORTFOLIO_PASSCODE="local-development-only"
npm run dev
```

The development server defaults to `http://localhost:4321`.
`PORTFOLIO_PASSCODE` is read only on the server and must never use Astro's
`PUBLIC_` prefix.

## Quality checks

```sh
npm run check
npm run format:check
npm run build
npm run test:auth
```

`test:auth` creates an ephemeral test secret, builds the Vercel edge bundle, and
checks route and asset protection, signed-cookie validation, safe redirects,
and fail-closed behavior. It does not read or print the real passcode.

## Content structure

- `src/data/site.ts` contains shared identity and contact copy.
- `src/data/home.ts` contains impact, education, and capability summaries.
- `src/data/work/` keeps each role or project in its own typed file. Its index is
  the single source for homepage work cards and detailed `/work/[slug]` pages.
- `src/data/cooking.ts` contains the cooking narrative and authored image
  descriptions.
- `src/assets/cooking/` contains source photos. Astro generates optimized WebP
  output during the build.

To add a role or project, add one typed object under `src/data/work/` and export
it from the directory index. The landing page and detail route are generated
from the same object.

Run `npm run sanitize:images` after adding JPEG photography. It applies image
orientation, removes embedded location/EXIF data, and limits oversized source
files before Astro creates responsive web output.

The tracked social card is generated from `public/og-card.svg`. Run
`npm run build:og` after changing that source artwork.

## Deployment

The site is configured for `https://harmanskailey.com` and the Vercel adapter's
edge middleware mode. Every request is checked at the edge before Vercel serves
pages or static assets.

Create `PORTFOLIO_PASSCODE` in the Vercel project for both **Preview** and
**Production** environments before deploying. Changing an environment variable
only affects new deployments, so redeploy after adding or rotating it.

The public `/robots.txt` route disallows crawling. The standalone `/login` page
and the login/logout endpoints are the only other unauthenticated routes.
