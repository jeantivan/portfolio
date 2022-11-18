import { COLORS } from "@src/constants";

import { createTheme } from "@config/stitches.config";

export type TColors = typeof COLORS[number];
export type TColorMode = "dark" | "light";

// Answer of https://stackoverflow.com/questions/67941433/convert-array-of-strings-to-object-keys-in-typescript
type ObjectFromList<T extends ReadonlyArray<string>, V = string> = {
  [K in T extends ReadonlyArray<infer U> ? U : never]: V;
};

export type TPrimaryColorThemes = ObjectFromList<
  typeof COLORS,
  ReturnType<typeof createTheme>
>;

export type TColorModeThemes = {
  [K in TColorMode]: ReturnType<typeof createTheme>;
};

export type TSkill = {
  name: string;
  slug: string;
  image: string;
};

export type TProject = {
  id?: string;
  slug: string;
  name: string;
  githubLink: string;
  liveLink: string;
  skills: TSkill[];
  type: "featured" | "small" | "code-challenge";
  finishDate: Date | string;
  description: string;
  coverImage?: string;
  code?: string;
};
