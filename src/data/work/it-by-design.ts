import type { WorkItem } from "../types";

export const itByDesignExperience = {
  slug: "it-by-design-internship",
  kind: "experience",
  title: "Software Engineer Intern",
  organization: "IT By Design",
  period: "December 2018 - October 2020",
  summary:
    "Maintained client-facing web experiences, customized CMS workflows, and supported data-driven requests in production environments.",
  highlights: [
    "Updated WordPress and Avada sites and customized themes and plugins with HTML, CSS, PHP, and JavaScript.",
    "Supported end-user data requests with SQL analysis and reporting.",
  ],
  skills: ["WordPress", "PHP", "JavaScript", "HTML/CSS", "SQL", "Git"],
  sections: [
    {
      heading: "Earlier production experience",
      summary:
        "Learned to make incremental improvements inside active client environments.",
      bullets: [
        "Balanced implementation work with support requests and existing CMS constraints.",
        "Used Git and Trello to coordinate changes and keep delivery moving.",
        "Built early habits around communication, version control, and production stability.",
      ],
    },
  ],
  earlier: true,
} satisfies WorkItem;
