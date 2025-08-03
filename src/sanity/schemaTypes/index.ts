import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./eventType";
import { journeyType } from "./journeyType";
import { charityType } from "./charityType";
import { totalRaisedType } from "./totalRaised";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, journeyType, charityType, totalRaisedType],
};
