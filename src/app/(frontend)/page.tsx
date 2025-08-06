import { CharityMarquee } from "@/components/charity-marquee";
import { Counter } from "@/components/counter";
import { EventsCarouel } from "@/components/events-carousel";
import { Hero } from "@/components/hero";
import { StoreBanner } from "@/components/store-banner";
import { sanityFetch } from "@/sanity/lib/live";
import {
  CHARITIES_QUERY,
  EVENTS_QUERY,
  HERO_CAROUSEL_QUERY,
  TOTAL_RAISED_QUERY,
} from "@/sanity/lib/queries";

export default async function Home() {
  const [events, charities, totalRaised, heroCarousel] = await Promise.all([
    sanityFetch({ query: EVENTS_QUERY }),
    sanityFetch({ query: CHARITIES_QUERY }),
    sanityFetch({ query: TOTAL_RAISED_QUERY }),
    sanityFetch({ query: HERO_CAROUSEL_QUERY }),
  ]);

  return (
    <div>
      <Hero items={heroCarousel.data} />
      <Counter totalRaised={totalRaised.data} />
      <CharityMarquee charities={charities.data} />
      <EventsCarouel events={events.data} />
      <StoreBanner />
    </div>
  );
}
