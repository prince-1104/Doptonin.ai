import { FadeIn } from "@/components/FadeIn";
import { whyNow } from "@/lib/content";

export function WhyNowSection() {
  return (
    <section id="why-now" className="section-shell">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="section-label">{whyNow.label}</p>
        </FadeIn>
        <div className="mt-4 grid gap-4 md:grid-cols-3 md:gap-5">
          {whyNow.columns.map((column, index) => (
            <FadeIn key={column.title} delay={index * 0.08} className="premium-card p-6">
              <span className="mb-7 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 font-mono text-sm text-accent">0{index + 1}</span>
              <h3 className="text-lg font-medium tracking-tight">{column.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{column.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
