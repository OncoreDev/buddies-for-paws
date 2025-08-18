import { type SchemaTypeDefinition } from "sanity";
import { charityType } from "./charityType";
import { eventType } from "./eventType";
import { heroType } from "./heroType";
import { journeyType } from "./journeyType";
import { totalRaisedType } from "./totalRaised";
import { newsType } from "./newsType";
import { newsCategoryType } from "./newsCategoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    eventType,
    journeyType,
    charityType,
    totalRaisedType,
    heroType,
    newsType,
    newsCategoryType,
  ],
};
