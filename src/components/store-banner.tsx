"use client";

import Image from "next/image";
import Bottle from "../../public/shop/bottle.png";
import Shirt from "../../public/shop/shirt.png";
import ToteBage from "../../public/shop/tote-bage.png";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export default function StoreBanner() {
  return (
    <div className="bg-orange text-orange-foreground flex items-center justify-center overflow-hidden py-24 sm:py-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", delay: 0.2 }}
        className="relative flex flex-col items-center justify-center gap-y-12 overflow-visible px-12 md:flex-row"
      >
        <div className="relative order-1 flex items-center justify-center gap-4 md:static md:order-none">
          <div className="relative z-0 size-40 shrink-0 overflow-hidden rounded-lg bg-white md:size-64">
            <Image
              src={Shirt}
              alt="KK9R Guinness World Record"
              fill
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          </div>
          <div className="absolute -left-4 size-40 shrink-0 -translate-x-full overflow-hidden rounded-lg bg-white md:left-8 md:size-64">
            <Image
              src={ToteBage}
              alt="KK9R Guinness World Record"
              fill
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 size-40 shrink-0 translate-x-full overflow-hidden rounded-lg bg-white md:right-8 md:size-64">
            <Image
              src={Bottle}
              alt="KK9R Guinness World Record"
              fill
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-center md:px-12">
          <h4 className="font-cooper text-4xl text-white sm:text-5xl">
            Visit Our Store!
          </h4>

          <p className="mt-2 max-w-lg sm:text-lg">
            Rep the movement with limited-edition BFP shirts, totes, and more.
            Perfect for showing your support and love!
          </p>

          <Button variant={"yellow"} className="group mt-4" asChild>
            <Link href={"https://baobaoinu.com/"} target="_blank">
              Shop Now
              <ExternalLink className="ease-spring -mr-2 -ml-5 inline opacity-0 transition-all duration-400 group-hover:ml-0 group-hover:opacity-100" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
