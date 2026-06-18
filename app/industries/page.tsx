import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "NexeraTech serves BFSI/Fintech, Healthcare, Technology/SaaS, Retail/E-Commerce, Legal, and Manufacturing — with deep expertise in each sector's technology and compliance requirements.",
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
