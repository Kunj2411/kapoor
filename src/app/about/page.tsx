import { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import { SITE, INFRASTRUCTURE } from "@/data/site";
import {
  Shield, Award, Users, Globe,
  Monitor, Wrench, Warehouse, GraduationCap, Cpu, Map,
} from "lucide-react";
import Timeline from "./Timeline";

export const metadata: Metadata = {
  title: "About Us | Kapoor Transport Company, AHB",
  description: "30+ years of industrial logistics excellence across India. Learn about our vision, mission, and leadership.",
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
    desc: "Rigorous quality processes ensuring consistent, world-class service delivery on every project across India.",
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
              "url('/about1.jpeg')",
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
                  backgroundImage: "url('/about1.jpeg')",
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

      {/* Vision & Mission */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block">
              Purpose &amp; Direction
            </span>
            <h2 className="text-4xl font-black text-dark tracking-tight mb-6">
              Our Vision &amp; Mission
            </h2>
            <p className="text-primary/60 leading-relaxed max-w-3xl mx-auto">
              At Kapoor Transport Company, our identity is deeply intertwined with the aspirations
              of a modern, self-reliant nation. We don&apos;t just see ourselves as a logistics
              provider, but as a catalyst for the Aatmanirbhar Bharat movement, ensuring that the
              fruits of Indian labor reach every household and marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gray-50 rounded-2xl p-10 border border-outline-soft">
              <div className="w-12 h-12 bg-cta/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-cta" />
              </div>
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-cta mb-3">
                Our Vision
              </div>
              <p className="text-primary/70 leading-relaxed text-sm">
                To be the most trusted logistical bridge in the journey toward a Viksit Bharat
                2047. We envision an India where every local entrepreneur, regardless of their
                scale, has access to a world-class supply chain that is authentically Indian in
                spirit and global in its efficiency. Our goal is to set the gold standard for
                &ldquo;Made in India&rdquo; logistics, proving that local expertise is our
                greatest national asset.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-primary rounded-2xl p-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-cta" />
              </div>
              <div className="text-[9px] font-black uppercase tracking-[0.3em] text-cta mb-3">
                Our Mission
              </div>
              <p className="text-white/70 leading-relaxed text-sm mb-6">
                Our mission is built on three pillars of national progress:
              </p>
              <div className="space-y-5">
                {[
                  {
                    num: "01",
                    title: "Empowering the Local Economy",
                    desc: "To champion the Vocal for Local initiative by providing seamless, affordable, and reliable transport solutions.",
                  },
                  {
                    num: "02",
                    title: "Infrastructure for Independence",
                    desc: "To reduce logistical hurdles for MSMEs and support Aatmanirbhar Bharat across all 28 states and 8 union territories.",
                  },
                  {
                    num: "03",
                    title: "Integrity in Motion",
                    desc: 'To uphold transparency and safety, ensuring "Driving Trust Across India" is a lived reality.',
                  },
                ].map((pillar) => (
                  <div key={pillar.num} className="flex gap-4">
                    <span className="text-cta font-black text-lg leading-none shrink-0 mt-0.5">
                      {pillar.num}
                    </span>
                    <div>
                      <div className="text-white font-bold text-sm mb-1">{pillar.title}</div>
                      <p className="text-white/50 text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-24 px-6 lg:px-12 bg-surface-low">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block">
              From the Top
            </span>
            <h2 className="text-4xl font-black text-dark tracking-tight">
              A Message from Our Leadership
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 md:p-14 border border-outline-soft shadow-ambient-lg relative">
            {/* Quote mark */}
            <div className="text-cta/20 text-[120px] font-black leading-none absolute top-4 left-8 select-none">
              &ldquo;
            </div>
            <div className="relative z-10 space-y-5 text-primary/70 leading-relaxed">
              <p>
                At Kapoor Transport Company, we have always believed that logistics is the silent
                heartbeat of a nation&apos;s economy. When a truck moves, a business grows, a
                family is supported, and our country takes another step forward.
              </p>
              <p>
                Our journey began with a simple observation: India&apos;s local businesses are its
                greatest strength, yet they often face the biggest hurdles in reaching their
                customers. The company was founded to change that. Our goal was never just to move
                goods from point A to point B — it was to build a homegrown infrastructure that
                every Indian entrepreneur could rely on.
              </p>
              <p>
                As we look toward the vision of a Viksit Bharat, we are more committed than ever
                to the spirit of Aatmanirbhar Bharat. We aren&apos;t just a service provider; we
                are a partner in your growth.
              </p>
              <p>
                When you see our trucks on the highway, know that they carry more than just cargo.
                They carry the dreams of local manufacturers and the trust of a developing nation.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-outline-soft flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-cta/10 flex items-center justify-center shrink-0">
                <span className="text-cta font-black text-lg">AK</span>
              </div>
              <div>
                <div className="font-black text-dark text-base">Ashwani Kapoor</div>
                <div className="text-primary/50 text-sm font-medium">
                  Director, Kapoor Transport Company, AHB
                </div>
              </div>
            </div>
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
