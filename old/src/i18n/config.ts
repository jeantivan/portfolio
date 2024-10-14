import { Pathnames, LocalePrefix } from "next-intl/routing";

type Language = {
  id: string;
  title: string;
  isDefault?: boolean;
};
export const supportedLanguages: Language[] = [
  {
    id: "es",
    title: "Spanish",
    isDefault: true
  },
  {
    id: "en",
    title: "English"
  }
];

export const defaultLanguage = supportedLanguages.find(
  (lang) => lang.isDefault
);
export const locales = supportedLanguages.map((lang) => lang.id);

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
  },
  "/project/[slug]": {
    es: "/proyecto/[slug]",
    en: "/project/[slug]"
  },
  "/skills/[group]": {
    es: "/habilidades/[group]",
    en: "/skills/[group]"
  }
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
