import type {
  ExperienceItem,
  FocusArea,
  ProjectItem,
  SkillsContent,
} from "./types";

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

export const interests: string[] = [
  "Microprocessor design",
  "Quantum computing",
  "Computer vision",
  "Signal processing",
  "Hiking",
  "Music",
];
