import { sanityFetch } from "@/sanity/lib/live";
import { CHARITIES_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { GlobalCharitiesPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Global Charity Partners",
  description:
    "Explore our featured charities and learn how you can make a difference. Discover ways to support causes that matter to you.",
};

export default async function GlobalCharitiesPage() {
  const { data } = await sanityFetch({ query: CHARITIES_QUERY });
  const charities = data.filter((charity) => !charity.local);

  return <GlobalCharitiesPageContent charities={charities} />;
}
