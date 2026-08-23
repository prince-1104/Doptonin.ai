import { FadeIn } from "@/components/FadeIn";
import { problem } from "@/lib/content";

export function ProblemSection() {
  return (
    <section id="problem" className="section-shell">
      <FadeIn className="mx-auto max-w-3xl">
        <p className="section-label">{problem.label}</p>
        <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl md:text-2xl md:leading-relaxed">
          {problem.body}
        </p>
      </FadeIn>
    </section>
  );
}
