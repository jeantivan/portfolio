import { defineField, defineType } from "sanity";

export const settingsSchema = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fieldsets: [
    {
      title: "Social",
      name: "social",
      options: { collapsible: true }
    }
  ],
  fields: [
    defineField({
      type: "string",
      name: "author",
      title: "Author",
      validation: (rule) => [
        rule.required().warning("This field cannot be empty."),
        rule.min(3).warning("The author must contain at least 5 characters")
      ]
    }),
    defineField({
      type: "url",
      name: "github",
      title: "Github profile",
      fieldset: "social"
    }),
    defineField({
      type: "url",
      name: "linkedin",
      title: "LinkedIn Page",
      fieldset: "social"
    }),
    defineField({
      type: "file",
      name: "CV",
      title: "Curriculum Vitae",
      options: {
        accept: "application/pdf"
      }
    })
  ]
});
