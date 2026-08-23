import { FadeIn } from "@/components/FadeIn";
import { insight } from "@/lib/content";

function SenseIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 text-accent" aria-hidden="true">
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="8.5" stroke="currentColor" strokeWidth="1" className="opacity-60" />
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1" className="opacity-30" />
    </svg>
  );
}

function UnderstandIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 text-accent" aria-hidden="true">
      <circle cx="7" cy="16" r="2" fill="currentColor" />
      <circle cx="16" cy="8" r="2" fill="currentColor" />
      <circle cx="25" cy="16" r="2" fill="currentColor" />
      <circle cx="16" cy="24" r="2" fill="currentColor" />
      <path
        d="M8.6 15 L14.4 9.4 M17.6 9.4 L23.4 15 M23.4 17 L17.6 22.6 M14.4 22.6 L8.6 17"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}

function ProtectIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 text-accent" aria-hidden="true">
      <path
        d="M16 5 L26 9 V16 C26 22 21.5 26.2 16 28 C10.5 26.2 6 22 6 16 V9 Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M12 16 L15 19 L21 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

const icons = [SenseIcon, UnderstandIcon, ProtectIcon];

export function InsightSection() {
  return (
    <section id="insight" className="section-shell">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="max-w-3xl">
          <p className="section-label">{insight.label}</p>
          <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl md:text-2xl">
            {insight.body}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-8 sm:mt-14 md:grid-cols-3 md:gap-12">
          {insight.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={step.title} delay={index * 0.08}>
                <Icon />
                <h3 className="mt-5 text-lg font-medium tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-10 max-w-3xl border-l border-accent/40 pl-4 sm:mt-14 sm:pl-5">
          <p className="text-sm leading-relaxed text-muted">{insight.honesty}</p>
        </FadeIn>
      </div>
    </section>
  );
}
