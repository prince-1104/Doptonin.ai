type PulseLineProps = {
  variant?: "hero" | "divider";
  className?: string;
};

const PATH =
  "M0 40 L72 40 L86 36 L96 40 L118 40 L128 18 L136 62 L148 28 L156 40 L188 40 L200 32 L214 40 L248 40 L258 22 L266 54 L278 40 L360 40 L372 34 L384 40 L420 40 L430 16 L438 64 L450 26 L458 40 L500 40 L512 36 L528 40 L600 40";

export function PulseLine({ variant = "divider", className = "" }: PulseLineProps) {
  const isHero = variant === "hero";

  return (
    <div
      aria-hidden="true"
      className={
        isHero
          ? `pointer-events-none absolute inset-x-0 top-[28%] -z-10 opacity-[0.22] ${className}`
          : `mx-auto max-w-5xl px-4 opacity-30 sm:px-6 sm:opacity-40 ${className}`
      }
    >
      <svg
        viewBox="0 0 600 80"
        fill="none"
        className={isHero ? "h-[88px] w-full sm:h-[140px] md:h-[200px]" : "h-7 w-full sm:h-10"}
        preserveAspectRatio="none"
      >
        <path
          d={PATH}
          className="pulse-path"
          stroke="#2EE6D6"
          strokeWidth={isHero ? 1.4 : 1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
