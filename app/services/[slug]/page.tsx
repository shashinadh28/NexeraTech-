import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services-data";
import ServiceDetailClient from "./ServiceDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description.slice(0, 160),
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const related = getRelatedServices(service.relatedSlugs);
  return <ServiceDetailClient service={service} related={related} />;
}
