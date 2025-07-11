import { sanityFetch } from "@/sanity/lib/live";
import { JOURNEYS_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { JourneysPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Explore our featured journeys and learn how you can embark on a transformative experience. Discover ways to support causes that matter to you.",
};

export default async function JourneyPage() {
  const { data } = await sanityFetch({ query: JOURNEYS_QUERY });
  return <JourneysPageContent journeys={data} />;
}
