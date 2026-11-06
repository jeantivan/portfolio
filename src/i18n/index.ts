import esMessages from "./messages/es.json";
import enMessages from "./messages/en.json";
import { type PageSeo, type StaticPageKey, staticPagesSeo } from "./seo";

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export type MessageKey = keyof typeof esMessages;

const messages: Record<Locale, Record<string, string>> = {
  es: esMessages,
  en: enMessages,
};

export function t(
  key: MessageKey,
  params?: Record<string, string | number>,
  locale: Locale = DEFAULT_LOCALE,
): string {
  const dictionary = messages[locale] ?? messages[DEFAULT_LOCALE];
  let message = dictionary[key] ?? messages[DEFAULT_LOCALE][key] ?? key;

  if (params) {
    for (const [paramKey, paramValue] of Object.entries(params)) {
      message = message.replaceAll(`{${paramKey}}`, String(paramValue));
    }
  }

  return message;
}

export function normalizePath(pathname: string): string {
  let path = pathname.trim();
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  // Remove trailing slash if not root
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  // Strip locale prefixes (/en, /en/..., /es, /es/...)
  if (path === "/en" || path === "/es") {
    path = "/";
  } else if (path.startsWith("/en/")) {
    path = path.slice(3);
  } else if (path.startsWith("/es/")) {
    path = path.slice(3);
  }

  // Normalize legacy routes to canonical slugs
  if (path === "/proyectos") {
    path = "/projects";
  } else if (path === "/habilidades") {
    path = "/skills";
  } else if (path === "/contacto") {
    path = "/contact";
  } else if (path.startsWith("/proyecto/")) {
    path = `/projects/${path.slice(10)}`;
  } else if (path.startsWith("/project/")) {
    path = `/projects/${path.slice(9)}`;
  }

  return path;
}

export function localizePath(
  pathname: string,
  targetLocale: Locale = DEFAULT_LOCALE,
): string {
  const canonicalPath = normalizePath(pathname);

  if (targetLocale === DEFAULT_LOCALE) {
    return canonicalPath;
  }

  return canonicalPath === "/"
    ? `/${targetLocale}`
    : `/${targetLocale}${canonicalPath}`;
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}

export function getAlternateLinks(
  pathname: string,
  baseUrl: string = "https://jeantivan.dev",
): AlternateLink[] {
  const cleanBaseUrl = baseUrl.replace(/\/+$/, "");

  const esPath = localizePath(pathname, "es");
  const enPath = localizePath(pathname, "en");

  const esHref =
    esPath === "/" ? `${cleanBaseUrl}/` : `${cleanBaseUrl}${esPath}`;
  const enHref =
    enPath === "/" ? `${cleanBaseUrl}/` : `${cleanBaseUrl}${enPath}`;

  return [
    { hreflang: "es", href: esHref },
    { hreflang: "en", href: enHref },
    { hreflang: "x-default", href: esHref },
  ];
}

export function getPageSeo(
  pageKey: StaticPageKey,
  locale: Locale = DEFAULT_LOCALE,
): PageSeo {
  const page = staticPagesSeo[pageKey];
  if (!page) {
    return {
      title: "Jean Tivan",
      description: "Portfolio de Jean Tivan",
      keywords: [],
    };
  }
  return page[locale] ?? page[DEFAULT_LOCALE];
}
