import { PulseLine } from "@/components/PulseLine";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 md:pb-32 md:pt-28"
    >
      <PulseLine variant="hero" />

      <div className="relative mx-auto max-w-4xl">
        <p className="hero-enter section-label">{hero.badge}</p>
        <h1 className="hero-enter max-w-3xl text-balance text-[1.85rem] font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-6xl">
          {hero.headline}
        </h1>
        <p className="hero-enter-delay mt-4 max-w-2xl text-[15px] leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
          {hero.subhead}
        </p>
        <div className="hero-enter-delay mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
          <a href="#waitlist" className="btn btn-primary">
            {hero.primaryCta}
          </a>
          <a href="#investors" className="btn btn-secondary">
            {hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
