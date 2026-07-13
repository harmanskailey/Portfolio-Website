import ContactSection from "../components/ContactSection.astro";
import EducationSection from "../components/EducationSection.astro";
import ExperienceSection from "../components/ExperienceSection.astro";
import InterestsSection from "../components/InterestsSection.astro";
import {
  education,
  experience,
  personalInterests,
  site,
  socialLinks,
} from "../data/portfolio";

export const heroContent = {
  eyebrow: "Portfolio",
  primaryCta: {
    href: "#experience",
    label: "View work experience",
  },
  secondaryCta: {
    href: "#contact",
    label: "Contact me",
  },
};

export const heroHighlights = [
  {
    eyebrow: "01",
    title: "Work experience",
    text: experience[0]?.summary ?? "Professional experience and delivery patterns.",
    href: "#experience",
  },
  {
    eyebrow: "02",
    title: "Education",
    text: education[0]?.summary ?? "Applied statistics and technical study.",
    href: "#education",
  },
  {
    eyebrow: "03",
    title: "Interests",
    text: personalInterests[0]?.text ?? "Personal interests and creative technical threads.",
    href: "#interests",
  },
] as const;

export const homeSections = [
  {
    id: "experience",
    label: "Experience",
    component: ExperienceSection,
    props: {
      stageLabel: "01",
      eyebrow: "Experience",
      heading: "Work experience and the patterns behind it.",
      items: experience,
    },
  },
  {
    id: "education",
    label: "Education",
    component: EducationSection,
    props: {
      stageLabel: "02",
      eyebrow: "Education",
      heading: "Study, statistics, and the technical foundation behind the work.",
      items: education,
    },
  },
  {
    id: "interests",
    label: "Interests",
    component: InterestsSection,
    props: {
      stageLabel: "03",
      eyebrow: "Personal",
      heading: "Personal interests that keep the work curious and grounded.",
      items: personalInterests,
    },
  },
  {
    id: "contact",
    label: "Contact",
    component: ContactSection,
    props: {
      stageLabel: "04",
      eyebrow: "Contact",
      heading: "Reach out when something here connects.",
      site,
      socialLinks,
    },
  },
] as const;

export const navItems = [
  { id: "hero", label: "Landing" },
  ...homeSections.map(({ id, label }) => ({ id, label })),
] as const;
