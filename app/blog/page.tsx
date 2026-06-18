import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on offshore IT, AI/ML engineering, IAM & cybersecurity, payroll compliance, and digital transformation from the NexeraTech team.",
};

export default function BlogPage() {
  return <BlogClient />;
}
