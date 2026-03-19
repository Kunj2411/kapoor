"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

const EXTENDED = [
  ...TESTIMONIALS,
  {
    quote: "In an industry where reliability is the only currency that matters, Kapoor Transport has proven to be the gold standard. Their strategic approach to our complex supply chain has been a key driver of our expansion.",
    name: "Rajesh Singhania",
    title: "COO, Jindal Structural",
    initials: "RS",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + EXTENDED.length) % EXTENDED.length);
  const next = () => setActive((a) => (a + 1) % EXTENDED.length);

  return (
    <section className="py-28 px-6 lg:px-12 bg-white" id="testimonials">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3">
            Client Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
            Executive Endorsements
          </h2>
          <div className="h-1 w-16 bg-cta mt-5 rounded-full" />
        </div>

        {/* Cards grid — show 3 on desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-12">
          {EXTENDED.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-surface rounded-2xl p-8 border border-outline-soft relative group cursor-default"
            >
              <Quote className="w-8 h-8 text-cta/20 absolute top-6 right-6" />
              <div className="flex mb-4 gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-cta text-sm">★</span>
                ))}
              </div>
              <p className="text-primary/70 text-sm leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xs shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-black text-sm text-dark">{t.name}</div>
                  <div className="text-[10px] font-bold text-cta uppercase tracking-widest mt-0.5">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="bg-surface p-8 border border-outline-soft rounded-2xl"
              >
                <Quote className="w-8 h-8 text-cta/20 mb-4" />
                <div className="flex mb-4 gap-0.5">
                  {[...Array(5)].map((_, s) => <span key={s} className="text-cta text-sm">★</span>)}
                </div>
                <p className="text-primary/70 text-sm leading-relaxed mb-8 italic">
                  &ldquo;{EXTENDED[active].quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xs">
                    {EXTENDED[active].initials}
                  </div>
                  <div>
                    <div className="font-black text-sm text-dark">{EXTENDED[active].name}</div>
                    <div className="text-[10px] font-bold text-cta uppercase tracking-widest mt-0.5">{EXTENDED[active].title}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-outline-soft flex items-center justify-center hover:border-cta hover:text-cta transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {EXTENDED.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-cta w-6" : "bg-outline-soft"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-outline-soft flex items-center justify-center hover:border-cta hover:text-cta transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4th testimonial — featured */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block mt-6 bg-primary rounded-2xl p-10 relative overflow-hidden"
        >
          <Quote className="w-16 h-16 text-white/10 absolute top-6 right-8" />
          <div className="flex mb-4 gap-0.5">
            {[...Array(5)].map((_, s) => <span key={s} className="text-cta text-lg">★</span>)}
          </div>
          <p className="text-white/80 text-xl font-light leading-relaxed mb-8 max-w-3xl italic">
            &ldquo;{EXTENDED[3].quote}&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cta flex items-center justify-center text-white font-black text-sm">
              {EXTENDED[3].initials}
            </div>
            <div>
              <div className="font-black text-white">{EXTENDED[3].name}</div>
              <div className="text-[10px] font-bold text-cta uppercase tracking-widest mt-0.5">{EXTENDED[3].title}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
