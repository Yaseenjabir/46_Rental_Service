import { defineField, defineType } from "sanity";

export const Services = defineType({
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "belongsTo",
      title: "Belongs to",
      type: "string",
      readOnly: true,
      description:
        "This field specify that this data belongs to which categor/type in /services page on your website",
      options: {
        list: [
          {
            title: "Hourly, Daily, Weekly, Monthly Rentals",
            value: "Hourly, Daily, Weekly, Monthly Rentals",
          },
          {
            title: "Dubai Airport & Hotel Rentals",
            value: "Dubai Airport & Hotel Rentals",
          },
          {
            title: "Dubai and Abu Dhabi City Tours",
            value: "Dubai and Abu Dhabi City Tours",
          },
          {
            title: "Point To Point Bus Rentals",
            value: "Point To Point Bus Rentals",
          },
          {
            title: "Corporate Transportation Rentals",
            value: "Corporate Transportation Rentals",
          },
          {
            title: "Weddings & Events Rentals",
            value: "Weddings & Events Rentals",
          },
        ],
      },
    }),
  ],
});
