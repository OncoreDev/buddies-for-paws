import { CharityMarquee } from "@/components/charity-marquee";
import { DonationStatistics } from "@/components/donation-statstistics";
import { EventsCarouel } from "@/components/events-carousel";
import { Hero } from "@/components/hero";
import { StoreBanner } from "@/components/store-banner";
import { sanityFetch } from "@/sanity/lib/live";
import { EVENTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const { data } = await sanityFetch({ query: EVENTS_QUERY });

  return (
    <div>
      <Hero />
      {/* <DonationStatistics /> */}
      <CharityMarquee />
      <EventsCarouel events={data} />
      <StoreBanner />
    </div>
  );
}
