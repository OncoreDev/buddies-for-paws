"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Portal } from "@radix-ui/react-portal";
import { VariantProps } from "class-variance-authority";
import { ChevronDown, HandCoins } from "lucide-react";
import type { Variants } from "motion";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsExclamation } from "react-icons/bs";
import { TbMenu, TbX } from "react-icons/tb";
import { BFPMaster } from "./logo/bfp-master";
import { BFPSubmark } from "./logo/bfp-submark";
import { Button, buttonVariants } from "./ui/button";

const routeThemes: {
  prefixes: string[];
  navClass: string;
  linkIndicatorClass: string;
  subContentClass: string;
  subLinkClass: string;
  buttonVariant: VariantProps<typeof buttonVariants>["variant"];
}[] = [
  {
    prefixes: ["/guardian-animals", "/brand"],
    navClass: "bg-yellow text-yellow-foreground",
    linkIndicatorClass: "bg-yellow-foreground",
    buttonVariant: "orange",
    subContentClass: "bg-yellow-foreground text-yellow",
    subLinkClass: "hover:!bg-yellow hover:!text-yellow-foreground",
  },
  {
    prefixes: ["/events", "/about"],
    navClass: "bg-orange text-orange-foreground",
    linkIndicatorClass: "bg-orange-foreground",
    buttonVariant: "yellow",
    subContentClass: "bg-orange-foreground text-orange",
    subLinkClass: "hover:!bg-orange hover:!text-orange-foreground",
  },
  {
    prefixes: ["/charities", "/news"],
    navClass: "bg-teal text-teal-foreground",
    linkIndicatorClass: "bg-teal-foreground",
    buttonVariant: "blue",
    subContentClass: "bg-teal-foreground text-teal",
    subLinkClass: "hover:!bg-teal hover:!text-teal-foreground",
  },
];

const links = [
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  {
    href: "/guardian-animals",
    label: "Guardian Animals",
    subLinks: [
      {
        href: "/guardian-animals",
        label: "All Guardian Animals",
      },
      {
        href: "/guardian-animals/hero",
        label: "Meet Hero",
      },
      {
        href: "/guardian-animals/buddy",
        label: "Meet Buddy",
      },
      {
        href: "/guardian-animals/big-papa",
        label: "Meet Big Papa",
      },
      {
        href: "/guardian-animals/bani",
        label: "Meet Bani",
      },
    ],
  },
  {
    href: "/charities",
    label: "Charities",
    subLinks: [
      {
        href: "/charities/global-partners",
        label: "Buddies global charities partners",
      },
      {
        href: "/charities/local-partners",
        label: "Buddies local charity partners",
      },
    ],
  },
  {
    href: "/about",
    label: "About",
    subLinks: [
      {
        href: "/about/mission",
        label: "Mission",
      },
      {
        href: "/about/impact",
        label: "Impact",
      },
    ],
  },
  { href: "/brand", label: "Brand" },
  { href: "/contact", label: "Contact" },
  { href: "https://baobaoinu.com/", label: "Store" },
];

const mobileLinks = [{ href: "/", label: "Home" }, ...links];

const half = Math.ceil(links.length / 2);

