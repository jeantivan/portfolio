import { defineField, defineType } from "sanity";

import { supportedLanguages } from "@/i18n/config";

export const localizedString = defineType({
  name: "localizedString",
  title: "Localized String",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true, collapsed: false }
    }
  ],
  fields: supportedLanguages.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: "string",
      fieldset: lang.isDefault ? undefined : "translations"
    })
  )
});
