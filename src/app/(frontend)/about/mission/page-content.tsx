"use client";

import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-config";
import { motion, Variants } from "motion/react";
import Link from "next/link";

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export function MissionPageContent() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 sm:px-16 sm:py-40">
      <motion.div
        variants={{
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        }}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-3xl flex-col gap-12"
      >
        <motion.h1
          variants={variants}
          className="text-orange font-cooper text-center text-5xl sm:text-7xl"
        >
          About Us for Paws
        </motion.h1>

        <motion.p variants={variants} className="text-orange text-center">
          <b>
            Buddies for Paws is a charitable initiative within the BONK
            ecosystem, launched in 2024 with a simple mission: to use Web3
            technology and the power of community to make a real difference to
            animals around the world.
          </b>
          <br />
          <br />
          We partner with animal welfare and wildlife charities to raise funds
          through unique fundraising events,{" "}
          <Link
            href={"https://baobaoinu.com/"}
            target="_blank"
            className="underline"
          >
            <b>exclusive merchandise</b>
          </Link>{" "}
          and digital activations.
          <br />
          <br />
          At Buddies for Paws, we believe compassion and innovation go hand in
          paw. Harnessing the energy of our global community and the benefits of
          blockchain, we help fund animal rescues, wildlife sanctuaries and
          nature-first initiatives.
        </motion.p>

        <motion.div
          variants={variants}
          className="mx-auto flex max-w-64 flex-col gap-4"
        >
          <p className="text-orange font-cooper text-center text-3xl">
            Any questions?
          </p>
          <Button variant={"yellow"} asChild>
            <Link href={"/contact"}>Contact Us</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
