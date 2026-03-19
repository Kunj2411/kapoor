"use client";

import { motion } from "framer-motion";
import { Truck, Settings, Warehouse, Package, Container, Thermometer, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/site";
import CTAButton from "@/components/CTAButton";

const iconMap: Record<string, React.ElementType> = {
  Truck, Settings, Warehouse, Package, Container, Thermometer,
};

export default function ServicesPreview() {
  const preview = SERVICES.slice(0, 3);
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-cta font-black tracking-widest text-xs uppercase mb-3 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight leading-tight">
              Industrial Solutions Architected for Growth
            </h2>
          </div>
          <CTAButton href="/services" variant="secondary" size="sm">
            View All <ArrowRight className="w-4 h-4" />
          </CTAButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((service, i) => {
            const Icon = iconMap[service.icon] || Truck;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-surface p-10 rounded-xl border border-outline-soft hover-lift relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 text-7xl font-black text-primary/5 select-none">
                  {service.number}
                </div>
                <div className="w-14 h-14 bg-white rounded-lg shadow-md flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-black mb-4">{service.title}</h3>
                <p className="text-primary/60 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                <a
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-cta hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
