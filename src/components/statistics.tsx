"use client";

import { Button } from "@/components/ui/button";
import { PROGRAM_ID, PROGRAM_ID_PUBKEY, RPC_URL } from "@/constants";
import { IDL } from "@/idl";
import { SITE_CONFIG } from "@/lib/site-config";
import {
  CHARITIES_QUERYResult,
  TOTAL_RAISED_QUERYResult,
} from "@/sanity/types";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";
import { motion, Variants } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import MatchedByBonkedImage from "../../images/stickers/matched by bonk sticker orange.png";
import ExclamationMarkStickerOrange from "../../images/stickers/Exclamation mark sticker orange.png";
import HeartStickerOrange from "../../images/stickers/heart sticker orange.png";
import BFPPoseHighFive001 from "../../images/BFP_Pose_HighFive_001.png";
import Image from "next/image";

const preflightCommitment = "processed";
const commitment = "processed";
const connection = new Connection(RPC_URL);

const donationState = PublicKey.findProgramAddressSync(
  [Buffer.from("donation_state")],
  PROGRAM_ID_PUBKEY,
)[0];

const bonkDonationState = PublicKey.findProgramAddressSync(
  [Buffer.from("bonk_donation_state")],
  PROGRAM_ID_PUBKEY,
)[0];

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const benefits = [
  {
    title: "Speedy donations",
    description: "Funds arrive instantly, without bank delays",
    icon: "/lighting.svg",
  },
  {
    title: "Global reach",
    description: "Anyone, anywhere, can donate",
    icon: "/globe.svg",
  },
  {
    title: "Secure transactions",
    description: "Donations are verified and protected on-chain",
    icon: "/lock.svg",
  },
  {
    title: "Complete transparency",
    description: "Every donation is recorded on a public ledger",
    icon: "/transparency.svg",
  },
  {
    title: "Proof of donation",
    description: "Fully auditable, with an immutable record",
    icon: "/proof.svg",
  },
];

export function Statistics({
  totalRaised,
}: {
  totalRaised: TOTAL_RAISED_QUERYResult;
}) {
  const wallet = useAnchorWallet();
  const [donated, setDonated] = useState(0);
  const [bonkDonated, setBonkDonated] = useState(0);
  const [burned, setBurned] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const stats = [
    {
      title: "Sol Donated",
      amount: donated / 1e9,
    },
    {
      title: "Bonk Donated",
      amount: bonkDonated / 1e5,
    },
    {
      title: "Bonk Matched",
      amount: burned / 1e3,
    },
    {
      title: "BONK Burned",
      amount: burned / 1e5,
    },
  ];

  useEffect(() => {
    const getDonationState = async () => {
      try {
        const provider = new AnchorProvider(connection, wallet!, {
          preflightCommitment,
          commitment,
        });

        const program = new Program(IDL, PROGRAM_ID, provider);

        const res = await program.account.donationState.fetch(donationState);
        const donatedAmount =
          res.solDonated.toNumber() + res.solMatched.toNumber();

        const bonkRes =
          await program.account.bonkDonationState.fetch(bonkDonationState);
        const bonkDonatedAmount =
          bonkRes.bonkDonated.toNumber() + bonkRes.bonkMatched.toNumber();

        setDonated(donatedAmount);
        setBonkDonated(bonkDonatedAmount);
        setBurned(res.bonkBurned.toNumber() + bonkRes.bonkBurned.toNumber());
      } catch (e) {
        console.error(e);
        setDonated(0);
        setBonkDonated(0);
        setBurned(0);
      }
      setIsLoading(false);
    };

    getDonationState();
  }, []);

  return (
    <div className="bg-yellow text-orange overflow-hidden px-6 py-24 sm:px-16 sm:py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-16">
        <div>
          {!!totalRaised[0].amount && (
            <h2 className="font-cooper text-center text-4xl sm:text-5xl">
              Almost ${totalRaised[0].amount.toLocaleString("en-US")}
            </h2>
          )}
          <p className="font-cooper textx-2xl text-center sm:text-3xl">
            raised for animal welfare since 2024
          </p>
        </div>

        <div className="grid gap-4 rounded-lg bg-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 text-center">
              {isLoading ? (
                <div className="mt-2">
                  <Bouncy size="24" color="#ea5239" />
                </div>
              ) : (
                <CountUp
                  duration={4}
                  useEasing
                  className="font-cooper text-2xl"
                  end={stat.amount}
                />
              )}

              <p className="font-semibold uppercase">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src={ExclamationMarkStickerOrange}
                alt="Exclamation Mark Sticker Orange"
                className="animate-float-windy absolute top-0 right-0 w-[15%]"
              />
              <Image
                src={HeartStickerOrange}
                alt="Heart Sticker Orange"
                className="animate-float-soft absolute bottom-0 left-0 w-[15%]"
              />
              <Image
                src={BFPPoseHighFive001}
                alt="BFP Pose High Five"
                className="w-full max-w-96 md:max-w-none"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="relative mx-auto flex max-w-80 items-center gap-2 sm:mx-0">
              <Image
                src={MatchedByBonkedImage}
                alt="Matched by Bonked Sticker Orange"
                className="w-full"
              />

              <Image
                src={HeartStickerOrange}
                alt="Heart Sticker Orange"
                className="animate-float-windy absolute -right-14 w-[16%] shrink-0 sm:-right-16 sm:w-[20%]"
              />
            </div>

            <p className="text-center sm:text-left sm:text-lg">
              <b>
                All donations made through Buddies for Paws are matched 100% by
                BONK,
              </b>{" "}
              providing additional funding to support animal welfare charities
              and wildlife conservation efforts worldwide.
            </p>
            <Button
              variant={"orange"}
              className="mr-auto ml-auto sm:ml-0"
              asChild
            >
              <Link href={"https://bonkforpaws.com/"}>Donate today</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
