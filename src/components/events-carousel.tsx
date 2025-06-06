"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EVENTS_CONFIG } from "@/lib/events-config";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function EventsCarouel() {
  return (
    <div className="bg-yellow overflow-hidden py-24 sm:py-40">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay: 0.2 }}
        className="max-w-9xl mx-auto flex flex-col gap-6 px-6"
      >
        <Button asChild className="mr-auto pr-4">
          <Link href="/events">
            All Events <ArrowRight />
          </Link>
        </Button>
        <Carousel
          opts={{ align: "center" }}
          plugins={[Autoplay({ delay: 3000 })]}
        >
          <CarouselContent className="md:-ml-8">
            {EVENTS_CONFIG.flat().map((event, i) => (
              <CarouselItem
                key={event.title + i}
                className="basis-11/12 md:pl-8"
              >
                <div className="relative z-0 flex flex-col gap-6">
                  <div className="relative z-0 h-96 gap-6 overflow-hidden rounded-lg bg-black p-6 sm:p-8 lg:h-[720px] lg:p-12">
                    <Image
                      src={event.image}
                      alt="KK9R Guinness World Record"
                      fill
                      className="roudned-lg absolute inset-0 -z-10 h-full w-full object-cover"
                    />

                    <div className="hidden flex-col items-start gap-6 sm:flex">
                      <h1 className="font-cooper max-w-xs text-3xl text-white drop-shadow lg:max-w-lg lg:text-5xl">
                        {event.title}
                      </h1>

                      <Button variant={"yellow"} size={"sm"}>
                        <Link href={"/events/" + event.route}>
                          Find out more
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 sm:hidden">
                    <h1 className="font-cooper text-orange text-center text-2xl">
                      {event.title}
                    </h1>

                    <Button variant={"orange"} size={"sm"}>
                      <Link href={"/events/" + event.route}>Find out more</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </div>
  );
}
