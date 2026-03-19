"use client";

import { motion } from "framer-motion";
import { Truck, Settings, Warehouse, Package, Container, Thermometer, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/site";
import { useModal } from "@/context/ModalContext";

const iconMap: Record<string, React.ElementType> = {
  Truck, Settings, Warehouse, Package, Container, Thermometer,
};

export default function ServicesSection() {
  const { openModal } = useModal();

  return (
    <section className="py-28 px-6 lg:px-12 bg-white" id="services">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight leading-[1.1]">
              Industrial Solutions<br />Architected for Growth
            </h2>
          </div>
          <button
            onClick={() => openModal()}
            className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-cta hover:gap-4 transition-all group shrink-0"
          >
            Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Truck;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-surface rounded-2xl p-10 border border-outline-soft overflow-hidden cursor-pointer"
                onClick={() => openModal(service.title)}
                style={{ transition: "transform 0.4s cubic-bezier(0.165,0.84,0.44,1), box-shadow 0.4s ease" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px -15px rgba(73,93,110,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {/* Ghost number */}
                <div className="absolute top-0 right-0 p-6 text-8xl font-black text-primary/5 select-none leading-none">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-white rounded-xl shadow-ambient flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="text-xl font-black text-dark mb-3">{service.title}</h3>
                <p className="text-primary/60 leading-relaxed text-sm mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-primary/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-cta shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-cta group-hover:gap-3 transition-all">
                  Get Quote <ArrowRight className="w-3 h-3" />
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
