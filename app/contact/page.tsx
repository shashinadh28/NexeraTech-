import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NexeraTech Solutions — Hyderabad headquarters, serving US, UK, and India markets. Start a conversation about your technology challenge.",
};

export default function ContactPage() {
  return <ContactClient />;
}
