import type { LinkItem, SiteContent } from "./types";

export const site: SiteContent = {
  name: "Harman Kailey",
  eyebrow: "Applied statistics, software engineering, and personal field notes",
  headline: "Harman Kailey",
  intro:
    "Software developer with 4+ years in IAM integrations and production support, pursuing an M.S. in Applied Statistics. I want to write reliable code, ask the right questions, and interpret patterns responsibly.",
  email: "harmanskailey@gmail.com",
  location: "New Jersey, USA",
  availability:
    "Open to software engineering opportunities and thoughtful technical collaborations.",
  description:
    "Harman Kailey is a software engineer and Applied Statistics M.S. candidate working across enterprise identity, production systems, and reproducible analysis.",
};

export const socialLinks: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/harmanskailey" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harmanskailey" },
  { label: "Email", href: `mailto:${site.email}` },
];
