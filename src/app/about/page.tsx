import { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import { SITE, INFRASTRUCTURE } from "@/data/site";
import {
  Shield, Award, Users, Globe,
  Monitor, Wrench, Warehouse, GraduationCap, Cpu, Map,
} from "lucide-react";
import Timeline from "./Timeline";

export const metadata: Metadata = {
  title: "About Us | Kapoor Transport",
  description: "30+ years of industrial logistics excellence across India.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  Monitor, Wrench, Warehouse, GraduationCap, Cpu, Map,
};

const values = [
  {
    icon: Shield,
    title: "Safety First",
    desc: "Every operation begins and ends with safety. Our protocols exceed industry standards across all 500+ vehicles.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "ISO 9001:2015 certified processes ensuring consistent, world-class service delivery on every project.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We are a strategic extension of your supply chain — not just a carrier. Your KPIs are our KPIs.",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    desc: "28 states, 2000+ locations, one unified network of trust, reliability, and operational excellence.",
  },
];

const yearsActive = new Date().getFullYear() - parseInt(SITE.founded);

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark py-32 px-6 lg:px-12 overflow-hidden min-h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />

        <div className="max-w-[1400px] mx-auto relative z-10 w-full pb-8">
          <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6 max-w-3xl">
            Built on Trust.
            <br />
            <span className="text-cta">Driven by Excellence.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Since {SITE.founded}, we have been the logistics backbone of India&apos;s most
            critical industrial projects.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story */}
            <div>
              <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block">
                Since {SITE.founded}
              </span>
              <h2 className="text-4xl font-black text-dark mb-6 tracking-tight leading-tight">
                The Steel Architect of<br />India&apos;s Supply Chain
              </h2>
              <p className="text-primary/60 leading-relaxed mb-5">
                Founded in {SITE.founded}, Kapoor Transport began as a regional haulage company
                with a single vision: to move India&apos;s industrial backbone with precision and
                trust. Over {yearsActive} years, we have grown into one of India&apos;s most
                respected logistics enterprises.
              </p>
              <p className="text-primary/60 leading-relaxed mb-10">
                Today, our 500+ vehicle fleet serves Fortune 500 companies, government
                infrastructure projects, and emerging industrial giants across 28 states. Every
                shipment carries the weight of our legacy and the promise of our future.
              </p>

              {/* Mission / Vision cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-primary rounded-xl p-6">
                  <div className="text-[9px] font-black uppercase tracking-widest text-cta mb-2">
                    Our Mission
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    To engineer India&apos;s most reliable industrial logistics network — moving
                    critical cargo safely, on time, every time.
                  </p>
                </div>
                <div className="bg-surface rounded-xl p-6 border border-outline-soft">
                  <div className="text-[9px] font-black uppercase tracking-widest text-cta mb-2">
                    Our Vision
                  </div>
                  <p className="text-primary/70 text-sm leading-relaxed">
                    To be the logistics partner that powers India&apos;s next industrial
                    revolution — from renewable energy to advanced manufacturing.
                  </p>
                </div>
              </div>
            </div>

            {/* Image + floating stat */}
            <div className="relative">
              <div
                className="w-full h-[480px] rounded-2xl bg-cover bg-center shadow-ambient-lg"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80')",
                }}
                role="img"
                aria-label="Kapoor Transport fleet"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-ambient-lg border border-outline-soft">
                <div className="text-4xl font-black text-cta mb-1">{yearsActive}+</div>
                <div className="text-primary font-bold text-sm">Years of Excellence</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-dark text-white p-6 rounded-xl shadow-ambient-lg">
                <div className="text-3xl font-black text-white mb-1">12K+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 lg:px-12 bg-surface-low">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block">
              What We Stand For
            </span>
            <h2 className="text-4xl font-black text-dark tracking-tight">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-xl border border-outline-soft hover:border-cta/30 hover:shadow-ambient transition-all group"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cta/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-cta transition-colors" />
                </div>
                <h3 className="text-lg font-black text-dark mb-3">{title}</h3>
                <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block">
              Our Journey
            </span>
            <h2 className="text-4xl font-black text-dark tracking-tight">
              {yearsActive} Years in the Making
            </h2>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 px-6 lg:px-12 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(216,144,66,0.08)_0%,transparent_60%)]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block">
              Our Infrastructure
            </span>
            <h2 className="text-4xl font-black text-white tracking-tight">
              Built to Scale
            </h2>
            <p className="text-white/50 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              The physical and digital infrastructure behind India&apos;s most reliable
              logistics network.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INFRASTRUCTURE.map((item) => {
              const Icon = ICON_MAP[item.icon] || Monitor;
              return (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cta/30 transition-colors group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-cta/10 transition-colors">
                      <Icon className="w-6 h-6 text-white/60 group-hover:text-cta transition-colors" />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-cta leading-none mb-1">
                        {item.stat}
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-3">
                        {item.title}
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to partner with India's most trusted logistics company?" />
    </>
  );
}
