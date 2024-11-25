import { defineCollection, reference, z } from "astro:content";

const techSkill = defineCollection({
  type: "data",
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
  type: "content",
  schema: z.object({
    title: z.string(),
    techs: z.array(reference("techSkill")),
    language: language.readonly(),
  }),
});

const authorInfo = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      language: language.readonly(),
      name: z.string(),
      profession: z.string(),
      social: z.object({
        email: z.string().email(),
        linkedIn: z.string().url(),
        github: z.string().url(),
      }),
      cv: z.string(),
      picture: z.object({
        alt: z.string(),
        src: image(),
      }),
    }),
});

const page = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string().min(40),
    meta: z.object({
      url: z.string().url(),
      image: z.string().optional(),
      keywords: z.array(z.string()),
      language,
    }),
  }),
});

const project = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      language: language.readonly(),
      featured: z.boolean(),
      links: z.object({
        github: z.string().url(),
        website: z.string().url().optional(),
      }),
      description: z
        .string()
        .min(50, "Min 50 characters")
        .max(150, "Max 150 characters"),
      builtWith: z.array(reference("techSkill")),
      type: z.enum(["42", "frontend", "backend", "fullstack", "mobile"]),
      mainImage: z.object({
        alt: z.string(),
        src: z.object({
          dark: image(),
          light: image(),
        }),
      }),
    }),
});

export const collections = {
  techSkill,
  skillGroup,
  authorInfo,
  page,
  project,
};
