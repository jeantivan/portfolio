import { defineField, defineType } from "sanity";

import { supportedLanguages } from "@/i18n/config";

export const localizedSlug = defineType({
  name: "localizedSlug",
  title: "Localized Slug",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true, collapsed: false }
    }
  ],
  fields: supportedLanguages.map((lang, index) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: "slug",
      fieldset: lang.isDefault ? undefined : "translations",
      options: {
        source: `title[${index}].value`
      }
    })
  )
});
