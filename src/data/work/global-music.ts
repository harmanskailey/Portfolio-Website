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
  ],
  skills: ["R", "Quarto", "ggplot2", "Reproducible reporting"],
  sections: [
    {
      heading: "Visual analysis",
      summary:
        "Used visualization to compare tonal patterns across regions in a global music dataset.",
    },
    {
      heading: "Reproducible communication",
      summary:
        "Combined code, interpretation, and output in a Quarto report so the analysis could be rerun and reviewed.",
    },
  ],
  featured: true,
} satisfies WorkItem;
