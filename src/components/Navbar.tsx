"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import { useModal } from "@/context/ModalContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { openModal } = useModal();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300",
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      )}
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center px-6 lg:px-12 py-3 max-w-[1600px] mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg ring-2 ring-white/10 group-hover:ring-cta/50 transition-all">
            <Image
              src="/logo.jpeg"
              alt="Kapoor Transport Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className={cn(
              "text-lg font-black tracking-tight uppercase transition-colors",
              scrolled ? "text-primary" : "text-white"
            )}>
              Kapoor
            </span>
            <span className="text-sm font-bold text-cta tracking-widest uppercase">Transport</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest">
          {NAV_LINKS.map((link) => {
            const isActive = mounted && pathname === link.href;
            return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-cta relative group",
                isActive
                  ? "text-cta"
                  : scrolled ? "text-primary/70" : "text-white/80"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[2px] bg-cta transition-all duration-300",
                isActive ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
            );
          })}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/919925195293?text=Hello%2C%20I%20need%20a%20logistics%20quote.`}
            target="_blank" rel="noopener noreferrer"
            className={cn(
              "text-[11px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-lg border transition-all",
              scrolled
                ? "border-primary/30 text-primary hover:border-primary hover:bg-primary/5"
                : "border-white/30 text-white hover:border-white hover:bg-white/10"
            )}
          >
            WhatsApp
          </a>
          <button
            onClick={() => openModal()}
            className="bg-cta hover:bg-cta-dark text-white text-[11px] font-black uppercase tracking-widest px-6 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn("lg:hidden p-2 rounded-lg", scrolled ? "text-primary" : "text-white")}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block text-sm font-bold uppercase tracking-widest py-3 px-3 rounded-lg transition-colors",
                mounted && pathname === link.href
                  ? "text-cta bg-cta/5"
                  : "text-primary/70 hover:text-primary hover:bg-primary/5"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => { openModal(); setOpen(false); }}
              className="w-full bg-cta text-white font-black uppercase tracking-widest text-sm py-3 rounded-xl"
            >
              Get Free Quote
            </button>
            <a
              href="https://wa.me/919925195293"
              target="_blank" rel="noopener noreferrer"
              className="w-full text-center border border-[#25D366] text-[#25D366] font-bold uppercase tracking-widest text-sm py-3 rounded-xl"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
