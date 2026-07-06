// Centralize editable homepage content here so most future updates
// happen in data instead of inside component markup.

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

export const site: SiteContent = {
  name: "Harman Kailey",
  title: "Software Engineer building thoughtful systems with a sharp visual edge.",
  intro:
    "I design and ship digital experiences across full-stack development, embedded systems, and exploratory product ideas. This version of the site is intentionally modular so you can swap content without untangling layout code.",
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

export const focusAreas: FocusArea[] = [
  {
    title: "Full-stack product work",
    text: "From backend logic to polished frontends, I like building systems that feel cohesive instead of stitched together.",
  },
  {
    title: "Embedded and hardware fluency",
    text: "My engineering background lets me move comfortably between software interfaces and physical systems.",
  },
  {
    title: "Experiment-driven learning",
    text: "I learn fastest by shipping small, interesting prototypes and iterating until the idea becomes real.",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "IT By Design",
    period: "Dec 2018 - Oct 2020",
    summary:
      "Refreshed client-facing web experiences, customized CMS workflows, and supported data-driven requests across production environments.",
    bullets: [
      "Updated front-end experiences using WordPress and Avada in a deployed production environment.",
      "Customized themes and plugins with HTML, CSS, PHP, and JavaScript.",
      "Used Trello and Git to stay organized and keep delivery moving.",
      "Supported end-user data requests with SQL analysis and reporting.",
    ],
  },
];

export const skills: SkillsContent = {
  stack: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "SQL",
    "Astro",
    "HTML",
    "CSS",
    "AWS",
    "Git",
  ],
  hardware: [
    "Embedded systems",
    "Raspberry Pi",
    "Circuit debugging",
    "Digital logic design",
    "Sensor-based prototyping",
  ],
};

export const projects: ProjectItem[] = [
  {
    title: "Streamlined Dining",
    category: "Operations platform",
    description:
      "A restaurant workflow tool built to reduce communication friction between guests, servers, and the kitchen.",
    tags: ["Flask", "PostgreSQL", "SQLAlchemy", "Jinja", "Team delivery"],
  },
  {
    title: "Computer Vision Assisted Stop Light",
    category: "Applied computer vision",
    description:
      "A hardware-software concept for analyzing live intersection traffic and adapting signal timing with image processing.",
    tags: ["Python", "OpenCV", "Raspberry Pi", "Camera systems"],
  },
  {
    title: "3D Printed Smart Lock",
    category: "Connected hardware",
    description:
      "A smart lock concept blending 3D design, motors, Bluetooth setup, and NFC-based access workflows.",
    tags: ["IoT", "Android", "NFC", "Mechanical design"],
  },
];

export const interests: string[] = [
  "Microprocessor design",
  "Quantum computing",
  "Computer vision",
  "Signal processing",
  "Hiking",
  "Music",
];
