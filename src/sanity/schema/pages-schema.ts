import { defineType, defineField } from "sanity";

const mainFields = [
  defineField({
    type: "string",
    name: "name",
    title: "Name"
  }),
  defineField({
    type: "slug",
    name: "slug",
    title: "Slug",
    options: {
      source: "name"
    }
  })
];

const seoFields = [
  defineField({
    title: "SEO",
    name: "seo",
    type: "seoMetaFields"
  })
];

export const pagesSchema = defineType({
  type: "document",
  name: "pages",
  title: "Pages",
  fields: [...mainFields, ...seoFields]
});
