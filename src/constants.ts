import { PublicKey } from "@solana/web3.js";
import { DepositDetails } from "./types";

export const PROGRAM_ID = process.env.NEXT_PUBLIC_PROGRAM_ID!;
export const PROGRAM_ID_PUBKEY = new PublicKey(PROGRAM_ID!);
export const APP_URL = process.env.NEXT_PUBLIC_URL!;
export const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL!;

export const bonkFoundationDefaultDetails: DepositDetails = {
  organizationId: 1,
  isAnonymous: false,
  pledgeCurrency: "SOL",
  pledgeAmount: "0",
  receiptEmail: "donations@bonk.foundation",
  firstName: "BONK",
  lastName: "Foundation",
  addressLine1: "123 Fake Street",
  country: "Canada",
  state: "ON",
  city: "Toronto",
  zipcode: " 1337",
};

export const matchAmount = 1;
export const burnAmount = 1;
export const maxMatchAmountSol = 100;
export const maxMatchAmountBonk = 1_000_000_000;
export const maxBurnAmount = 100;
