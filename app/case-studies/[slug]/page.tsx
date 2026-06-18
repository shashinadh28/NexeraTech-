import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies-data";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: cs.headline,
    description: cs.subheadline,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();
  const related = caseStudies.filter((c) => c.slug !== slug).slice(0, 2);
  return <CaseStudyDetailClient caseStudy={cs} related={related} />;
}
