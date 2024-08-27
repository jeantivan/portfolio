import { defineType, defineField } from "sanity";

export const techSkillsSchema = defineType({
  name: "techSkills",
  type: "document",
  title: "Tech skills",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      }
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Image",
      description:
        "Represent your skill with an image. It can be the lib's logo",
      fields: [
        defineField({
          type: "string",
          name: "alt",
          title: "Alternative text",
          description: "Used for accessibility",
          hidden: ({ parent }) => !parent?.asset,
          validation: (Rule) =>
            Rule.required().min(0).warning("An alt must be given")
        })
      ]
    })
  ]
});
