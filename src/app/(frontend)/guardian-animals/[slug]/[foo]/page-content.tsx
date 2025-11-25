"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Wysiwyg } from "@/components/wysiwyg";
import {
  JOURNEY_QUERYResult,
  JOURNEY_UPDATE_QUERYResult,
} from "@/sanity/types";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function JourneyUpdatePageContent({
  journey,
  update,
}: {
  journey: JOURNEY_QUERYResult;
  update: JOURNEY_UPDATE_QUERYResult;
}) {
  const handleShare = () => {
    const text = encodeURIComponent(update?.title || "");
    const url = encodeURIComponent(window.location.href);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <div className="relative z-0 flex w-full overflow-hidden bg-black">
        <img
          src={journey?.bannerUrl ?? ""}
          alt={journey?.title ?? "-"}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-80"
        />

        <div className="relative z-0 mx-auto flex w-full max-w-7xl items-center justify-center p-6 py-24 sm:min-h-80 sm:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 0.3 }}
            className="font-cooper max-w-2xl text-center text-5xl text-white drop-shadow-lg sm:text-7xl"
          >
            Meet {journey?.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="absolute top-6 left-6"
          >
            <Button asChild size={"sm"} variant={"yellow"}>
              <Link href={"/guardian-animals"}>
                <ArrowLeft className="sm:-ml-2" />
                All guardians
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="bg-orange p-4 text-white sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm sm:gap-x-8"
        >
          <p>
            <b>Name:</b> {journey?.title}
          </p>

          <Separator orientation="vertical" className="h-4!" />

          <p>
            <b>Charity:</b>{" "}
            <Link
              href={journey?.charity?.url ?? ""}
              target="_blank"
              className="underline"
            >
              {journey?.charity?.name}
            </Link>
          </p>

          <Separator orientation="vertical" className="h-4!" />

          <p>
            <b className="capitalize">{journey?.speciesOrBreed?.type}:</b>{" "}
            {journey?.speciesOrBreed?.value}
          </p>

          <Separator orientation="vertical" className="h-4!" />
          <p>
            <b>Location:</b> {journey?.location}
          </p>
        </motion.div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-24 sm:px-16 sm:py-32 xl:gap-32 xl:px-24">
        <div className="flex flex-col items-start gap-x-24 gap-y-6 sm:gap-y-8 lg:flex-row">
          <motion.div
            className="shrink-0"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial={"hidden"}
            animate={"visible"}
            transition={{ type: "spring" }}
          >
            <Link
              href={`/guardian-animals/${journey?.slug?.current}`}
              className="text-blue flex items-center gap-2 text-sm"
            >
              <ArrowLeft className="size-4" />
              <span className="underline">
                Go Back to Meet {journey?.title}
              </span>
            </Link>
          </motion.div>

          <motion.div
            transition={{
              delay: 0.2,
              delayChildren: 0.2,
              staggerChildren: 0.2,
            }}
            initial={"hidden"}
            animate={"visible"}
            className="flex grow flex-col gap-6 sm:gap-8"
          >
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ type: "spring" }}
              className="flex flex-col gap-1 sm:gap-2"
            >
              <h1 className="font-cooper text-orange text-3xl sm:text-5xl">
                {update?.title}
              </h1>
              <p className="text-blue mt-auto text-sm">
                {update?.publishedAt &&
                  new Date(update.publishedAt).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ type: "spring" }}
              className="flex flex-wrap gap-4"
            >
              <Button variant={"orange"} size={"sm"}>
                <Link href={journey?.charity?.url ?? ""} target="_blank">
                  DONATE
                </Link>
              </Button>
              <Button
                variant={"orange-outline"}
                size={"sm"}
                onClick={handleShare}
              >
                Share{" "}
                <img src={"/share-orange.svg"} className="inline size-4" />
              </Button>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ type: "spring" }}
            >
              <Wysiwyg content={update?.content ?? []} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
