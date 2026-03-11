"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import BFP_Pose_Ledger_001 from "../../images/BFP_Pose_Ledger_001.png";
import BONKXBFP_NIGHT_PUB from "../../images/BONK-x-BFP_Website-Carousel.png";
import BONKXBFP_PILATES from "../../images/BONK-x-BFP_Pilates-Website-Banner.png";
import HeartStickerBlue from "../../images/stickers/heart sticker blue.png";
import SpecialBuy from "../../images/stickers/special buy.png";

export function WhatsNewCarousel() {
  return (
    <Carousel opts={{ align: "center" }} plugins={[Autoplay({ delay: 5000 })]}>
      <div className="bg-teal text-blue overflow-hidden py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.2 }}
          className="max-w-9xl relative mx-auto flex flex-col gap-6 px-6"
        >
          <div className="z-10 flex items-center justify-center sm:justify-end lg:absolute lg:top-6 lg:right-12">
            <div className="flex items-center gap-2 sm:gap-3">
              <CarouselPrevious
                size={"icon"}
                variant={"blue"}
                className="relative inset-0 size-10 -translate-0"
              />

              <CarouselNext
                size={"icon"}
                variant={"blue"}
                className="relative inset-0 size-10 -translate-0"
              />
            </div>
          </div>

          <CarouselContent className="-ml-8">
            <CarouselItem className="flex pl-8">
              <div className="relative z-0 flex w-full flex-col overflow-hidden rounded-lg bg-white/80 p-6 sm:p-8">
                <div className="grid gap-x-12 gap-y-8 lg:grid-cols-2">
                  <div className="relative mx-auto w-full">
                    <Image
                      src={BONKXBFP_PILATES}
                      alt="BONK x BFP Pilates Class"
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-6 text-center lg:items-start lg:text-left">
                    <p className="-mb-4 text-sm">
                      <b>Look After Yourself, Look After Animals.</b>
                    </p>
                    <h2 className="font-cooper text-4xl sm:text-5xl">
                      Charity Pilates Class
                    </h2>

                    <p className="text-black">
                      Join Buddies for Paws for a relaxing evening of all-levels
                      mat Pilates. Take a moment to stretch, unwind and reset at
                      the start of the week, while helping animals in need.
                      <br />
                      <br />
                      Every donation supports our animal charity partners, with
                      donations matched by BONK to increase the support reaching
                      animals around the world. A free wellness gift will be
                      waiting for every guest.
                    </p>

                    <Button asChild variant="blue">
                      <Link href="https://luma.com/41e9q2y5" target="_blank">
                        Reserve your spot
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="flex pl-8">
              <div className="relative z-0 flex w-full flex-col overflow-hidden rounded-lg bg-white/80 p-6 sm:p-8">
                <div className="grid gap-x-12 gap-y-8 lg:grid-cols-2">
                  <div className="relative z-0 mx-auto w-full">
                    <Image
                      src={BONKXBFP_NIGHT_PUB}
                      alt="BONK x BFP Night Pub Quiz"
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                    {/* <Image
                      src={HeartStickerBlue}
                      alt="Heart Sticker Blue"
                      className="animate-float-soft absolute top-[37%] left-[10%] w-[15%]"
                    />

                    <Image
                      src={SpecialBuy}
                      alt="Special Buy"
                      className="animate-float-windy absolute top-[77%] left-[40%] w-[60%]"
                    /> */}
                  </div>
                  <div className="flex flex-col items-center justify-center gap-6 text-center lg:items-start lg:text-left">
                    <p className="-mb-4 text-sm">
                      <b>
                        A Fun Night of Trivia, Prizes and Pints, All for Animals
                      </b>
                    </p>
                    <h2 className="font-cooper text-4xl sm:text-5xl">
                      Charity Pub Quiz
                    </h2>

                    <p className="text-black">
                      Join Buddies for Paws for a charity pub quiz bringing
                      people together for an evening of general knowledge,
                      community and prizes. Gather your team, test your
                      knowledge and enjoy a great night out while supporting
                      animal welfare charities.
                      <br />
                      <br />
                      Every donation supports our charity partners, with
                      donations matched by BONK to increase the support reaching
                      animals in need. Win prizes, meet new people and help
                      animals at the same time.
                    </p>

                    <Button asChild variant="blue">
                      <Link href="https://luma.com/y5p64egv" target="_blank">
                        Reserve your spot
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="flex pl-8">
              <div className="relative z-0 mb-auto flex w-full flex-col overflow-hidden rounded-lg bg-white/80 p-6 sm:p-8">
                <div className="grid gap-x-12 gap-y-8 lg:grid-cols-2">
                  <div className="relative mx-auto w-full">
                    <Image
                      src={BFP_Pose_Ledger_001}
                      alt="BONK x Ledger Wallet"
                      className="aspect-square w-full rounded-lg object-contain"
                    />
                    <Image
                      src={HeartStickerBlue}
                      alt="Heart Sticker Blue"
                      className="animate-float-soft absolute top-[37%] left-[10%] w-[15%]"
                    />

                    <Image
                      src={SpecialBuy}
                      alt="Special Buy"
                      className="animate-float-windy absolute top-[77%] left-[40%] w-[60%]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-6 text-center lg:items-start lg:text-left">
                    <p className="-mb-4 text-sm">
                      <b>SPECIAL BUY</b>
                    </p>
                    <h2 className="font-cooper text-4xl sm:text-5xl">
                      BONK x Ledger
                    </h2>

                    <p className="text-black">
                      <b>
                        Limited-edition BONK x Ledger wallets available now.
                      </b>{" "}
                      30% of proceeds support BFP, with every donation matched
                      by BONK.
                    </p>

                    <Button asChild variant="blue">
                      <Link
                        href="https://shop.ledger.com/pages/BONK?r=b269f5c87f28"
                        target="_blank"
                      >
                        Shop now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </motion.div>
      </div>
    </Carousel>
  );
}
