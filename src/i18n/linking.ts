import type { AvailableLanguageTag } from "@/paraglide/runtime.js";

type AbsolutePathname = `/${string}`;

const pathnames: Record<
  AbsolutePathname,
  Record<AvailableLanguageTag, AbsolutePathname>
> = {
  "/": {
    en: "/en",
    es: "/",
  },
  "/contact": {
    en: "/en/contact",
    es: "/contacto",
  },
  "/skills": {
    en: "/en/skills",
    es: "/habilidades",
  },
  "/projects": {
    en: "/en/projects",
    es: "/proyectos",
  },
  "/project": {
    en: "/en/project",
    es: "/proyecto",
  },
  "/contacto": {
    en: "/en/contact",
    es: "/contacto",
  },
  "/habilidades": {
    en: "/en/skills",
    es: "/habilidades",
  },
  "/proyectos": {
    en: "/en/projects",
    es: "/proyectos",
  },
  "/proyecto": {
    en: "/en/project",
    es: "/proyecto",
  },
};

// src/linking.ts
export function localizePathname(
  pathname: AbsolutePathname,
  locale: AvailableLanguageTag,
) {
  if (pathnames[pathname]) {
    return pathnames[pathname][locale];
  }
  return `/${locale}${pathname}`;
}
