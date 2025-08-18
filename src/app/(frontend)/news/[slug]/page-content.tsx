"use client";

import { Button } from "@/components/ui/button";
import { NEWS_QUERYResult } from "@/sanity/types";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { motion, stagger } from "motion/react";

export function NewsPageContent({ news }: { news: NEWS_QUERYResult }) {
  return (
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
            href={"/news"}
            className="text-blue flex items-center gap-2 text-sm"
          >
            <ArrowLeft className="size-4" />
            <span className="underline">Go Back to News Page</span>
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
              {news?.title}
            </h1>
            <p className="text-blue mt-auto text-sm">
              {news?.publishedAt &&
                new Date(news.publishedAt).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}{" "}
              | {news?.categories?.map((cat) => cat.title).join(", ")}
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
          >
            <Button asChild variant={"orange"} size={"sm"} className="mr-auto">
              <Link href={""} target="_blank">
                Share <img src={"/share.svg"} className="inline size-4" />
              </Link>
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
            <PortableText
              value={news?.content ?? []}
              components={{
                types: {
                  image: ({ value }) => {
                    if (!value?.asset?.url) return null;
                    return (
                      <div className="my-6">
                        <img
                          src={value.asset.url}
                          alt={value.alt || "Blog image"}
                          className="w-full overflow-hidden rounded-lg"
                        />
                      </div>
                    );
                  },
                },
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
