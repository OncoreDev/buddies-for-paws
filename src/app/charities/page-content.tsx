"use client";

import { Button } from "@/components/ui/button";
import { CHARITIES_CONFIG } from "@/lib/charities-config";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function CharitiesPageContent() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 sm:px-16 sm:py-40">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="text-blue font-cooper text-5xl sm:text-7xl"
        >
          Charities
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.4 }}
        >
          At <b>Buddies for Paws</b>, we’re proud to support an incredible
          network of animal welfare and wildlife conservation charities around
          the world. Each of our partners has been carefully selected for their
          dedication, compassion, and proven impact on the ground—from rescuing
          animals in crisis to protecting vital habitats. For more information
          or to make a direct donation, explore the links below and join us in
          making a difference.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 flex-wrap items-center justify-center gap-8 sm:flex sm:gap-x-24 sm:gap-y-16">
        {CHARITIES_CONFIG.map((charity, i) => (
          <motion.div
            key={charity.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: i * 0.05 + 0.5 }}
            className="flex w-full flex-col gap-6 sm:max-w-40"
          >
            <Image
              src={charity.image}
              alt={charity.name}
              className="aspect-square w-full object-contain"
            />

            <Button asChild variant={"blue"} size={"sm"}>
              <Link href={charity.url} target="_blank">
                Donate Now
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
