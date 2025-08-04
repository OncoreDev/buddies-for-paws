"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { EVENTS_QUERYResult } from "@/sanity/types";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function EventsCarouel({ events }: { events: EVENTS_QUERYResult }) {
  return (
    <Carousel opts={{ align: "center" }} plugins={[Autoplay({ delay: 3000 })]}>
      <div className="bg-yellow overflow-hidden py-24 sm:py-40">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.2 }}
          className="max-w-9xl mx-auto flex flex-col gap-6 px-6"
        >
          <div className="flex items-center justify-between">
            <Button asChild className="group mr-auto">
              <Link href="/events">
                All events
                <ArrowRight className="-mr-2" />
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <CarouselPrevious
                size={"icon"}
                variant={"orange-outline"}
                className="relative inset-0 size-10 -translate-0"
              />

              <CarouselNext
                size={"icon"}
                variant={"orange-outline"}
                className="relative inset-0 size-10 -translate-0"
              />
            </div>
          </div>

          <CarouselContent className="md:-ml-8">
            {events.map((event, i) => (
              <CarouselItem
                key={event.title ?? i}
                className="basis-11/12 md:pl-8"
              >
                <div className="relative z-0 flex flex-col gap-6">
                  <div className="relative -z-10 h-96 gap-6 overflow-hidden rounded-lg bg-black p-6 sm:p-8 lg:h-[720px] lg:p-12">
                    <img
                      src={event.mainImageUrl ?? ""}
                      alt={event.title ?? ""}
                      className="roudned-lg absolute inset-0 -z-10 h-full w-full object-cover"
                    />

                    <div className="hidden flex-col items-start gap-6 sm:flex">
                      <h1 className="font-cooper max-w-xs text-3xl text-white lg:max-w-lg lg:text-5xl">
                        {event.title}
                      </h1>

                      <Button
                        variant={"yellow"}
                        size={"sm"}
                        asChild
                        className="group"
                      >
                        <Link href={"/events/" + event.slug?.current}>
                          Find out more
                          <ArrowRight className="ease-spring -mr-2 -ml-[18px] inline opacity-0 transition-all duration-400 group-hover:ml-0 group-hover:opacity-100" />
                        </Link>
                      </Button>
                    </div>

                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/60 via-transparent" />
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:hidden">
                    <h1 className="font-cooper text-orange text-center text-2xl">
                      {event.title}
                    </h1>

                    <Button variant={"orange"} size={"sm"}>
                      <Link href={"/events/" + event.slug?.current}>
                        Find out more
                      </Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>
      </div>
    </Carousel>
  );
}
