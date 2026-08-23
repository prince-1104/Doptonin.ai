import { FadeIn } from "@/components/FadeIn";
import { LocketPlaceholder } from "@/components/LocketPlaceholder";
import { product } from "@/lib/content";

export function ProductSection() {
  return (
    <section id="product" className="section-shell">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:items-center md:gap-16">
        <FadeIn>
          <LocketPlaceholder />
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="section-label">{product.label}</p>
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
            {product.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{product.body}</p>
          <ul className="mt-8 space-y-3">
            {product.capabilities.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground/90">
                <span aria-hidden="true" className="mt-2 h-px w-5 shrink-0 bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
