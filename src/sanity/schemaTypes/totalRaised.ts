import { defineType } from "sanity";

export const totalRaisedType = defineType({
  name: "totalRaised",
  type: "document",
  fields: [
    {
      name: "amount",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
  ],
});
