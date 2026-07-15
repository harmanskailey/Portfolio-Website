import type { WorkItem } from "../types";

export const realEstateProject = {
  slug: "real-estate-analytics",
  kind: "project",
  title: "Interactive Real Estate Analytics Dashboard",
  period: "Applied statistics project",
  summary:
    "An interactive dashboard for exploring how living area and build year relate to real-estate values.",
  highlights: [
    "Used log transformations and multivariate regression to model real-estate values.",
    "Exposed the analysis through an interactive R Shiny interface.",
  ],
  skills: ["R", "Shiny", "ggplot2", "Regression", "Data visualization"],
  sections: [
    {
      heading: "From question to model",
      summary:
        "Structured the analysis around interpretable relationships between property characteristics and value.",
      bullets: [
        "Explored living area and build year as explanatory variables.",
        "Applied log transformations and multivariate regression to model real-estate values.",
      ],
    },
    {
      heading: "Interactive delivery",
      summary:
        "Turned the statistical work into a dashboard that makes the modeled relationships easier to explore.",
    },
  ],
  links: [
    {
      label: "View the dashboard",
      href: "https://harmanskailey.shinyapps.io/AmesHousingRevised_Final/",
    },
  ],
  featured: true,
} satisfies WorkItem;
