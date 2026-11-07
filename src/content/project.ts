import { z } from "astro/zod";
import { type Locale, localizePath } from "@/i18n";
import { createThemedImageSchema, localizedTextSchema } from "./primitives";
import { sortByOrder } from "./skills";

export const projectCategorySchema = z.enum(["web", "42", "other"]);
export type ProjectCategory = z.infer<typeof projectCategorySchema>;

export const createProjectSchema = <
  TImage extends z.ZodType = z.ZodType,
  TTech extends z.ZodType = z.ZodType,
>({
  image = () => z.any() as unknown as TImage,
  technologyReference = z.string().min(1) as unknown as TTech,
}: {
  image?: () => TImage;
  technologyReference?: TTech;
} = {}) =>
  z
    .object({
      title: localizedTextSchema,
      description: localizedTextSchema,
      category: projectCategorySchema,
      featured: z.boolean().default(false),
      order: z.number().int().default(99),
      links: z.object({
        github: z.url(),
        website: z.url().optional(),
      }),
      builtWith: z.array(technologyReference),
      mainImage: z
        .object({
          alt: localizedTextSchema,
          src: createThemedImageSchema(image()),
        })
        .optional(),
    })
    .refine((data) => !data.featured || data.mainImage !== undefined, {
      message: "mainImage is required when featured is true",
      path: ["mainImage"],
    });

export const projectSchema = createProjectSchema();
export type Project = z.infer<typeof projectSchema>;

export function hasCaseStudy(project: { body?: string }): boolean {
  return Boolean(project.body && project.body.trim().length > 0);
}

export function getProjectSlug(id: string): string {
  return id.split("/").pop()?.replace(/\.md$/, "") ?? id;
}

export function getProjectHref(
  project: {
    id: string;
    body?: string;
    data: { links: { github: string; website?: string } };
  },
  lang: Locale = "es",
): string {
  if (hasCaseStudy(project)) {
    const slug = getProjectSlug(project.id);
    return localizePath(`/projects/${slug}`, lang);
  }

  return project.data.links.website ?? project.data.links.github;
}

export function getFeaturedProjects<
  T extends { data: { featured: boolean; category: string; order?: number } },
>(projects: T[]): T[] {
  return sortByOrder(
    projects.filter(
      (project) => project.data.featured && project.data.category !== "42",
    ),
  );
}

export function get42Projects<
  T extends { data: { category: string; order?: number } },
>(projects: T[]): T[] {
  return sortByOrder(
    projects.filter((project) => project.data.category === "42"),
  );
}

export function getOtherProjects<
  T extends { data: { featured: boolean; category: string; order?: number } },
>(projects: T[]): T[] {
  return sortByOrder(
    projects.filter(
      (project) => !project.data.featured && project.data.category !== "42",
    ),
  );
}

export function getCaseStudyProjects<T extends { body?: string }>(
  projects: T[],
): T[] {
  return projects.filter(hasCaseStudy);
}

export async function getProjectStaticPaths() {
  const { getCollection } = await import("astro:content");
  const projects = await getCollection("project");
  return getCaseStudyProjects(projects).map((project) => ({
    params: { slug: getProjectSlug(project.id) },
    props: { project },
  }));
}
