// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import paraglide from "@inlang/paraglide-astro";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [
    react(),
    tailwind(),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
    mdx(),
  ],
});
