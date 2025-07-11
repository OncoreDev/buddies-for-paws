"use client";

import { PROGRAM_ID, PROGRAM_ID_PUBKEY, RPC_URL } from "@/constants";
import { IDL } from "@/idl";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Bouncy } from "ldrs/react";
import type { Variants } from "motion";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

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
      <div className="max-w-9xl mx-auto flex w-full flex-col gap-6 px-6 py-24 sm:py-32">
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
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 2xl:grid-cols-4"
        >
          <motion.div
            variants={variant}
            className="bg-yellow text-yellow-foreground col-span-full rounded-lg p-6 text-center md:py-12"
          >
            {isLoading || !isAnimationEnded ? (
              <div className="mt-2">
                <Bouncy size="48" color="#ea5239" />
              </div>
            ) : (
              <CountUp
                duration={4}
                useEasing
                className="font-cooper text-5xl sm:text-7xl"
                end={999_999_999}
                prefix="$"
              />
            )}

            <p className="mt-4 text-xl font-semibold">TOTAL RAISED</p>
          </motion.div>
          <motion.div
            variants={variant}
            className="bg-yellow text-yellow-foreground rounded-lg p-6 text-center md:py-12"
          >
            {isLoading || !isAnimationEnded ? (
              <div className="mt-2">
                <Bouncy size="48" color="#ea5239" />
              </div>
            ) : (
              <CountUp
                duration={4}
                useEasing
                className="font-cooper text-3xl sm:text-4xl"
                end={donated / 1e9}
              />
            )}

            <p className="mt-2 font-semibold">SOL DONATED</p>
          </motion.div>

          <motion.div
            variants={variant}
            className="bg-yellow text-yellow-foreground rounded-lg p-6 text-center md:py-12"
          >
            {isLoading || !isAnimationEnded ? (
              <div className="mt-2">
                <Bouncy size="48" color="#ea5239" />
              </div>
            ) : (
              <CountUp
                duration={4}
                useEasing
                className="font-cooper text-3xl sm:text-4xl"
                end={bonkDonated / 1e5}
              />
            )}

            <p className="mt-2 font-semibold">BONK DONATED</p>
          </motion.div>

          <motion.div
            variants={variant}
            className="bg-yellow text-yellow-foreground rounded-lg p-6 text-center md:py-12"
          >
            {isLoading || !isAnimationEnded ? (
              <div className="mt-2">
                <Bouncy size="48" color="#ea5239" />
              </div>
            ) : (
              <CountUp
                duration={4}
                useEasing
                className="font-cooper text-3xl sm:text-4xl"
                end={Math.floor(burned / 1e3)}
              />
            )}

            <p className="mt-2 font-semibold">BONK MATCHED</p>
          </motion.div>

          <motion.div
            variants={variant}
            className="bg-yellow text-yellow-foreground rounded-lg p-6 text-center md:py-12"
          >
            {isLoading || !isAnimationEnded ? (
              <div className="mt-2">
                <Bouncy size="48" color="#ea5239" />
              </div>
            ) : (
              <CountUp
                duration={4}
                useEasing
                className="font-cooper text-3xl sm:text-4xl"
                end={Math.floor(burned / 1e5)}
              />
            )}

            <p className="mt-2 font-semibold">BONK BURNED</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
