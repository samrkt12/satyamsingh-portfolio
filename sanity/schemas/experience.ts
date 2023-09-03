import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    }),
    defineField({
      name: "companyImage",
      title: "CompanyImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "text",
    }),
    defineField({
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    }),
    defineField({
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    }),
    defineField({
      name: "isPresentCompany",
      title: "IsPresentCompany",
      type: "boolean",
    }),
    defineField({
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
