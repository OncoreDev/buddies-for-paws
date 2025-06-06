"use client";

import { EVENTS_CONFIG } from "@/lib/events-config";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function EventsList() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 sm:py-40">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay: 0.2 }}
        className="font-cooper text-blue text-center text-5xl"
      >
        All Events
      </motion.h1>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {EVENTS_CONFIG.map((event) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            key={event.title + "card"}
            className="group"
          >
            <Link
              href={`/events/${event.route}`}
              className="relative z-0 flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-black"
            >
              <Image
                src={event.image}
                alt={event.title}
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
