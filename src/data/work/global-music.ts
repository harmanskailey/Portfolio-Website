import type { WorkItem } from "../types";

export const globalMusicProject = {
  slug: "global-music-visualization",
  kind: "project",
  title: "Global Music Visualization",
  period: "Applied statistics project",
  summary:
    "A reproducible visual analysis of regional tonal patterns in a global music dataset.",
  highlights: [
    "Analyzed regional tonal patterns with R and ggplot2.",
    "Published the findings as a reproducible Quarto report.",
    "Hosted the PDF report as a stable public artifact for review.",
  ],
  skills: ["R", "Quarto", "ggplot2", "Reproducible reporting"],
  sections: [],
  links: [
    {
      label: "Read the embedded report",
      href: "/work/global-music-visualization#report-viewer",
    },
  ],
  reportEmbed: {
    title: "Global Music Visualization PDF report",
    href: "/reports/global-music-visualization.pdf",
    summary:
      "Read the rendered Quarto report directly on this page. The PDF remains available as a stable artifact for citation, sharing, and review.",
    fallbackLabel: "Open the PDF directly",
  },
  projectMeta: {
    category: "research",
    format: "Reproducible report",
    question:
      "What regional tonal patterns become visible when a global music dataset is compared through a consistent visual framework?",
    deliverable: "Quarto report",
  },
  featured: true,
} satisfies WorkItem;
