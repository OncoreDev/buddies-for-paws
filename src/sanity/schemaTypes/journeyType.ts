import { defineType } from "sanity";

export const journeyType = defineType({
  name: "journey",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      rows: 10,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "donationUrl",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "watchUrl",
      title: "Watch Video URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "learnMoreUrl",
      title: "Learn More URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
});
