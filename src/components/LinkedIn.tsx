export const LINKEDIN_URL = "https://www.linkedin.com/in/prince1104/";

export function LinkedInLink({ compact = false }: { compact?: boolean }) {
  return (
    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="linkedin-link" aria-label="Visit our founder on LinkedIn (opens in a new tab)">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5.4 7.8H2V22h3.4V7.8ZM3.7 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM22 13.9c0-4.3-2.3-6.3-5.3-6.3a4.6 4.6 0 0 0-4.1 2.2v-2H9.2V22h3.4v-7.9c0-2.1.4-4.1 3-4.1 2.5 0 2.6 2.4 2.6 4.2V22H22v-8.1Z" /></svg>
      <span>{compact ? "LinkedIn" : "Connect on LinkedIn"}</span><span aria-hidden="true">↗</span>
    </a>
  );
}

export function LinkedInCard() {
  return (
    <aside className="premium-card community-card">
      <div className="flex items-center justify-between gap-3 text-xs text-muted"><span className="uppercase tracking-[0.18em]">The human connection</span><span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-accent">Say hello</span></div>
      <div className="mascot-scene" aria-hidden="true">
        <div className="mascot-orbit" />
        <svg className="linkedin-mascot" viewBox="0 0 200 180" fill="none">
          <ellipse cx="100" cy="162" rx="42" ry="7" fill="#2ee6d6" opacity=".12" />
          <path d="M100 40V24" stroke="#80f3e7" strokeWidth="4" /><circle cx="100" cy="20" r="7" fill="#2ee6d6" />
          <rect x="46" y="42" width="108" height="90" rx="34" fill="#112e38" stroke="#80f3e7" strokeWidth="2" />
          <rect x="57" y="55" width="86" height="56" rx="23" fill="#080f1c" />
          <g className="mascot-eyes" fill="#80f3e7"><rect x="75" y="72" width="9" height="17" rx="4.5" /><rect x="116" y="72" width="9" height="17" rx="4.5" /></g>
          <path d="M92 96q8 7 16 0" stroke="#80f3e7" strokeWidth="3" strokeLinecap="round" />
          <path d="M46 97Q24 94 28 118M154 89Q178 78 174 62" stroke="#80f3e7" strokeWidth="8" strokeLinecap="round" />
          <path d="M77 132l-7 15m53-15 7 15" stroke="#80f3e7" strokeWidth="9" strokeLinecap="round" />
          <rect x="139" y="112" width="32" height="32" rx="8" fill="#0a66c2" /><text x="146" y="135" fill="white" fontSize="23" fontWeight="700" fontFamily="Arial">in</text>
        </svg>
        <span className="mascot-note">A little hello. A big possibility.</span>
      </div>
      <h2 className="text-2xl font-medium tracking-tight">Good ideas start with a conversation.</h2>
      <p className="mb-6 mt-3 text-sm leading-relaxed text-muted">Meet our founder, Prince. Follow the journey or connect to help shape what comes next.</p>
      <LinkedInLink />
    </aside>
  );
}
