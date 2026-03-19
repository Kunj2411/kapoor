"use client";

import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { useContactForm, SERVICES_OPTIONS } from "@/hooks/useContactForm";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
      <AlertCircle className="w-3 h-3 shrink-0" /> {msg}
    </p>
  );
}

export default function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const { form, fieldErrors, status, serverError, handleChange, handleSubmit, reset } = useContactForm(defaultService);

  const inputCls = (err?: string) =>
    `w-full border-b-2 ${err ? "border-red-400" : "border-gray-200"} bg-transparent py-3 text-dark placeholder:text-neutral/50 focus:outline-none focus:border-cta transition-colors text-sm`;
  const labelCls = "block text-[10px] font-black uppercase tracking-widest text-primary/50 mb-1.5";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
        <div className="w-20 h-20 rounded-full bg-cta/15 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-cta" />
        </div>
        <h3 className="text-2xl font-black text-dark">Inquiry Received!</h3>
        <p className="text-primary/60 max-w-xs">Our logistics strategist will contact you within 2 business hours.</p>
        <button
          onClick={() => reset(defaultService)}
          className="text-[11px] font-bold uppercase tracking-widest text-cta hover:text-primary transition-colors"
        >
          Submit Another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cf-name" className={labelCls}>Full Name *</label>
          <input id="cf-name" name="name" type="text" value={form.name} onChange={handleChange}
            placeholder="Your full name" className={inputCls(fieldErrors.name)} aria-invalid={!!fieldErrors.name} />
          <FieldError msg={fieldErrors.name} />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelCls}>Email Address *</label>
          <input id="cf-email" name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="business@company.com" className={inputCls(fieldErrors.email)} aria-invalid={!!fieldErrors.email} />
          <FieldError msg={fieldErrors.email} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelCls}>Phone Number *</label>
          <input id="cf-phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
            placeholder="+91 XXXXX XXXXX" className={inputCls(fieldErrors.phone)} aria-invalid={!!fieldErrors.phone} />
          <FieldError msg={fieldErrors.phone} />
        </div>
        <div>
          <label htmlFor="cf-service" className={labelCls}>Service Required *</label>
          <select id="cf-service" name="service" value={form.service} onChange={handleChange}
            className={`${inputCls(fieldErrors.service)} appearance-none cursor-pointer`} aria-invalid={!!fieldErrors.service}>
            <option value="">Select a service</option>
            {SERVICES_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <FieldError msg={fieldErrors.service} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className={labelCls}>Project Details</label>
        <textarea id="cf-message" name="message" rows={4} value={form.message} onChange={handleChange}
          placeholder="Describe your logistics requirements..." className={`${inputCls()} resize-none`} />
      </div>

      {serverError && (
        <p className="flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" /> {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center gap-2.5 bg-cta hover:bg-cta-dark text-white font-black uppercase tracking-widest text-[12px] px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_8px_30px_rgba(216,144,66,0.3)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Submit Inquiry"}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
