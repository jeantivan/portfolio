import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { createProfileSchema } from "./content/profile";
import { createProjectSchema } from "./content/project";
import {
  createSoftSkillSchema,
  createTechnicalSkillSchema,
  createTechnologySchema,
} from "./content/skills";

const technology = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/technology" }),
  schema: ({ image }) => createTechnologySchema({ image }),
});

const technicalSkill = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/technicalSkill" }),
  schema: () =>
    createTechnicalSkillSchema({
      technologyReference: reference("technology"),
    }),
});

const softSkill = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/softSkill" }),
  schema: () => createSoftSkillSchema(),
});

const profile = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/profile" }),
  schema: ({ image }) => createProfileSchema({ image }),
});

const project = defineCollection({
  loader: glob({
    pattern: ["*.md", "!*.en.md"],
    base: "./src/content/project",
  }),
  schema: ({ image }) =>
    createProjectSchema({
      image,
      technologyReference: reference("technology"),
    }),
});

export const collections = {
  technology,
  technicalSkill,
  softSkill,
  profile,
  project,
};
