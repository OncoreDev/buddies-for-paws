import { Metadata } from "next";
import { CharitiesPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Local Charity Partners",
  description:
    "Alongside our core global partners, Buddies for Paws also supports local animal charities and community rescue groups through one-off fundraisers and special campaigns. We’re always open to supporting smaller charities where possible, especially those aligned with our mission to protect and care for animals. Explore some of the local and regional charities we’ve supported below.",
};

export default function CharitiesPage() {
  return <CharitiesPageContent />;
}
