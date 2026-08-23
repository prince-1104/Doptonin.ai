import { FadeIn } from "@/components/FadeIn";
import { roadmap } from "@/lib/content";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="section-shell">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="section-label">{roadmap.label}</p>
          <h2 className="max-w-xl text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
            {roadmap.headline}
          </h2>
        </FadeIn>

        <ol className="relative mt-10 grid gap-8 sm:mt-14 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-[4px] top-2 bottom-2 w-px bg-white/10 md:hidden"
          />
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[11px] hidden h-px bg-white/10 md:block"
          />
          {roadmap.phases.map((item, index) => (
            <FadeIn key={item.phase} delay={index * 0.08} className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="relative z-10 block h-[9px] w-[9px] rounded-full border border-accent bg-obsidian" />
                <span className="text-[11px] uppercase tracking-label text-accent">
                  {item.phase}
                </span>
              </div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.line}</p>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
