import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { brand, hero } from "@/lib/content";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B0E1A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://doptonin.ai"),
  title: `${brand.name} — ${brand.tagline}`,
  description: hero.subhead,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description: hero.headline,
    images: ["/brand/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden bg-obsidian font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
