import cooking01 from "../assets/cooking/1.jpg";
import cooking02 from "../assets/cooking/2.jpeg";
import cooking03 from "../assets/cooking/3.jpeg";
import cooking04 from "../assets/cooking/4.jpeg";
import cooking05 from "../assets/cooking/5.jpeg";
import cooking06 from "../assets/cooking/6.jpeg";
import cooking07 from "../assets/cooking/7.jpeg";
import cooking08 from "../assets/cooking/8.jpeg";
import cooking09 from "../assets/cooking/9.jpeg";
import cooking10 from "../assets/cooking/10.jpeg";
import cooking11 from "../assets/cooking/11.jpeg";
import cooking12 from "../assets/cooking/12.jpg";
import cooking13 from "../assets/cooking/13.jpeg";
import cooking14 from "../assets/cooking/14.jpeg";
import type { CookingContent } from "./types";

export const cooking: CookingContent = {
  eyebrow: "The food that fuels the work.",
  title: "My favorite escape from screens.",
  summary:
    "Cooking is where I trade the keyboard for cast iron, a mortar and pestle, and a lot of tasting as I go. I gravitate toward Southeast Asian flavors—ginger, garlic, lime, chili, fresh herbs, and a little sweetness. Recipes give me a framework, but heat, texture, and instinct decide where the dish ends up.",
  philosophy: "",
  themes: [],
  images: [
    {
      src: cooking03,
      alt: "Tall sesame-roll sandwich layered with sliced deli meat, cheese, tomato, arugula, and dark sauce on a white plate.",
      caption: "A generously stacked lunch.d",
      group: "featured",
    },
    {
      src: cooking05,
      alt: "Sliced roasted meat with crisp chickpeas and wilted spinach over a white sauce on a black plate.",
      caption: "Roasted chickpeas bring crunch to sliced meat and greens.",
      group: "featured",
    },
    {
      src: cooking08,
      alt: "Salmon topped with lemon slices in a bowl of noodles, spinach, mushrooms, and golden broth.",
      caption: "A citrusy salmon-and-noodle bowl with greens and mushrooms.",
      group: "featured",
    },
    {
      src: cooking06,
      alt: "Chickpeas and chopped spinach simmering in a thick red-orange sauce inside a white Dutch oven.",
      caption: "A hearty one-pot chickpea and spinach simmer.",
      group: "gallery",
    },
    {
      src: cooking09,
      alt: "Elbow pasta in red sauce with pieces of meat and a layer of finely grated cheese on a patterned plate.",
      caption: "Sauced pasta finished with grated cheese.",
      group: "gallery",
    },
    {
      src: cooking10,
      alt: "Slices of pink-centered steak beside seasoned broccoli and potato pieces.",
      caption: "Steak served medium-rare with broccoli and potatoes.",
      group: "gallery",
    },
    {
      src: cooking13,
      alt: "Rice noodles topped with browned ground meat, green chilis, scallions, cabbage, and orange pepper strips.",
      caption:
        "Rice noodles with savory meat, fresh chilis, and crunchy vegetables.",
      group: "gallery",
    },
    {
      src: cooking14,
      alt: "White rice topped with pieces of meat, spinach, orange vegetables, and a thick golden-brown sauce.",
      caption: "A saucy rice plate layered with meat and greens.",
      group: "gallery",
    },
    {
      src: cooking01,
      alt: "Salmon, broccoli, carrots, red onion, coconut milk, seasonings, and noodles arranged beside pots on a stovetop.",
      caption: "Dinner mise en place, ready for the stove.",
      group: "process",
    },
    {
      src: cooking02,
      alt: "Thin steaks searing in a cast-iron skillet with rosemary, garlic, and onion rings.",
      caption: "Aromatics hitting the pan during the sear.",
      group: "process",
    },
    {
      src: cooking04,
      alt: "Several deeply browned pieces of seasoned chicken cooking in a cast-iron skillet.",
      caption: "A hard sear develops color in the skillet.",
      group: "process",
    },
    {
      src: cooking07,
      alt: "A fish fillet cooking in a cast-iron skillet beneath lemon slices, green chilis, and black pepper.",
      caption: "Citrus and chili layered over fish in the skillet.",
      group: "process",
    },
    {
      src: cooking11,
      alt: "A browned salmon fillet in broth with noodles and sliced green chilis in a white bowl.",
      caption: "Salmon and noodles with a fresh chili finish.",
      group: "process",
    },
    {
      src: cooking12,
      alt: "Onions, shallots, mushrooms, and charred aromatics steeping in liquid in a Dutch oven.",
      caption: "A pot of aromatics building the base for stock.",
      group: "process",
    },
  ],
};
