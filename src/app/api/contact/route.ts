import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const bodySchema = z.object({
  name: z.string().trim().min(2).max(200),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(6).max(40),
  message: z.string().trim().min(10).max(10000),
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\r?\n/g, "<br />");
}

function buildHtml(input: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string {
  const telDigits = input.phone.replace(/[^\d+]/g, "");
  const safe = {
    name: escapeHtml(input.name),
    email: escapeHtml(input.email),
    phone: escapeHtml(input.phone),
    message: escapeHtml(input.message),
  };
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Lead from Website</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0f0f0f;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#0f0f0f;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background-color:#111111;border-radius:16px;border:1px solid #1f1f1f;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px;background:linear-gradient(90deg,#ff4500,#ff8c00);">
                <p style="margin:0;font-size:18px;font-weight:600;color:#ffffff;">New lead — PermaGrowth website</p>
                <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.9);">Submitted via contact form</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px 8px;">
                <p style="margin:0 0 6px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#a1a1aa;">Name</p>
                <p style="margin:0;font-size:15px;color:#ffffff;">${safe.name}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px 8px;">
                <p style="margin:0 0 6px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#a1a1aa;">Email</p>
                <p style="margin:0;font-size:15px;"><a href="mailto:${encodeURIComponent(input.email)}" style="color:#ff6a00;text-decoration:none;">${safe.email}</a></p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px 8px;">
                <p style="margin:0 0 6px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#a1a1aa;">Phone</p>
                <p style="margin:0;font-size:15px;color:#ffffff;"><a href="${telDigits ? `tel:${telDigits}` : "#"}" style="color:#e4e4e7;text-decoration:none;">${safe.phone}</a></p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px 28px;">
                <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#a1a1aa;">Message</p>
                <div style="margin:0;padding:14px 16px;background-color:#0a0a0a;border-radius:12px;border:1px solid #262626;font-size:14px;line-height:1.6;color:#e4e4e7;">${safe.message}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px 24px;">
                <p style="margin:0;font-size:12px;color:#71717a;">Reply directly to this email — Reply-To is set to the sender.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildPlainText(input: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string {
  return [
    "New Lead from Website — PermaGrowth",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    "",
    "Message:",
    input.message,
    "",
    "---",
    "Submitted via website contact form.",
  ].join("\n");
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = parsed.data;

  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_EMAIL ?? user;

  if (!host || !portRaw || !user || !pass || !contactTo) {
    console.error(
      "[contact] Missing SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, or CONTACT_EMAIL"
    );
    return NextResponse.json(
      { ok: false, error: "Email is not configured on the server" },
      { status: 500 }
    );
  }

  const port = Number(portRaw);
  if (!Number.isFinite(port) || port < 1 || port > 65535) {
    console.error("[contact] Invalid SMTP_PORT");
    return NextResponse.json(
      { ok: false, error: "Invalid server configuration" },
      { status: 500 }
    );
  }

  const secure = port === 465;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"PermaGrowth Website" <${user}>`,
      to: contactTo,
      replyTo: email,
      subject: "New Lead from Website",
      text: buildPlainText({ name, email, phone, message }),
      html: buildHtml({ name, email, phone, message }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Nodemailer error:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to send email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
