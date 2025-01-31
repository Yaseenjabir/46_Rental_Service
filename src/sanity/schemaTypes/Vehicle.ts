import { locations, vehicleTypes, brands } from "@/app/utils/utilInfo";
import { defineField, defineType } from "sanity";

const years = [
  { title: "2024", value: "2024" },
  { title: "2023", value: "2023" },
  { title: "2022", value: "2022" },
  { title: "2021", value: "2021" },
  { title: "2020", value: "2020" },
  { title: "2019", value: "2019" },
  { title: "2018", value: "2018" },
  { title: "2017", value: "2017" },
  { title: "2016", value: "2016" },
  { title: "2015", value: "2015" },
  { title: "2014", value: "2014" },
  { title: "2013", value: "2013" },
  { title: "2012", value: "2012" },
  { title: "2011", value: "2011" },
  { title: "2010", value: "2010" },
  { title: "2009", value: "2009" },
  { title: "2008", value: "2008" },
  { title: "2007", value: "2007" },
  { title: "2006", value: "2006" },
  { title: "2005", value: "2005" },
  { title: "2004", value: "2004" },
  { title: "2003", value: "2003" },
  { title: "2002", value: "2002" },
  { title: "2001", value: "2001" },
  { title: "2000", value: "2000" },
];

export const Vehicle = defineType({
  name: "vehicle",
  type: "document",
  title: "Vehicle",
  fields: [
    defineField({
      name: "name",
      title: "Vehicle Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "capacity",
      title: "Enter the capacity of the vehicle",
      type: "string",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "manufactured",
      title: "Manufactured Date",
      type: "string",
      options: {
        list: years,
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "transmission",
      title: "Transmission",
      type: "string",
      options: {
        list: [
          { title: "Auto", value: "auto" },
          { title: "Manual", value: "manual" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "interior",
      title: "Interior",
      type: "string",
      options: {
        list: [
          { title: "Yutong", value: "yutong" },
          { title: "Express", value: "express" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "wifi",
      title: "Wifi",
      type: "string",
      options: {
        list: [
          { title: "On Board", value: "onboard" },
          { title: "Not available", value: "notAvailable" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "freezer",
      title: "Freezer",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "array",
      title: "Description",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images of vehicle",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
      description: "Upload multiple images of the vehicle you want to display",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "perHourRental",
      type: "number",
      title: "Per Hour Rental",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fullDayRental",
      type: "number",
      title: "Full Day Rental",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "airportTransfer",
      type: "number",
      title: "Airport Transfer",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "weeklyRental",
      type: "number",
      title: "Weekly Rental",
      validation: (Rule) => Rule.required(),
    }),
    // Vehicle Type
    defineField({
      name: "vehicleType",
      type: "string",
      title: "Vehicle Type",
      options: {
        list: vehicleTypes,
      },
      validation: (Rule) => Rule.required(),
    }),
    // Brand
    defineField({
      name: "brand",
      type: "string",
      title: "Brand",
      options: {
        list: brands,
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    // Location
    defineField({
      name: "location",
      title: "Car Location",
      type: "string",
      options: {
        list: locations,
      },
      description:
        "Please select the location where your car services are available",
      validation: (Rule) => Rule.required(),
    }),
    // Slug
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      description: "Please click to generate slug",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
