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
  JOURNEYS_QUERY,
  TOTAL_RAISED_QUERY,
} from "@/sanity/lib/queries";
import Image from "next/image";
import HeroBanner from "../../../images/hero.png";
import { Button } from "@/components/ui/button";
import { HowToDonate } from "@/components/how-to-donate";
import { Statistics } from "@/components/statistics";
import { MeetTheAnimals } from "@/components/meet-the-animals";
import Link from "next/link";
import HeartStickerOrange from "../../../images/stickers/heart sticker orange.png";
import ExclamationMarkStickerOrange from "../../../images/stickers/Exclamation mark sticker orange.png";
import { WhatsNewCarousel } from "@/components/whats-new-carousel";

export default async function HomePage() {
  const [events, charities, totalRaised, heroCarousel, journeys] =
    await Promise.all([
      sanityFetch({ query: EVENTS_QUERY }),
      sanityFetch({ query: CHARITIES_QUERY }),
      sanityFetch({ query: TOTAL_RAISED_QUERY }),
      sanityFetch({ query: HERO_CAROUSEL_QUERY }),
      sanityFetch({ query: JOURNEYS_QUERY }),
    ]);

  return (
    <div>
      <div className="bg-orange">
        <div className="mx-auto w-full max-w-7xl p-6">
          <div className="relative z-0 flex w-full flex-col gap-6 overflow-hidden rounded-lg bg-black p-6 text-white sm:p-8 lg:p-16">
            <h1 className="font-cooper max-w-md text-4xl sm:text-5xl">
              Supporting animal charities worldwide
            </h1>
            <p className="max-w-64 sm:text-lg">
              Every donation made through Buddies for Paws is{" "}
              <b>matched 100% by BONK.</b>
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-4">
              <Button variant={"yellow"} asChild>
                <Link href={"https://bonkforpaws.com/"} target="_blank">
                  Donate today
                </Link>
              </Button>
              <Button variant={"yellow"} asChild>
                <Link href={"/about"}>About us</Link>
              </Button>
            </div>

            <div className="absolute inset-y-0 left-0 -z-10 h-full w-96 bg-linear-to-r from-black" />

            <Image
              src={HeroBanner}
              className="absolute inset-0 -z-20 h-full w-full object-cover"
              alt="Hero Banner"
            />
            <Image
              src={HeartStickerOrange}
              className="animate-float-windy absolute bottom-[45%] left-[37%] -z-20 w-[6%] -rotate-60"
              alt="Heart Sticker Orange"
            />
            <Image
              src={ExclamationMarkStickerOrange}
              className="animate-float-soft absolute bottom-[10%] left-[64%] -z-20 w-[6%]"
              alt="Exclamation Mark Sticker Orange"
            />
          </div>
        </div>
      </div>
      {/* <Hero items={heroCarousel.data} /> */}
      {/* <Counter totalRaised={totalRaised.data} /> */}
      <CharityMarquee charities={charities.data} />
      <MeetTheAnimals journeys={journeys.data} />
      <Statistics totalRaised={totalRaised.data} />
      <HowToDonate />
      <EventsCarouel events={events.data} />
      {/* <StoreBanner /> */}
      <WhatsNewCarousel />
    </div>
  );
}
