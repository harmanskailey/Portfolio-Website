import type { WorkItem } from "../types";

export const ritExperience = {
  slug: "rit-software-engineering",
  kind: "experience",
  title: "Software Engineer I",
  organization: "Rochester Institute of Technology",
  location: "Rochester, New York (Remote)",
  period: "September 2022 – Present",
  summary:
    "Build and support enterprise identity integrations and operational tools connecting RIT’s in-house IAM platform with campus systems.",
  highlights: [
    "Designed and supported integrations between the IAM platform and 8+ enterprise applications using JSON- and XML-based interfaces.",
    "Automated the campus ID-photo workflow, eliminating manual data-entry errors and saving hundreds of staff hours to date.",
  ],
  skills: ["PHP", "SQL", "IAM", "REST APIs", "JSON", "XML", "Kubernetes"],
  sections: [
    {
      heading: "Enterprise integrations and IAM architecture",
      summary:
        "Architected multi-vendor mobile-credential workflows and supported integrations across other enterprise services.",
      bullets: [
        "Extended backend services and database schemas to retain credential metadata and preserve change history.",
        "Automated license deprovisioning from offboarding events, strengthening compliance and reclaiming unused licenses.",
        "Worked with application teams to translate access requirements into role- and attribute-based controls.",
      ],
    },
    {
      heading: "Provisioning automation and operations",
      summary:
        "Automated high-volume identity operations and reduced manual work across provisioning workflows.",
      bullets: [
        "Built bulk account-creation tools that validate submitted data and select the correct parameters for access requests.",
        "Corrected records left in invalid provisioning states to restore accurate identity data.",
        "Added campus-scoped permissions to a Duo administration tool so international IT teams could manage their users directly.",
      ],
    },
    {
      heading: "Troubleshooting and application support",
      summary:
        "Investigated failures across identity, application, and containerized environments.",
      bullets: [
        "Traced SSO failures through Shibboleth logs to isolate issues across the IAM platform and connected applications.",
        "Diagnosed Kubernetes workloads with kubectl and used Okteto to recreate repository-specific development environments.",
        "Managed Jira and ServiceNow requests, delivered targeted IAM admin-interface fixes, and documented changes in Confluence.",
      ],
    },
  ],
  confidentialityNote:
    "This overview describes responsibilities and outcomes at a public level; internal architecture, data, and security details are intentionally omitted.",
} satisfies WorkItem;
