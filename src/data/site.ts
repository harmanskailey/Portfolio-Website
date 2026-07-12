import type { LinkItem, SiteContent } from "./types";

export const site: SiteContent = {
  name: "Harman Kailey",
  title: "I've Been Learning To Ask The Right Questions. Results Driven Software Engineer. Applied Statistician.",
  intro:
    "I build across web development, applied technical projects, and a few long-term interests outside of work. This site is meant to stay simple now and grow cleanly as I add more real project detail.",
  email: "harmanskailey@gmail.com",
  location: "New Jersey, USA",
  availability: "Open to engineering roles, freelance builds, and creative technical collaborations.",
  portraitSubtitle: "Ultra Full-Time Dog Dad",
  portraitStack: [
    {
      eyebrow: "Based In",
      text: "New Jersey, USA",
    },
    {
      eyebrow: "Currently",
      text: "Part-time Masters student studying Applied Statistics at RIT.",
    },
    {
      eyebrow: "Open To",
      text: "Engineering roles, freelance builds, and creative technical collaborations.",
    },
    {
      eyebrow: "Education",
      text: "B.S. Electrical and Computer Engineering at Rutgers University '2021",
    },
  ],
};

export const socialLinks: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/harmanskailey" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harmanskailey" },
  { label: "Email", href: `mailto:${site.email}` },
];
