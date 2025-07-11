import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./eventType";
import { journeyType } from "./journeyType";
import { charityType } from "./charityType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, journeyType, charityType],
};
