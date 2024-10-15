import { defineType, defineField } from "sanity";

const mainFields = [
  defineField({
    title: "Project title",
    type: "string",
    name: "title",
    validation: (Rule) => [
      Rule.required().warning("Project must have a title"),
      Rule.min(5).warning("The title must contain at least 5 characters")
    ],
    group: "main"
  }),
  defineField({
    type: "slug",
    name: "slug",
    title: "Slug",
    options: {
      source: "title",
      maxLength: 200
    },
    validation: (Rule) => [
      Rule.required().warning("Please create or generate a slug.")
    ],
    group: "main"
  }),
  defineField({
    type: "boolean",
    name: "isFeatured",
    title: "Featured project",
    initialValue: false,
    group: "main"
  }),
  defineField({
    name: "githubRepo",
    type: "url",
    title: "Github repository",
    group: "main"
  }),
  defineField({
    name: "website",
    type: "url",
    title: "Website",
    group: "main"
  })
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
      Rule.max(150).warning("Max 150 characters.")
    ],
    group: ["main", "content"]
  }),
  defineField({
    name: "content",
    title: "Content",
    type: "array",
    of: [{ type: "block" }],
    //validation: (Rule) => [Rule.]
    group: "content"
  }),
  defineField({
    name: "builtWith",
    type: "array",
    title: "Built with",
    description: "Select the libs you used to create the project",
    of: [
      {
        type: "reference",
        to: [{ type: "techSkills" }]
      }
    ],
    group: "content"
  })
];

const mediaFields = [
  defineField({
    type: "image",
    name: "mainImage",
    title: "Main image",
    group: ["main", "media"],
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
];

const seoFields = [
  {
    title: "SEO",
    name: "seo",
    group: "seo",
    type: "seoMetaFields"
  }
];

export const projectsSchema = defineType({
  type: "document",
  name: "project",
  title: "Projects",
  groups: [
    { title: "Main", name: "main" },
    { title: "Content", name: "content" },
    { title: "Media", name: "media" },
    { title: "SEO", name: "seo" }
  ],
  fields: [
    ...mainFields,
    ...contentFields,
    ...mediaFields,
    ...seoFields,
    defineField({
      name: "language",
      type: "string",
      readOnly: true
    })
  ]
});
