import { Metadata } from "next";
import { CLIENT_LOGOS, TESTIMONIALS } from "@/data/site";
import CTABanner from "@/components/sections/CTABanner";
import CaseStudies from "./CaseStudies";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Clients & Case Studies | Kapoor Transport",
  description:
    "Trusted by India's largest industrial houses — TATA, Reliance, Adani, L&T, JSW and more.",
};

const trustStats = [
  { value: "100+", label: "Enterprise Clients" },
  { value: "30+", label: "Years of Trust" },
  { value: "12K+", label: "Projects Delivered" },
  { value: "28", label: "States Served" },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark py-32 px-6 lg:px-12 overflow-hidden min-h-[55vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />

        <div className="max-w-[1400px] mx-auto relative z-10 w-full pb-8">
          <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block">
            Enterprise Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6 max-w-3xl">
            Building the backbone of Indian Industry.
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-12">
            Three decades of strategic partnership with India&apos;s largest industrial houses,
            delivering precision logistics at unprecedented scale.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-3xl">
            {trustStats.map((s) => (
              <div key={s.label} className="bg-white/5 backdrop-blur-sm px-6 py-5">
                <div className="text-2xl font-black text-white mb-1">{s.value}</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-white/40">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo wall */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block">
              Our Partners
            </span>
            <h2 className="text-4xl font-black text-dark tracking-tight mb-4">
              Trusted by India&apos;s Best
            </h2>
            <p className="text-primary/60 max-w-lg mx-auto text-sm leading-relaxed">
              From Fortune 500 conglomerates to government infrastructure projects — our client
              roster spans every critical sector of the Indian economy.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-outline-soft border border-outline-soft rounded-2xl overflow-hidden">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="bg-white px-6 py-8 flex flex-col items-center justify-center gap-2 group hover:bg-surface transition-colors"
              >
                <span className="text-xl font-black tracking-tight text-primary/30 group-hover:text-primary transition-colors duration-300 text-center leading-tight">
                  {client.name}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral/50 group-hover:text-cta transition-colors">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 lg:px-12 bg-surface-low">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block">
              Success Stories
            </span>
            <h2 className="text-4xl font-black text-dark tracking-tight">Impact Delivered.</h2>
          </div>
          <CaseStudies />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-14">
            <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block">
              What They Say
            </span>
            <h2 className="text-4xl font-black text-dark tracking-tight">Executive Voices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-surface rounded-2xl p-8 border border-outline-soft flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cta text-cta" />
                  ))}
                </div>
                <blockquote className="text-primary/80 leading-relaxed text-sm flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 border-t border-outline-soft pt-6">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white font-black text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-black text-dark text-sm">{t.name}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-neutral">
                      {t.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured quote */}
      <section className="py-24 px-6 lg:px-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(216,144,66,0.12)_0%,transparent_60%)]" />
        <div className="max-w-[900px] mx-auto relative z-10">
          <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-8 block">
            Executive Testimonial
          </span>
          <blockquote className="mb-10">
            <p className="text-3xl md:text-4xl font-light text-white leading-snug">
              &ldquo;{TESTIMONIALS[0].quote}&rdquo;
            </p>
          </blockquote>
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-cta flex items-center justify-center text-white font-black text-lg">
              {TESTIMONIALS[0].initials}
            </div>
            <div>
              <div className="text-white font-black text-lg">{TESTIMONIALS[0].name}</div>
              <div className="text-white/50 text-[10px] uppercase tracking-widest font-bold">
                {TESTIMONIALS[0].title}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Scale your operations with confidence." />
    </>
  );
}
