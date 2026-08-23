import { NextResponse } from "next/server";
import { describeEmailError, escapeHtml, isValidEmail, sendInboxEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const record = typeof body === "object" && body ? (body as Record<string, unknown>) : {};
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const message = typeof record.message === "string" ? record.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email address is required." },
      { status: 400 },
    );
  }

  try {
    await sendInboxEmail({
      subject: `Investor inquiry from ${name}`,
      replyTo: email,
      text: `New investor inquiry\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p>New investor inquiry</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}<br />
        <strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });
  } catch (error) {
    return NextResponse.json({ ok: false, error: describeEmailError(error) }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
