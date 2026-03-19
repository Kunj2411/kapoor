import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { sendLeadEmail } from "@/lib/mailer";

// Server-side field validation
function validate(body: Record<string, string>) {
  const errors: Record<string, string> = {};

  if (!body.name?.trim()) errors.name = "Name is required.";
  else if (body.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";

  if (!body.email?.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) errors.email = "Enter a valid email address.";

  if (!body.phone?.trim()) errors.phone = "Phone number is required.";
  else if (!/^[+\d\s\-()]{7,20}$/.test(body.phone)) errors.phone = "Enter a valid phone number.";

  if (!body.service?.trim()) errors.service = "Please select a service.";

  return errors;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const errors = validate(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 422 });
    }

    const { name, email, phone, service, message } = body;
    const data = { name: name.trim(), email: email.trim().toLowerCase(), phone: phone.trim(), service, message: message?.trim() || "" };

    // Save to MongoDB (non-blocking if DB not configured)
    try {
      await connectDB();
      await Lead.create(data);
    } catch (dbErr) {
      console.error("MongoDB error (non-fatal):", dbErr);
    }

    // Send emails (non-blocking — don't fail the request if email fails)
    sendLeadEmail(data).catch((err) => console.error("Email error:", err));

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error. Please try again." }, { status: 500 });
  }
}
