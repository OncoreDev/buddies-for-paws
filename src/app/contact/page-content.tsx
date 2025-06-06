"use client";

import { BFPMaster } from "@/components/logo/bfp-master";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Shiba from "../../../public/contact/shiba.png";
import { motion } from "motion/react";

export function ContactPageContent() {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 sm:px-16 sm:py-32 sm:pb-40 lg:grid-cols-2">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ type: "spring" }}
        viewport={{ once: true }}
        className="relative hidden items-center justify-center lg:flex"
      >
        <BFPMaster className="text-orange w-64" />

        <Image
          src={Shiba}
          alt="An elephant in a field"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-contain opacity-60"
        />
      </motion.div>
      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ type: "spring" }}
        viewport={{ once: true }}
        className="flex flex-col gap-8"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring" }}
          className="font-cooper text-orange text-5xl"
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring" }}
        >
          For more information on how to get involved with Buddies for Paws
          please feel free to contact us using the form below.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring" }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="font-cooper text-orange text-lg font-semibold">
              Email*
            </label>
            <Input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="border-orange"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-cooper text-orange text-lg font-semibold">
              Message*
            </label>
            <Textarea
              name="message"
              required
              rows={10}
              placeholder="Contact us for general inquiries or request to be added to list of charities"
              className="border-orange"
            />
          </div>
          <Button variant={"yellow"} className="ml-auto">
            Send Message
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
