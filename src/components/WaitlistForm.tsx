"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { waitlist } from "@/lib/content";

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Could not join the waitlist.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not join the waitlist.");
    }
  }

  return (
    <section id="waitlist" className="section-shell">
      <FadeIn className="mx-auto max-w-xl">
        <p className="section-label">{waitlist.label}</p>
        <h2 className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          {waitlist.headline}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">{waitlist.body}</p>

        {status === "success" ? (
          <p className="mt-8 border border-accent/30 bg-accent/5 px-5 py-6 text-sm leading-relaxed text-foreground">
            {waitlist.success}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="waitlist-email">
              Email
            </label>
            <input
              id="waitlist-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={waitlist.placeholder}
              className="field"
            />
            <button
              type="submit"
              className="btn btn-primary shrink-0"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Joining…" : waitlist.cta}
            </button>
          </form>
        )}

        {status === "error" ? (
          <p className="mt-3 text-sm text-red-300" role="alert">
            {error}
          </p>
        ) : null}
      </FadeIn>
    </section>
  );
}
