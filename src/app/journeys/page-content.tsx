"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import bani from "../../../public/bani.jpeg";
import dew from "../../../public/dew.png";

const journeys = [
  {
    id: "dew",
    title: "Meet Dew",
    description:
      "When Dew was rescued from a bear bile farm in Vietnam’s southern Binh Duong province six months ago, her soft, sweet face was expressionless and her eyes vacant. But she couldn’t have known that her rescue from that awful farm was a turning point in her life of unending misery. Since then, vets have treated Dew’s injuries, she has once again felt the long-forgotten sensation of grass beneath her paws and has made forever friends with fellow bile farm survivor Soul. BONKforPaws is proud to say we are the official guardians of Dew and we are committed to her ongoing care.",
    image: dew,
    donateURL: "https://bonkforpaws.com/donate/animals-asia-foundation",
    watchURL: "https://www.youtube.com/watch?v=loextBY8uV0",
    learnMoreURL:
      "https://www.animalsasia.org/us/media/news/news-archive/rescued-moon-bears-find-solace-in-each-other-after-years-of-neglect-and-pain-on-a-bile-farm.html",
  },
  {
    id: "bani",
    title: "Meet Bani",
    description:
      "Nine-month-old Bani became a victim of a train collision in Uttarakhand when she was crossing the tracks with a herd of wild elephants. Left abandoned by the panicked herd, the paralysed elephant calf was discovered in a field beside the tracks. The baby elephant was found suffering from significant injuries on her spine, hips, and legs, rendering her unable to stand. We are committed to providing Bani with the support she needs for her recovery. Funds raised have gone towards her rehabilitation treatments in the form of daily physical therapies, massage and hydrotherapy and other forms of care.",
    image: bani,
    donateURL: "https://bonkforpaws.com/donate/wildlife-sos",
    watchURL: "https://www.youtube.com/watch?v=HC9l-S_MzHU",
    learnMoreURL: "https://wildlifesos.org/our-work/elephants/bani/",
  },
];

export function JourneysPageContent() {
  return (
    <div className="max-w-9xl mx-auto flex w-full flex-col gap-24 px-6 py-24 sm:px-16 sm:py-40 xl:gap-32 xl:px-24">
      {journeys.map((journey, i) => (
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
              "relative z-0 aspect-video overflow-hidden rounded-lg bg-black",
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
