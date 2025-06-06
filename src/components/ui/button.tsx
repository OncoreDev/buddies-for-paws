import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative font-cooper cursor-pointer hover:scale-105 ease-spring duration-400 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        orange: "bg-orange text-orange-foreground",
        "orange-outline":
          "border-2 border-orange text-orange hover:bg-orange hover:text-orange-foreground",
        yellow: "bg-yellow text-yellow-foreground",
        "yellow-outline":
          "border-2 border-yellow text-yellow hover:bg-yellow hover:text-yellow-foreground",
        teal: "bg-teal text-teal-foreground",
        "teal-outline":
          "border-2 border-teal text-teal hover:bg-teal hover:text-teal-foreground",
        blue: "bg-blue text-blue-foreground",
        "blue-outline":
          "border-2 border-blue text-blue hover:bg-blue hover:text-blue-foreground",
        outline:
          "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
        "outline-reverse":
          "border-2 border-background text-background hover:bg-background hover:text-foreground",
        ghost: "hover:bg-foreground hover:text-background",
        "ghost-reverse": "hover:bg-background hover:text-foreground",
      },
      size: {
        md: "h-12 px-6",
        sm: "h-10 gap-1.5 px-5 ",
        lg: "h-14 px-7",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "orange",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
