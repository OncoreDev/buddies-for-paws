import type { Metadata } from "next";
import { ImpactPageContent } from "./page-content";
import { CHARITIES_QUERY, TOTAL_RAISED_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Learn how Buddies for Paws is making a difference in the world of animal welfare and wildlife conservation.",
};

export default async function ImpactPage() {
  const [totalRaised, charities] = await Promise.all([
    sanityFetch({ query: TOTAL_RAISED_QUERY }),
    sanityFetch({ query: CHARITIES_QUERY }),
  ]);
  return (
    <ImpactPageContent
      totalRaised={totalRaised.data}
      charities={charities.data}
    />
  );
}
