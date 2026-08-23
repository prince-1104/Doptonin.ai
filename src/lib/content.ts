export const brand = {
  name: "doptonin.ai",
  shortName: "doptonin",
  tagline: "Perceptive wearable safety",
  email: "doptonin@gmail.com",
  whatsappDisplay: "+91 98754 07603",
  whatsappUrl: "https://wa.me/919875407603",
} as const;

export const nav = [
  { label: "Problem", href: "#problem" },
  { label: "Product", href: "#product" },
  { label: "Team", href: "#team" },
  { label: "Investors", href: "#investors" },
  { label: "Waitlist", href: "#waitlist" },
] as const;

export const hero = {
  badge: "Pre-idea stage — building the founding team",
  headline: "A locket that senses danger in the body before you have to act.",
  subhead:
    "An early-stage wearable fusing biometrics, location, and AI-personalized baselines. We are not claiming solved hormone detection — we are building a perceptive safety system from signals that exist today.",
  primaryCta: "Join the waitlist",
  secondaryCta: "For investors",
} as const;

export const problem = {
  label: "The problem",
  body: "Safety tech today is reactive. It waits for a button press, a shout, or a fall — actions that require the wearer to perform in the exact moment they may not be able to. Discretion is an afterthought, and the device still needs you to save yourself.",
} as const;

export const insight = {
  label: "The insight",
  body: "Heart rate, skin response, and movement, read against where you are and how your body usually looks, can flag a danger-like pattern — distinct from a hard run or a surge of excitement.",
  honesty:
    "Hormone-level detection at wearable scale is a research frontier, not a product capability we have today. Naming that gap is how this idea stays scientifically honest — and how the right cofounder can help decide what is actually feasible.",
  steps: [
    {
      title: "Sense",
      text: "Continuous physiological signals from a piece of jewelry, not a gadget on a strap.",
    },
    {
      title: "Understand",
      text: "Context and a personal baseline separate threat-like stress from ordinary life.",
    },
    {
      title: "Protect",
      text: "A discreet path to trusted contacts when the pattern holds — with a manual override.",
    },
  ],
} as const;

export const product = {
  label: "The product",
  headline: "Jewelry first. Sensing second.",
  body: "The locket has to be something someone wants to wear on an ordinary day. Capability sits inside the object; it should never announce itself as a device.",
  placeholderCaption: "Product photography coming later — placeholder mockup",
  capabilities: [
    "Heart-rate variability (HRV)",
    "Electrodermal activity (EDA)",
    "Personalized physiological baseline",
    "Automatic alert to trusted contacts",
    "Discreet manual override",
  ],
} as const;

export const whyNow = {
  label: "Why now",
  columns: [
    {
      title: "Biosensor miniaturization",
      text: "Signals that once needed a clinic strap can now live in a pendant.",
    },
    {
      title: "On-device ML maturity",
      text: "Personal pattern recognition no longer requires shipping raw streams to the cloud.",
    },
    {
      title: "Continuous wear is normal",
      text: "Rings, watches, and lockets are already part of daily dress — not a new behavior to invent.",
    },
  ],
} as const;

export const roadmap = {
  label: "Roadmap",
  headline: "Ambition, in the order it can be earned.",
  phases: [
    {
      phase: "Phase 1",
      name: "MVP",
      line: "Biometric signals fused with location and context.",
    },
    {
      phase: "Phase 2",
      name: "R&D",
      line: "Next-generation biomarker sensing, in the lab before the store.",
    },
    {
      phase: "Phase 3",
      name: "Platform",
      line: "Multi-biomarker sensing and duty-of-care expansion.",
    },
  ],
} as const;

export const team = {
  label: "Build the founding team",
  headline: "This idea needs a scientist, not just engineers.",
  body: "doptonin.ai is pre-idea-stage and actively looking for a medical cofounder — someone with a deep grasp of human physiology, endocrinology, and the stress response. This is an equity cofounder seat, not a job posting. The idea is early, unproven, and ambitious. The right person would help define what is scientifically feasible, not inherit a finished claim.",
  lookingFor: [
    "Background in physiology, endocrinology, or biosensing research",
    "Interest in translating research into a real wearable product",
    "Comfort with early-stage ambiguity and equity-based compensation",
  ],
  contactNote: "Reach out directly — no formal application process yet",
} as const;

export const investors = {
  label: "For investors",
  headline: "A category with room for a quieter kind of safety.",
  body: "Wearables and personal safety are both large, active markets. The durable advantage, if we earn it, is not a louder alarm — it is a personal physiological model plus context, owned over time. If you want the full picture, request the deck. Specific figures live there, where they can be shown with sources.",
  cta: "Request the investor deck",
  mailtoSubject: "Investor deck request",
  success:
    "Received. We will reply from doptonin@gmail.com with next steps.",
} as const;

export const waitlist = {
  label: "Waitlist",
  headline: "Be first when there is something real to wear.",
  body: "No drip campaign theater. Your email is a place in line for early access and occasional, concrete updates.",
  placeholder: "you@email.com",
  cta: "Join the waitlist",
  success: "You are on the list. We will write when there is something worth saying.",
} as const;

export const footer = {
  copyrightName: "doptonin.ai",
  socials: [
    { label: "Email", href: `mailto:doptonin@gmail.com` },
    { label: "WhatsApp", href: "https://wa.me/919875407603" },
  ],
} as const;
