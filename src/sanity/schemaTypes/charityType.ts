import { defineType } from "sanity";

export const charityType = defineType({
  name: "charity",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Charity Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "donationUrl",
      title: "Donation URL",
      type: "url",
      validation: (Rule) => Rule.required().uri({ scheme: ["http", "https"] }),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "local",
      title: "Is local partner?",
      type: "boolean",
      initialValue: false,
    },
  ],
});
