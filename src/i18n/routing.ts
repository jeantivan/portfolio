import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { locales, pathnames, localePrefix } from "./config";

export const routing = defineRouting({
  locales: locales,
  defaultLocale: "es",
  pathnames,
  localePrefix
});
export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
