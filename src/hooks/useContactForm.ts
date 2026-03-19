"use client";

import { useState } from "react";

export const SERVICES_OPTIONS = [
  "Industrial Haulage",
  "ODC Management",
  "Smart Warehousing",
  "Project Cargo",
  "Full Truck Load (FTL)",
  "Cold Chain Logistics",
  "Other",
];

export type FormStatus = "idle" | "loading" | "success" | "error";

export interface FormFields {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof FormFields, string>>;

function validateClient(fields: FormFields): FieldErrors {
  const e: FieldErrors = {};
  if (!fields.name.trim()) e.name = "Name is required.";
  if (!fields.email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Enter a valid email.";
  if (!fields.phone.trim()) e.phone = "Phone is required.";
  else if (!/^[+\d\s\-()]{7,20}$/.test(fields.phone)) e.phone = "Enter a valid phone number.";
  if (!fields.service) e.service = "Please select a service.";
  return e;
}

const EMPTY: FormFields = { name: "", email: "", phone: "", service: "", message: "" };

export function useContactForm(defaultService = "") {
  const [form, setForm] = useState<FormFields>({ ...EMPTY, service: defaultService });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    // Clear field error on change
    if (fieldErrors[name as keyof FormFields]) {
      setFieldErrors((p) => ({ ...p, [name]: undefined }));
    }
  }

  function reset(service = "") {
    setForm({ ...EMPTY, service });
    setFieldErrors({});
    setStatus("idle");
    setServerError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errors = validateClient(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) {
        if (json.errors) setFieldErrors(json.errors);
        else setServerError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return { form, fieldErrors, status, serverError, handleChange, handleSubmit, reset };
}
