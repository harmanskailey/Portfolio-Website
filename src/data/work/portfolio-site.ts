import type { WorkItem } from "../types";

export const portfolioSiteProject = {
  slug: "portfolio-infrastructure",
  kind: "project",
  title: "Portfolio Site and Delivery",
  period: "About this site",
  summary:
    "An Astro portfolio deployed on Vercel through an automated CI/CD workflow.",
  highlights: [
    "Designed a content-first Astro site with static, shareable professional and personal pages.",
    "Kept long-form work data separate from the concise homepage presentation.",
  ],
  skills: ["Astro", "TypeScript", "Vercel", "CI/CD"],
  sections: [
    {
      heading: "Content architecture",
      summary:
        "Uses typed data and reusable components so homepage work cards and detailed work pages share the same source.",
    },
    {
      heading: "Delivery",
      summary:
        "Builds as a static site for straightforward hosting, fast navigation, and public discoverability.",
    },
  ],
} satisfies WorkItem;
