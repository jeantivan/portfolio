import { group } from "console";
import { defineType, defineField, defineArrayMember } from "sanity";

const mainFields = [
  defineField({
    title: "Project title",
    type: "string",
    name: "title",
    validation: (Rule) => [
      Rule.required().warning("Project must have a title"),
      Rule.min(5).warning("The title must contain at least 5 characters"),
    ],
    group: "main",
  }),
  defineField({
    type: "slug",
    name: "slug",
    title: "Slug",
    options: {
      source: "title",
      maxLength: 200,
    },
    validation: (Rule) => [
      Rule.required().warning("Please create or generate a slug."),
    ],
    group: "main",
  }),
  defineField({
    type: "boolean",
    name: "isFeatured",
    title: "Featured project",
    initialValue: false,
    group: "main",
  }),
  defineField({
    name: "githubRepo",
    type: "url",
    title: "Github repository",
    group: "main",
  }),
  defineField({
    name: "website",
    type: "url",
    title: "Website",
    group: "main",
  }),
];

const contentFields = [
  defineField({
    type: "text",
    name: "description",
    title: "Description",
    rows: 3,
    validation: (Rule) => [
      Rule.required().warning(
        "Please provide a short description for the project"
      ),
      Rule.max(150).warning("Max 150 characters."),
    ],
    group: ["main", "content", "seo"],
  }),
  defineField({
    name: "content",
    title: "Content",
    type: "array",
    of: [{ type: "block" }],
    //validation: (Rule) => [Rule.]
    group: "content",
  }),
  defineField({
    name: "builtWith",
    type: "array",
    title: "Built with",
    description: "Select the libs you used to create the project",
    of: [
      defineArrayMember({
        type: "reference",
        to: [{ type: "techSkills" }],
      }),
    ],
    group: "content",
  }),
];

const mediaFields = [
  defineField({
    type: "imageWithCaption",
    name: "mainImage",
    title: "Main image",
    group: ["main", "media"],
  }),
  defineField({
    type: "array",
    name: "gallery",
    title: "Gallery",
    of: [
      defineArrayMember({
        name: "image",
        type: "image",
        title: "Image",
        options: {
          hotspot: true,
        },
        fields: [
          defineField({
            name: "caption",
            type: "string",
            title: "Caption",
            hidden: ({ parent }) => !parent?.asset,
            validation: (Rule) =>
              Rule.required().warning("An alt must be given"),
          }),
        ],
      }),
    ],
    options: {
      layout: "grid",
    },
    group: "media",
  }),
];

const seoFields = [
  defineField({
    type: "boolean",
    name: "shouldUseTechSkillsAsKeywords",
    title: "Use "
  })
]

export const projectsSchema = defineType({
  type: "document",
  name: "project",
  title: "Projects",
  groups: [
    { title: "Main", name: "main" },
    { title: "Content", name: "content" },
    { title: "Media", name: "media" },
    { title: "SEO", name: "seo" },
  ],
  fields: [...mainFields, ...contentFields, ...mediaFields],
});
