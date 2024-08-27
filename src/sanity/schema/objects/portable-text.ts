import { defineType, defineField } from "sanity";

export const portableText = defineType({
  name: "portableText",
  type: "array",
  of: [{ type: "block" }]
});
