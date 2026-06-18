import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "12 service lines — Offshore IT, Software Development, AI/ML, IAM & Cybersecurity, Payroll & EOR, Staff Augmentation, Cloud, Managed IT, QA, RPO, Finance & Accounting, Digital Transformation.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
