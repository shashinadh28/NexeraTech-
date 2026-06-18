import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "5 client success stories across BFSI/Fintech, Healthcare, Technology/SaaS, and Manufacturing — USA, UK, and India. Real outcomes, real clients.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
