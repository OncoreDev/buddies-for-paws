"use client";

import { Button } from "@/components/ui/button";
import { JOURNEYS_CONFIG } from "@/lib/journeys-config";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function JourneysPageContent() {
  return (
    <div className="max-w-9xl mx-auto flex w-full flex-col gap-24 px-6 py-24 sm:px-16 sm:py-40 xl:gap-32 xl:px-24">
      <div className="flex flex-col gap-6 sm:text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="text-orange font-cooper mx-auto max-w-4xl text-5xl sm:text-7xl"
        >
          Meet the buddies your helping us care for
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", delay: 0.4 }}
          className="mx-auto max-w-4xl"
        >
          Through our fundraising efforts, Buddies for Paws proudly supports the
          care of animals around the world. As part of commitment, we also are
          also proud guardians for animals cared for by our charity partners,
          Each one has an incredible story. Explore their journeys below to see
          the impact Buddies for Paws support makes.
        </motion.p>
      </div>

      {JOURNEYS_CONFIG.map((journey, i) => (
        <motion.div
          id={journey.id}
          key={journey.title}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.4 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid items-start gap-8 sm:gap-16 lg:grid-cols-2 xl:gap-24"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring" },
              },
            }}
            className={cn(
              "relative z-0 aspect-video overflow-hidden rounded-lg bg-black lg:sticky lg:top-16",
              i % 2 && "lg:order-1",
            )}
          >
            <Image
              src={journey.image}
              fill
              alt="An image of a rescued animal"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.25 },
              },
            }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring" },
                },
              }}
              className="text-orange font-cooper text-3xl sm:text-5xl"
            >
              {journey.title}
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring" },
                },
              }}
            >
              {journey.description}
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring" },
                },
              }}
              className="grid flex-wrap gap-3 sm:grid-cols-3"
            >
              <Button asChild>
                <Link href={journey.donateURL} target="_blank">
                  DONATE
                </Link>
              </Button>

              <Button asChild variant={"orange-outline"}>
                <Link href={journey.watchURL} target="_blank">
                  Watch Episode
                </Link>
              </Button>

              <Button asChild variant={"orange-outline"}>
                <Link href={journey.learnMoreURL} target="_blank">
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
