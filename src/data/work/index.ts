import type { WorkItem } from "../types";
import { bessemerExperience } from "./bessemer";
import { globalMusicProject } from "./global-music";
import { itByDesignExperience } from "./it-by-design";
import { nhtsaFarsProject } from "./nhtsa-fars";
import { portfolioSiteProject } from "./portfolio-site";
import { realEstateProject } from "./real-estate";
import { ritExperience } from "./rit";

export const workItems: WorkItem[] = [
  ritExperience,
  bessemerExperience,
  itByDesignExperience,
  nhtsaFarsProject,
  realEstateProject,
  globalMusicProject,
  portfolioSiteProject,
];

export const experienceItems = workItems.filter(
  (item) => item.kind === "experience",
);
export const projectItems = workItems.filter(
  (item) => item.kind === "project" && item.featured !== false,
);
