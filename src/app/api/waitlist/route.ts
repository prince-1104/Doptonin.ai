import { NextResponse } from "next/server";
import { escapeHtml, isValidEmail, sendInboxEmail } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const email =
    typeof body === "object" && body && "email" in body && typeof body.email === "string"
      ? body.email.trim()
      : "";

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email address is required." },
      { status: 400 },
    );
  }

  try {
    await sendInboxEmail({
      subject: `Waitlist: ${email}`,
      replyTo: email,
      text: `New waitlist signup\n\nEmail: ${email}`,
      html: `<p>New waitlist signup</p><p>Email: ${escapeHtml(email)}</p>`,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not save that email right now. Try again in a moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
