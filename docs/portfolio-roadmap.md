# Portfolio roadmap

This document is the working backlog for separating the public professional site
from a private personal archive while keeping research publishing straightforward.

## Information architecture

### Public professional site

- `/` - concise positioning, production experience, research shelf, research
  direction, background, and contact.
- `/work/[slug]` - long-form engineering and research case studies.
- Future `/research` - an index only when the number of reports is too large for
  the homepage. Do not add this route until there are roughly six substantive
  entries.
- Future `/research/[slug]` - publication pages with abstracts, methods,
  limitations, citations, artifacts, and version history.

### Private personal site

- Future `/personal` - authenticated landing page for the personal archive.
- Future `/personal/cooking` - move the existing cooking journal here.
- Future `/personal/cooper` - photos, walks, field notes, and other Cooper
  material.
- Future `/personal/notes` - optional private writing; keep out of navigation
  until there is durable content.

The public site should never depend on a private route or private asset in order
to render.

## Completed in this redesign

- [x] Reposition the homepage around software engineering and applied
      statistics rather than a generic skills inventory.
- [x] Incorporate the graduate-statement throughline: validation, uncertainty,
      measurement quality, and accountable systems.
- [x] Present R and Quarto work as a research shelf with a question, format,
      deliverable, methods, and case-study link.
- [x] Add a research-direction area for future coursework and independent work.
- [x] Keep project metadata in the same typed object that generates the detail
      page; no duplicate homepage content file.
- [x] Remove duplicated expandable experience summaries from the homepage.
- [x] Give Cooper a deliberate future place in the personal archive.
- [x] Add a three-focus homepage entry point for Applied Stats, Work Experience,
      and Personal.
- [x] Retheme the shared UI around the Forest Ledger direction: paper texture,
      evergreen structure, moss stats accents, water work accents, and clay
      personal accents.
- [x] Add direct resume and RIT admission-statement highlights as editable,
      structured homepage content.
- [x] Add visible forest/wood cues: SVG tree-only bands, woodgrain panel
      texture, leaf markers, and tree-ring accents.

## Visual theme

The active theme is Forest Ledger: a field-notebook interface for a systems
engineer who is building a statistical research archive.

- Use semantic tokens in `src/styles/global.css`; avoid one-off colors in
  components unless the value is a documented section accent.
- Keep the tree-line and woodgrain treatment in CSS tokens so the woodsy feeling
  is reusable without adding image-asset sprawl. The active tree-strip assets
  are local SVGs in `public/`, based on the CC0 tree-silhouette style from
  <https://svgsilh.com/tag/tree-1.html>.
- Keep Applied Stats crisp and quiet with moss/lichen accents.
- Keep Work Experience structured with the water accent and strong metadata.
- Keep Personal warm with clay and deeper forest backgrounds.
- Prefer local CSS texture over new visual dependencies until there is a clear
  interaction or asset need.
- Open-source options reviewed: Hero Patterns for repeatable SVG texture
  (CC BY 4.0), Lucide for lightweight icons (ISC), and token-first CSS systems
  such as Open Props for design-token inspiration.

## Future private archive

The current portfolio is public. Add authentication only if future personal
material genuinely requires a private boundary.

- [ ] Introduce `/personal` and protected subroutes only when private content is
      ready to publish.
- [ ] Keep `/`, `/work/*`, professional metadata, reports, and social cards
      public.
- [ ] Store genuinely private images behind a protected server route or private
      object store rather than under `public/`.
- [ ] Add route, cookie, redirect, and asset-access tests at the same time as any
      future authentication layer.

## Research publishing model

For the next few entries, continue using one typed file per project under
`src/data/work/`. A project shown on the homepage should include `projectMeta`:

```ts
projectMeta: {
  category: "research",
  format: "Reproducible report",
  question: "The focused question the work answers",
  deliverable: "Quarto report",
}
```

When the collection grows beyond roughly six reports, migrate research entries
to an Astro content collection with a schema for:

- title, abstract, status, date, and last-updated date;
- research question, dataset/source, methods, and limitations;
- reproducibility notes, repository, report, dashboard, and download links;
- citation text, keywords, course/independent-work context, and version;
- public/private visibility.

The homepage should then query a small featured subset rather than carrying its
own copies of report text.

## R, Shiny, and Quarto delivery

- [ ] Add the missing public URL for the Global Music Quarto report when it is
      available.
- [ ] Give every report a stable slug and permanent canonical URL.
- [ ] Publish static Quarto HTML as a versioned artifact or dedicated route;
      keep source and rendered output traceable to the same commit.
- [ ] Keep Shiny applications independently deployable. Link to them from the
      case study first; embed only when accessibility, load time, failure states,
      and cross-origin behavior have been tested.
- [ ] Add a short methods and limitations section to every statistical project.
- [ ] Add a reproducibility block: data availability, package environment,
      source commit, and last successful render.
- [ ] Add lightweight availability monitoring for externally hosted apps so a
      dead deployment does not become the main portfolio experience.

## Maintainability guardrails

- [ ] Add automated checks for broken internal and external links.
- [ ] Add an accessibility audit and screenshot regression at desktop and
      mobile breakpoints.
- [ ] Self-host the two font families if reducing third-party requests becomes
      a priority.
- [ ] Generate the social card from the same professional positioning used on
      the homepage.
- [ ] Review all public case studies for employer confidentiality before each
      release.
- [ ] Keep navigation short. Add a top-level route only when it has enough
      content to justify a permanent place.
- [ ] Remove obsolete styles and data fields in the same change that removes a
      component; avoid a second cleanup backlog.

## Content prompts for future reports

Each new report should be able to answer these questions before it is featured:

1. What decision or uncertainty motivated the work?
2. How was the data collected, and what could that process exclude or distort?
3. Why are the chosen methods appropriate?
4. What result is useful, and what should the reader not conclude?
5. Can another person reproduce the result from the published materials?
6. What changed between versions?
