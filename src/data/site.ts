import type { LinkItem, SiteContent } from "./types";

export const site: SiteContent = {
  name: "Harman Kailey",
  eyebrow: "Software engineer · Enterprise integrations · Applied statistics",
  headline:
    "Building dependable integrations and automation for complex operational systems.",
  intro:
    "I’m a software engineer focused on enterprise identity, backend integrations, and production support, with graduate study in applied statistics. I care about clear ownership, practical automation, and systems people can depend on.",
  email: "harmanskailey@gmail.com",
  location: "New Jersey, USA",
  availability:
    "Open to software engineering opportunities and thoughtful technical collaborations.",
  description:
    "Portfolio of Harman Kailey, a software engineer focused on enterprise integrations, identity automation, production support, and applied statistics.",
};

export const socialLinks: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/harmanskailey" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harmanskailey" },
  { label: "Email", href: `mailto:${site.email}` },
];
