import { sanityFetch } from "@/sanity/lib/live";
import { CHARITIES_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { LocalCharitiesPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Honorary Charity Partners",
  description:
    "Alongside our core global partners, Buddies for Paws also supports honorary animal charities and community rescue groups through one-off fundraisers and special campaigns. We’re always open to supporting smaller charities where possible, especially those aligned with our mission to protect and care for animals. Explore some of the local and regional charities we’ve supported below.",
};

export default async function LocalCharitiesPage() {
  const { data } = await sanityFetch({ query: CHARITIES_QUERY });
  const localCharities = data.filter(
    (charity) => charity.partnerType === "honorary",
  );

  return <LocalCharitiesPageContent charities={localCharities} />;
}
