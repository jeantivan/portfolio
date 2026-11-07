import { z } from "astro/zod";
import { createThemedImageSchema, localizedTextSchema } from "./primitives";

export const createTechnologySchema = <T extends z.ZodType = z.ZodType>({
  image = () => z.any() as unknown as T,
}: {
  image?: () => T;
} = {}) =>
  z.object({
    name: z.string().min(1),
    icon: createThemedImageSchema(image()),
    featured: z.boolean().default(false),
    order: z.number().int().optional(),
  });

export const technologySchema = createTechnologySchema();
export type Technology = z.infer<typeof technologySchema>;

export const createTechnicalSkillSchema = <
  TTech extends z.ZodType = z.ZodType,
>({
  technologyReference = z.string().min(1) as unknown as TTech,
}: {
  technologyReference?: TTech;
} = {}) =>
  z.object({
    title: localizedTextSchema,
    description: localizedTextSchema.optional(),
    technologies: z.array(technologyReference).optional(),
    order: z.number().int().optional(),
  });

export const technicalSkillSchema = createTechnicalSkillSchema();
export type TechnicalSkill = z.infer<typeof technicalSkillSchema>;

export const createSoftSkillSchema = () =>
  z.object({
    title: localizedTextSchema,
    description: localizedTextSchema.optional(),
    order: z.number().int().optional(),
  });

export const softSkillSchema = createSoftSkillSchema();
export type SoftSkill = z.infer<typeof softSkillSchema>;

export function sortByOrder<T extends { data: { order?: number } }>(
  items: T[],
): T[] {
  return [...items].sort((a, b) => {
    const orderA = a.data.order;
    const orderB = b.data.order;

    if (orderA !== undefined && orderB !== undefined) {
      return orderA - orderB;
    }
    if (orderA !== undefined) return -1;
    if (orderB !== undefined) return 1;
    return 0;
  });
}

export function getFeaturedTechnologies<
  T extends { data: { featured: boolean; order?: number } },
>(technologies: T[]): T[] {
  return sortByOrder(technologies.filter((tech) => tech.data.featured));
}
