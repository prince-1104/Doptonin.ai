# doptonin.ai

Single-page landing site for an early-stage perceptive wearable safety locket.

## Stack

Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit copy

All headlines, body copy, and contact details live in [`src/lib/content.ts`](src/lib/content.ts).

## Forms

`POST /api/waitlist` and `POST /api/investors` are stubs. They validate input and return `{ ok: true }` so the UI can be demoed. Wire them to Resend, ConvertKit, or Supabase before launch — see the `TODO` comments in each route.

## Deploy

The default Next.js 14 output is ready for Vercel.
