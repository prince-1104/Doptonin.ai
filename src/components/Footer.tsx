import { BrandPlate, Logo } from "@/components/Logo";
import { brand, footer } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-obsidian px-4 py-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm text-muted">{brand.tagline}</p>
          <p className="mt-6 text-xs text-muted/70">
            © {year} {footer.copyrightName}
          </p>
        </div>

        <div className="flex flex-col gap-1 text-sm">
          {footer.socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="inline-flex min-h-11 items-center text-muted transition-colors duration-300 hover:text-accent"
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}
            </a>
          ))}
        </div>

        <BrandPlate />
      </div>
    </footer>
  );
}
