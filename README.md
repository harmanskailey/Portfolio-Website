# Harman Kailey Portfolio

An Astro portfolio with a concise professional overview, detailed work and
project pages, and a separate cooking journal. Vercel Routing Middleware keeps
the site behind a signed, expiring passcode session.

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

`test:auth` creates an ephemeral test secret, builds the Vercel output, and
checks route and asset protection, middleware continuation, signed-cookie
validation, safe redirects, and fail-closed behavior. It does not read or print
the real passcode.

## Content structure

- `src/data/site.ts` contains shared identity and contact copy.
- `src/data/home.ts` contains the three homepage focus areas, source
  highlights, impact, education, and capability summaries.
- `src/data/work/` keeps each role or project in its own typed file. Its index is
  the single source for homepage work cards and detailed `/work/[slug]` pages.
- `src/data/cooking.ts` contains the cooking narrative and authored image
  descriptions.
- `src/assets/cooking/` contains source photos. Astro generates optimized WebP
  output during the build.
- `public/reports/` contains public PDF report artifacts, such as
  `/reports/global-music-visualization.pdf`.

To add a role or project, add one typed object under `src/data/work/` and export
it from the directory index. The landing page and detail route are generated
from the same object. Research projects use the optional `projectMeta` block to
record their question, format, and reviewable deliverable.

To publish a PDF report, place it under `public/reports/` with a stable,
URL-safe filename, then add a `links` entry to the matching project data file.
The Global Music Visualization project expects
`public/reports/global-music-visualization.pdf`.
For reports that should render inside the site, add a `reportEmbed` object to the
matching work item and point the regular project link to the case-study anchor,
for example `/work/global-music-visualization#report-viewer`.

The phased public/private split, authentication migration, and research
publishing backlog live in [`docs/portfolio-roadmap.md`](docs/portfolio-roadmap.md).
The same roadmap records the active Forest Ledger visual theme, palette roles,
CSS tree/wood texture choices, and open-source design options reviewed for
future texture or icon work.

Run `npm run sanitize:images` after adding JPEG photography. It applies image
orientation, removes embedded location/EXIF data, and limits oversized source
files before Astro creates responsive web output.

The tracked social card is generated from `public/og-card.svg`. Run
`npm run build:og` after changing that source artwork.

## Deployment

The site is configured for `https://harmanskailey.com` and Vercel's native
Routing Middleware. The root `middleware.ts` checks every request before Vercel
serves pages or static assets, while `src/middleware.ts` applies the same policy
inside Astro for local development and server-rendered routes.

Create `PORTFOLIO_PASSCODE` in the Vercel project for both **Preview** and
**Production** environments before deploying. Changing an environment variable
only affects new deployments, so redeploy after adding or rotating it.

The public `/robots.txt` route disallows crawling. The standalone `/login` page
and the login/logout endpoints are the only other unauthenticated routes.
