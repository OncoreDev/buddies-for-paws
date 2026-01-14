"use client";

import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { motion, Variants } from "motion/react";
import Link from "next/link";
import bannerImage from "../../../../../images/about-mission-banner.png";
import Image from "next/image";

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export function MissionPageContent() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 sm:px-16 sm:py-32">
      <motion.div
        variants={{
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col gap-12"
      >
        <motion.div
          variants={variants}
          className="relative h-96 rounded-lg bg-black"
        >
          <Image
            src={bannerImage}
            alt="banner"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <Image
            src={bannerImage}
            alt="banner"
            className="absolute inset-0 h-full w-full object-contain"
          />
        </motion.div>

        <motion.h1
          variants={variants}
          className="text-orange font-cooper text-center text-5xl sm:text-7xl"
        >
          About Buddies for Paws
        </motion.h1>

        <motion.p
          variants={variants}
          className="text-orange mx-auto max-w-2xl text-center"
        >
          <b>
            Buddies for Paws is a charitable initiative within the{" "}
            <Link
              href={"https://bonkcoin.com/"}
              target="_blank"
              className="underline"
            >
              BONK ecosystem
            </Link>
            , launched in 2024 with a simple mission: to utilize Web3 technology
            and the power of community to make a tangible difference for animals
            worldwide.
          </b>
          <br />
          <br />
          We partner with animal welfare and wildlife conservation charities to
          raise funds through unique fundraising events,{" "}
          <Link
            href={"https://baobaoinu.com/"}
            target="_blank"
            className="underline"
          >
            <b>exclusive merchandise</b>
          </Link>{" "}
          drops, and digital activations, helping direct vital support to
          animals in need.
          <br />
          <br />
          Donations made through Buddies for Paws are{" "}
          <b>matched 100% by BONK</b>, helping your gift go further and support
          animal rescues, wildlife sanctuaries, and nature-first initiatives
          worldwide.
        </motion.p>
        <motion.div
          variants={variants}
          className="mx-auto flex max-w-64 flex-col gap-4"
        >
          <p className="text-orange font-cooper text-center text-3xl">
            Any questions?
          </p>
          <Button variant={"yellow"} asChild>
            <Link href={"/contact"}>Contact us</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
