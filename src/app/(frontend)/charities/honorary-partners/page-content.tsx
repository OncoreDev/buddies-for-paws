"use client";

import { Button } from "@/components/ui/button";
import { CHARITIES_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import BFPPoseDewBonkWalking from "../../../../../images/charity/BFP_Pose_Dew_Bonk_walking_001.png";
import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function LocalCharitiesPageContent({
  charities,
}: {
  charities: CHARITIES_QUERYResult;
}) {
  const [revealIndex, setRevealIndex] = useState<number[]>([]);

  return (
    <div>
      <section className="bg-teal text-blue">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-16 sm:px-16">
          <div className="grid gap-x-16 gap-y-6 lg:grid-cols-2">
            <div className="flex items-center justify-center lg:order-1">
              <div className="relative">
                <Image
                  src={BFPPoseDewBonkWalking}
                  alt="BFP Family With BONK"
                  className="mx-auto -mt-12 -mb-8 w-full max-w-96 lg:-mb-12 lg:max-w-none"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h1 className="font-cooper text-5xl sm:text-6xl">
                Meet our honorary partners
              </h1>
              <p className="sm:text-lg">
                <b>
                  Explore some of the local and regional charities we’ve
                  supported, as we continue helping smaller organisations.
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-24">
        {charities.map((charity, i) => (
          <div
            key={charity.name}
            className={cn(
              "relative w-full max-w-64 transition-all duration-500 transform-3d",
              revealIndex.includes(i) && "rotate-y-180",
            )}
          >
            <div className="bg-blue overflow-hidden rounded-lg backface-hidden">
              <img
                src={charity.imageUrl!}
                alt={charity.name!}
                className="bg-muted aspect-square w-full object-cover"
              />

              <div className="flex flex-col gap-4 p-6">
                <img
                  src={charity.logoUrl!}
                  alt={charity.name!}
                  className="aspect-7/3 w-full object-contain brightness-0 invert"
                />

                <Button
                  variant={"teal"}
                  size={"sm"}
                  onClick={() =>
                    setRevealIndex(
                      revealIndex.includes(i)
                        ? revealIndex.filter((index) => index !== i)
                        : [...revealIndex, i],
                    )
                  }
                >
                  Read more
                </Button>
              </div>
            </div>

            <div className="bg-blue absolute inset-0 flex rotate-y-180 flex-col gap-4 overflow-hidden rounded-lg p-6 text-white backface-hidden">
              <Button
                variant={"teal"}
                size={"icon"}
                className="-my-2 -mr-2 ml-auto size-8"
                onClick={() =>
                  setRevealIndex(revealIndex.filter((index) => index !== i))
                }
              >
                <X />
              </Button>

              <p className="grow overflow-auto text-center">
                {charity.description || "No description available."}
              </p>

              <Button asChild variant={"teal"} size={"sm"} className="mt-auto">
                <Link href={charity.donationUrl!} target="_blank">
                  DONATE NOW
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