export function Nav() {
  const pathname = usePathname();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const routeTheme = routeThemes.find(({ prefixes }) =>
    prefixes.some((prefix) => pathname.startsWith(prefix)),
  );

  const handleMenuToggle = () => {
    if (!isOpenMobileMenu) {
      document.body.style.overflow = "hidden";
      setIsOpenMobileMenu(true);
    } else {
      document.body.style.overflow = "";
      setIsOpenMobileMenu(false);
    }
  };

  return (
    <>
      <nav className={cn("bg-blue text-blue-foreground", routeTheme?.navClass)}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
          className="max-w-9xl relative z-10 mx-auto flex h-24 w-full items-center gap-6 px-6 min-[1280px]:h-40"
        >
          <div className="flex w-full items-center justify-between min-[1280px]:hidden">
            <Button
              variant={routeTheme?.buttonVariant}
              size={"icon"}
              className="size-10"
              onClick={handleMenuToggle}
            >
              <TbMenu />
              <span className="sr-only">menu</span>
            </Button>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant={routeTheme?.buttonVariant}
                  size={"icon"}
                  className="size-10"
                >
                  <Link href={"https://bonkforpaws.com/"} target="_blank">
                    <HandCoins />
                    <span className="sr-only">donate</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent align="end" side="bottom">
                <p>Donate Now</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="hidden w-full grid-cols-2 min-[1280px]:grid">
            <div className="flex flex-1 items-center justify-end gap-8 pr-24 font-bold min-[1480px]:gap-12 min-[1480px]:pr-32">
              {links.slice(0, half).map((link) => (
                <NavLink key={link.label + "desktop"} link={link} />
              ))}
            </div>

            <div className="flex flex-1 items-center justify-start gap-8 pl-24 font-bold min-[1480px]:gap-12 min-[1480px]:pl-32">
              {links.slice(half).map((link) => (
                <NavLink key={link.label + "desktop"} link={link} />
              ))}

              <Button asChild variant={routeTheme?.buttonVariant}>
                <Link href={"https://bonkforpaws.com/"} target="_blank">
                  DONATE NOW
                </Link>
              </Button>
            </div>
          </div>

          <Link
            href={"/"}
            className="ease-spring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-105"
          >
            <BFPMaster className="hidden size-24 min-[1280px]:block min-[1480px]:size-32" />
            <BFPSubmark className="w-20 min-[1280px]:hidden" />
          </Link>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isOpenMobileMenu && (
          <Portal>
            <motion.div
              variants={{
                opened: {
                  y: "0%",
                  transition: {
                    duration: 0.75,
                    ease: [0.74, 0, 0.19, 1.02],
                    delayChildren: 0.4,
                    staggerChildren: 0.2,
                  },
                },
                closed: {
                  y: "-100%",
                  transition: {
                    delay: 0.5,
                    duration: 0.3,
                    ease: [0.74, 0, 0.19, 1.02],
                    staggerDirection: -1,
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="closed"
              animate="opened"
              exit="closed"
              className={cn(
                "bg-blue text-blue-foreground fixed inset-0 z-50 flex items-center justify-center overflow-auto px-6 py-20",
                routeTheme?.navClass,
              )}
            >
              <motion.div
                variants={{
                  opened: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -20 },
                }}
                transition={{ type: "spring" }}
                className="absolute top-7 left-6"
              >
                <Button
                  variant={routeTheme?.buttonVariant}
                  size={"icon"}
                  className="size-10"
                  onClick={handleMenuToggle}
                >
                  <TbX />
                  <span className="sr-only">close</span>
                </Button>
              </motion.div>

              <motion.div
                variants={{
                  opened: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    transition: {
                      staggerDirection: -1,
                      staggerChildren: 0.05,
                    },
                  },
                }}
                className="flex flex-col items-center justify-center gap-6"
              >
                {mobileLinks.map((link) => (
                  <motion.div
                    key={link.label + "mobile"}
                    variants={{
                      opened: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: -20 },
                    }}
                    transition={{ type: "spring" }}
                    onClick={handleMenuToggle}
                  >
                    <NavLink link={link} className="text-3xl font-semibold" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
}

// animation variants
const navLinkIndicatorWrapperVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const navLinkIndicatorVariants: Variants = {
  hidden: { opacity: 0, y: -4 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const NavLink = ({ link, className }: { link: any; className?: string }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const routeTheme = routeThemes.find(({ prefixes }) =>
    prefixes.some((prefix) => pathname.startsWith(prefix)),
  );

  return (
    <motion.div
      initial="hidden"
      animate={
        pathname === link.href ||
        link.subLinks?.some((link: any) => link.href === pathname) ||
        open
          ? "visible"
          : "hidden"
      }
      whileHover={"visible"}
    >
      {link.subLinks ? (
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "ease-spring relative flex cursor-pointer items-center justify-center gap-1 transition-all duration-500 hover:scale-105",
                className,
              )}
            >
              {link.label}
              <ChevronDown
                className={cn(
                  "inline h-4 w-4 transition-transform duration-200",
                  open && "rotate-180",
                )}
              />
              <motion.div
                variants={navLinkIndicatorWrapperVariants}
                className="absolute -top-3.5 -right-2"
              >
                <motion.div variants={navLinkIndicatorVariants}>
                  <BsExclamation className="size-5" />
                </motion.div>
                <motion.div
                  variants={navLinkIndicatorVariants}
                  className="absolute top-0.5 -right-1.5 size-5 rotate-[22.5deg]"
                >
                  <BsExclamation className="size-5" />
                </motion.div>
                <motion.div
                  variants={navLinkIndicatorVariants}
                  className="absolute top-1.5 -right-[11px] size-5 rotate-[45deg]"
                >
                  <BsExclamation className="size-5" />
                </motion.div>
              </motion.div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={cn(
              "bg-blue-foreground text-blue mt-2 border-0 p-2",
              routeTheme?.subContentClass,
            )}
          >
            {link.subLinks.map((subLink: any) => (
              <DropdownMenuItem
                key={subLink.label}
                className={cn(
                  "hover:!bg-blue hover:!text-blue-foreground h-10 cursor-pointer px-4 font-semibold transition-all",
                  routeTheme?.subLinkClass,
                )}
                asChild
              >
                <Link href={subLink.href}>{subLink.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          className={cn(
            "ease-spring relative block transition-all duration-500 hover:scale-105",
            className,
          )}
        >
          {link.label}
          <motion.div
            variants={navLinkIndicatorWrapperVariants}
            className="absolute -top-3.5 -right-2"
          >
            <motion.div variants={navLinkIndicatorVariants}>
              <BsExclamation className="size-5" />
            </motion.div>
            <motion.div
              variants={navLinkIndicatorVariants}
              className="absolute top-0.5 -right-1.5 size-5 rotate-[22.5deg]"
            >
              <BsExclamation className="size-5" />
            </motion.div>
            <motion.div
              variants={navLinkIndicatorVariants}
              className="absolute top-1.5 -right-[11px] size-5 rotate-[45deg]"
            >
              <BsExclamation className="size-5" />
            </motion.div>
          </motion.div>
        </Link>
      )}
    </motion.div>
  );
};
