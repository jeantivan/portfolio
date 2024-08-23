import { SchemaTypeDefinition } from "sanity";

import { techSkillsSchema } from "./tech-skills-schema";
import { projectsSchema } from "./projects-schema";
import { imageWithCaptionSchema } from "./image-with-caption-schema";
import { pagesSchema } from "./pages-schema";
import { settingsSchema } from "./settings-schema";

const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectsSchema,
    techSkillsSchema,
    imageWithCaptionSchema,
    pagesSchema,
    settingsSchema
  ]
};

export default schema;
