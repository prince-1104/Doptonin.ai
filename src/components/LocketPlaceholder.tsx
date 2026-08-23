import { product } from "@/lib/content";

export function LocketPlaceholder() {
  return (
    <figure className="border border-white/10 bg-surface p-5 sm:p-8 md:p-12">
      <div className="mx-auto flex max-w-[220px] flex-col items-center sm:max-w-[280px]">
        <svg viewBox="0 0 200 260" fill="none" className="h-auto w-full" aria-hidden="true">
          <path
            d="M100 18 V42"
            stroke="#2EE6D6"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <ellipse cx="100" cy="14" rx="14" ry="6" stroke="#2EE6D6" strokeWidth="1.3" />
          <path
            d="M70 58 C70 48 130 48 130 58 L138 86 C148 118 140 168 100 214 C60 168 52 118 62 86 Z"
            stroke="rgba(244,246,250,0.55)"
            strokeWidth="1.4"
          />
          <path
            d="M78 96 C78 80 122 80 122 96 C122 118 100 138 100 138 C100 138 78 118 78 96 Z"
            stroke="#2EE6D6"
            strokeWidth="1.2"
            opacity="0.9"
          />
          <path
            d="M70 168 H86 L92 156 L98 180 L104 164 L110 170 H130"
            stroke="#2EE6D6"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
        </svg>
        <figcaption className="mt-6 text-center text-[11px] uppercase tracking-label text-muted">
          {product.placeholderCaption}
        </figcaption>
      </div>
    </figure>
  );
}
