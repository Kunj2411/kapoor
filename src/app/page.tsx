import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ClientsStrip from "@/components/sections/ClientsStrip";
import ContactSection from "@/components/sections/ContactSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Kapoor Transport – Industrial Logistics & Heavy Haulage India",
  description:
    "India's most trusted heavy transport & logistics company. 500+ fleet, 30+ years, 28 states. ODC cargo, industrial haulage, supply chain solutions.",
  openGraph: {
    title: "Kapoor Transport – Industrial Logistics & Heavy Haulage India",
    description:
      "India's most trusted heavy transport & logistics company. 500+ fleet, 30+ years, 28 states.",
    url: "/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ClientsStrip />
      <ContactSection />
      <CTABanner />
    </>
  );
}
