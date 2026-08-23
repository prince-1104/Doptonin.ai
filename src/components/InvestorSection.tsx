"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { brand, investors } from "@/lib/content";

const mailtoHref = `mailto:${brand.email}?subject=${encodeURIComponent(investors.mailtoSubject)}`;

export function InvestorSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/investors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Could not send the request.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not send the request.");
    }
  }

  return (
    <section id="investors" className="section-shell">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:gap-16">
        <FadeIn>
          <p className="section-label">{investors.label}</p>
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
            {investors.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{investors.body}</p>
          <p className="mt-6 text-sm text-muted">
            Prefer email?{" "}
            <a href={mailtoHref} className="text-accent underline-offset-4 hover:underline">
              {brand.email}
            </a>
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          {status === "success" ? (
            <p className="border border-accent/30 bg-accent/5 px-5 py-6 text-sm leading-relaxed text-foreground">
              {investors.success}
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-label text-muted">Name</span>
                <input name="name" type="text" required autoComplete="name" className="field" />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-label text-muted">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="field"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-label text-muted">
                  Message
                </span>
                <textarea name="message" required rows={4} className="field resize-y" />
              </label>
              {status === "error" ? (
                <p className="text-sm text-red-300" role="alert">
                  {error}
                </p>
              ) : null}
              <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : investors.cta}
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
