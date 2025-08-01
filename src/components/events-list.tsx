"use client";

import { EVENTS_QUERYResult } from "@/sanity/types";
import { motion } from "motion/react";
import Link from "next/link";

export default function EventsList({ events }: { events: EVENTS_QUERYResult }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 sm:py-40">
      <motion.div
        variants={{
          visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
        }}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-6"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring" }}
          className="font-cooper text-blue text-center text-5xl"
        >
          All Events
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring" }}
          className="text-center"
        >
          Since 2024, Buddies for Paws has been raising funds for animal welfare
          and wildlife charities through unique events held around the world.
          From Moonwalks to catwalks to record-breaking dog walks, our
          fundraising events are never ordinary. All funds raised at our events
          are 100% matched by BONK, doubling the impact for animals in need.
          Take a look at some of our past events below.
        </motion.p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            key={event.title + "card"}
            className="group"
          >
            <Link
              href={`/events/${event.slug?.current}`}
              className="relative z-0 flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-black"
            >
              <img
                src={event.mainImageUrl!}
                alt={event.title!}
                className="ease-spring absolute inset-0 -z-10 h-full w-full scale-[1.15] object-cover transition-all duration-400 group-hover:scale-105"
              />
              <div className="hover:bg-orange/80 absolute inset-0 flex items-center justify-center bg-black/40 p-6 transition-all duration-400">
                <p className="font-cooper text-center text-3xl text-white">
                  {event.title}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
