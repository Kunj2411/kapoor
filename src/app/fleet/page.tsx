import { Metadata } from "next";
import { Cpu, Shield, Wifi, Wrench, Navigation } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import FleetGrid from "./FleetGrid";

export const metadata: Metadata = {
  title: "Fleet | Kapoor Transport",
  description:
    "500+ specialized vehicles for heavy haulage, ODC, and industrial logistics across India.",
};

const techFeatures = [
  {
    icon: Navigation,
    title: "Real-Time GPS Tracking",
    desc: "Every vehicle transmits live location, speed, and route data. Clients get a dedicated tracking dashboard.",
  },
  {
    icon: Shield,
    title: "Safety Protocols",
    desc: "Bi-weekly maintenance audits, speed governors, dashcams, and 24/7 driver monitoring on every vehicle.",
  },
  {
    icon: Wifi,
    title: "IoT Telematics",
    desc: "Integrated sensors monitor shock, humidity, and temperature for sensitive cargo throughout transit.",
  },
  {
    icon: Cpu,
    title: "Modular Versatility",
    desc: "Fleet components are interchangeable for multi-modal requirements, enabling rapid pivoting between cargo types.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    desc: "8 maintenance depots across India ensure 99.2% fleet uptime with instant replacement vehicles on standby.",
  },
];

const fleetStats = [
  { value: "500+", label: "Active Vehicles" },
  { value: "99.2%", label: "Fleet Uptime" },
  { value: "6", label: "Vehicle Types" },
  { value: "Bi-Weekly", label: "Maintenance Cycle" },
];

export default function FleetPage() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />

        <div className="max-w-[1400px] mx-auto relative z-10 w-full pb-8">
          <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block">
            Premium Assets
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6 max-w-3xl">
            The Powerhouse Fleet.
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-12">
            500+ specialized vehicles, meticulously maintained to deliver industrial excellence
            across every mile of India.
          </p>

          {/* Stat strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-3xl">
            {fleetStats.map((s) => (
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

      {/* Fleet Grid with filters */}
      <section className="py-24 px-6 lg:px-12 bg-surface-low">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-3 block">
              Our Fleet
            </span>
            <h2 className="text-4xl font-black text-dark tracking-tight">
              The Right Vehicle for Every Load
            </h2>
          </div>
          <FleetGrid />
        </div>
      </section>

      {/* Tech features */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase mb-4 block">
                Technology
              </span>
              <h2 className="text-4xl font-black text-dark tracking-tight leading-tight mb-6">
                Every vehicle is a<br />
                <span className="text-primary">connected asset.</span>
              </h2>
              <p className="text-primary/60 leading-relaxed mb-10">
                Our fleet management platform gives you and our operations team complete
                real-time visibility — from ignition to delivery confirmation.
              </p>
              <div className="space-y-6">
                {techFeatures.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-black text-dark text-sm mb-1">{title}</h4>
                      <p className="text-primary/60 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div
                className="w-full aspect-square rounded-2xl bg-cover bg-center shadow-ambient-lg"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80')",
                }}
                role="img"
                aria-label="Fleet telematics"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-dark text-white rounded-xl p-6 shadow-ambient-lg">
                <div className="text-3xl font-black text-cta mb-1">99.2%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  Fleet Uptime
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl p-5 shadow-ambient border border-outline-soft">
                <div className="text-2xl font-black text-dark mb-1">500+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-neutral">
                  Active Vehicles
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to scale your logistics?"
        subtitle="Talk to our fleet specialists about a dedicated vehicle contract tailored to your operations."
      />
    </>
  );
}
