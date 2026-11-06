import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { createProfileSchema } from "./content/profile";

const techSkill = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/techSkill" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: z.object({
        src: z.object({
          dark: image(),
          light: image(),
        }),
        alt: z.string(),
      }),
    }),
});

const language = z.enum(["es", "en"]);

const skillGroup = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/skillGroup" }),
  schema: z.object({
    title: z.string(),
    techs: z.array(reference("techSkill")),
    language: language.readonly().optional(),
  }),
});

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
        github: z.string().url(),
        website: z.string().url().optional(),
      }),
      description: z.string(),
      builtWith: z.array(reference("techSkill")),
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
  techSkill,
  skillGroup,
  profile,
  project,
};
