import { defineConfig, isKeyedObject } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { seoMetaFields } from "sanity-plugin-seo";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { documentInternationalization } from "@sanity/document-internationalization";
//import { languageFilter } from "@sanity/language-filter";

import { apiVersion, dataset, projectId } from "@/sanity/env";

import schema from "@/sanity/schema";
import structure from "@/sanity/structure";

import { supportedLanguages, defaultLanguage } from "@/i18n/config";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
const singletonTypes = new Set(["siteSettings"]);

// Configuración para sanity.io
export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  apiVersion,
  schema: {
    types: schema.types,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input
  },
  plugins: [
    structureTool({ structure }),
    visionTool(),
    media(),
    seoMetaFields(),
    documentInternationalization({
      supportedLanguages: supportedLanguages,
      schemaTypes: ["project", "pages"]
    }),
    internationalizedArray({
      languages: supportedLanguages,
      defaultLanguages: [defaultLanguage!.id],
      fieldTypes: ["string", "text", "slug", "portableText"]
    })
    /* languageFilter({
      supportedLanguages: supportedLanguages,
      defaultLanguages: [defaultLanguage!.id],
      documentTypes: [`presenter`, `course`, `labelGroup`],
      filterField: (enclosingType, member, selectedLanguageIds) => {
        // Filter internationalized arrays
        if (
          enclosingType.jsonType === "object" &&
          enclosingType.name.startsWith("internationalizedArray") &&
          "kind" in member
        ) {
          const language = isKeyedObject(member.field.path[1])
            ? member.field.path[1]._key
            : null;

          return language ? selectedLanguageIds.includes(language) : false;
        }

        // Filter internationalized objects
        // `localeString` must be registered as a custom schema type
        if (
          enclosingType.jsonType === "object" &&
          enclosingType.name.startsWith("locale")
        ) {
          return selectedLanguageIds.includes(member.name);
        }

        return true;
      }
    }) */
  ]
});
