"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { EVENTS_QUERYResult, JOURNEYS_QUERYResult } from "@/sanity/types";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function MeetTheAnimals({
  journeys,
}: {
  journeys: JOURNEYS_QUERYResult;
}) {
  return (
    <div className="overflow-hidden bg-white">
      <div className="flex w-full flex-col gap-6 px-6 py-24 sm:py-32">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-cooper text-orange text-4xl sm:text-5xl">
            Meet the animals you&apos;re helping
          </h2>
          <p className="sm:text-lg">
            Protected and supported through your generosity.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {journeys.map((journey) => (
            <div
              key={journey._id}
              className="bg-orange w-64 overflow-hidden rounded-lg text-white"
            >
              <img
                src={journey.image!.url!}
                alt={journey.title!}
                className="aspect-square w-full bg-black object-cover"
              />

              <div className="flex flex-col gap-4 p-6 text-center">
                <p className="font-cooper text-xl">{journey.title}</p>

                <img
                  src={journey.charity!.image!.url!}
                  alt={journey.charity!.name!}
                  className="aspect-7/3 w-full object-contain brightness-0 invert"
                />
              </div>
            </div>
          ))}
        </div>

        <Button asChild variant={"yellow"} className="mx-auto">
          <Link href="https://bonkforpaws.com/" target="_blank">
            Donate today
          </Link>
        </Button>
      </div>
    </div>
  );
}
