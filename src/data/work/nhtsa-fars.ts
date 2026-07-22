import type { WorkItem } from "../types";

export const nhtsaFarsProject = {
  slug: "nhtsa-fars-fatal-crash-analytics",
  kind: "project",
  title: "NHTSA Fatal Crash Analytics",
  period: "Applied statistics project",
  summary:
    "A tested R Shiny application for exploring how driver age, driver sex, and police-reported alcohol involvement are associated with recorded travel speed in 2024 fatal crashes.",
  highlights: [
    "Built a driver-level analytical cohort of 14,777 records across 10,823 fatal crashes from the 2024 NHTSA FARS release.",
    "Implemented reproducible 1,000-resample crash-cluster bootstrap confidence intervals in an interactive statistical application.",
    "Added automated validation for data semantics, model construction, bootstrap reproducibility, and reactive prediction state.",
  ],
  skills: [
    "R",
    "Shiny",
    "ggplot2",
    "Regression",
    "Cluster bootstrap",
    "testthat",
    "Data validation",
  ],
  sections: [
    {
      heading: "Correcting the unit of analysis",
      summary:
        "Rebuilt the dataset from the official NHTSA person and vehicle tables so each analytical row represents a driver joined to the matching vehicle.",
      bullets: [
        "Filtered the FARS person table to drivers of motor vehicles in transport before using person attributes.",
        "Joined driver records to recorded vehicle travel speed through crash and vehicle identifiers.",
        "Retained stable crash and vehicle identifiers to validate uniqueness and support clustered uncertainty estimates.",
      ],
    },
    {
      heading: "Interactive model specification",
      summary:
        "Designed the Shiny interface to make model assumptions visible and adjustable rather than presenting a single opaque result.",
      bullets: [
        "Supports linear, quadratic, and cubic age specifications with optional age, sex, and alcohol-report interactions.",
        "Displays empirical age-group summaries, conditional model curves, coefficient estimates, and fit statistics together.",
        "Stores the exact profile used for each bootstrap result and warns when controls change, preventing stale predictions from being mislabeled.",
      ],
    },
    {
      heading: "Uncertainty without unnecessary delay",
      summary:
        "Optimized the bootstrap around weighted least squares so complete crashes can be resampled without repeatedly copying the full dataset.",
      bullets: [
        "Runs 1,000 reproducible crash-cluster resamples in roughly eight seconds on the development machine.",
        "Reports confidence intervals for expected model values and explicitly distinguishes them from individual prediction intervals.",
        "Uses a bundled read-only dataset and a scoped dependency manifest for reliable cloud deployment.",
      ],
    },
    {
      heading: "Responsible interpretation",
      summary:
        "Frames the output as exploratory evidence within reported fatal-crash records, not as a causal account of driving behavior.",
      paragraphs: [
        "FARS contains crashes in which at least one person died, and many otherwise eligible records lack a reported travel speed or alcohol status. The case study documents this complete-case selection, the model's modest explanatory power, and the limits of generalizing to everyday driving or individual crash risk.",
      ],
    },
  ],
  links: [
    {
      label: "Launch live application",
      href: "https://019f87b1-1b29-9ebd-e9f9-845573a5f924.share.connect.posit.cloud/",
    },
    {
      label: "View source on GitHub",
      href: "https://github.com/harmanskailey/NHTSA-Project-STAT787",
    },
  ],
  projectMeta: {
    category: "research",
    format: "Interactive statistical application",
    question:
      "How are driver age, driver sex, and police-reported alcohol involvement associated with recorded travel speed among drivers in fatal crashes?",
    deliverable: "Tested R Shiny application",
  },
  featured: true,
} satisfies WorkItem;
