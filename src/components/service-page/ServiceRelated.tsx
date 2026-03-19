"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICE_MAP } from "@/data/services";
import type { ServicePage } from "@/data/services";

export default function ServiceRelated({ service }: { service: ServicePage }) {
  const related = service.relatedSlugs
    .map((slug) => SERVICE_MAP[slug])
    .filter(Boolean)
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="py-24 px-6 lg:px-12 bg-surface-low">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block">
            Explore More
          </span>
          <h2 className="text-3xl font-black text-dark tracking-tight">Related Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((rel, i) => (
            <motion.div
              key={rel.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/services/${rel.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-outline-soft hover:border-cta/30 hover:shadow-ambient transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${rel.image}')` }}
                    role="img"
                    aria-label={rel.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-[9px] font-black uppercase tracking-widest text-cta bg-dark/60 px-3 py-1 rounded-full">
                    {rel.heroTag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-black text-dark text-lg mb-2">{rel.title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed line-clamp-2 mb-4">
                    {rel.subheadline}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-cta font-black text-[11px] uppercase tracking-widest group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
