import type { Image as SanityImage } from "sanity";
import { PortableTextBlock } from "@portabletext/types";
import { COLORS } from "./constants";

export type TColors = (typeof COLORS)[number];
export type TColorMode = "dark" | "light";

export type TSizes = "large" | "medium" | "small";

// Answer of https://stackoverflow.com/questions/67941433/convert-array-of-strings-to-object-keys-in-typescript
type ObjectFromList<T extends ReadonlyArray<string>, V = string> = {
  [K in T extends ReadonlyArray<infer U> ? U : never]: V;
};

type Slug = {
  current: string;
};

export type LocalizedSlug = Record<"es" | "en", Slug>;
export type LocalizedString = Record<"es" | "en", string>;

export type TSkill = {
  _id: string;
  name: string;
  slug: Slug;
  image: SanityImage;
};

export type TSkillGroup = {
  _id: string;
  title: LocalizedString;
  slug: LocalizedSlug;
  content: string;
  techs: Array<TSkill>;
  language: string;
};

export type TProjectType = {
  slug: "featured" | "small" | "code-challenge";
  type: "Featured" | "Small" | "Code Challenge";
};

export type TProject = {
  _id: string;
  title: string;
  slug: Slug;
  githubRepo: string;
  website: string;
  builtWith: TSkill[];
  mainImage: SanityImage;
  isFeatured: boolean;
  finishDate: Date | string;
  description: string;
  content: PortableTextBlock[];
};

export type TContactFormValues = {
  fullName: string;
  email: string;
  message: string;
};

export type TSiteSettings = {
  authorName: string;
  authorEmail: string;
  github: string;
  linkedin: string;
  CV: {
    asset: string;
  };
};
