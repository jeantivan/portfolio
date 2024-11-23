import type { AvailableLanguageTag } from "@/paraglide/runtime.js";

type AbsolutePathname = `/${string}`;

const pathnames: Record<
  AbsolutePathname,
  Record<AvailableLanguageTag, AbsolutePathname>
> = {
  "/": {
    en: "/en",
    es: "/es",
  },
  "/contact": {
    en: "/en/contact",
    es: "/es/contacto",
  },
  "/skills": {
    en: "/en/skills",
    es: "/es/habilidades",
  },
  "/projects": {
    en: "/en/projects",
    es: "/es/proyectos",
  },
  "/project": {
    en: "/en/project",
    es: "/es/proyecto",
  },
  "/contacto": {
    en: "/en/contact",
    es: "/es/contacto",
  },
  "/habilidades": {
    en: "/en/skills",
    es: "/es/habilidades",
  },
  "/proyectos": {
    en: "/en/projects",
    es: "/es/proyectos",
  },
  "/proyecto": {
    en: "/en/project",
    es: "/es/proyecto",
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
