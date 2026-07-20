import type { Metadata } from "next";
import CareersPage from "./CareersPage";

export const metadata: Metadata = {
  title: "Internal Careers",
  description:
    "Join NexeraTech — a staffing company that connects people with opportunities. Grow personally, professionally, and financially. Explore roles in Recruiting & Sales, Corporate, Technology, and Veteran/SkillBridge programs.",
};

export default function Careers() {
  return <CareersPage />;
}
