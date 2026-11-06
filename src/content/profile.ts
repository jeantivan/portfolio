import { z } from "astro/zod";
import { localizedTextSchema } from "./primitives";

export const workExperienceSchema = z.object({
  role: localizedTextSchema,
  company: z.string().min(1),
  companyUrl: z.url().optional(),
  startDate: z.string().min(1),
  endDate: z.string().min(1).optional(),
  description: localizedTextSchema.optional(),
  technologies: z.array(z.string().min(1)).optional(),
});

export type WorkExperience = z.infer<typeof workExperienceSchema>;

export const educationSchema = z.object({
  institution: z.string().min(1),
  program: localizedTextSchema,
  startDate: z.string().min(1),
  endDate: z.string().min(1).optional(),
  description: localizedTextSchema.optional(),
});

export type Education = z.infer<typeof educationSchema>;

export const createProfileSchema = <T extends z.ZodType = z.ZodType>({
  image = () => z.any() as unknown as T,
}: {
  image?: () => T;
} = {}) =>
  z.object({
    name: z.string().min(1),
    profession: localizedTextSchema,
    bio: localizedTextSchema,
    picture: z.object({
      src: image(),
      alt: localizedTextSchema,
    }),
    cv: localizedTextSchema,
    social: z.object({
      email: z.email(),
      linkedIn: z.url(),
      github: z.url(),
    }),
    experience: z.array(workExperienceSchema).optional(),
    workExperience: z.array(workExperienceSchema).optional(),
    education: z.array(educationSchema).optional(),
  });

export const profileSchema = createProfileSchema();
export type Profile = z.infer<typeof profileSchema>;

export async function getProfile() {
  const { getEntry, getCollection } = await import("astro:content");
  const profile = await getEntry("profile", "jeantivan");
  if (profile) return profile;
  const profiles = await getCollection("profile");
  if (profiles.length > 0) return profiles[0];
  throw new Error("No profile found in collection 'profile'");
}
