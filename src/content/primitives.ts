import type { ImageMetadata } from "astro";
import { z } from "astro/zod";

export type LocalizedText = {
  es: string;
  en: string;
};

export const localizedTextSchema = z
  .union([
    z.string().min(1),
    z.object({
      es: z.string().min(1),
      en: z.string().min(1).optional(),
    }),
  ])
  .transform((val): LocalizedText => {
    if (typeof val === "string") {
      return { es: val, en: val };
    }
    return {
      es: val.es,
      en: val.en ?? val.es,
    };
  });

export type ThemedImage<T = ImageMetadata> = {
  dark: T;
  light: T;
};

export const createThemedImageSchema = <T extends z.ZodTypeAny>(imageSchema: T) =>
  z
    .union([
      imageSchema,
      z.object({
        dark: imageSchema,
        light: imageSchema,
      }),
    ])
    .transform((val): ThemedImage<z.output<T>> => {
      if (
        typeof val === "object" &&
        val !== null &&
        "dark" in val &&
        "light" in val
      ) {
        return {
          dark: (val as { dark: z.output<T>; light: z.output<T> }).dark,
          light: (val as { dark: z.output<T>; light: z.output<T> }).light,
        };
      }
      return {
        dark: val as z.output<T>,
        light: val as z.output<T>,
      };
    });

export const themedImageSchema = createThemedImageSchema(z.any());
