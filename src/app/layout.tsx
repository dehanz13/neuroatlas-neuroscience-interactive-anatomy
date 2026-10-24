import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuroAtlas | Interactive Human Brain Experience",
  description:
    "An interactive, animated tour of every part of the human brain: what each region does, what happens when it fails, and which vitamins keep it healthy.",
};

export const viewport: Viewport = {
  themeColor: "#DCEFE8",
  width: "device-width",
  initialScale: 1,
};

// Fonts are loaded from Google Fonts with plain <link> tags. The reference
// site self-hosts Plus Jakarta Sans + Ubuntu Mono; using the hosted
// stylesheet keeps the build free of any font-download step.
const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Ubuntu+Mono:wght@400;700&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_HREF} />
      </head>
      <body className="min-h-full flex flex-col overflow-hidden">{children}</body>
    </html>
  );
}
