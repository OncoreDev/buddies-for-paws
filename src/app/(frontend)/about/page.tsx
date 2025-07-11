import type { Metadata } from "next";
import { ContactPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Buddies for Paws, our mission, and the team behind our success.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
