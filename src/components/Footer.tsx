import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE, NAV_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-10 text-white border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden ring-2 ring-white/10">
                <Image
                  src="/logo.jpeg"
                  alt="Kapoor Transport Company Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-black uppercase tracking-tight">
                Kapoor <span className="text-cta">Transport Company, AHB</span>
              </span>
            </div>
            <p className="text-white/40 leading-relaxed text-sm mb-8 max-w-xs">
              Driving India&apos;s industrial pulse with specialized logistics, route
              intelligence, and uncompromised safety protocols.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-white/50 hover:text-cta transition-colors">
                <Phone className="w-4 h-4 text-cta" /> {SITE.phone}
              </a>
              <a href={`tel:${SITE.phone2}`} className="flex items-center gap-3 text-white/50 hover:text-cta transition-colors">
                <Phone className="w-4 h-4 text-cta" /> {SITE.phone2}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/50 hover:text-cta transition-colors">
                <Mail className="w-4 h-4 text-cta" /> {SITE.email}
              </a>
              <p className="flex items-start gap-3 text-white/50">
                <MapPin className="w-4 h-4 text-cta mt-0.5 shrink-0" /> {SITE.address}
              </p>
              <p className="flex items-center gap-3 text-white/50">
                <span className="text-cta font-bold text-xs shrink-0">GST</span>
                24AJTPK8292Q2Z1
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h5 className="text-[11px] font-black mb-6 uppercase tracking-[0.3em] text-cta">
              Navigation
            </h5>
            <ul className="space-y-4 text-[13px] font-medium text-white/50">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h5 className="text-[11px] font-black mb-6 uppercase tracking-[0.3em] text-cta">
              Services
            </h5>
            <ul className="space-y-4 text-[13px] font-medium text-white/50">
              {["Industrial Haulage", "ODC Management", "Smart Warehousing", "Project Cargo", "Full Truck Load", "Cold Chain"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h5 className="text-[11px] font-black mb-6 uppercase tracking-[0.3em] text-cta">
              Newsletter
            </h5>
            <p className="text-white/40 text-[12px] mb-6 leading-relaxed">
              Subscribe for industrial logistics insights and market reports.
            </p>
            <form className="flex" action="#" method="post">
              <input
                type="email"
                placeholder="Business Email"
                className="bg-white/5 border border-white/10 rounded-l-lg text-white text-[13px] px-4 py-3 w-full focus:outline-none focus:border-cta placeholder:text-white/30"
              />
              <button
                type="submit"
                className="bg-cta text-white px-4 rounded-r-lg hover:bg-cta-dark transition-colors"
                aria-label="Subscribe"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[11px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Kapoor Transport Company, AHB
          </p>
          <div className="flex gap-8">
            {["GST Registered"].map((badge) => (
              <span key={badge} className="text-white/20 text-[10px] uppercase font-black tracking-widest">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
