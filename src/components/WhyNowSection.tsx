import { FadeIn } from "@/components/FadeIn";
import { whyNow } from "@/lib/content";

export function WhyNowSection() {
  return (
    <section id="why-now" className="section-shell">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="section-label">{whyNow.label}</p>
        </FadeIn>
        <div className="mt-4 grid gap-8 md:grid-cols-3 md:gap-12">
          {whyNow.columns.map((column, index) => (
            <FadeIn key={column.title} delay={index * 0.08}>
              <h3 className="text-lg font-medium tracking-tight">{column.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{column.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
