"use client";

import EventsList from "@/components/events-list";
import { Button } from "@/components/ui/button";
import { EVENTS_CONFIG } from "@/lib/events-config";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const feturedEvent = EVENTS_CONFIG[0];

export function EventsPageContent() {
  return (
    <div>
      <div className="bg-orange">
        <div className="mx-auto max-w-7xl pb-0 sm:px-6 sm:pt-8 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="relative z-0 flex h-96 flex-col items-start gap-6 overflow-hidden bg-black p-6 sm:rounded-lg sm:p-8 lg:h-[720px] lg:p-12"
          >
            <Image
              src={feturedEvent.image}
              alt="KK9R Guinness World Record"
              fill
              className="roudned-lg absolute inset-0 -z-10 h-full w-full object-cover"
            />

            <div className="-mb-2 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
              FEATURED
            </div>

            <h1 className="font-cooper max-w-xs text-3xl text-white drop-shadow lg:max-w-lg lg:text-5xl">
              {feturedEvent.title}
            </h1>

            <Button variant={"yellow"} size={"sm"} className="group" asChild>
              <Link href={"/events/" + feturedEvent.route}>
                Find out more{" "}
                <ArrowRight className="ease-spring -mr-2 -ml-[18px] inline opacity-0 transition-all duration-400 group-hover:ml-0 group-hover:opacity-100" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <EventsList />
    </div>
  );
}
