import { defineField, defineType } from "sanity";

export const Review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      options: {
        list: [
          { title: "1", value: 1 },
          { title: "2", value: 2 },
          { title: "3", value: 3 },
          { title: "4", value: 4 },
          { title: "5", value: 5 },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "review",
      title: "Review",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "username",
      title: "Username",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(102),
    }),
  ],
});
