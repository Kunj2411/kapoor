"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, CheckCircle, Search, Map, Settings, Shield,
  Truck, Package, Warehouse, Cpu, ChevronRight, MessageCircle,
} from "lucide-react";
import { SERVICE_PAGES } from "@/data/services";
import { SITE } from "@/data/site";
import { useModal } from "@/context/ModalContext";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} custom={delay} className={className}>
      {children}
    </motion.div>
  );
}

const METHODOLOGY = [
  { step: "01", icon: Search, title: "Discovery", desc: "We assess cargo dimensions, weight, route constraints, and project timeline to build a precise logistics brief." },
  { step: "02", icon: Map, title: "Route Engineering", desc: "Physical and digital surveys map every bridge rating, overhead clearance, and turning radius on the corridor." },
  { step: "03", icon: Settings, title: "Configuration", desc: "Fleet is assembled — axle count, ballast distribution, and steering configured specifically for your load." },
  { step: "04", icon: Shield, title: "Execution", desc: "Escorted convoy with real-time satellite tracking, on-site operations team, and proactive exception management." },
];

const CHALLENGE_FEATURES = [
  { icon: Cpu, title: "Technical Feasibility", desc: "Structural analysis, load calculations, and equipment configuration before a single wheel turns." },
  { icon: Package, title: "Regulatory Mastery", desc: "25+ years of authority relationships. 100% permit success rate across all 28 states." },
];

const CORE_SERVICES = SERVICE_PAGES.filter((s) => s.category === "Core Services");
const SPECIALIZED = SERVICE_PAGES.filter((s) => s.category === "Specialized");

const PAGE_STATS = [
  { value: "500+", label: "Fleet Vehicles" },
  { value: "30+", label: "Years Experience" },
  { value: "12K+", label: "Projects Delivered" },
  { value: "99.8%", label: "On-Time Rate" },
  { value: "28", label: "States Covered" },
  { value: "100%", label: "Permit Success" },
];

