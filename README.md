# Harman Kailey Portfolio

An Astro portfolio with a concise professional overview, detailed work and
project pages, and a separate cooking journal. The site is publicly deployed on
Vercel.

## Local development

```sh
npm install
```

Run `npm run dev`; the development server defaults to
`http://localhost:4321`.

## Quality checks

```sh
npm run check
npm run format:check
npm run build
```

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

The future personal-archive and research-publishing backlog lives in
[`docs/portfolio-roadmap.md`](docs/portfolio-roadmap.md).
The same roadmap records the active Forest Ledger visual theme, palette roles,
CSS tree/wood texture choices, and open-source design options reviewed for
future texture or icon work.

Run `npm run sanitize:images` after adding JPEG photography. It applies image
orientation, removes embedded location/EXIF data, and limits oversized source
files before Astro creates responsive web output.

The tracked social card is generated from `public/og-card.svg`. Run
`npm run build:og` after changing that source artwork.

## Deployment

The site is configured for `https://www.harmanskailey.com` and deployed through
Vercel's Git integration. The professional pages, cooking journal, reports, and
supporting assets are public.
