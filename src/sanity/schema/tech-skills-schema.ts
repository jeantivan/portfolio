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
    }),
    defineField({
      type: "string",
      name: "group",
      title: "Group",
      options: {
        list: [
          { title: "The main tech stack", value: "main-stack" },
          { title: "Animations", value: "animations" },
          { title: "Version control", value: "version-control" },
          { title: "The basics", value: "basics" },
          { title: "System design", value: "system-design" },
          { title: "Backend", value: "backend" },
          { title: "Others", value: "others" }
        ]
      }
    }),
    defineField({
      type: "number",
      name: "order",
      title: "Orden en el grupo",
      initialValue: 0,
      validation: (rule) => rule.min(0).integer()
    })
  ]
});
