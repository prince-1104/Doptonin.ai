import { Resend } from "resend";
import { brand } from "@/lib/content";

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value);
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function inboxAddress() {
  return process.env.CONTACT_INBOX?.trim() || brand.email;
}

function fromAddress() {
  return process.env.RESEND_FROM?.trim() || "Doptonin <beth.t@example.com>";
}

export async function sendInboxEmail({
  subject,
  replyTo,
  text,
  html,
}: {
  subject: string;
  replyTo: string;
  text: string;
  html: string;
}) {
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    throw new Error("Email is not configured.");
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromAddress(),
    to: inboxAddress(),
    replyTo,
    subject,
    text,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export function describeEmailError(error: unknown) {
  const detail = error instanceof Error ? error.message : "Unknown email error.";

  if (/api key|unauthorized|invalid.+key/i.test(detail)) {
    return "The Resend API key in Vercel does not match this account. Create a new key on the doptonin@gmail.com Resend account, replace RESEND_API_KEY, then Redeploy.";
  }

  if (/testing emails|verify a domain|own email/i.test(detail)) {
    return "Resend is still in test mode, so it can only deliver to the Resend account email. Confirm the account is doptonin@gmail.com, or verify doptonin.online as a sending domain.";
  }

  return detail;
}
