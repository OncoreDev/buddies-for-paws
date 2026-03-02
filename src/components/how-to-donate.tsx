"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import HowToDonateImage from "../../images/how-to-donate.png";
import Image from "next/image";

const steps = [
  {
    img: "",
    title: "Connect your wallet",
    description: "Use a supported crypto wallet to donate securely",
  },
  {
    img: "",
    title: "Make your donation",
    description: "Choose the amount and complete your donation",
  },
  {
    img: "",
    title: "BONK matches it",
    description: "BONK 100% matches your donation",
  },
  {
    img: "",
    title: "Help animals everywhere",
    description: "Your donation supports animal welfare charities",
  },
];

export function HowToDonate() {
  return (
    <div className="bg-orange px-6 py-24 text-white sm:px-16 sm:py-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:gap-12">
        <h2 className="font-cooper text-center text-4xl sm:text-5xl">
          How to donate
        </h2>

        <Image src={HowToDonateImage} alt="How to donate" className="w-full" />

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:px-12">
          {steps.map((step, index) => (
            <div
              key={"steps-" + index}
              className="flex flex-col gap-4 sm:gap-6"
            >
              {/* <div className="bg-yellow mx-auto aspect-square w-full max-w-64 rounded-full sm:max-w-none"></div> */}
              <div className="bg-yellow font-cooper text-orange mx-auto flex aspect-square size-10 items-center justify-center rounded-full text-xl sm:size-14 sm:text-2xl">
                {index + 1}
              </div>

              <div>
                <h4 className="font-cooper text-center text-2xl sm:text-3xl">
                  {step.title}
                </h4>
                <p className="mt-4 text-center sm:text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button variant={"yellow"} className="mx-auto" asChild>
          <Link href="https://bonkforpaws.com/" target="_blank">
            DONATE NOW
          </Link>
        </Button>

        <Link href={"/about"} className="text-center underline">
          <b>New to crypto?</b> Learn how donating works here
        </Link>
      </div>
    </div>
  );
}
