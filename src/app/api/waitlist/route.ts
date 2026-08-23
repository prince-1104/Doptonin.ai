import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email address is required." },
      { status: 400 },
    );
  }

  // TODO: Wire this to Resend, ConvertKit, or a Supabase `waitlist` table.
  // TODO: Add rate limiting and double-opt-in before taking this to production.
  // TODO: Persist `email` and `created_at`; do not log addresses in plaintext in production.

  return NextResponse.json({ ok: true });
}
