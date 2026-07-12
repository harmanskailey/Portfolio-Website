import type { ShowcaseItem } from "./types";

export const showcases: ShowcaseItem[] = [
  {
    slug: "dog",
    title: "Cooper",
    category: "My Best Friend",
    summary:
      "",
    tags: ["Photos", "Short updates", "Instagram links"],
    bullets: [
      "A place to share a few photos and quick notes without cluttering the main portfolio.",
      "Can link out to a public Instagram account instead of hosting large video files directly.",
      "Easy to expand later into a gallery or small timeline.",
    ],
  },
  {
    slug: "applied-stats",
    title: "Applied Stats Projects",
    category: "Analytical work",
    summary:
      "A page for projects where data analysis, statistical reasoning, or modeling matter as much as the code.",
    tags: ["Analysis", "Modeling", "Case studies"],
    bullets: [
      "Keeps data-oriented work separate from general software projects.",
      "Can expand into project cards with datasets, methods, and results.",
      "Fits notebooks, dashboards, or short write-ups once those are ready.",
    ],
  },
  {
    slug: "cooking",
    title: "Cheffing It Up",
    category: "Creative Outlet",
    summary:
      "Cooking is one of my favorite things to do. I love traveling the world through flavor palletes. I am a big fan of rustic cooking with cast iron, dutch ovens, and mortar and pestle.",
    tags: ["Dishes", "Techniques", "Photos"],
    bullets: [
      "I lean heavily towards Southeast Asian flavor pallettes.",
      "Huge fan of the honey, ginger, garlic, lime, chili combination.",
      "I have become cultishly obsessed with integrating mason jars into my kitchen ops.",
    ],
    featuredImageSources: [
      "/images/cooking/6.jpeg",
      "/images/cooking/9.jpeg",
      "/images/cooking/12.jpg",
    ],
  },
];
