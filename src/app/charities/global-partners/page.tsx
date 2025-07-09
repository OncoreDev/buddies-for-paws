import { Metadata } from "next";
import { CharitiesPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Global Charity Partners",
  description:
    "Explore our featured charities and learn how you can make a difference. Discover ways to support causes that matter to you.",
};

export default function CharitiesPage() {
  return <CharitiesPageContent />;
}
