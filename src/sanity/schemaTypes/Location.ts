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

          const latPattern = /^-?([0-8]?[0-9]|90)(\.[0-9]{1,4})?$/;
          if (!latPattern.test(latitude)) {
            return "Latitude must be a valid number between -90 and 90 with up to 4 decimal places";
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

          const lonPattern = /^-?((1[0-7][0-9])|(180))(\.[0-9]{1,4})?$/;
          if (!lonPattern.test(longitude)) {
            return "Longitude must be a valid number between -180 and 180 with up to 4 decimal places";
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
