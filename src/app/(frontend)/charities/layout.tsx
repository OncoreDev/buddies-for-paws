import Image from "next/image";
import ExclamationMarkStickerBlue from "../../../../images/stickers/Exclamation mark sticker blue.png";
import HeartStickerTeal from "../../../../images/stickers/heart sticker blue.png";
import MatchedByBonkStickerBlue from "../../../../images/stickers/matched by bonk sticker blue.png";
import PoweredByBonkStickerOrange from "../../../../images/stickers/powered by bonk sticker orange.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CharitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <section className="bg-teal text-blue overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-16 sm:px-16 sm:py-24">
          <div className="relative grid gap-x-16 gap-y-16 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative mt-8 w-full max-w-80">
                <Image
                  src={PoweredByBonkStickerOrange}
                  alt="Powered by BONK Sticker Orange"
                  className="w-full rounded-lg"
                />

                <Image
                  src={ExclamationMarkStickerBlue}
                  alt="Exclamation Mark Sticker Blue"
                  className="animate-float-soft absolute -top-12 -right-8 w-[20%]"
                />

                <Image
                  src={HeartStickerTeal}
                  alt="Heart Sticker Teal"
                  className="animate-float-windy absolute -bottom-16 -left-12 w-[20%] -rotate-45"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6">
              {/* <p className="sm:text-lg">
                <b>
                  BONK is the coin behind BFP, and they&apos;re leading the way
                  when it comes to using Crypto for doing good.
                </b>{" "}
                Every single donation is matched 100% by BONK, making your money
                go further for animals in need.
              </p> */}
              <p className="sm:text-lg">
                <b>
                  BONK is the coin behind BFP, and together we're leading the
                  way when it comes to using crypto for doing good.
                </b>{" "}
                Since 2024 we've raised almost $600,000 for animal welfare
                charities worldwide, and we're just getting started.
              </p>
              <Button variant={"blue"} className="mr-auto" asChild>
                <Link href={"/about"}>Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
