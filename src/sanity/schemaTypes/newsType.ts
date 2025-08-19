import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "sanity";

export const newsType = defineType({
  name: "news",
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
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "newsCategory" }],
          options: {
            editModal: "popover",
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      description: "Image displayed on the news card",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "credits",
              type: "string",
              title: "Credits",
              description: "Photo credit / source",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
  ],
});
