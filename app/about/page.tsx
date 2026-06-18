import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NexeraTech Solutions — founded in 2024 in Hyderabad, 25-50 technology professionals, serving US, UK, and India with offshore IT, AI/ML, IAM, and payroll services.",
};

export default function About() {
  return <AboutPage />;
}
