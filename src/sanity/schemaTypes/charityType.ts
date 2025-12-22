import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "sanity";

export const charityType = defineType({
  name: "charity",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "category", newItemPosition: "before" }),
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
      name: "partnerType",
      title: "Partner type",
      type: "string",
      initialValue: "global",
      options: {
        list: [
          { title: "Global", value: "global" },
          { title: "Honorary", value: "honorary" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
  ],
});
