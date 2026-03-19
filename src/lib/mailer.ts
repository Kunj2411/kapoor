import nodemailer from "nodemailer";

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

/** Notification email to the business */
async function sendNotification(data: LeadData) {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: `"Kapoor Transport Website" <${process.env.SMTP_USER}>`,
    to: process.env.LEAD_EMAIL || process.env.SMTP_USER,
    replyTo: data.email,
    subject: `🚛 New Lead: ${data.name} — ${data.service}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f6f3f0;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f3f0;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#495D6E;padding:32px 40px;">
            <p style="margin:0;color:#D89042;font-size:11px;font-weight:800;letter-spacing:0.3em;text-transform:uppercase;">New Inquiry</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:24px;font-weight:900;letter-spacing:-0.5px;">Kapoor Transport</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 24px;color:#495D6E;font-size:14px;">A new lead has been submitted via the website contact form.</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${[
                ["Name", data.name],
                ["Email", data.email],
                ["Phone", data.phone],
                ["Service", data.service],
                ["Message", data.message || "—"],
              ]
                .map(
                  ([k, v]) => `
              <tr>
                <td style="padding:12px 16px;background:#f6f3f0;border-radius:8px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:#7F7E7C;width:120px;">${k}</td>
                <td style="padding:12px 16px;font-size:14px;color:#212223;font-weight:600;">${v}</td>
              </tr>
              <tr><td colspan="2" style="height:6px;"></td></tr>`
                )
                .join("")}
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f6f3f0;padding:24px 40px;border-top:1px solid #e8e5e2;">
            <p style="margin:0;font-size:12px;color:#7F7E7C;">This email was generated automatically by the Kapoor Transport website.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  });
}

/** Auto-reply confirmation to the lead */
async function sendAutoReply(data: LeadData) {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: `"Kapoor Transport" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: `We received your inquiry — Kapoor Transport`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f6f3f0;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f3f0;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#495D6E;padding:32px 40px;">
            <p style="margin:0;color:#D89042;font-size:11px;font-weight:800;letter-spacing:0.3em;text-transform:uppercase;">Inquiry Confirmed</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:24px;font-weight:900;">Thank you, ${data.name}.</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:40px;">
            <p style="color:#495D6E;font-size:15px;line-height:1.7;margin:0 0 20px;">
              We've received your inquiry for <strong style="color:#212223;">${data.service}</strong> and our logistics strategist will contact you within <strong style="color:#D89042;">2 business hours</strong>.
            </p>
            <p style="color:#495D6E;font-size:14px;line-height:1.7;margin:0 0 32px;">
              In the meantime, feel free to reach us directly:
            </p>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:12px;">
                  <a href="tel:+911145678900" style="display:inline-block;background:#495D6E;color:#ffffff;font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:12px 24px;border-radius:8px;text-decoration:none;">Call Us</a>
                </td>
                <td>
                  <a href="https://wa.me/911145678900?text=Hi%2C%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(data.service)}." style="display:inline-block;background:#25D366;color:#ffffff;font-size:12px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:12px 24px;border-radius:8px;text-decoration:none;">WhatsApp</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#f6f3f0;padding:24px 40px;border-top:1px solid #e8e5e2;">
            <p style="margin:0;font-size:12px;color:#7F7E7C;">Kapoor Transport · Industrial Area Phase II, Okhla, New Delhi · solutions@kapoortransport.in</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  });
}

export async function sendLeadEmail(data: LeadData) {
  await Promise.allSettled([sendNotification(data), sendAutoReply(data)]);
}
