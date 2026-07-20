import type { ImageMetadata } from "astro";

export type LinkItem = {
  label: string;
  href: string;
};

export type SiteContent = {
  name: string;
  eyebrow: string;
  headline: string;
  intro: string;
  email: string;
  location: string;
  availability: string;
  description: string;
};

export type ImpactItem = {
  value: string;
  label: string;
  description: string;
};

export type FocusArea = {
  slug: "applied-stats" | "work-experience" | "personal";
  kicker: string;
  title: string;
  summary: string;
  details: string[];
  href: string;
};

export type SourceHighlightGroup = {
  source: string;
  title: string;
  summary: string;
  highlights: string[];
};

export type DetailSection = {
  heading: string;
  summary?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type EmbeddedReport = {
  title: string;
  href: string;
  summary?: string;
  fallbackLabel?: string;
};

export type WorkItem = {
  slug: string;
  kind: "experience" | "project";
  title: string;
  organization?: string;
  location?: string;
  period: string;
  summary: string;
  highlights: string[];
  skills: string[];
  sections: DetailSection[];
  links?: LinkItem[];
  reportEmbed?: EmbeddedReport;
  featured?: boolean;
  earlier?: boolean;
  confidentialityNote?: string;
  projectMeta?: {
    category: "research" | "engineering";
    format: string;
    question: string;
    deliverable: string;
  };
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  summary: string;
};

export type CapabilityGroup = {
  title: string;
  summary: string;
  primary: string[];
  supporting: string[];
};

export type ProfileNarrative = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
};

export type ResearchDirection = {
  stage: string;
  title: string;
  summary: string;
  questions: string[];
};

export type CookingImage = {
  src: ImageMetadata;
  alt: string;
  caption: string;
  group: "featured" | "gallery" | "process";
};

export type CookingContent = {
  title: string;
  eyebrow: string;
  summary: string;
  philosophy: string;
  themes: {
    title: string;
    text: string;
  }[];
  images: CookingImage[];
};
