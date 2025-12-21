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
import { HERO_CAROUSEL_QUERYResult } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BFP_Ledger_Socials_Website_Banner from "../../images/BFP_Ledger Socials_Website_Banner.png";

export function Hero({ items }: { items: HERO_CAROUSEL_QUERYResult }) {
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
        opts={{ align: "center", duration: 0, watchDrag: false, loop: true }}
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
            {items.map((hero, i) => (
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
            <CarouselItem className="flex pl-6">
              <div className="relative z-0 flex w-full flex-col overflow-hidden bg-black sm:rounded-lg">
                <Image
                  src={BFP_Ledger_Socials_Website_Banner}
                  alt=""
                  className="absolute inset-0 -z-10 hidden h-full w-full object-cover lg:block"
                />

                <div className="relative lg:hidden">
                  <Image
                    src={BFP_Ledger_Socials_Website_Banner}
                    alt=""
                    className="aspect-video w-full object-cover"
                  />

                  {/* <Button className="absolute right-4 bottom-4 mt-auto ml-auto h-24 w-24 rounded-full pt-2 whitespace-pre-wrap">
                    <Link
                      href={"https://luma.com/londonafterhours"}
                      target="_blank"
                    >
                      RSVP Today
                    </Link>
                  </Button> */}
                </div>

                <div className={cn("flex w-full grow lg:p-8", "text-orange")}>
                  <div
                    className={cn(
                      "flex h-full w-full flex-col gap-6 p-6 pt-8 sm:gap-8 sm:p-8 sm:pt-12 lg:min-h-[600px] lg:w-[500px] lg:rounded-md",
                      "bg-white sm:bg-white/90",
                    )}
                  >
                    <h2 className="font-cooper text-center text-3xl sm:text-6xl">
                      BONK x Ledger
                    </h2>

                    <div className="mx-auto w-full max-w-80 text-center">
                      <p>
                        Limited-edition BONK x Ledger wallets available now.
                        <br />
                        <br />
                        30% of proceeds support Buddies for Paws, with every
                        donation matched by BONK. <br />
                        <br />
                        <b>Pawtect your BONK. Pawtect animals.</b>
                      </p>
                    </div>

                    <Button asChild className="mt-auto" variant="orange">
                      <Link
                        href="https://shop.ledger.com/pages/BONK?r=b269f5c87f28"
                        target="_blank"
                      >
                        Shop now
                      </Link>
                    </Button>
                  </div>

                  {/* <Button className="mt-auto ml-auto hidden h-32 w-32 rounded-full pt-2 text-xl whitespace-pre-wrap lg:flex">
                    <Link
                      href={"https://luma.com/londonafterhours"}
                      target="_blank"
                    >
                      RSVP Today
                    </Link>
                  </Button> */}
                </div>
              </div>
            </CarouselItem>

            {items.map((hero, i) => (
              <CarouselItem key={hero.title ?? i} className="flex pl-6">
                <div
                  key={hero.title}
                  className="relative z-0 flex w-full flex-col overflow-hidden bg-black sm:rounded-lg"
                >
                  <img
                    src={hero.imageUrl!}
                    alt={`A cute illustration of ${hero.title}`}
                    className="absolute inset-0 -z-10 hidden h-full w-full object-cover lg:block"
                  />

                  <div className="relative lg:hidden">
                    <img
                      src={hero.imageUrl!}
                      alt={`A cute illustration of ${hero.title}`}
                      className="aspect-video w-full object-cover"
                    />

                    <Button className="absolute right-4 bottom-4 mt-auto ml-auto h-24 w-24 rounded-full pt-2 whitespace-pre-wrap">
                      <Link href={hero.donateLink!} target="_blank">
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
                          ? "text-orange bg-white/90"
                          : "bg-white sm:bg-white/90",
                      )}
                    >
                      <h2 className="font-cooper text-center text-3xl sm:text-6xl">
                        {hero.title}
                      </h2>

                      <div className="mx-auto w-full max-w-80 text-center">
                        <PortableText value={hero.description!} />
                      </div>

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
                      <Link href={hero.donateLink!} target="_blank">
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
