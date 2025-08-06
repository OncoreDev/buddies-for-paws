"use client";

import { PROGRAM_ID, PROGRAM_ID_PUBKEY, RPC_URL } from "@/constants";
import { IDL } from "@/idl";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Bouncy } from "ldrs/react";
import type { Variants } from "motion";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import "ldrs/react/Bouncy.css";

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

const variant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

export function DonationStatistics() {
  const wallet = useAnchorWallet();
  const [donated, setDonated] = useState(0);
  const [bonkDonated, setBonkDonated] = useState(0);
  const [burned, setBurned] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);

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
    <div className="bg-orange text-orange-foreground">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-24 sm:py-32">
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          transition={{
            type: "spring",
            delay: 0.2,
            delayChildren: 0.2,
            staggerChildren: 0.2,
          }}
          onAnimationComplete={() => setIsAnimationEnded(true)}
          className="flex flex-col gap-8"
        >
          <motion.div variants={variant} className="text-center">
            {isLoading || !isAnimationEnded ? (
              <div className="mt-2">
                <Bouncy size="48" color="#ebe969" />
              </div>
            ) : (
              <CountUp
                duration={4}
                useEasing
                className="font-cooper text-4xl sm:text-7xl"
                end={123_456_789}
                prefix="$"
              />
            )}

            <p className="mt-4 text-lg font-semibold text-white sm:text-xl">
              TOTAL RAISED
            </p>
          </motion.div>

          <motion.div
            variants={variant}
            className="grid w-full gap-8 rounded-lg border-2 border-white py-8 text-center sm:w-auto sm:px-16 sm:py-12 md:grid-cols-2 md:gap-16"
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                {isLoading || !isAnimationEnded ? (
                  <div className="mt-2">
                    <Bouncy size="48" color="#ebe969" />
                  </div>
                ) : (
                  <CountUp
                    duration={4}
                    useEasing
                    className="font-cooper text-2xl sm:text-4xl"
                    end={donated / 1e9}
                  />
                )}

                <p className="mt-2 font-semibold text-white">SOL DONATED</p>
              </div>

              <Separator className="mx-auto !h-[2px] max-w-48 rounded-full bg-white" />

              <div className="flex flex-col">
                {isLoading || !isAnimationEnded ? (
                  <div className="mt-2">
                    <Bouncy size="48" color="#ebe969" />
                  </div>
                ) : (
                  <CountUp
                    duration={4}
                    useEasing
                    className="font-cooper text-2xl sm:text-4xl"
                    end={bonkDonated / 1e5}
                  />
                )}

                <p className="mt-2 font-semibold text-white">BONK DONATED</p>
              </div>
            </div>

            <Separator className="mx-auto !h-[2px] max-w-48 rounded-full bg-white md:hidden" />

            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                {isLoading || !isAnimationEnded ? (
                  <div className="mt-2">
                    <Bouncy size="48" color="#ebe969" />
                  </div>
                ) : (
                  <CountUp
                    duration={4}
                    useEasing
                    className="font-cooper text-2xl sm:text-4xl"
                    end={Math.floor(burned / 1e3)}
                  />
                )}

                <p className="mt-2 font-semibold text-white">BONK MATCHED</p>
              </div>

              <Separator className="mx-auto !h-[2px] max-w-48 rounded-full bg-white" />

              <div className="flex flex-col">
                {isLoading || !isAnimationEnded ? (
                  <div className="mt-2">
                    <Bouncy size="48" color="#ebe969" />
                  </div>
                ) : (
                  <CountUp
                    duration={4}
                    useEasing
                    className="font-cooper text-2xl sm:text-4xl"
                    end={Math.floor(burned / 1e5)}
                  />
                )}

                <p className="mt-2 font-semibold text-white">BONK BURNED</p>
              </div>
            </div>
          </motion.div>

          <motion.p variants={variant} className="text-center text-white">
            All donations made through BFP are 100% matched by{" "}
            <span className="text-orange-foreground underline">BONK</span>
          </motion.p>

          <motion.div variants={variant} className="mx-auto">
            <Button variant={"yellow"} asChild>
              <Link href={"/about"}>Learn More</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
