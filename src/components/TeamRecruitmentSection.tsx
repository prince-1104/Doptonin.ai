import { FadeIn } from "@/components/FadeIn";
import { brand, team } from "@/lib/content";

export function TeamRecruitmentSection() {
  return (
    <section id="team" className="section-shell">
      <FadeIn className="mx-auto max-w-3xl border border-white/10 bg-surface px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
        <p className="section-label">{team.label}</p>
        <h2 className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          {team.headline}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted">{team.body}</p>

        <ul className="mt-8 space-y-3">
          {team.lookingFor.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-foreground/90">
              <span aria-hidden="true" className="mt-2 h-px w-5 shrink-0 bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-sm text-muted">{team.contactNote}</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${brand.email}`} className="btn btn-primary break-all">
              {brand.email}
            </a>
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              WhatsApp {brand.whatsappDisplay}
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
