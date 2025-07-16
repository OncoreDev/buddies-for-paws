import { CharityMarquee } from "@/components/charity-marquee";
import { EventsCarouel } from "@/components/events-carousel";
import { Hero } from "@/components/hero";
import { StoreBanner } from "@/components/store-banner";
import { sanityFetch } from "@/sanity/lib/live";
import { CHARITIES_QUERY, EVENTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const [events, charities] = await Promise.all([
    sanityFetch({ query: EVENTS_QUERY }),
    sanityFetch({ query: CHARITIES_QUERY }),
  ]);

  return (
    <div>
      <Hero />
      <CharityMarquee charities={charities.data} />
      <EventsCarouel events={events.data} />
      <StoreBanner />
    </div>
  );
}
