import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero Carousel",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "category", newItemPosition: "before" }),
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "array",
      title: "Description",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "donateLink",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "main",
      type: "boolean",
      initialValue: false,
    },
  ],
});
