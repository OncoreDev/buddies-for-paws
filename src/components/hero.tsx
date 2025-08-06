"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO = [
  {
    title: "Buddies for Paws",
    description:
      "We partner with animal and wildlife charities to help rescue, protect and care for animals around the world.",
    subDescription:
      "Part of the BONK ecosystem, we use the power of community and Web3 to drive impactful fundraising.",
    image: "/buddies-for-paws.png",
    donateLink: "https://bonkforpaws.com/",
    main: true,
  },
  {
    title: "This is Bani",
    description:
      "Buddies for Paws is the proud guardian of Bani, a baby elephant rescued by Wildlife SOS after a devastating train accident. ",
    subDescription:
      "With support from our community, we help fund her ongoing care and recovery.",
    image: "/bani.png",
    donateLink: "https://bonkforpaws.com/donate/wildlife-sos",
  },
  {
    title: "This is Dew",
    description:
      "Meet Dew, a Moon Bear rescued from a Bear Bile Farm by our charity partner Animals Asia. ",
    subDescription:
      "Buddies for Paws is Dew’s proud guardian, and your donations help provide daily care, food and safety to this sweet bear.",
    image: "/dew.png",
    donateLink: "https://bonkforpaws.com/donate/animals-asia-foundation",
  },
  {
    title: "This is Big Papa",
    description:
      "This is Big Papa, an orangutan now thriving at the Samboja Lestari sanctuary in Borneo. ",
    subDescription:
      "Through our partnership with Orangutan Outreach, Buddies for Paws helps provide for his care alongside a peaceful place to enjoy the rest of his life.",
    image: "/monkey.png",
    donateLink: "https://bonkforpaws.com/donate/orangutan-outreach",
  },
  {
    title: "Save the Chimps",
    description:
      "Buddies for Paws is proud to support Save the Chimps, one of the world’s largest chimpanzee sanctuaries.",
    subDescription:
      "Through our fundraising efforts, we help provide lifelong care, enrichment, and freedom to chimps rescued from labs and the entertainment industry.",
    image: "/save-the-chimps.png",
    donateLink: "https://bonkforpaws.com/donate/orangutan-outreach",
  },
  {
    title: "Scottish SPCA",
    description:
      "We’re fundraising in support of the Scottish SPCA, Scotland’s only all-animal rescue charity.",
    subDescription:
      "From dogs and donkeys to birds and exotic pets, their team works tirelessly to protect animals in need across Scotland.",
    image: "/scottish-spca.png",
    donateLink: "https://bonkforpaws.com/donate/scottish-spca",
  },
  {
    title: "Sea Turtle Conservancy",
    description:
      "We’re supporting Sea Turtle Conservancy in their mission to protect endangered sea turtles and their habitats across the globe.",
    subDescription:
      "Our fundraising helps fund rescue efforts, hatchling monitoring, and critical education initiatives.",
    image: "/sea-turtle-conservancy.png",
    donateLink: "https://bonkforpaws.com/donate/sea-turtle-conservancy",
  },
  {
    title: "Dogs for Better Lives",
    description:
      "Buddies for Paws proudly partners with Dogs for Better Lives to help train rescue dogs as service animals for children, adults, and veterans with disabilities. ",
    subDescription: "Our fundraising supports these life-changing matches.",
    image: "/dogs-for-better-lives.png",
    donateLink: "https://bonkforpaws.com/donate/dogs-for-better-lives",
  },
  {
    title: "Wildlife Conservation Network",
    description:
      "Buddies for Paws is a proud fundraising partner of Wildlife Conservation Network, supporting grassroots wildlife protection projects around the world.",
    subDescription:
      "From pangolins to painted dogs, our contributions help protect at-risk species and empower local communities.",
    image: "/wildlife-conservation-network.png",
    donateLink: "https://bonkforpaws.com/donate/wildlife-conservation-network",
  },
  {
    title: "Dolphin Project",
    description:
      "This is the Dolphin Project - the world’s leading dolphin welfare and protection organization.",
    subDescription:
      "Founded by Ric O’Barry, their mission is to end dolphin captivity and promote ocean freedom. Buddies for Paws is honoured to support their incredible work.",
    image: "/dolphin-project.png",
    donateLink: "https://bonkforpaws.com/donate/dolphin-project",
  },
];

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="bg-blue">
      <Carousel
        setApi={setApi}
        opts={{ align: "center", duration: 0, watchDrag: false }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.2 }}
          className="max-w-9xl relative mx-auto flex w-full flex-col gap-2 overflow-hidden p-0 sm:p-6"
        >
          <div className="absolute top-6 left-4 z-10 flex items-center gap-3 sm:top-14 sm:left-10">
            <CarouselPrevious
              size={"icon"}
              variant={"orange"}
              className="relative inset-0 size-10 -translate-0"
            />
          </div>
          <div className="absolute top-6 right-4 z-10 flex items-center gap-3 sm:top-14 sm:right-10">
            <CarouselNext
              size={"icon"}
              variant={"orange"}
              className="relative inset-0 size-10 -translate-0"
            />
          </div>

          <div className="flex w-full gap-1 px-2 sm:px-0">
            {HERO.map((hero, i) => (
              <button
                key={hero.title + "indicator"}
                className={cn(
                  "h-1 grow cursor-pointer rounded-full transition-all sm:h-2",
                  current === i + 1 ? "bg-orange" : "bg-white/20",
                )}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>

          <CarouselContent className="-ml-6">
            {HERO.map((hero, i) => (
              <CarouselItem key={hero.title ?? i} className="flex pl-6">
                <div
                  key={hero.title}
                  className="relative z-0 flex w-full flex-col overflow-hidden sm:rounded-lg"
                >
                  <img
                    src={hero.image}
                    alt={`A cute illustration of ${hero.title}`}
                    className="absolute inset-0 -z-10 hidden h-full w-full object-cover lg:block"
                  />

                  <div className="relative lg:hidden">
                    <img
                      src={hero.image}
                      alt={`A cute illustration of ${hero.title}`}
                      className="aspect-video w-full object-cover"
                    />

                    <Button className="absolute right-4 bottom-4 mt-auto ml-auto h-24 w-24 rounded-full pt-2 whitespace-pre-wrap">
                      <Link href={hero.donateLink} target="_blank">
                        DONATE NOW
                      </Link>
                    </Button>
                  </div>

                  <div
                    className={cn(
                      "flex w-full grow lg:p-8",
                      i % 2 === 1 ? "text-orange" : "text-blue",
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-full w-full flex-col gap-6 p-6 pt-8 sm:gap-8 sm:p-8 sm:pt-12 lg:min-h-[600px] lg:w-[500px] lg:rounded-md",
                        hero.main
                          ? "bg-orange text-orange-foreground"
                          : "bg-white sm:bg-white/90",
                      )}
                    >
                      <h2 className="font-cooper text-center text-4xl sm:text-6xl">
                        {hero.title}
                      </h2>

                      <p className="mx-auto w-full max-w-80 text-center">
                        <span className="font-bold">{hero.description}</span>
                        <br />
                        <br />
                        {hero.subDescription}
                      </p>

                      {hero.main ? (
                        <>
                          <p className="font-cooper text-center text-lg sm:text-2xl">
                            All donations are 100% matched by BONK, doubling the
                            impact.
                          </p>
                          <Button asChild className="mt-auto" variant="yellow">
                            <Link href={"/about/impact"}>Find out more</Link>
                          </Button>
                        </>
                      ) : (
                        <div
                          className={cn(
                            "mt-auto rounded-md p-4 text-center sm:p-6",
                            i % 2 === 1
                              ? "bg-orange text-orange-foreground"
                              : "text-blue-foreground bg-blue",
                          )}
                        >
                          All donations are 100% matched by BONK, doubling the
                          impact.
                        </div>
                      )}
                    </div>

                    <Button className="mt-auto ml-auto hidden h-32 w-32 rounded-full pt-2 text-xl whitespace-pre-wrap lg:flex">
                      <Link href={hero.donateLink} target="_blank">
                        DONATE NOW
                      </Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>
      </Carousel>
    </div>
  );
}
