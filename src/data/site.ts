import type { LinkItem, SiteContent, Stat } from "./types";

export const site: SiteContent = {
  name: "Harman Kailey",
  title: "Full-Time Software Engineer, Part-Time Masters student studying Applied Statistics at RIT.",
  intro:
    "I build across web development, applied technical projects, and a few long-term interests outside of work. This site is meant to stay simple now and grow cleanly as I add more real project detail.",
  email: "harmanskailey@gmail.com",
  location: "New Jersey, USA",
  availability: "Open to engineering roles, freelance builds, and creative technical collaborations.",
};

export const heroStats: Stat[] = [
  { value: "6+", label: "Technical disciplines explored" },
  { value: "3", label: "Featured project lanes" },
  { value: "1", label: "Private portfolio experience" },
];

export const socialLinks: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/harmanskailey" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harmanskailey" },
  { label: "Email", href: `mailto:${site.email}` },
];
