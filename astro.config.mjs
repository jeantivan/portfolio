// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({

  integrations: [sanity({
    projectId: "ezr5hgw5",
    dataset: "production",
    useCdn: false,
    studioBasePath: "/admin",
  }), react(), tailwind()]
});