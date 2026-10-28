"use client";

import { LinkedInLink } from "@/components/LinkedIn";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-obsidian/85 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Logo className="min-w-0" />

        <nav className="hidden items-center gap-5 lg:gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto md:ml-0"><LinkedInLink compact /></div>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-btn border border-white/10 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-px w-4 bg-current transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-4 bg-current transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-4 py-2 sm:px-6 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="min-h-11 py-3 text-base text-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
