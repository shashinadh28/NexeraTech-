import type { Metadata } from "next";
import TestimonialsPage from "./TestimonialsPage";

export const metadata: Metadata = {
  title: "Testimonials | NexeraTech Solutions",
  description:
    "Read what our clients say about NexeraTech Solutions — real experiences shared by businesses across the US, UK, and India.",
};

export default function Testimonials() {
  return <TestimonialsPage />;
}
