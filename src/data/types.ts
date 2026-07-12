export type SiteContent = {
  name: string;
  title: string;
  intro: string;
  email: string;
  location: string;
  availability: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type ShowcaseImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ShowcaseResource = {
  label: string;
  href: string;
  kind: "pdf" | "html" | "repo" | "demo" | "external";
  description?: string;
};

export type FocusArea = {
  title: string;
  text: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type SkillsContent = {
  stack: string[];
  hardware: string[];
};

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  tags: string[];
};

export type ShowcaseItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  bullets: string[];
  links?: LinkItem[];
  images?: ShowcaseImage[];
  featuredImageSources?: string[];
  resources?: ShowcaseResource[];
};
