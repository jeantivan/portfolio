import { SchemaTypeDefinition } from "sanity";

import { techSkillsSchema } from "./tech-skills-schema";
import { projectsSchema } from "./projects-schema";
import { imageWithCaptionSchema } from "./image-with-caption-schema";

const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectsSchema, techSkillsSchema, imageWithCaptionSchema],
};

export default schema;
