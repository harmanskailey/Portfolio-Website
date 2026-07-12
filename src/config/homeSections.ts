import ContactSection from "../components/ContactSection.astro";
import ExperienceSection from "../components/ExperienceSection.astro";
import FocusAreasSection from "../components/FocusAreasSection.astro";
import ProjectsSection from "../components/ProjectsSection.astro";
import ShowcaseSection from "../components/ShowcaseSection.astro";
import SkillsSection from "../components/SkillsSection.astro";
import {
  experience,
  focusAreas,
  interests,
  projects,
  showcases,
  site,
  skills,
  socialLinks,
} from "../data/portfolio";

export const heroContent = {
  eyebrow: "Portfolio",
  primaryCta: {
    href: "#projects",
    label: "See featured work",
  },
  secondaryCta: {
    href: `mailto:${site.email}`,
    label: "Start a conversation",
  },
  statusLabel: "Authenticated",
};

export const homeSections = [
  {
    id: "about",
    label: "About",
    component: FocusAreasSection,
    props: {
      eyebrow: "About",
      heading: "What I spend most of my time building and learning.",
      items: focusAreas,
    },
  },
  {
    id: "experience",
    label: "Experience",
    component: ExperienceSection,
    props: {
      eyebrow: "Experience",
      heading: "Professional experience and the work patterns behind it.",
      items: experience,
    },
  },
  {
    id: "skills",
    label: "Skills",
    component: SkillsSection,
    props: {
      eyebrow: "Skills",
      heading: "Core tools and systems I work with most often.",
      skills,
    },
  },
  {
    id: "projects",
    label: "Projects",
    component: ProjectsSection,
    props: {
      eyebrow: "Projects",
      heading: "Selected projects across software, hardware, and applied experimentation.",
      projects,
    },
  },
  {
    id: "showcase",
    label: "Showcase",
    component: ShowcaseSection,
    props: {
      eyebrow: "More",
      heading: "Additional pages for interests and work I want to build out over time.",
      items: showcases,
    },
  },
  {
    id: "contact",
    label: "Contact",
    component: ContactSection,
    props: {
      eyebrow: "Contact",
      heading: "Interests, links, and the easiest ways to reach me.",
      interests,
      socialLinks,
    },
  },
] as const;
