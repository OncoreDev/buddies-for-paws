"use client";

import { SITE_CONFIG } from "@/lib/site-config";
import { motion, Variants } from "motion/react";
import Link from "next/link";

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export function ContactPageContent() {
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
        className="mx-auto flex max-w-3xl flex-col gap-6"
      >
        <motion.h1
          variants={variants}
          className="text-orange font-cooper text-center text-5xl sm:text-7xl"
        >
          About Us
        </motion.h1>

        <motion.p variants={variants}>
          <b>Buddies for Paws</b> is a charitable initiative within the BONK
          ecosystem, launched in 2024 with a simple mission: to use Web3
          technology and the power of community to make a real difference to
          animals around the world.
        </motion.p>

        <motion.p variants={variants}>
          We partner with animal welfare and wildlife charities to raise funds
          through unique fundraising events, exclusive merchandise and digital
          activations.
        </motion.p>

        <motion.p variants={variants}>
          At Buddies for Paws, we believe compassion and innovation go hand in
          paw. Harnessing the energy of our global community and the benefits of
          blockchain, we help fund animal rescues, wildlife sanctuaries and
          nature first initiatives.
        </motion.p>

        <motion.p variants={variants}>
          For more information about buddies for Paws work, explore the rest of
          our site, subscribe to our newsletter and follow us on{" "}
          <Link
            href={SITE_CONFIG.links.x}
            target="_blank"
            className="text-orange hover:text-blue transition-all hover:underline"
          >
            X
          </Link>{" "}
          and{" "}
          <Link
            href={SITE_CONFIG.links.instagram}
            target="_blank"
            className="text-orange hover:text-blue transition-all hover:underline"
          >
            Instagram
          </Link>
          . If you would like to get in touch we would love to hear from you,
          just head to our{" "}
          <Link
            href="/contact"
            className="text-orange hover:text-blue transition-all hover:underline"
          >
            Contact page
          </Link>
          .
        </motion.p>
      </motion.div>
    </div>
  );
}
