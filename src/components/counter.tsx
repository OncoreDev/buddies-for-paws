import { Button } from "@/components/ui/button";
import { TOTAL_RAISED_QUERYResult } from "@/sanity/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Counter({
  totalRaised,
}: {
  totalRaised: TOTAL_RAISED_QUERYResult;
}) {
  return (
    <div className="bg-blue flex flex-col gap-16 p-6 pt-12 pb-16">
      <div className="flex flex-col gap-8">
        {!!totalRaised[0].amount && (
          <div className="text-yellow mx-auto flex w-full max-w-md flex-col gap-2">
            <p className="font-cooper text-center text-4xl sm:text-6xl">
              ${totalRaised[0].amount.toLocaleString("en-US")}
            </p>
            <p className="text-center font-bold sm:text-lg">
              Almost ${totalRaised[0].amount.toLocaleString("en-US")} raised for
              animals
            </p>
          </div>
        )}

        <p className="mx-auto w-full max-w-lg text-center text-white">
          Since 2024, Buddies for Paws has helped raise almost $
          {totalRaised[0].amount?.toLocaleString("en-US") || "-"} for animal
          welfare and wildlife conservation charities worldwide.
          <br />
          <br />
          Donations made through Buddies for Paws are matched 100% by BONK,
          helping your gift go even further for animals in need
        </p>

        <Button
          variant={"yellow"}
          size={"sm"}
          className="group mx-auto"
          asChild
        >
          <Link href={"/about/impact"}>
            Learn more{" "}
            <ArrowRight className="ease-spring -mr-2 -ml-[18px] inline opacity-0 transition-all duration-400 group-hover:ml-0 group-hover:opacity-100" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
