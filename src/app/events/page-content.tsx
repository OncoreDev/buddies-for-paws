"use client";

import EventsList from "@/components/events-list";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import KK9RGuinnessWorldRecord from "../../../public/KK9R-Guinness-World-Record.webp";
import { motion } from "motion/react";

const feturedEvent = {
  route: "kk9r-guinness-world-record",
  title: "KK9R Guinness World Record",
  description:
    "On September 5, 2024, in Goesan, South Korea, 38 dogs from Korean K9 Rescue, in collaboration with Bonk Canada, made history by setting a new Guinness World Record for the most dogs walked simultaneously by a single person.",
  image: KK9RGuinnessWorldRecord,
  links: [
    {
      label: "Guinness World Record Press Release",
      url: "https://www.guinnessworldrecords.com/news/2024/10/pooch-perfect-day-out-for-animal-lover-who-walked-38-dogs-at-once-to-promote-adoption",
    },
    {
      label: "Washington Post Article",
      url: "https://www.washingtonpost.com/lifestyle/2024/10/26/dog-walk-guinness-record-adopt/",
    },
    {
      label: "Medium Article by Cailin Doran",
      url: "https://medium.com/@cbcd/every-paw-helps-244184cb1347",
    },
    {
      label: "World Record Academy",
      url: "https://www.worldrecordacademy.org/2024/10/most-dogs-walked-simultaneously-by-an-individual-world-record-set-in-goesan-south-korea-424424",
    },
    {
      label: "MSN Article",
      url: "https://www.msn.com/en-us/money/markets/canadian-man-sets-new-guinness-world-record-for-most-dogs-walked-at-once/ar-AA1snMCW?apiversion=v2&noservercache=1&domshim=1&renderwebcomponents=1&wcseo=1&batchservertelemetry=1&noservertelemetry=1",
    },
    {
      label: "Turkmenportal Article",
      url: "https://turkmenportal.com/en/blog/83865/canadian-sets-world-record-by-walking-38-dogs#:~:text=Canadian%20Mitchell%20Rudy%20set%20a,them%20out%20of%20his%20sight",
    },
  ],
};

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

            <div className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
              FEATURED
            </div>

            <h1 className="font-cooper max-w-xs text-3xl text-white drop-shadow lg:max-w-lg lg:text-5xl">
              {feturedEvent.title}
            </h1>

            <Button variant={"yellow"} size={"sm"}>
              <Link href={"/events/" + feturedEvent.route}>Find out more</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      <EventsList />
    </div>
  );
}
