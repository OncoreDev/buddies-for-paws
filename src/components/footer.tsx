"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import FooterBG from "../../images/footer-bg.webp";
import { motion } from "motion/react";
import { SITE_CONFIG } from "@/lib/site-config";
import { BFPMaster } from "./logo/bfp-master";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer id="footer" className="bg-blue relative z-0 flex grow text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-16 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="font-cooper text-center text-5xl sm:text-left">
              Subscribe to our newsletter
            </p>
            <p className="mt-4 text-center sm:text-left">
              Follow our guardian animals, partners, and the impact we’re
              making.
            </p>

            <form
              method="post"
              action="https://bonkforpaws.us16.list-manage.com/subscribe/post"
              target="_blank"
              className="mt-12"
            >
              <div className="flex flex-row items-center gap-4 border-b border-white pb-2">
                <input
                  type="hidden"
                  name="u"
                  value="ca0cb7eff6bdf10bbae650d96"
                />
                <input type="hidden" name="id" value="9f80730d46" />
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  name="EMAIL"
                  type="email"
                  placeholder="Enter your email"
                  className="border-none px-0 font-bold placeholder:text-white/80 focus:ring-0!"
                />
                <Button
                  variant={"teal"}
                  size={"sm"}
                  type="submit"
                  className="sm:px-8"
                >
                  Sign up
                </Button>
              </div>
            </form>

            <BFPMaster className="text-teal mx-auto mt-12 w-full max-w-40 lg:mx-0" />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between">
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
              <Link href={"/news"}>News</Link>
              <Link href={"https://baobaoinu.com/"} target="_blank">
                Store
              </Link>
            </div>

            <div className="mt-auto pt-12">
              <div className="flex justify-center gap-10 lg:justify-start">
                <Link
                  href={SITE_CONFIG.links.x}
                  target="_blank"
                  className="hover:text-blue-foreground block transition-all hover:scale-110"
                >
                  <FaXTwitter className="size-8" />
                  <span className="sr-only">twitter</span>
                </Link>
                <Link
                  href={SITE_CONFIG.links.discord}
                  target="_blank"
                  className="hover:text-blue-foreground block transition-all hover:scale-110"
                >
                  <FaDiscord className="size-8" />
                  <span className="sr-only">discord</span>
                </Link>
                <Link
                  href={SITE_CONFIG.links.instagram}
                  target="_blank"
                  className="hover:text-blue-foreground block transition-all hover:scale-110"
                >
                  <FaInstagram className="size-8" />
                  <span className="sr-only">instagram</span>
                </Link>
                <Link
                  href={SITE_CONFIG.links.tiktok}
                  target="_blank"
                  className="hover:text-blue-foreground block transition-all hover:scale-110"
                >
                  <FaTiktok className="size-8" />
                  <span className="sr-only">tiktok</span>
                </Link>
              </div>
              <Separator className="mt-6" />
              <p className="mt-6 text-center lg:text-left">
                All rights reserved © 2026 Buddies For Paws
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// export function Footer() {
//   return (
//     <footer
//       id="footer"
//       className="bg-blue text-background relative z-0 flex grow flex-col gap-24 px-6 py-24 sm:py-32"
//     >
//       <Image
//         src={FooterBG}
//         alt="A background image for the footer"
//         fill
//         className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60 mix-blend-multiply"
//       />

//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         transition={{ delayChildren: 0.2, staggerChildren: 0.4 }}
//         className="flex flex-col gap-24"
//       >
//         <motion.div
//           variants={{
//             hidden: {},
//             visible: {},
//           }}
//           transition={{ staggerChildren: 0.2 }}
//           className="mx-auto flex max-w-xl flex-col gap-8"
//         >
//           <motion.p
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ type: "spring" }}
//             className="font-cooper text-center text-4xl"
//           >
//             Subscribe to our newsletter
//           </motion.p>
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ type: "spring" }}
//           >
//             <form
//               method="post"
//               action="https://bonkforpaws.us16.list-manage.com/subscribe/post"
//               target="_blank"
//             >
//               <div className="flex flex-col gap-4 sm:flex-row">
//                 <input
//                   type="hidden"
//                   name="u"
//                   value="ca0cb7eff6bdf10bbae650d96"
//                 />
//                 <input type="hidden" name="id" value="9f80730d46" />
//                 <label htmlFor="email" className="sr-only">
//                   Email
//                 </label>
//                 <Input
//                   id="email"
//                   name="EMAIL"
//                   type="email"
//                   placeholder="Enter your email"
//                   className="font-cooper border-background text-background placeholder:text-background focus:placeholder:text-muted-foreground grow text-center"
//                 />
//                 <Button type="submit" className="sm:px-8">
//                   Sign up
//                 </Button>
//               </div>
//             </form>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           variants={{
//             hidden: {},
//             visible: {},
//           }}
//           transition={{ staggerChildren: 0.2 }}
//           className="flex flex-col items-center justify-center gap-6"
//         >
//           <motion.div
//             variants={{
//               hidden: {},
//               visible: {},
//             }}
//             transition={{ staggerChildren: 0.05 }}
//             className="flex gap-4"
//           >
//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 10 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ type: "spring" }}
//             >
//               <Link
//                 href={SITE_CONFIG.links.x}
//                 target="_blank"
//                 className="hover:text-blue-foreground block transition-all hover:scale-110"
//               >
//                 <FaXTwitter className="size-6" />
//                 <span className="sr-only">twitter</span>
//               </Link>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 10 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ type: "spring" }}
//             >
//               <Link
//                 href={SITE_CONFIG.links.discord}
//                 target="_blank"
//                 className="hover:text-blue-foreground block transition-all hover:scale-110"
//               >
//                 <FaDiscord className="size-6" />
//                 <span className="sr-only">discord</span>
//               </Link>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 10 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ type: "spring" }}
//             >
//               <Link
//                 href={SITE_CONFIG.links.instagram}
//                 target="_blank"
//                 className="hover:text-blue-foreground block transition-all hover:scale-110"
//               >
//                 <FaInstagram className="size-6" />
//                 <span className="sr-only">instagram</span>
//               </Link>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 10 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ type: "spring" }}
//             >
//               <Link
//                 href={SITE_CONFIG.links.tiktok}
//                 target="_blank"
//                 className="hover:text-blue-foreground block transition-all hover:scale-110"
//               >
//                 <FaTiktok className="size-6" />
//                 <span className="sr-only">tiktok</span>
//               </Link>
//             </motion.div>
//           </motion.div>
//           <motion.p
//             variants={{
//               hidden: { opacity: 0, y: 10 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             transition={{ type: "spring" }}
//             className="text-sm"
//           >
//             All rights reserved © 2025 Buddies For Paws
//           </motion.p>
//         </motion.div>
//       </motion.div>
//     </footer>
//   );
// }
