import { defineField, defineType } from "sanity";

export const Blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Write the title of the post",
      validation: (Rule) => Rule.required().min(50).max(200),
    }),
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
      description: "Write the content of your post",
    },
    {
      title: "Summary",
      name: "summary",
      type: "text",
      validation: (Rule) => Rule.required().min(100).max(1000),
      description: "Write the Summary of your post",
    },
    defineField({
      name: "image",
      type: "image",
      title: "Select post image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: "By",
      name: "by",
      type: "reference",
      to: [{ type: "User" }],
      validation: (Rule) => Rule.required(),
      description: "Select the author of the post",
    }),
    defineField({
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
      description: "Select the category of the post",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
  ],
});
