import CharityMarquee from "@/components/charity-marquee";
import EventsCarouel from "@/components/events-carousel";
import Hero from "@/components/hero";
import StoreBanner from "@/components/store-banner";

export default function Home() {
  return (
    <div>
      <Hero />
      <CharityMarquee />
      <EventsCarouel />
      <StoreBanner />
    </div>
  );
}
