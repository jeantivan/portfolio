import { defineField, defineType } from "sanity";

export const settingsSchema = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fieldsets: [
    {
      title: "Social",
      name: "social",
      description:
        "Here you should store information about the author's social media.",
      options: { collapsible: true }
    },
    {
      title: "Author",
      name: "author",
      description: "Basic information about the author",
      options: { collapsible: true }
    }
  ],
  fields: [
    defineField({
      title: "Title",
      description:
        "Used for the main title in home page. If your title is composed of several words and you want line breaks between them, replace the white space with a period, for example: Author Name -> Author.Name",
      name: "title",
      type: "string"
    }),
    defineField({
      type: "string",
      name: "authorName",
      title: "Name",
      validation: (rule) => [
        rule.required().warning("This field cannot be empty."),
        rule
          .min(5)
          .error("The author's name must contain at least 5 characters")
      ],
      fieldset: "author"
    }),
    defineField({
      type: "string",
      name: "authorEmail",
      title: "Email",
      validation: (rule) => [
        rule.required().warning("Author's email is required."),
        rule.email().error("This should be a valid email address.")
      ],
      fieldset: "author"
    }),
    defineField({
      type: "string",
      name: "authorTitle",
      title: "Title",
      validation: (rule) => [
        rule.required().warning("This field cannot be empty."),
        rule
          .min(5)
          .error("The author's name must contain at least 5 characters")
      ],
      description:
        "The title that should be displayed in the home page example: Front-end Developer, UI/UX Designer.",
      fieldset: "author"
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
      },
      validation: (rule) => [
        rule.required().assetRequired().warning("You need to provide a CV")
      ]
    })
  ]
});
