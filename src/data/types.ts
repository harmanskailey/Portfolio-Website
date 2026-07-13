export type SiteContent = {
  name: string;
  title: string;
  intro: string;
  email: string;
  location: string;
  availability: string;
  portraitSubtitle?: string;
  portraitStack?: {
    eyebrow: string;
    text: string;
  }[];
};

export type LinkItem = {
  label: string;
  href: string;
};

export type HeroHighlight = {
  eyebrow: string;
  title: string;
  text: string;
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

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
  details?: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  summary: string;
  details: string[];
};

export type InterestItem = {
  title: string;
  text: string;
  tags: string[];
  details?: string[];
  imageSources?: string[];
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
