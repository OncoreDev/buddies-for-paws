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
        <div className="text-yellow mx-auto flex w-full max-w-sm flex-col gap-2">
          {!!totalRaised[0].amount && (
            <p className="font-cooper text-center text-4xl sm:text-6xl">
              ${totalRaised[0].amount.toLocaleString("en-US")}
            </p>
          )}

          <p className="text-center font-bold sm:text-lg">
            donated to over 12 animal welfare and wildlife charities since 2024
          </p>
        </div>

        <p className="mx-auto w-full max-w-lg text-center text-white">
          All donations made through Buddies for Paws are 100% matched by{" "}
          <Link
            href={"https://bonkcoin.com/"}
            target="_blank"
            className="text-yellow font-semibold underline"
          >
            BONK
          </Link>
          , doubling the impact for animals in need.
          <br />
          <br />
          To learn more about the benefits of donating through Buddies for Paws
          and the benefits of blockchain technology, click below.
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