function ServiceCard({ service, index }: { service: typeof SERVICE_PAGES[0]; index: number }) {
  return (
    <Reveal delay={index * 0.07}>
      <Link href={`/services/${service.slug}`} className="group flex flex-col bg-white rounded-2xl border border-outline-soft overflow-hidden hover:border-cta/40 hover:shadow-[0_20px_60px_-15px_rgba(73,93,110,0.18)] transition-all duration-300">
        <div className="relative h-52 overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${service.image}')` }} role="img" aria-label={service.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/20 to-transparent" />
          <span className="absolute bottom-4 left-4 text-[9px] font-black uppercase tracking-[0.2em] text-cta bg-dark/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cta/20">{service.heroTag}</span>
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
        <div className="p-7 flex flex-col flex-1">
          <h3 className="text-lg font-black text-dark mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
          <p className="text-primary/55 text-sm leading-relaxed mb-5 flex-1">{service.subheadline}</p>
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-primary/70">
                <CheckCircle className="w-4 h-4 text-cta shrink-0 mt-0.5" />{f}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3 mb-6 pt-5 border-t border-outline-soft">
            {service.stats.slice(0, 2).map((s) => (
              <div key={s.label}>
                <div className="text-lg font-black text-dark leading-none">{s.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-neutral mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-cta font-black text-[11px] uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
            Explore Service <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function ServicesPage() {
  const { openModal } = useModal();
  return (
    <>
      <section className="relative min-h-[88vh] flex items-end bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/75 to-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 pt-40">
          <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="inline-flex items-center gap-2 text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-6">
            <span className="w-8 h-px bg-cta" /> What We Do
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }} className="text-6xl md:text-8xl font-black text-white tracking-tight leading-[0.95] max-w-4xl mb-8">
            Heavy Lift. <span className="text-cta">Mastered.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="text-white/60 text-xl max-w-2xl leading-relaxed mb-12">
            Engineered solutions for the impossible. India&apos;s most trusted specialists serving critical infrastructure, power, and industrial projects across 28 states.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-wrap gap-4">
            <button onClick={() => openModal()} className="inline-flex items-center gap-2.5 bg-cta hover:bg-cta/90 text-white font-black uppercase tracking-widest text-[12px] px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-[0_8px_30px_rgba(216,144,66,0.35)]">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </button>
            <Link href="/contact" className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-black uppercase tracking-widest text-[12px] px-8 py-4 rounded-xl transition-all">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-white/10">
            {PAGE_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05} className="px-6 py-7 text-center">
                <div className="text-2xl font-black text-white mb-1">{s.value}</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-5"><span className="w-6 h-px bg-cta" /> The Challenge</span>
                <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight leading-[1.05] mb-6">Complexity Shouldn&apos;t Be a Barrier to Progress</h2>
                <p className="text-primary/60 text-lg leading-relaxed mb-10">India&apos;s most critical infrastructure projects demand logistics that go beyond standard freight. When cargo exceeds conventional limits — in weight, dimension, or regulatory complexity — you need a partner who has solved it before.</p>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CHALLENGE_FEATURES.map(({ icon: Icon, title, desc }, i) => (
                  <Reveal key={title} delay={i * 0.1}>
                    <div className="bg-surface rounded-xl p-6 border border-outline-soft hover:border-cta/30 hover:shadow-ambient transition-all group">
                      <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-cta/10 transition-colors">
                        <Icon className="w-5 h-5 text-primary group-hover:text-cta transition-colors" />
                      </div>
                      <h4 className="font-black text-dark text-sm mb-2">{title}</h4>
                      <p className="text-primary/55 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.15} className="relative">
              <div className="w-full h-[520px] rounded-2xl bg-cover bg-center shadow-[0_30px_80px_-20px_rgba(33,34,35,0.3)]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80')" }} role="img" aria-label="Heavy cargo transport" />
              <div className="absolute -bottom-6 -left-6 bg-dark text-white rounded-xl p-6 shadow-ambient-lg">
                <div className="text-3xl font-black text-cta mb-1">500T+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">Max Payload</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-5 shadow-ambient border border-outline-soft">
                <div className="text-2xl font-black text-dark mb-1">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-neutral">Permit Success</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 lg:px-12 bg-surface-low">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4"><span className="w-6 h-px bg-cta" /> How We Work</span>
            <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">The Blueprint for Success</h2>
            <p className="text-primary/55 mt-4 max-w-xl mx-auto leading-relaxed">Every project follows a proven four-phase methodology — from initial discovery to flawless execution.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY.map(({ step, icon: Icon, title, desc }, i) => (
              <Reveal key={step} delay={i * 0.09}>
                <div className="group relative bg-white rounded-2xl p-8 border border-outline-soft hover:border-cta/30 hover:shadow-ambient transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-cta/60 mb-5">{step}</div>
                  <div className="w-12 h-12 rounded-xl bg-primary/6 flex items-center justify-center mb-6 group-hover:bg-cta/10 transition-colors">
                    <Icon className="w-5 h-5 text-primary group-hover:text-cta transition-colors" />
                  </div>
                  <h3 className="text-lg font-black text-dark mb-3">{title}</h3>
                  <p className="text-primary/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4"><span className="w-6 h-px bg-cta" /> Core Services</span>
              <h2 className="text-4xl font-black text-dark tracking-tight leading-tight">End-to-End Logistics<br />Solutions</h2>
            </div>
            <p className="text-primary/55 max-w-sm text-sm leading-relaxed">Integrated transport, supply chain engineering, and dedicated fleet solutions for India&apos;s largest industrial enterprises.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 lg:px-12 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(216,144,66,0.07)_0%,transparent_60%)]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <Reveal className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4"><span className="w-6 h-px bg-cta" /> Specialized</span>
              <h2 className="text-4xl font-black text-white tracking-tight leading-tight">When Standard<br />Logistics Isn&apos;t Enough</h2>
            </div>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed">Purpose-built solutions for over-dimensional cargo and dedicated fleet operations that demand a different level of expertise.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPECIALIZED.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.1}>
                <Link href={`/services/${service.slug}`} className="group flex flex-col sm:flex-row bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cta/30 transition-all duration-300">
                  <div className="relative sm:w-56 h-52 sm:h-auto shrink-0 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${service.image}')` }} role="img" aria-label={service.title} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark/40 sm:bg-gradient-to-l" />
                  </div>
                  <div className="p-8 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-cta mb-3 block">{service.heroTag}</span>
                      <h3 className="text-xl font-black text-white mb-3">{service.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-5">{service.subheadline}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.stats.slice(0, 2).map((s) => (
                          <div key={s.label}>
                            <div className="text-xl font-black text-cta">{s.value}</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-cta font-black text-[11px] uppercase tracking-widest group-hover:gap-3 transition-all">View Details <ArrowRight className="w-3.5 h-3.5" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-surface-low border-y border-outline-soft">
        <div className="max-w-[1400px] mx-auto">
          <Reveal className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40">Industries We Serve</span>
            <div className="h-px flex-1 bg-outline-soft hidden md:block mx-8" />
            <Link href="/clients" className="inline-flex items-center gap-1.5 text-cta font-black text-[11px] uppercase tracking-widest hover:gap-3 transition-all">View Case Studies <ChevronRight className="w-3.5 h-3.5" /></Link>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {["Steel & Manufacturing","Power & Energy","Infrastructure","Renewable Energy","Oil & Gas","Automotive","Chemicals","Defence"].map((ind, i) => (
              <Reveal key={ind} delay={i * 0.04}>
                <span className="inline-block bg-white border border-outline-soft text-primary/70 font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full hover:border-cta/40 hover:text-cta transition-all cursor-default">{ind}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(216,144,66,0.15)_0%,transparent_55%)]" />
        <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80')" }} />
        <div className="max-w-[900px] mx-auto relative z-10 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-6"><span className="w-6 h-px bg-cta" /> Ready to Begin</span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.0] mb-6">Your project, engineered<br />for success.</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl mx-auto">Our logistics architects are ready to assess your project and deliver a tailored solution — within 2 hours of your inquiry.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => openModal()} className="inline-flex items-center justify-center gap-2.5 bg-cta hover:bg-cta/90 text-white font-black uppercase tracking-widest text-[12px] px-10 py-5 rounded-xl transition-all hover:-translate-y-0.5 shadow-[0_8px_40px_rgba(216,144,66,0.4)]">
                Initiate Quote Request <ArrowRight className="w-4 h-4" />
              </button>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello, I need a technical advisory for a logistics project.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-black uppercase tracking-widest text-[12px] px-10 py-5 rounded-xl transition-all">
                <MessageCircle className="w-4 h-4" /> Technical Advisory
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/10">
              {[{ icon: Truck, label: "500+ Fleet Vehicles" },{ icon: Shield, label: "ISO 9001:2015 Certified" },{ icon: Warehouse, label: "28 States Covered" }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-white/50">
                  <Icon className="w-4 h-4 text-cta/70" />
                  <span className="text-[11px] font-bold uppercase tracking-widest">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}