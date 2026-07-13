import type {
  EducationItem,
  ExperienceItem,
  InterestItem,
} from "./types";

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
    details: [
      "Worked across client-facing sites where small UI and content changes needed to stay stable in production.",
      "Balanced implementation work with support requests, reporting needs, and the practical constraints of existing CMS tooling.",
      "Built early habits around communication, version control, and making incremental improvements without breaking active workflows.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.S. Applied Statistics",
    school: "Rochester Institute of Technology",
    period: "In progress",
    summary:
      "Part-time graduate study focused on statistical thinking, modeling, and practical analysis.",
    details: [
      "Building a stronger foundation in applied inference, data interpretation, and quantitative communication.",
      "Connecting statistical methods back to software projects, product decisions, and real-world systems.",
      "Using the program as a way to sharpen how I frame questions before jumping into implementation.",
    ],
  },
  {
    degree: "Engineering and systems coursework",
    school: "Undergraduate foundation",
    period: "Prior study",
    summary:
      "Coursework and project work spanning software, hardware, embedded systems, and digital logic.",
    details: [
      "Developed comfort moving between code, circuits, sensors, and system-level constraints.",
      "Built a foundation for projects involving Raspberry Pi, computer vision, and connected hardware.",
      "Learned to approach problems from both implementation and architecture perspectives.",
    ],
  },
];

export const personalInterests: InterestItem[] = [
  {
    title: "Cooking from scratch",
    text: "One of my favorite ways to travel without leaving the kitchen: rustic tools, bright flavor, and a lot of iteration.",
    tags: ["Cast iron", "Southeast Asian flavors", "Mason jar ops"],
    details: [
      "I lean toward Southeast Asian flavor palettes, especially honey, ginger, garlic, lime, chili, and herbs.",
      "I like cooking with cast iron, Dutch ovens, mortar and pestle work, and from-scratch prep.",
      "I have become mildly intense about turning mason jars into a tiny kitchen operations system.",
    ],
    imageSources: [
      "/images/cooking/6.jpeg",
      "/images/cooking/9.jpeg",
      "/images/cooking/12.jpg",
    ],
  },
  {
    title: "Systems and hardware",
    text: "I like understanding how the lower-level pieces fit together, from microprocessors to sensor-driven prototypes.",
    tags: ["Embedded", "Circuits", "Debugging"],
  },
  {
    title: "Outdoors and music",
    text: "The non-screen side of the balance sheet: hiking, listening closely, and giving my brain room to recombine ideas.",
    tags: ["Hiking", "Music", "Reset"],
  },
];
