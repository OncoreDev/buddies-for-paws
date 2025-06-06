import type { Metadata } from "next";
import { EventsPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events related to animal welfare, rescue, and adoption.",
};

export default function EventsPage() {
  return <EventsPageContent />;
}
