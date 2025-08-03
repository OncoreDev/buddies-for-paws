"use client";

import EventsList from "@/components/events-list";
import { Button } from "@/components/ui/button";
import { EVENTS_QUERYResult } from "@/sanity/types";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function EventsPageContent({ events }: { events: EVENTS_QUERYResult }) {
  const featuredEvent = events.find((event) => event.featured);

  return (
    <div>
      {featuredEvent && (
        <div className="bg-orange">
          <div className="max-w-9xl mx-auto sm:px-6 sm:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="relative z-0 flex h-96 flex-col items-start gap-6 overflow-hidden bg-black p-6 sm:rounded-lg sm:p-8 lg:h-[720px] lg:p-12"
            >
              <img
                src={featuredEvent.mainImageUrl!}
                alt={featuredEvent.title ?? "featured event image"}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/60 via-transparent" />

              <div className="-mb-2 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                FEATURED
              </div>

              <h1 className="font-cooper max-w-xs text-3xl text-white drop-shadow lg:max-w-lg lg:text-5xl">
                {featuredEvent.title}
              </h1>

              <Button variant={"yellow"} size={"sm"} className="group" asChild>
                <Link href={"/events/" + featuredEvent.slug?.current}>
                  Find out more{" "}
                  <ArrowRight className="ease-spring -mr-2 -ml-[18px] inline opacity-0 transition-all duration-400 group-hover:ml-0 group-hover:opacity-100" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      )}
      <EventsList events={events} />
    </div>
  );
}
