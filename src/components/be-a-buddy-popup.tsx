"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { Loader2, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BeABuddyBanner from "../../images/be-a-buddy-banner.png";
import { BFPMaster } from "./logo/bfp-master";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";

const routeThemes: {
  prefixes: string[];
  class: string;
  inputClass: string;
  bodyClass: string;
  linkClass: string;
  btnVariant: VariantProps<typeof buttonVariants>["variant"];
  subBtnVariant: VariantProps<typeof buttonVariants>["variant"];
}[] = [
  {
    prefixes: ["/journeys", "/brand"],
    class: "bg-blue text-blue-foreground",
    linkClass: "text-blue-foreground",
    bodyClass: "text-white",
    inputClass:
      "border-blue-foreground text-blue-foreground placeholder:text-blue-foreground/60 ",
    btnVariant: "teal",
    subBtnVariant: "teal-outline",
  },
  {
    prefixes: ["/events", "/about"],
    class: "bg-teal text-teal-foreground",
    bodyClass: "",
    linkClass: "text-teal-foreground",
    inputClass:
      "border-teal-foreground text-teal-foreground placeholder:text-teal-foreground/60 ",
    btnVariant: "blue",
    subBtnVariant: "blue-outline",
  },
  {
    prefixes: ["/charities", "/news"],
    class: "bg-yellow text-yellow-foreground",
    bodyClass: "",
    linkClass: "text-yellow-foreground",
    inputClass:
      "border-yellow-foreground text-yellow-foreground placeholder:text-yellow-foreground/60 ",
    btnVariant: "orange",
    subBtnVariant: "orange-outline",
  },
];

export function BeABuddyPopup() {
  const pathname = usePathname();
  const [hide, setHide] = useState(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "input" | "success">("idle");
  const [isLoading, setIsLoading] = useState(false);

  const routeTheme = routeThemes.find(({ prefixes }) =>
    prefixes.some((prefix) => pathname.startsWith(prefix)),
  );

  useEffect(() => {
    const subscribed = localStorage.getItem("subscribed") === "true";
    if (!subscribed) {
      const timer = setTimeout(() => setOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleClose() {
    setOpen(false);
    setTimeout(() => setState("idle"), 1000);
  }

  function handleSubscribe() {
    localStorage.setItem("subscribed", "true");
    setState("success");
  }

  if (hide) return <></>;
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, type: "spring" },
        }}
        onClick={() => setOpen(true)}
        className={cn(
          "bg-orange text-orange-foreground ease-spring font-cooper fixed bottom-2 left-2 cursor-pointer rounded-lg p-6 px-8 text-center sm:bottom-6 sm:left-6 sm:w-full sm:max-w-48 sm:p-8 sm:text-xl",
          routeTheme?.class,
        )}
      >
        <p>Paws up!</p>
        <p>Join in!</p>
        <button
          onClick={() => setHide(true)}
          className="absolute top-3 right-3 flex size-4 cursor-pointer items-center justify-center rounded-full bg-white/40"
        >
          <X className="size-3" />
        </button>
      </motion.div>

      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent
          className={cn(
            "bg-orange text-orange-foreground border-none p-6 sm:w-[calc(100vw-3rem)] sm:max-w-4xl sm:p-12 md:h-full md:max-h-[640px]",
            routeTheme?.class,
          )}
        >
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-16">
            <div className="relative h-40 overflow-hidden rounded-lg sm:h-64 md:h-full md:w-full">
              <Image
                src={BeABuddyBanner}
                alt="Be a Buddy Banner"
                fill
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 sm:gap-8">
              <BFPMaster className="mx-auto size-24" />

              <DialogHeader
                className={cn(
                  "flex flex-col gap-6 !text-center",
                  routeTheme?.bodyClass,
                )}
              >
                <DialogTitle className="font-cooper text-3xl text-inherit sm:text-5xl">
                  {state === "success" ? "Thank you!" : "Want to be a Buddy?"}
                </DialogTitle>
                <DialogDescription className="text-sm text-inherit">
                  {state === "success" ? (
                    <span className="font-semibold">
                      You are now officially a Buddy!
                    </span>
                  ) : (
                    "Sign up for the latest news, fundraising events, and rescue stories."
                  )}
                </DialogDescription>
                <DialogDescription className="text-sm text-inherit">
                  {state === "success" ? (
                    "Look out for updates, news and animal stories in your inbox soon."
                  ) : (
                    <span className="font-semibold">
                      100% of donations matched by{" "}
                      <span
                        className={cn(
                          "text-orange-foreground underline",
                          routeTheme?.linkClass,
                        )}
                      >
                        BONK
                      </span>
                    </span>
                  )}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-auto flex flex-col">
                {state === "success" ? (
                  <motion.div
                    key={"success"}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, type: "spring" },
                    }}
                    className="flex flex-col gap-2"
                  >
                    <Button
                      variant={routeTheme?.subBtnVariant || "yellow-outline"}
                      onClick={handleClose}
                    >
                      Back to site
                    </Button>
                  </motion.div>
                ) : state === "input" ? (
                  <motion.form
                    key={"input"}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, type: "spring" },
                    }}
                    onSubmit={async (e) => {
                      e.preventDefault();
                      if (isLoading) return;

                      setIsLoading(true);
                      try {
                        const formData = new FormData(e.currentTarget);

                        // send to your Next.js API
                        const res = await fetch("/api/subscribe", {
                          method: "POST",
                          body: formData,
                        });
                        const data = await res.json();
                        if (!data.success) {
                          toast.error("Subscription failed. Please try again.");
                          return;
                        }

                        handleSubscribe();
                        toast.success("Subscribed successfully!");
                      } catch (e) {
                        toast.error("Failed to subscribe. Please try again.");
                      }
                      setIsLoading(false);
                    }}
                    // method="post"
                    // action="https://bonkforpaws.us16.list-manage.com/subscribe/post"
                    // target="_blank"
                  >
                    <div className="flex flex-col gap-2">
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
                        placeholder="Your your email"
                        className={cn(
                          "text-orange-foreground border-orange-foreground placeholder:text-orange-foreground/60 text-center",
                          routeTheme?.inputClass,
                        )}
                      />
                      <Button
                        type="submit"
                        disabled={isLoading}
                        variant={routeTheme?.btnVariant || "yellow"}
                        onSubmit={(e) => handleSubscribe()}
                      >
                        {isLoading && <Loader2 className="animate-spin" />}
                        Submit
                      </Button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key={"success"}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.2, type: "spring" },
                    }}
                    className="flex flex-col gap-2"
                  >
                    <Button
                      variant={routeTheme?.btnVariant || "yellow"}
                      onClick={() => setState("input")}
                    >
                      Count me in!
                    </Button>
                    <Button
                      variant={routeTheme?.subBtnVariant || "yellow-outline"}
                      onClick={handleClose}
                    >
                      No thank you
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
