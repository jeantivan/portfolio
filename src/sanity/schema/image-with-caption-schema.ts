import { defineType, defineField } from "sanity";

export const imageWithCaptionSchema = defineType({
  type: "object",
  name: "imageWithCaption",
  fields: [
    defineField({
      type: "image",
      name: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          type: "string",
          name: "alt",
          title: "Alternative text",
          description: "Used for accessibility",
          hidden: ({ parent }) => !parent?.asset,
          validation: (Rule) =>
            Rule.required().min(0).warning("An alt must be given"),
        }),
        defineField({
          name: "caption",
          type: "string",
          title: "Caption",
          description: "If not provided, the alt text will be used as caption.",
          hidden: ({ parent }) => !parent?.asset,
        }),
      ],
    }),
  ],
});
