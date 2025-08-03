"use client";

import { Button } from "@/components/ui/button";
import { CHARITIES_QUERYResult } from "@/sanity/types";
import { motion } from "motion/react";
import Link from "next/link";

export function LocalCharitiesPageContent({
  charities,
}: {
  charities: CHARITIES_QUERYResult;
}) {
  return (
    <div className="max-w-9xl mx-auto flex w-full flex-col gap-16 px-6 py-24 sm:px-16 sm:py-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="text-blue font-cooper text-5xl sm:text-7xl"
        >
          Local Charity Partners
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.4 }}
        >
          Alongside our core global partners, <b>Buddies for Paws</b> also
          supports local animal charities and community rescue groups through
          one-off fundraisers and special campaigns. We’re always open to
          supporting smaller charities where possible, especially those aligned
          with our mission to protect and care for animals. Explore some of the
          local and regional charities we’ve supported below.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 flex-wrap items-center justify-center gap-8 sm:flex sm:gap-x-24 sm:gap-y-16">
        {charities.map((charity, i) => (
          <motion.div
            key={charity.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: i * 0.05 + 0.5 }}
            className="flex w-full flex-col gap-6 sm:max-w-40"
          >
            <img
              src={charity.logoUrl!}
              alt={charity.name!}
              className="aspect-square w-full object-contain"
            />

            <Button asChild variant={"blue"} size={"sm"}>
              <Link href={charity.donationUrl!} target="_blank">
                Donate Now
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
