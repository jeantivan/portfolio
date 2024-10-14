import { defineType, defineField } from "sanity";

export const skillGroupsSchema = defineType({
  type: "document",
  name: "skillGroups",
  title: "Skill Group",
  fields: [
    defineField({
      type: "internationalizedArrayString",
      title: "Title",
      name: "title"
    }),
    defineField({
      type: "localizedSlug",
      name: "slug",
      title: "Slug"
    }),
    defineField({
      type: "internationalizedArrayPortableText",
      title: "Content",
      name: "content"
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
    })
  ],
  preview: {
    select: {
      slug: "slug"
    },
    prepare({ slug }) {
      const title = slug?.es.current;
      const subtitle = slug?.en.current;
      return {
        title: title ?? "No title yet, please add one.",
        subtitle: subtitle ?? "No translation yet."
      };
    }
  }
});
