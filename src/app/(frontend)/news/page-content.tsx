"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ALL_NEWS_QUERYResult,
  NEWS_CATEGORIES_QUERYResult,
} from "@/sanity/types";
import { Search, X } from "lucide-react";
import { motion } from "motion/react";
import { toPlainText } from "next-sanity";
import Link from "next/link";
import { useMemo, useState } from "react";

export function NewsPageContent({
  allNews,
}: {
  allNews: ALL_NEWS_QUERYResult;
}) {
  const [keywords, setKeywords] = useState("");
  const [confirmedKeywords, setConfirmedKeywords] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const availableNews = useMemo(() => {
    return allNews.filter((news) => {
      const matchesKeywords =
        news
          .title!.toLocaleLowerCase()
          .includes(confirmedKeywords.toLowerCase()) ||
        toPlainText(news.content ?? [])
          .toLowerCase()
          .includes(confirmedKeywords.toLowerCase());
      const matchesCategories =
        selectedCategories.length === 0 ||
        news.categories?.some((cat) => selectedCategories.includes(cat.title!));
      return matchesKeywords && matchesCategories;
    });
  }, [confirmedKeywords, selectedCategories]);

  const availableCategories = useMemo(() => {
    const categoryTitles = new Set<string>();
    allNews.forEach((news) => {
      news.categories?.forEach((cat) => {
        if (cat.title) categoryTitles.add(cat.title);
      });
    });
    return Array.from(categoryTitles);
  }, [allNews]);

  return (
    <div className="max-w-9xl mx-auto flex w-full flex-col gap-24 px-6 py-16 sm:px-16 sm:py-24 xl:gap-32 xl:px-24">
      <div className="flex w-full flex-col items-start gap-x-16 gap-y-6 lg:flex-row">
        <motion.div
          initial={{
            x: 10,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
          }}
          className="w-full shrink-0 overflow-hidden rounded-lg lg:w-80"
        >
          <div className="bg-blue flex items-center justify-between p-4 text-white sm:p-6">
            <p className="font-cooper text-xl">Filter By</p>
            <button
              className="cursor-pointer text-sm underline"
              onClick={() => {
                setKeywords("");
                setConfirmedKeywords("");
                setSelectedCategories([]);
              }}
            >
              Clear All
            </button>
          </div>

          <div className="bg-blue/20 text-blue flex flex-col gap-6 p-4 sm:p-6">
            <div className="flex flex-col gap-2">
              <p className="font-cooper">Keywords</p>

              <div className="relative">
                <Input
                  value={keywords}
                  placeholder="Search"
                  className="border-none bg-white pr-12"
                  onChange={(e) => setKeywords(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setConfirmedKeywords(keywords);
                    }
                  }}
                />
                <Button
                  size={"icon"}
                  className="absolute top-1/2 right-2 size-8 -translate-y-1/2"
                  onClick={() => setConfirmedKeywords(keywords)}
                >
                  <Search className="size-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-cooper">Categories</p>

              {availableCategories.map((item) => (
                <div
                  key={item}
                  className="flex flex-row items-start space-y-0 space-x-3"
                >
                  <Checkbox
                    id={item}
                    className="size-5 rounded-full border-none bg-white"
                    checked={selectedCategories.includes(item)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedCategories((prev) => [...prev, item]);
                      } else {
                        setSelectedCategories((prev) =>
                          prev.filter((cat) => cat !== item),
                        );
                      }
                    }}
                  />
                  <Label htmlFor={item} className="grow text-sm font-normal">
                    {item}
                  </Label>
                  <p className="ml-auto text-sm">
                    (
                    {
                      allNews.filter((news) =>
                        news.categories?.some((cat) => cat.title === item),
                      ).length
                    }
                    )
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex grow flex-col gap-4">
          {(selectedCategories.length > 0 || confirmedKeywords) && (
            <div className="flex flex-wrap gap-2">
              {confirmedKeywords && (
                <Badge
                  className="hover:bg-blue hover:text-blue-foreground cursor-pointer outline"
                  asChild
                >
                  <motion.button
                    initial={{
                      x: 10,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                    }}
                    onClick={() => {
                      setConfirmedKeywords("");
                      setKeywords("");
                    }}
                  >
                    Keywords: {confirmedKeywords}
                    <X className="-mr-1 size-3" />
                  </motion.button>
                </Badge>
              )}
              {selectedCategories.map((category) => (
                <Badge
                  key={category}
                  className="hover:bg-blue hover:text-blue-foreground cursor-pointer outline"
                  asChild
                >
                  <motion.button
                    initial={{
                      x: 10,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                    }}
                    onClick={() =>
                      setSelectedCategories((prev) =>
                        prev.filter((cat) => cat !== category),
                      )
                    }
                  >
                    {category}
                    <X className="-mr-1 size-3" />
                  </motion.button>
                </Badge>
              ))}
            </div>
          )}

          <motion.p
            initial={{
              x: 10,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
            }}
            className="text-blue font-bold"
          >
            {availableNews.length} News
          </motion.p>

          {availableNews.map((news, i) => (
            <Link
              key={news.title + `${i}`}
              href={`/news/${news.slug?.current}`}
            >
              <motion.div
                initial={{
                  x: 10,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
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
                    src={news.mainImageUrl!}
                    alt="Placeholder"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="text-blue flex grow flex-col p-4 sm:p-6">
                  <h2 className="font-cooper text-orange line-clamp-1 text-2xl">
                    {news.title}
                  </h2>
                  <p className="text-foreground line-clamp-1 text-sm sm:line-clamp-2">
                    {toPlainText(news.content ?? [])}
                  </p>
                  <p className="mt-auto line-clamp-1 text-xs">
                    {new Date(news.publishedAt!).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    | {news.categories?.map((cat) => cat.title).join(", ")}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
