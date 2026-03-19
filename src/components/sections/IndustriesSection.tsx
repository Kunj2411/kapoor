"use client";

import { motion } from "framer-motion";
import { Factory, Zap, Building2, Car, FlaskConical, Pickaxe, Package, Shield } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const INDUSTRIES = [
  { name: "Steel & Metals",        Icon: Factory,      desc: "Coils, billets, structural steel — precision delivery to mills and fabricators." },
  { name: "Power & Energy",        Icon: Zap,          desc: "Transformers, turbines, and ODC equipment for power plants and substations." },
  { name: "Infrastructure",        Icon: Building2,    desc: "Bridges, highways, and mega-project logistics across challenging terrains." },
  { name: "Automotive",            Icon: Car,          desc: "JIT delivery for OEMs and tier-1 suppliers across India's auto corridors." },
  { name: "Chemicals & Pharma",    Icon: FlaskConical, desc: "Hazmat-certified transport with full compliance and cold-chain capability." },
  { name: "Mining & Minerals",     Icon: Pickaxe,      desc: "Heavy equipment and bulk mineral transport from mine to processing plant." },
  { name: "FMCG & Retail",         Icon: Package,      desc: "High-frequency distribution with last-mile precision across 2000+ locations." },
  { name: "Defence & Government",  Icon: Shield,       desc: "Secure, time-critical logistics for government and defence projects." },
];

export default function IndustriesSection() {
  const { openModal } = useModal();

  return (
    <section className="py-28 px-6 lg:px-12 bg-surface-low" id="industries">
      <div className="max-w-[1400px] mx-auto">

        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block"
          >
            Sectors We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-dark tracking-tight"
          >
            Industries We Power
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <motion.button
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(ind.name)}
              className="group text-left bg-white rounded-2xl p-6 border border-outline-soft shadow-ambient hover:border-cta/30 hover:shadow-[0_16px_40px_-12px_rgba(216,144,66,0.2)] transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4 group-hover:bg-cta/10 transition-colors">
                <ind.Icon className="w-6 h-6 text-primary group-hover:text-cta transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-black text-dark mb-2 group-hover:text-primary transition-colors">
                {ind.name}
              </h3>
              <p className="text-xs text-neutral leading-relaxed">{ind.desc}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
