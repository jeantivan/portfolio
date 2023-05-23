import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "@/sanity/env";

import schema from "@/sanity/schema";

// Configuración para sanity.io
export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  apiVersion,
  schema,
  plugins: [deskTool(), visionTool()],
});
