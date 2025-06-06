import { Marquee } from "@/components/magicui/marquee";
import { CHARITIES } from "@/lib/charities";
import Image from "next/image";
import Link from "next/link";

export default function CharityMarquee() {
  return (
    <div className="py-4 lg:py-12">
      <Marquee
        pauseOnHover
        className="[--duration:20s] [--gap:2rem] lg:[--gap:6rem]"
      >
        {CHARITIES.map((charity) => (
          <Link
            key={charity.name}
            href={charity.url}
            target="_blank"
            className="relative size-20 rounded-lg transition-all hover:scale-110 lg:size-32"
          >
            <Image
              alt={charity.name}
              src={charity.image}
              className="h-full w-full object-contain"
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
}
