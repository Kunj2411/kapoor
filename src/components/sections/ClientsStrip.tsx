"use client";

import { motion } from "framer-motion";
import { CLIENTS } from "@/data/site";

export default function ClientsStrip() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-surface-low border-y border-outline-soft" id="clients">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-[10px] font-black text-primary/30 uppercase tracking-[0.5em] mb-12"
        >
          Trusted by the Architects of Modern India
        </motion.p>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
          <div className="flex gap-16 items-center animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="text-2xl font-black tracking-tighter italic text-primary/25 hover:text-primary/70 transition-colors duration-500 shrink-0 cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
