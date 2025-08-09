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

export function ImpactPageContent({
  charities,
  totalRaised,
}: {
  charities: CHARITIES_QUERYResult;
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
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-24 sm:gap-24 sm:px-16 sm:py-32">
      <motion.div
        variants={{
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        }}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="flex w-full flex-col gap-8 sm:gap-12"
      >
        <motion.h1
          variants={variants}
          className="text-orange font-cooper text-center text-4xl sm:text-7xl"
        >
          The benefits of donating with blockchain
        </motion.h1>

        <motion.div
          variants={variants}
          className="bg-yellow text-yellow-foreground flex flex-col gap-12 rounded-lg p-6 md:p-12 lg:p-16"
        >
          <div className="flex flex-wrap items-start justify-center gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex w-full max-w-40 flex-col items-center gap-4"
              >
                <p className="font-cooper text-center text-2xl">
                  {benefit.title}
                </p>

                <div className="flex aspect-square w-24 items-center justify-center rounded-full bg-white p-4">
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="aspect-square w-full"
                  />
                </div>

                <p className="text-center text-black">{benefit.description}</p>
              </div>
            ))}
          </div>

          <p className="font-cooper text-center text-xl sm:text-3xl">
            PLUS: Every donation made through Buddies for Paws is 100% matched
            by <span className="underline">BONK</span>, doubling our impact.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={{
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        }}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="flex w-full flex-col gap-8 sm:gap-12"
      >
        <motion.h2
          variants={variants}
          className="text-orange font-cooper text-center text-4xl sm:text-6xl"
        >
          Making a difference
        </motion.h2>

        <motion.div
          variants={variants}
          className="bg-yellow text-yellow-foreground rounded-lg p-6 md:p-12 lg:p-16"
        >
          <div className="mx-auto flex w-full max-w-xl flex-col gap-8">
            <div className="mx-auto flex w-full max-w-sm flex-col gap-2">
              {!!totalRaised[0].amount && (
                <p className="font-cooper text-center text-4xl sm:text-6xl">
                  ${totalRaised[0].amount.toLocaleString("en-US")}
                </p>
              )}

              <p className="text-center font-bold sm:text-lg">
                donated to over 12 animal welfare and wildlife charities since
                2024
              </p>
            </div>

            {!isLoading && (
              <p className="text-center text-black">
                Thanks to your generosity Buddies for Paws has donated{" "}
                <span className="text-yellow-foreground font-semibold">
                  {Math.round(donated / 1e9).toLocaleString("en-US")}
                </span>{" "}
                SOL and{" "}
                <span className="text-yellow-foreground font-semibold">
                  {Math.round(bonkDonated / 1e5).toLocaleString("en-US")}
                </span>{" "}
                BONK to 12 charities and counting, all while burning{" "}
                <span className="text-yellow-foreground font-semibold">
                  {Math.round(burned / 1e5).toLocaleString("en-US")}
                </span>{" "}
                BONK to make our community even stronger!
              </p>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-md bg-white p-6 text-center"
                >
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
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="flex w-full flex-col gap-8"
      >
        <h2 className="text-orange font-cooper text-center text-4xl sm:text-6xl">
          Donating is easy
        </h2>

        <Button
          variant={"yellow"}
          size={"sm"}
          className="mx-auto w-full max-w-64"
          asChild
        >
          <Link href={"https://bonkforpaws.com/"} target="_blank">
            Click here to donate
          </Link>
        </Button>

        <p className="mx-auto w-full max-w-lg text-center">
          To learn more about our mission, explore the rest of our site,{" "}
          <Link
            href={"#footer"}
            className="text-yellow-foreground font-semibold underline"
          >
            subscribe to our newsletter
          </Link>
          , and follow us on{" "}
          <Link
            href={SITE_CONFIG.links.x}
            target="_blank"
            className="text-yellow-foreground font-semibold underline"
          >
            X
          </Link>{" "}
          and{" "}
          <Link
            href={SITE_CONFIG.links.instagram}
            target="_blank"
            className="text-yellow-foreground font-semibold underline"
          >
            Instagram
          </Link>
          .
        </p>

        <div className="flex flex-col gap-4">
          <p className="text-orange font-cooper text-center text-3xl">
            Any questions?
          </p>
          <Button
            variant={"yellow"}
            size={"sm"}
            className="mx-auto w-full max-w-64"
            asChild
          >
            <Link href={"/contact"}>Contact us</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
