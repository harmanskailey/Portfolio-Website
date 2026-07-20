import type {
  CapabilityGroup,
  EducationItem,
  FocusArea,
  ImpactItem,
  ProfileNarrative,
  ResearchDirection,
  SourceHighlightGroup,
} from "./types";

export const focusAreas: FocusArea[] = [
  {
    slug: "applied-stats",
    kicker: "Applied Stats",
    title: "Reports, models, and analytical tools.",
    summary:
      "RIT coursework, R deployments, Quarto reports, and statistical methods applied to real-world systems.",
    details: [
      "R and Quarto reports",
      "Shiny dashboards and app links",
      "Data collection, survivorship bias, and sampling practices",
    ],
    href: "#projects",
  },
  {
    slug: "work-experience",
    kicker: "Work Experience",
    title: "Production systems with real operational weight.",
    summary:
      "IAM integrations and production support across enterprise identity, automation, application support, and data operations.",
    details: [
      "Enterprise identity integrations",
      "Automation and provisioning workflows",
      "Production support and data operations",
    ],
    href: "#experience",
  },
  {
    slug: "personal",
    kicker: "Personal",
    title: "A warmer archive with a clear privacy boundary.",
    summary:
      "Cooking, Cooper, field notes, and personal projects that belong behind a clearer privacy boundary.",
    details: [
      "Cooking journal now",
      "Cooper collection next",
      "Private routes in the roadmap",
    ],
    href: "#personal",
  },
];

export const impactItems: ImpactItem[] = [
  {
    value: "8+",
    label: "Enterprise applications",
    description:
      "Successful integrations with various types of vendors.",
  },
  {
    value: "4+ years",
    label: "Production experience",
    description:
      "Across IAM delivery, application support, and data operations.",
  },
  {
    value: "Hundreds",
    label: "Staff hours saved",
    description:
      "Automating the mundane so teams can work on other things.",
  },
];

export const profileNarrative: ProfileNarrative = {
  eyebrow: "Why this intersection",
  heading:
    "Engineering taught me to build systems. Statistics is teaching me how to question them.",
  paragraphs: [
    "During my final year in Electrical and Computer Engineering at Rutgers, my senior design project focused on using computer vision to predict and manage vehicle flow at intersections.",
    "We were building a model that had never seen the real world, and we lacked the tools to validate it properly. That project exposed a gap in my knowledge.",
    "I want to be an engineer who writes reliable code but also asks the right questions and interprets patterns responsibly.",
  ],
};

export const sourceHighlights: SourceHighlightGroup[] = [
  {
    source: "Resume",
    title: "IAM integrations and production support",
    summary:
      "Software developer with 4+ years in IAM integrations and production support, pursuing an M.S. in Applied Statistics.",
    highlights: [
      "Designed and supported IAM integrations with 8+ enterprise applications using JSON, XML, and REST APIs across mobile credentials, email marketing, access management, and collaboration services.",
      "Built a PHP MVC portal for user credential management and administrator support, reducing ID Card Office workload through access rules that hid revoked credentials and prevented reactivation.",
      "Automated ID photo ingestion and processing for Apple Wallet, adding black padding to reduce false positives in vendor face detection and saving the ID Card Office hundreds of staff hours.",
      "Wrote and executed SQL and PL/SQL corrections in a production Oracle database to resolve synchronization defects and preserve data integrity in a trading environment.",
    ],
  },
  {
    source: "RIT admission statement",
    title: "Why applied statistics",
    summary:
      "Building robust systems requires more than just engineering skills. It requires the statistical reasoning to ensure those systems are reliable and accountable.",
    highlights: [
      "Statistical insight depends heavily on how data is collected, not just how it is analyzed.",
      "Learning about concepts like survivorship bias and sampling practices showed me how easily rigorous models can fail due to flawed inputs and survey design.",
      "Over time, I have learned to view this ambiguity as a tool.",
      "I want to be an engineer who writes reliable code but also asks the right questions and interprets patterns responsibly.",
    ],
  },
];

export const researchDirections: ResearchDirection[] = [
  {
    stage: "Current foundation",
    title: "Measurement before modeling",
    summary:
      "Treat data collection, sampling, and provenance as part of the system, not as cleanup after the fact.",
    questions: [
      "How does collection design shape the conclusions a model can support?",
      "Which biases remain invisible in an otherwise polished analysis?",
    ],
  },
  {
    stage: "Applied direction",
    title: "Operational systems as data",
    summary:
      "Use careful visualization and modeling to make patterns in identity, access, and infrastructure easier to understand.",
    questions: [
      "Where can usage patterns reveal friction or failure earlier?",
      "How can analysis support operators without obscuring context?",
    ],
  },
  {
    stage: "Long-term practice",
    title: "Accountable analytical tools",
    summary:
      "Build reproducible tools that explain their assumptions and communicate uncertainty responsibly.",
    questions: [
      "What makes an analytical result trustworthy to its user?",
      "How should interactive tools expose limitations and uncertainty?",
    ],
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
