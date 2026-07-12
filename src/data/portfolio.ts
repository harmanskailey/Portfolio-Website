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

export type ShowcaseItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  bullets: string[];
  links?: LinkItem[];
};

export const site: SiteContent = {
  name: "Harman Kailey",
  title: "Software engineer focused on full-stack products, systems thinking, and practical builds.",
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

export const focusAreas: FocusArea[] = [
  {
    title: "Full-stack development",
    text: "I like building products end to end, from data and backend logic to frontend experiences that feel clear and intentional.",
  },
  {
    title: "Embedded systems",
    text: "My background includes hardware-oriented work, so I am comfortable moving between software, devices, and system constraints.",
  },
  {
    title: "Applied problem solving",
    text: "I learn best by building, testing, and refining ideas until they become useful and concrete.",
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

export const showcases: ShowcaseItem[] = [
  {
    slug: "dog",
    title: "Cooper",
    category: "Personal side",
    summary:
      "A simple page for Cooper with room for photos, short updates, and links out to social posts if I decide to keep them there.",
    tags: ["Photos", "Short updates", "Instagram links"],
    bullets: [
      "A place to share a few photos and quick notes without cluttering the main portfolio.",
      "Can link out to a public Instagram account instead of hosting large video files directly.",
      "Easy to expand later into a gallery or small timeline.",
    ],
  },
  {
    slug: "bouldering",
    title: "Bouldering Experience",
    category: "Athletic practice",
    summary:
      "A dedicated route for climbing progress, videos, favorite problems, and the way bouldering overlaps with technical problem solving.",
    tags: ["Progress", "Videos", "Problem solving"],
    bullets: [
      "Good place for climbing clips without forcing them into the main homepage.",
      "Can grow into a log of favorite sends, gyms, or training notes.",
      "Works well with embedded video links if I want to avoid hosting files myself.",
    ],
  },
  {
    slug: "applied-stats",
    title: "Applied Stats Projects",
    category: "Analytical work",
    summary:
      "A page for projects where data analysis, statistical reasoning, or modeling matter as much as the code.",
    tags: ["Analysis", "Modeling", "Case studies"],
    bullets: [
      "Keeps data-oriented work separate from general software projects.",
      "Can expand into project cards with datasets, methods, and results.",
      "Fits notebooks, dashboards, or short write-ups once those are ready.",
    ],
  },
  {
    slug: "cooking",
    title: "Cooking Skills",
    category: "Creative craft",
    summary:
      "A small section for dishes, techniques, and food I like making, without forcing it into a fake project format.",
    tags: ["Dishes", "Techniques", "Photos"],
    bullets: [
      "Useful for a few photos, favorite meals, or techniques I keep coming back to.",
      "Can stay lightweight now and turn into a recipe or food journal later.",
      "Adds personality without needing a complicated structure.",
    ],
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
