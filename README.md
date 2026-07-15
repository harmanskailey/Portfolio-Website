# Harman Kailey Portfolio

A static Astro portfolio with a concise professional overview, detailed work and
project pages, and a separate cooking journal.

## Local development

```sh
npm install
npm run dev
```

The development server defaults to `http://localhost:4321`.

## Quality checks

```sh
npm run check
npm run format:check
npm run build
```

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

The site builds to static files in `dist/` and is configured for the canonical
domain `https://harmanskailey.com`. Any static host can serve the output.
