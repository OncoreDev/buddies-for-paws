import { sanityFetch } from "@/sanity/lib/live";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import { EventsPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Events",
  description: "Past events related to animal welfare, rescue, and adoption.",
};

export default async function EventsPage() {
  const { data } = await sanityFetch({ query: EVENTS_QUERY });
  return <EventsPageContent events={data} />;
}
