import type { Metadata } from "next";
import { ContactPageContent } from "./page-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with us for any inquiries, feedback, or support. We are here to help you with your needs.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
