import type { Metadata } from "next";
import { BrandPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description:
    "Explore our brand guidelines to understand our values, mission, and visual identity.",
};

export default function BrandPage() {
  return <BrandPageContent />;
}
