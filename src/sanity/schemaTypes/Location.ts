import { locations } from "@/app/utils/utilInfo";
import { defineField, defineType } from "sanity";

export const Location = defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({
      name: "locationName",
      title: "Location Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Location Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Location Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "latitude",
      title: "Latitude",
      type: "string",
      validation: (Rule) =>
        Rule.custom((latitude: string, context) => {
          const { document } = context;
          const longitude = document?.longitude;

          if (latitude && !longitude) {
            return "Longitude is required if Latitude is provided";
          }

          if (!latitude && longitude) {
            return "Latitude is required if Longitude is provided";
          }

          return true;
        }),
    }),

    defineField({
      name: "longitude",
      title: "Longitude",
      type: "string",
      validation: (Rule) =>
        Rule.custom((longitude: string, context) => {
          const { document } = context;
          const latitude = document?.latitude;

          if (longitude && !latitude) {
            return "Latitude is required if Longitude is provided";
          }

          if (!longitude && latitude) {
            return "Longitude is required if Latitude is provided";
          }
          return true;
        }),
    }),

    defineField({
      name: "locationType",
      title: "Location",
      type: "string",
      options: {
        list: locations,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "locationName",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
