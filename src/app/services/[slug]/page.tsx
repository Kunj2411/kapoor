import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICE_MAP, ALL_SLUGS } from "@/data/services";
import ServicePageTemplate from "@/components/service-page/ServicePageTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_MAP[slug];
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDesc,
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICE_MAP[slug];
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
