import { defineType, defineField } from "sanity";

export const skillGroupsSchema = defineType({
  type: "document",
  name: "skillGroups",
  title: "Skill Group",
  fields: [
    defineField({
      type: "string",
      title: "Title",
      name: "title"
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title"
      }
    }),
    defineField({
      type: "portableText",
      name: "content",
      title: "Content"
    }),
    defineField({
      type: "array",
      title: "Technologies",
      name: "techs",
      of: [
        {
          type: "reference",
          to: [{ type: "techSkills" }]
        }
      ]
    }),
    defineField({
      name: "language",
      type: "string",
      readOnly: true
    })
  ]
});
