import { orderRankField } from "@sanity/orderable-document-list";
import { defineType } from "sanity";

export const newsCategoryType = defineType({
  name: "newsCategory",
  type: "document",
  fields: [
    orderRankField({ type: "category", newItemPosition: "before" }),
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
});
