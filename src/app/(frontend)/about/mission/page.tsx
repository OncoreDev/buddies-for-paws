import type { Metadata } from "next";
import { MissionPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "Learn more about Buddies for Paws, our mission, and the team behind our success.",
};

export default function MissionPage() {
  return <MissionPageContent />;
}
