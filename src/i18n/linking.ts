import type { AvailableLanguageTag } from "@/paraglide/runtime.js";

type AbsolutePathname = `/${string}`;

const pathnames: Record<
  AbsolutePathname,
  Record<AvailableLanguageTag, AbsolutePathname>
> = {
  "/": {
    en: "/en",
    es: "/es"
  },
  "/contact": {
    en: "/en/contact",
    es: "/es/contacto"
  },
  "/skills": {
    en: "/en/skills",
    es: "/es/habilidades"
  },
  "/projects": {
    en: "/en/projects",
    es: "/es/proyectos"
  }
};

// src/linking.ts
export function localizePathname(
  pathname: AbsolutePathname,
  locale: AvailableLanguageTag
) {
  if (pathnames[pathname]) {
    return pathnames[pathname][locale];
  }
  return pathname;
}
