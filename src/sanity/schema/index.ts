import type { SchemaTypeDefinition } from "sanity";

import { techSkillsSchema } from "./documents/tech-skills";
import { projectsSchema } from "./documents/projects";
import { pagesSchema } from "./documents/pages";
import { settingsSchema } from "./documents/settings";
import { skillGroupsSchema } from "./documents/skill-groups";

import { localizedSlug } from "./objects/localized-slug";
import { localizedString } from "./objects/localized-string";
import { imageWithCaption } from "./objects/image-with-caption";
import { portableText } from "./objects/portable-text";

const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    projectsSchema,
    techSkillsSchema,
    pagesSchema,
    settingsSchema,
    skillGroupsSchema,

    // Objects
    imageWithCaption,
    localizedSlug,
    localizedString,
    portableText
  ]
};

export default schema;
