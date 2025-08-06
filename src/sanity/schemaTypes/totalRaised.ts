import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "sanity";

export const totalRaisedType = defineType({
  name: "totalRaised",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "category", newItemPosition: "before" }),
    {
      name: "title",
      type: "string",
      initialValue: "Total Raised",
      readOnly: true,
    },
    {
      name: "amount",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
  ],
});
