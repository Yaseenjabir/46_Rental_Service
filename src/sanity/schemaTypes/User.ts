import { defineField, defineType } from "sanity";

export const User = defineType({
  type: "document",
  name: "User",
  title: "User",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
      description: "Write the name of the user",
    }),
    defineField({
      name: "about",
      title: "About User",
      type: "string",
      description: "Write info about user",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "User image",
      type: "image",
      description: "Upload user image",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
