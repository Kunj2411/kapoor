import type { ServicePage } from "@/data/services";
import ServiceHero from "./ServiceHero";
import ServiceFeatures from "./ServiceFeatures";
import ServiceProcess from "./ServiceProcess";
import ServiceBenefits from "./ServiceBenefits";
import ServiceFAQ from "./ServiceFAQ";
import ServiceRelated from "./ServiceRelated";
import CTABanner from "@/components/sections/CTABanner";

export default function ServicePageTemplate({ service }: { service: ServicePage }) {
  return (
    <>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <ServiceProcess service={service} />
      <ServiceBenefits service={service} />
      <ServiceFAQ service={service} />
      <CTABanner title={service.ctaTitle} subtitle={service.ctaSubtitle} />
      <ServiceRelated service={service} />
    </>
  );
}
