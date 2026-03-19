"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { ServicePage } from "@/data/services";

export default function ServiceFAQ({ service }: { service: ServicePage }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl font-black text-dark tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {service.faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border border-outline-soft rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left bg-surface hover:bg-surface-low transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-bold text-dark text-base leading-snug">{faq.q}</span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-white border border-outline-soft flex items-center justify-center">
                  {open === i
                    ? <Minus className="w-4 h-4 text-cta" />
                    : <Plus className="w-4 h-4 text-primary" />
                  }
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 py-6 bg-white border-t border-outline-soft">
                      <p className="text-primary/70 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
