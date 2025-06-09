"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

export function EventPageContent({ event }: { event: any }) {
  const photos = event.gallery.map((photo: StaticImageData) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
  }));

  return (
    <div>
      <div className="relative z-0 w-full overflow-hidden bg-black">
        <Image
          src={event.image}
          alt="KK9R Guinness World Record"
          fill
          className="absolute inset-0 -z-10 h-full w-full scale-110 object-cover opacity-20"
        />

        <div className="relative z-0 mx-auto flex w-full max-w-7xl items-center justify-center p-6 py-24 sm:min-h-96 sm:py-40">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 0.3 }}
            className="font-cooper max-w-2xl text-center text-5xl text-white drop-shadow-lg sm:text-7xl"
          >
            {event.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="absolute top-6 left-6"
          >
            <Button
              asChild
              size={"sm"}
              variant={"yellow"}
              className="group w-10 p-0 sm:w-auto sm:px-5"
            >
              <Link href={"/events"}>
                <ArrowLeft className="sm:-ml-2" />

                <span className="hidden sm:inline">All Events</span>
              </Link>
            </Button>
          </motion.div>
          <Image
            src={event.image}
            alt="Header Journey"
            fill
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-24 sm:px-16 sm:py-40">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="font-cooper text-blue text-4xl sm:text-5xl"
          >
            About The Event
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="max-w-3xl"
          >
            {event.description}
          </motion.p>
        </div>

        {event.links.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {event.links.map((link: any, i: any) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: i * 0.1 + 0.2 }}
              >
                <Button
                  asChild
                  variant={i % 2 ? "yellow" : "orange"}
                  size={"sm"}
                >
                  <Link href={link.url} target="_blank">
                    {link.label}
                    <ExternalLink />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto w-full max-w-7xl p-6">
        <RowsPhotoAlbum
          photos={photos}
          render={{ image: renderNextImage }}
          targetRowHeight={320}
        />
      </div>
    </div>
  );
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
      viewport={{ once: true }}
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
      className="overflow-hidden rounded-md bg-black"
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </motion.div>
  );
}
