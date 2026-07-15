import type { CapabilityGroup, EducationItem, ImpactItem } from "./types";

export const impactItems: ImpactItem[] = [
  {
    value: "8+",
    label: "Enterprise applications",
    description:
      "Integrated with an in-house identity and access management platform.",
  },
  {
    value: "Hundreds",
    label: "Staff hours saved",
    description: "Through automation of a campus ID-photo workflow.",
  },
  {
    value: "Since 2022",
    label: "Enterprise IAM delivery",
    description: "Building integrations and operational tools at RIT.",
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.S. in Applied Statistics",
    school: "Rochester Institute of Technology",
    period: "Expected August 2027",
    summary:
      "Part-time graduate study focused on statistical reasoning, modeling, practical analysis, and quantitative communication.",
  },
  {
    degree: "B.S. in Electrical and Computer Engineering",
    school: "Rutgers University",
    period: "January 2021",
    summary:
      "An engineering foundation spanning software, hardware, embedded systems, circuits, and system-level problem solving.",
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Development and data",
    summary:
      "Integration services, automation, analytical applications, and production data support.",
    primary: ["PHP", "JavaScript", "Python", "SQL", "PL/SQL", "R"],
    supporting: [
      "Java",
      "HTML/CSS",
      "Oracle Database",
      "REST APIs",
      "JSON",
      "XML",
    ],
  },
  {
    title: "Identity and enterprise systems",
    summary:
      "Identity integrations, provisioning workflows, and application access controls.",
    primary: ["IAM", "LDAP", "Active Directory", "RBAC", "ABAC", "Shibboleth"],
    supporting: [
      "Duo",
      "Microsoft 365",
      "Google Workspace",
      "ServiceNow",
      "Workday exposure",
    ],
  },
  {
    title: "Platforms and delivery",
    summary:
      "Diagnosis and delivery across development and production environments.",
    primary: ["AWS", "Linux", "Kubernetes", "kubectl", "GitLab", "CI/CD"],
    supporting: ["Okteto", "Jira", "Confluence", "Remote Desktop", "Vercel"],
  },
];
