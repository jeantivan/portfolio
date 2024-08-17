// Tutorial de https://locize.com/blog/next-app-dir-i18n/

export const fallbackLng = "es";

export const languages = [fallbackLng];

export const defaultNS = "translation";

export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    ns
  };
}
