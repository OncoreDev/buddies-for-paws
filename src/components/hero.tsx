"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Bani from "../../images/hero-bani.png";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-blue sm:px-6 sm:py-16 lg:pb-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-9xl relative z-0 mx-auto flex h-96 w-full flex-col items-start justify-end gap-6 overflow-hidden bg-white p-6 sm:items-end sm:justify-start sm:rounded-lg sm:p-8 md:aspect-video md:h-auto md:p-12"
      >
        <Image
          src={Bani}
          alt="A cute illustration of an elephant named Bani"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <h1 className="font-cooper sm:text-blue text-4xl text-white drop-shadow-lg sm:text-right sm:drop-shadow-none md:text-7xl">
          This is
          <br />
          <span className="text-6xl md:text-9xl">Bani</span>
        </h1>

        <Button variant={"teal"} asChild className="group">
          <Link href={"/journeys#bani"}>
            Find out more
            <ArrowRight className="ease-spring -mr-2 -ml-5 inline opacity-0 transition-all duration-400 group-hover:ml-0 group-hover:opacity-100" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
