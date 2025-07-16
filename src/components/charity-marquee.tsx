import { Marquee } from "@/components/magicui/marquee";
import { CHARITIES_QUERYResult } from "@/sanity/types";
import Link from "next/link";

export function CharityMarquee({
  charities,
}: {
  charities: CHARITIES_QUERYResult;
}) {
  return (
    <div className="py-4 lg:py-12">
      <Marquee
        pauseOnHover
        className="[--duration:20s] [--gap:2rem] lg:[--gap:6rem]"
      >
        {charities.map((charity) => (
          <Link
            key={charity.name}
            href={charity.donationUrl || ""}
            target="_blank"
            className="relative size-20 rounded-lg transition-all hover:scale-110 lg:size-32"
          >
            <img
              alt={charity.name || ""}
              src={charity.logoUrl || ""}
              className="h-full w-full object-contain"
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
}
