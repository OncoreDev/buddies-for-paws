"use client";

import COLOR_COMBINATIONS_PNG from "../../../../images/brand/color-combinations.png";
import PRIMARY_COLORS_PNG from "../../../../images/brand/primary-colors.png";
import SECONDARY_COLORS_PNG from "../../../../images/brand/secondary-colors.png";

import { BFPMaster } from "@/components/logo/bfp-master";
import { BFPSubmark } from "@/components/logo/bfp-submark";
import { motion, stagger, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.2 } },
};

const logoColors = [
  { name: "black", fill: "#000000", bg: "#ffffff" },
  { name: "blue", fill: "#22026b", bg: "#ffffff" },
  { name: "orange", fill: "#ea5239", bg: "#ffffff" },
  { name: "yellow", fill: "#ebe969", bg: "#ffffff" },
  { name: "teal", fill: "#97ffe4", bg: "#ffffff" },
  { name: "white", fill: "#ffffff", bg: "#D9D9D9" },
];

export function BrandPageContent() {
  return (
    <div className="max-w-8xl mx-auto flex w-full flex-col gap-24 px-6 py-24 sm:gap-32 sm:px-16 sm:py-40">
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        transition={{ delayChildren: stagger(0.2, { startDelay: 0.2 }) }}
        viewport={{ once: true }}
        className="grid gap-x-16 gap-y-6 sm:gap-y-8 lg:grid-cols-2"
      >
        <motion.h1
          variants={variants}
          className="text-orange font-cooper text-5xl sm:text-6xl"
        >
          Buddies for Paws Brand Guidelines
        </motion.h1>
        <motion.p variants={variants} className="mt-4">
          Logos, colours, typefaces and all other good stuff is available here
          to help you keep things looking Buddies for Paws approved. Just follow
          the guidelines, and you’re all set.
          <br />
          <br />
          If you have questions or are not sure about something give us a shout{" "}
          <Link href={"/contact"} className="text-orange underline">
            here
          </Link>
          . We’re happy to help.
        </motion.p>
      </motion.div>

      <Section>
        <SectionHeader>
          <SectionTitle>Master Logo</SectionTitle>
          <SectionDescription>
            This is our master logo. It should be used as often as possible and
            is available in all BFP primary colors, including black and white.
            <br />
            <br />
            Please use the colored versions responsibly and refer to the color
            guidance page for detailed instructions. Detailed below is guidance
            on clear space.
            <br />
            <br />
            If in doubt, give it more room, never less.
          </SectionDescription>
        </SectionHeader>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:flex-wrap md:gap-x-12">
          {logoColors.map((color, i) => (
            <BFPLogo key={i + "master-logo"} color={color} type="master" />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Submark Logo</SectionTitle>
          <SectionDescription>
            This is our submark. We use it in situations where the master logo
            might be too large, the text becomes unreadable, or space is
            limited. It’s also ideal for mobile website headers, among other
            compact applications.
            <br />
            <br />
            Detailed below is guidance on clear space. If in doubt, give it more
            room, never less.
          </SectionDescription>
        </SectionHeader>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:flex-wrap md:gap-x-12">
          {logoColors.map((color, i) => (
            <BFPLogo key={i + "submark-logo"} color={color} type="submark" />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Color Palette</SectionTitle>
          <SectionDescription>
            This is the full BFP palette. We don’t lead with a specific color
            way—our approach is flexible and adaptable. Our primary palette
            includes colors that should always be featured in any asset.
            Supporting colors should never appear on their own, and the master
            logo or submark should not be presented in these supporting colors.
            However, they are suitable for use in UI elements, infographics,
            iconography, and more.
          </SectionDescription>
        </SectionHeader>

        <div className="flex flex-col gap-6 sm:gap-8">
          <h2 className="text-orange font-cooper text-2xl sm:text-3xl">
            Primary Colors
          </h2>

          <Image
            src={PRIMARY_COLORS_PNG}
            alt="Primary Colors"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          <h2 className="text-orange font-cooper text-2xl sm:text-3xl">
            Secondary Colors
          </h2>

          <Image
            src={SECONDARY_COLORS_PNG}
            alt="Secondary Colors"
            className="w-full"
          />
        </div>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Color Combinations</SectionTitle>
          <SectionDescription>
            Use only the approved color combinations shown here to ensure
            legibility across all touchpoints and assets. Some colors pair well
            with white— others don’t. Our goal is clarity and consistency. If a
            combination looks off, it probably is.
          </SectionDescription>
        </SectionHeader>

        <Image
          src={COLOR_COMBINATIONS_PNG}
          alt="Color Combinations"
          className="w-full"
        />
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>Typography</SectionTitle>
          <SectionDescription>
            We have two typefaces:
            <br />
            <br />
            <b>Cooper Std Black</b> and <b>Inter</b>.
            <br />
            <br />
            Cooper Std Black should be used for headlines, titles, CTAs, and any
            impactful text.
            <br />
            <br />
            Inter is reserved for body copy, supporting text, footers, terms and
            conditions, and similar content.
          </SectionDescription>
        </SectionHeader>

        <div className="flex flex-wrap gap-x-32 gap-y-8">
          <div className="flex flex-col gap-4">
            <p className="font-cooper text-orange text-5xl sm:text-6xl">
              Cooper Std Black
            </p>
            <Link
              href={"https://fonts.adobe.com/fonts/cooper-black"}
              target="_blank"
              className="text-orange underline"
            >
              fonts.adobe.com/fonts/cooper-black
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-blue text-5xl sm:text-6xl">Inter</p>
            <Link
              href={"https://fonts.google.com/specimen/Inter"}
              target="_blank"
              className="text-orange underline"
            >
              fonts.google.com/specimen/Inter
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      variants={variants}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      className="flex flex-col gap-8 sm:gap-16"
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-6 sm:gap-8">{children}</div>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-orange font-cooper text-4xl sm:text-5xl">{children}</h2>
  );
}

function SectionDescription({ children }: { children: React.ReactNode }) {
  return <p className="max-w-xl">{children}</p>;
}

function BFPLogo({
  color,
  type = "master",
}: {
  color: { name: string; fill: string; bg: string };
  type?: "master" | "submark";
}) {
  {
    const svgRefs = useRef<SVGSVGElement | null>(null);

    const handleDownloadSVG = (
      svgEl: SVGSVGElement | null,
      fileName: string,
    ) => {
      if (!svgEl) return;

      const svgData = new XMLSerializer().serializeToString(svgEl);
      const blob = new Blob([svgData], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileName}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    const handleDownloadPNG = (
      svgEl: SVGSVGElement | null,
      fileName: string,
      size: number = 1024,
    ) => {
      if (!svgEl) return;

      // Clone the SVG so we can safely modify it
      const clonedSvg = svgEl.cloneNode(true) as SVGSVGElement;

      // Set size
      clonedSvg.setAttribute("width", size.toString());
      clonedSvg.setAttribute("height", size.toString());

      // Inline text color if it's set with a class
      const elements = clonedSvg.querySelectorAll("*");
      elements.forEach((el) => {
        const computedStyle = getComputedStyle(el);
        const fill = computedStyle.fill;
        if (fill && fill !== "none") {
          el.setAttribute("fill", fill);
        }
      });

      const svgData = new XMLSerializer().serializeToString(clonedSvg);
      const svgBlob = new Blob([svgData], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.drawImage(img, 0, 0, size, size);
        canvas.toBlob((blob) => {
          if (!blob) return;

          const pngUrl = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = pngUrl;
          link.download = `${fileName}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(pngUrl);
        });
        URL.revokeObjectURL(url);
      };
      img.src = url;
    };

    return (
      <div className="flex flex-col items-center justify-center gap-6">
        <div
          className="w-full max-w-40 p-4"
          style={{ backgroundColor: color.bg }}
        >
          {type === "master" ? (
            <BFPMaster ref={svgRefs} fill={color.fill} className="w-full" />
          ) : (
            <BFPSubmark ref={svgRefs} fill={color.fill} className="w-full" />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() =>
              handleDownloadSVG(svgRefs.current, `BFP-${type}-${color.name}`)
            }
            className="text-orange cursor-pointer underline"
          >
            Download SVG
          </button>
          <button
            onClick={() =>
              handleDownloadPNG(
                svgRefs.current,
                `BFP-${type}-${color.name}`,
                1024,
              )
            }
            className="text-orange cursor-pointer underline"
          >
            Download PNG
          </button>
        </div>
      </div>
    );
  }
}
