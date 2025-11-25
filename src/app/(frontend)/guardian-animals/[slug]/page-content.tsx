"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Wysiwyg } from "@/components/wysiwyg";
import { JOURNEY_QUERYResult } from "@/sanity/types";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { toPlainText } from "next-sanity";
import Link from "next/link";

export function JourneyPageContent({
  journey,
}: {
  journey: NonNullable<JOURNEY_QUERYResult>;
}) {
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

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-24 pt-16 sm:px-16 sm:py-32 sm:pt-24 xl:gap-32 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
          className="flex flex-col gap-6 md:flex-row lg:gap-16"
        >
          <div>
            <div className="relative aspect-video shrink-0 overflow-hidden rounded-lg md:aspect-[3/4] md:w-64 lg:w-96">
              <img
                src={journey.image.url ?? ""}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              {journey.image.credits}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <Wysiwyg content={journey?.content ?? []} />

            <div className="mt-auto flex flex-wrap gap-4">
              <Button variant={"orange-outline"} asChild>
                <Link href={"#latest-updates"}>Updates</Link>
              </Button>
              <Button variant={"orange-outline"} asChild>
                <Link href={"#how-support-helps"}>How support helps</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {journey.latestUpdates && journey.latestUpdates.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            id="latest-updates"
            className="flex flex-col gap-8"
          >
            <h2 className="font-cooper text-orange text-center text-3xl sm:text-5xl">
              Latest Updates
            </h2>

            <div className="flex flex-col gap-6">
              {journey.latestUpdates.map((update) => (
                <Link
                  key={update._id}
                  href={`/guardian-animals/${journey.slug?.current}/${update.slug?.current}`}
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      type: "spring",
                    }}
                    className="ease-spring hover:border-blue flex h-32 overflow-hidden rounded-lg border-2 sm:h-40"
                  >
                    <div className="relative size-32 shrink-0 overflow-hidden bg-black sm:size-40">
                      <img
                        src={update.mainImageUrl ?? ""}
                        alt="Placeholder"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="text-blue flex grow flex-col p-4 sm:p-6">
                      <h2 className="font-cooper text-orange line-clamp-1 text-2xl">
                        {update.title}
                      </h2>
                      <p className="text-foreground line-clamp-1 text-sm sm:line-clamp-2">
                        {toPlainText(update.content ?? [])}
                      </p>
                      <p className="mt-auto line-clamp-1 text-xs">
                        {new Date(update.publishedAt!).toLocaleDateString(
                          "en-US",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          },
                        )}{" "}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {!!journey.howSupportHelps && journey.howSupportHelps?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            id="how-support-helps"
            className="bg-yellow flex flex-col gap-8 rounded-lg p-8"
          >
            <h2 className="font-cooper text-yellow-foreground pt-6 text-center text-3xl sm:text-5xl">
              How Support Helps
            </h2>

            <p className="text-center">
              When you support{" "}
              <span className="text-yellow-foreground font-semibold">
                {journey.title}
              </span>{" "}
              and{" "}
              <span className="text-yellow-foreground font-semibold">
                {journey.charity?.name}
              </span>
              , you help protect:
            </p>

            <div className="flex flex-wrap items-start justify-center gap-6">
              {journey.howSupportHelps.map((help) => (
                <div
                  key={help.text}
                  className="flex max-w-[152px] flex-col items-center justify-center gap-4 text-center"
                >
                  <img src={help.iconUrl ?? ""} className="h-12" />
                  <p>{help.text}</p>
                </div>
              ))}
            </div>

            <p className="text-center">
              Support{" "}
              <span className="text-yellow-foreground font-semibold">
                {journey.charity?.name}
              </span>
            </p>

            <Button variant={"orange"} className="mx-auto -mb-14" asChild>
              <Link href={journey.charity?.url ?? ""} target="_blank">
                DONATE
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
