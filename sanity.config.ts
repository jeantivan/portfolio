import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import {media} from 'sanity-plugin-media'


import { apiVersion, dataset, projectId } from "@/sanity/env";

import schema from "@/sanity/schema";

// Configuración para sanity.io
export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  apiVersion,
  schema,
  plugins: [structureTool(), visionTool(), media()]
});
