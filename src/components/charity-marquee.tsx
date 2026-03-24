import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { CHARITIES_QUERYResult } from "@/sanity/types";
import Link from "next/link";

export function CharityMarquee({
  charities,
}: {
  charities: CHARITIES_QUERYResult;
}) {
  return (
    <div className="bg-orange py-4 lg:py-8">
      <Marquee
        pauseOnHover
        className="[--duration:20s] [--gap:4rem] lg:[--gap:6rem]"
      >
        {charities.map((charity) => (
          <Link
            key={charity.name}
            href={charity.donationUrl || ""}
            target="_blank"
            className="relative rounded-lg transition-all hover:scale-105"
          >
            <img
              alt={charity.name || ""}
              src={charity.logoUrl || ""}
              className={cn(
                "h-20 object-contain brightness-0 invert lg:h-24",
                charity.name ===
                  "Scottish Society for the Prevention of Cruelty to Animals" &&
                  "mt-3 h-14 lg:h-18",
                charity.name === "Dogs for Better Lives" && "mt-2 h-14 lg:h-20",
              )}
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
}

// export function CharityMarquee({
//   charities,
// }: {
//   charities: CHARITIES_QUERYResult;
// }) {
//   return (
//     <div className="py-4 lg:py-12">
//       <Marquee
//         pauseOnHover
//         className="[--duration:20s] [--gap:2rem] lg:[--gap:6rem]"
//       >
//         {charities.map((charity) => (
//           <Link
//             key={charity.name}
//             href={charity.donationUrl || ""}
//             target="_blank"
//             className="relative size-20 rounded-lg transition-all hover:scale-110 lg:size-32"
//           >
//             <img
//               alt={charity.name || ""}
//               src={charity.logoUrl || ""}
//               className="h-full w-full object-contain"
//             />
//           </Link>
//         ))}
//       </Marquee>
//     </div>
//   );
// }
