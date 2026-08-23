import { brand } from "@/lib/content";

type LogoProps = {
  className?: string;
};

export function LogoMark({ className = "h-7 w-7 sm:h-8 sm:w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M15.8 30.6 C13.6 28.8 12.8 24.4 14.4 19.6 C16.2 13.8 21.4 11.2 26.6 11.8 C32.2 12.4 37.2 16 37.8 21.2 C39.4 22.6 38.6 25.4 36.4 25.8 C38 28.2 37.2 32 33.8 33.4 C30.2 35 26.8 33.2 25.4 31 C23.6 35.2 18.4 35.8 15.6 32.8 C14.6 31.8 15 31.2 15.8 30.6 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        className="text-accent"
      />
      <path
        d="M20 16.4 C22.2 18.2 25.4 17.6 28.2 15.6 M17.8 22.2 C21.6 23.4 26.2 22.6 31 20.4 M21.4 27 C24 28.2 27.6 28.8 31.2 27.4"
        stroke="currentColor"
        strokeWidth="0.7"
        className="text-accent/45"
      />
      <path
        d="M20.2 17.2 L24.4 21.6 L29.6 16.8 M17.4 22.8 L24.4 21.6 L32.2 21.2 M21.6 27.4 L24.4 21.6 L30.4 26.8 M24.4 21.6 L25.2 30.2"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-accent/70"
      />
      <circle cx="20.2" cy="17.2" r="1.25" className="fill-accent" />
      <circle cx="29.6" cy="16.8" r="1.2" className="fill-accent" />
      <circle cx="24.4" cy="21.6" r="1.45" className="fill-accent" />
      <circle cx="17.4" cy="22.8" r="1.15" className="fill-accent/85" />
      <circle cx="32.2" cy="21.2" r="1.15" className="fill-accent/85" />
      <circle cx="21.6" cy="27.4" r="1.15" className="fill-accent" />
      <circle cx="30.4" cy="26.8" r="1.15" className="fill-accent" />
      <circle cx="25.2" cy="30.2" r="1.1" className="fill-accent/80" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center text-[14px] font-medium tracking-tight sm:text-[15px] ${className}`}>
      {brand.shortName}
      <span
        aria-hidden="true"
        className="mx-[3px] mb-px inline-block h-[7px] w-[7px] rounded-full bg-accent shadow-glow"
      />
      ai
    </span>
  );
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <a href="#top" className={`inline-flex min-w-0 items-center gap-1.5 text-foreground sm:gap-2 ${className}`}>
      <LogoMark />
      <Wordmark />
      <span className="sr-only">{brand.name}</span>
    </a>
  );
}

export function BrandPlate() {
  return (
    <figure className="pointer-events-none select-none" aria-hidden="true">
      <LogoMark className="hidden h-28 w-28 text-accent opacity-[0.28] sm:block md:h-36 md:w-36" />
    </figure>
  );
}
