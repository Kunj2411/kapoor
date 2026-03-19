"use client";

import { motion } from "framer-motion";
import {
  ClipboardList, Truck, Map, Navigation, CheckCircle,
  Search, Layout, Cpu, BarChart, Globe,
  Ruler, FileText, Settings, Shield,
  User, Monitor, Wrench,
} from "lucide-react";
import type { ServicePage } from "@/data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  ClipboardList, Truck, Map, Navigation, CheckCircle,
  Search, Layout, Cpu, BarChart, Globe,
  Ruler, FileText, Settings, Shield,
  User, Monitor, Wrench,
};

export default function ServiceProcess({ service }: { service: ServicePage }) {
  return (
    <section className="py-24 px-6 lg:px-12 bg-surface-low">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-4xl font-black text-dark tracking-tight">
            Our Process
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-outline-soft z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {service.process.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || CheckCircle;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-white shadow-ambient border border-outline-soft flex items-center justify-center group-hover:border-cta transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-cta flex items-center justify-center">
                      <span className="text-[10px] font-black text-white">{step.step}</span>
                    </div>
                  </div>

                  <h4 className="text-base font-black text-dark mb-2">{step.title}</h4>
                  <p className="text-sm text-primary/60 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
