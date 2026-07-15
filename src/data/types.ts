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

export type DetailSection = {
  heading: string;
  summary?: string;
  paragraphs?: string[];
  bullets?: string[];
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
  featured?: boolean;
  earlier?: boolean;
  confidentialityNote?: string;
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
