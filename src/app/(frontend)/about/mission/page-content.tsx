"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import BFPFamilyWithBONK from "../../../../../images/about/BFP_Family_With_BONK.png";
import BFPPoseHelpingFriends01 from "../../../../../images/about/BFP_Pose_Helping_Friends_01.png";
import MonkeDAOSolstice from "../../../../../images/about/MonkeDAO-Solstice_332_small.png";
import DogSticker from "../../../../../images/stickers/dog sticker.png";
import ExclamationMarkStickerOrange from "../../../../../images/stickers/Exclamation mark sticker orange.png";
import HeartStickerOrange from "../../../../../images/stickers/heart sticker orange.png";
import HeartStickerYellow from "../../../../../images/stickers/heart sticker yellow.png";
import ILoveBFPSticker from "../../../../../images/stickers/i love bfp sticker.png";
import MatchedByBonkStickerOrange from "../../../../../images/stickers/matched by bonk sticker orange.png";
import TurtleSticker from "../../../../../images/stickers/turtle sticker.png";

export function MissionPageContent() {
  return (
    <div>
      <section className="bg-orange text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 sm:px-16 sm:py-32">
          <div className="grid gap-x-16 gap-y-6 lg:grid-cols-2">
            <div className="flex items-center justify-center lg:order-1">
              <div className="relative">
                <Image
                  src={ExclamationMarkStickerOrange}
                  alt="Exclamation Mark Sticker Orange"
                  className="animate-float-windy absolute top-0 right-0 w-[15%]"
                />
                <Image
                  src={BFPFamilyWithBONK}
                  alt="BFP Family With BONK"
                  className="mx-auto -mt-16 w-full max-w-96 lg:max-w-none"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h1 className="font-cooper text-5xl sm:text-6xl">About us</h1>
              <p className="sm:text-lg">
                <b>
                  Buddies for Paws (BFP) is a charitable initiative launched in
                  2024 to support animal welfare and wildlife conservation
                  charities around the world.
                </b>
              </p>
              <Button variant={"yellow"} className="mr-auto" asChild>
                <Link href={"https://bonkforpaws.com/"}>DONATE NOW</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow text-orange overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-16 sm:px-16 sm:py-24">
          <div className="relative flex flex-col justify-center gap-4 text-center">
            <p className="font-semibold">OUR MISSION</p>
            <p className="font-cooper text-center text-2xl sm:text-3xl lg:text-4xl">
              To support animal welfare and wildlife conservation charities
              worldwide through community-led fundraising, enabled by Web3.
            </p>

            <Image
              src={TurtleSticker}
              alt="Turtle Sticker "
              className="animate-float-soft absolute top-0 -right-12 w-16 sm:w-20 lg:right-0"
            />
            <Image
              src={DogSticker}
              alt="Dog Sticker "
              className="animate-float-windy absolute -bottom-12 -left-12 w-16 sm:w-20"
            />
          </div>
        </div>
      </section>

      <section className="bg-background text-foreground">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 sm:px-16 sm:py-32">
          <div className="relative grid gap-x-16 gap-y-8 lg:grid-cols-2">
            <div className="lg:order-1">
              <Image
                src={MonkeDAOSolstice}
                alt="MonkeDAO Solstice"
                className="w-full rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-center gap-6">
              <p className="sm:text-lg">
                <b>BFP adores animals and those that take care of them.</b>{" "}
                That&apos;s why, through our close-knit community forged in the
                world of Web3, we host community-led events, create exclusive
                merch and encourage direct donations to those that need it most.
                Interested in working with us?{" "}
                <b>Click below for our details.</b>
              </p>
              <Button variant={"yellow"} className="mr-auto" asChild>
                <Link href={"/contact"}>Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange overflow-hidden text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 sm:px-16 sm:py-32">
          <div className="relative grid gap-x-16 gap-y-16 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="relative mt-8 w-full max-w-80">
                <Image
                  src={MatchedByBonkStickerOrange}
                  alt="Matched by BONK Sticker Orange"
                  className="w-full rounded-lg"
                />

                <Image
                  src={ExclamationMarkStickerOrange}
                  alt="Exclamation Mark Sticker Orange"
                  className="animate-float-soft absolute -top-12 -right-8 w-[20%]"
                />

                <Image
                  src={HeartStickerYellow}
                  alt="Heart Sticker Yellow"
                  className="animate-float-windy absolute -bottom-16 -left-12 w-[20%]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6">
              <p className="sm:text-lg">
                <b>
                  BONK is the coin behind BFP, and they&apos;re leading the way
                  when it comes to using Crypto for doing good.
                </b>{" "}
                Every single donation is matched 100% by BONK, making your money
                go further for animals in need.
              </p>
              <Button variant={"yellow"} className="mr-auto" asChild>
                <Link href={"#"}>Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow text-orange">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 sm:px-16 sm:py-32">
          <div className="relative grid gap-x-16 gap-y-8 lg:grid-cols-2">
            <div className="flex items-center justify-center lg:order-1">
              <div className="relative">
                <Image
                  src={BFPPoseHelpingFriends01}
                  alt="BFP Pose Helping Friends 01"
                  className="w-full rounded-lg"
                />

                <Image
                  src={ILoveBFPSticker}
                  alt="I Love BFP Sticker"
                  className="animate-float-soft absolute top-[10%] left-[50%] w-[25%]"
                />

                <Image
                  src={HeartStickerOrange}
                  alt="Heart Sticker Orange"
                  className="animate-float-windy absolute top-[25%] left-[3%] w-[15%]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <p className="sm:text-lg">
                <b>
                  Whether it&apos;s Bani the baby elephant, Big Papa the
                  Orangutan or Hero the pup-in-training, each of our guardian
                  animals are loved, cared for and well looked after because of
                  the generosity of the BFP community.
                </b>
              </p>
              <Button variant={"orange"} className="mr-auto" asChild>
                <Link href={"https://bonkforpaws.com/"} target="_blank">
                  Donate today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// export function MissionPageContent() {
//   return (
//     <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 sm:px-16 sm:py-32">
//       <motion.div
//         variants={{
//           visible: {
//             transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//           },
//         }}
//         initial="hidden"
//         animate="visible"
//         className="flex w-full flex-col gap-12"
//       >
//         <motion.div
//           variants={variants}
//           className="relative h-96 rounded-lg bg-black"
//         >
//           <Image
//             src={bannerImage}
//             alt="banner"
//             className="absolute inset-0 h-full w-full object-cover opacity-40"
//           />
//           <Image
//             src={bannerImage}
//             alt="banner"
//             className="absolute inset-0 h-full w-full object-contain"
//           />
//         </motion.div>

//         <motion.h1
//           variants={variants}
//           className="text-orange font-cooper text-center text-5xl sm:text-7xl"
//         >
//           About Buddies for Paws
//         </motion.h1>

//         <motion.p
//           variants={variants}
//           className="text-orange mx-auto max-w-2xl text-center"
//         >
//           <b>
//             Buddies for Paws is a charitable initiative within the{" "}
//             <Link
//               href={"https://bonkcoin.com/"}
//               target="_blank"
//               className="underline"
//             >
//               BONK ecosystem
//             </Link>
//             , launched in 2024 with a simple mission: to utilize Web3 technology
//             and the power of community to make a tangible difference for animals
//             worldwide.
//           </b>
//           <br />
//           <br />
//           We partner with animal welfare and wildlife conservation charities to
//           raise funds through unique fundraising events,{" "}
//           <Link
//             href={"https://baobaoinu.com/"}
//             target="_blank"
//             className="underline"
//           >
//             <b>exclusive merchandise</b>
//           </Link>{" "}
//           drops, and digital activations, helping direct vital support to
//           animals in need.
//           <br />
//           <br />
//           Donations made through Buddies for Paws are{" "}
//           <b>matched 100% by BONK</b>, helping your gift go further and support
//           animal rescues, wildlife sanctuaries, and nature-first initiatives
//           worldwide.
//         </motion.p>
//         <motion.div
//           variants={variants}
//           className="mx-auto flex max-w-64 flex-col gap-4"
//         >
//           <p className="text-orange font-cooper text-center text-3xl">
//             Any questions?
//           </p>
//           <Button variant={"yellow"} asChild>
//             <Link href={"/contact"}>Contact us</Link>
//           </Button>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
