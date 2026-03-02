"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BFP_Pose_Ledger_001 from "../../images/BFP_Pose_Ledger_001.png";
import HeartStickerBlue from "../../images/stickers/heart sticker blue.png";
import SpecialBuy from "../../images/stickers/special buy.png";

export function WhatsNewCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="bg-teal text-blue py-24 sm:py-32">
      <Carousel
        setApi={setApi}
        opts={{ align: "center", duration: 0, watchDrag: false, loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.2 }}
          className="max-w-9xl relative mx-auto flex w-full flex-col gap-2 overflow-hidden p-6"
        >
          {/* <div className="absolute top-6 right-6 z-10 flex items-center gap-2 sm:top-10 sm:right-10">
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
          </div> */}

          <CarouselContent className="-ml-6">
            <CarouselItem className="flex pl-6">
              <div className="relative z-0 flex w-full flex-col overflow-hidden rounded-lg bg-white/80 p-6 sm:p-12">
                <div className="grid gap-x-16 gap-y-8 lg:grid-cols-2">
                  <div className="relative mx-auto w-full max-w-96 lg:max-w-none">
                    <Image
                      src={BFP_Pose_Ledger_001}
                      alt="BONK x Ledger Wallet"
                      className="w-full"
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
                  <div className="flex flex-col justify-center gap-6">
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

                    <Button asChild className="mr-auto" variant="blue">
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
      </Carousel>
    </div>
  );
}
