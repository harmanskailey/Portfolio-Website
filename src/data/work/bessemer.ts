import type { WorkItem } from "../types";

export const bessemerExperience = {
  slug: "bessemer-application-support",
  kind: "experience",
  title: "Application Support Analyst",
  organization: "Bessemer Trust",
  location: "Woodbridge, New Jersey",
  period: "October 2021 - September 2022",
  summary:
    "Supported production applications and data workflows in a live trading environment.",
  highlights: [
    "Wrote and executed SQL and PL/SQL corrections in a production Oracle database to resolve synchronization defects and preserve data integrity in a trading environment.",
    "Maintained intraday ETL pipelines and partnered with developers to diagnose and recover production processing failures.",
  ],
  skills: ["SQL", "PL/SQL", "Oracle Database", "ETL", "Production support"],
  sections: [
    {
      heading: "Production data reconciliation",
      summary:
        "Investigated synchronization defects and applied targeted database corrections in a live financial environment.",
      bullets: [
        "Used SQL and PL/SQL to identify and reconcile inconsistent records.",
      ],
    },
    {
      heading: "Intraday processing support",
      summary:
        "Helped keep scheduled data workflows moving throughout the trading day.",
      bullets: [
        "Maintained intraday ETL pipelines and investigated production processing failures.",
        "Partnered with developers to diagnose root causes and recover affected workflows.",
      ],
    },
  ],
  confidentialityNote:
    "Production data, queries, client information, and internal system details are intentionally excluded.",
} satisfies WorkItem;
