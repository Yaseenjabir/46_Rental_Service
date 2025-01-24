import { defineField, defineType } from "sanity";

export const Category = defineType({
  name: "category",
  title: "Blog's Category",
  type: "document",
  description: "Create a new category",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Write the category name you want to create",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
