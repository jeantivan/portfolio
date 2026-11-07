import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { createProfileSchema } from "./content/profile";
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

const language = z.enum(["es", "en"]);

const profile = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/profile" }),
  schema: ({ image }) => createProfileSchema({ image }),
});

const project = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/project" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      language: language.readonly().optional(),
      featured: z.boolean(),
      links: z.object({
        github: z.url(),
        website: z.url().optional(),
      }),
      description: z.string(),
      builtWith: z.array(reference("technology")),
      type: z
        .enum(["42", "frontend", "backend", "fullstack", "mobile"])
        .optional(),
      mainImage: z
        .object({
          alt: z.string(),
          src: z.object({
            dark: image(),
            light: image(),
          }),
        })
        .optional(),
    }),
});

export const collections = {
  technology,
  technicalSkill,
  softSkill,
  profile,
  project,
};
