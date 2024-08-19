import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "es" as const;
export const locales = ["es", "en"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/about-me": {
    es: "/sobre-mi",
    en: "/about-me"
  },
  "/projects": {
    es: "/proyectos",
    en: "/projects"
  },
  "/skills": {
    es: "/habilidades",
    en: "/skills"
  },
  "/contact": {
    es: "/contacto",
    en: "/contact"
  }
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
