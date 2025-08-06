import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "sanity";

export const eventType = defineType({
  name: "event",
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
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "externalLinks",
      title: "External Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "url", type: "url", title: "URL" },
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "url",
            },
          },
        },
      ],
    },
    {
      name: "galleryImages",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "featured",
      type: "boolean",
      description: "Feature this event",
      initialValue: false,
    },
  ],
});
