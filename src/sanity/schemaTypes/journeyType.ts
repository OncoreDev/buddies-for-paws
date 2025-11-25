import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import { defineType } from "sanity";

export const journeyType = defineType({
  name: "journey",
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
      name: "image",
      title: "Image",
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      rows: 10,
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
    {
      name: "banner",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "charity",
      title: "Charity",
      type: "object",
      fields: [
        {
          name: "name",
          type: "string",
          title: "Charity Name",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "url",
          type: "url",
          title: "Charity URL",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "speciesOrBreed",
      title: "Species / Breed",
      type: "object",
      fields: [
        {
          name: "type",
          title: "Type",
          type: "string",
          options: {
            list: [
              { title: "Species", value: "species" },
              { title: "Breed", value: "breed" },
            ],
            layout: "dropdown",
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "value",
          title: "Value",
          type: "string",
          description: "Enter the species or breed name",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      type: "string",
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
      name: "latestUpdates",
      title: "Latest Updates",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "journeyUpdate" }],
          options: {
            editModal: "popover",
          },
        },
      ],
      description: "Select journey updates related to this journey",
    },
    {
      name: "howSupportHelps",
      title: "How Support Helps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: {
                accept: "image/png, image/jpeg, image/svg+xml",
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "text",
              title: "Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              media: "icon",
              title: "text",
            },
            prepare({ title, media }) {
              return {
                title,
                media,
              };
            },
          },
        },
      ],
    },
  ],
});
