import type { BioContent } from "./types";
import { CREDENTIALS_LINE, RICH_PROJECTS } from "./rich-site-data";

export const fallbackBio: BioContent = {
  name: "Szal",
  titleLine1: "Cinematic",
  titleLine2: "Product.",
  tagline:
    "Building prestige digital experiences with senior-engineer rigor and film-grade motion.",
  credentialsLine: CREDENTIALS_LINE,
  contactEmail: "hello@example.com",
  linkedInUrl: "https://linkedin.com",
  githubUrl: "https://github.com",
  arenaUrl: "https://are.na",
};

export { RICH_PROJECTS as fallbackProjects };
