import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { ExperienceChrome } from "./components/ExperienceChrome";
import { fallbackBio } from "@/lib/fallback-content";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${fallbackBio.name} — Cinematic portfolio`,
    template: `%s — ${fallbackBio.name}`,
  },
  description: fallbackBio.tagline,
  keywords: [
    "product design",
    "UX",
    "portfolio",
    "fintech",
    "SaaS",
    "design systems",
    "case studies",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  openGraph: {
    title: `${fallbackBio.name} — Cinematic portfolio`,
    description: fallbackBio.tagline,
    url: siteUrl,
    siteName: fallbackBio.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${fallbackBio.name} — Cinematic portfolio`,
    description: fallbackBio.tagline,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fallbackBio.name,
  email: fallbackBio.contactEmail,
  url: siteUrl,
  jobTitle: "Product & creative technologist",
  sameAs: [fallbackBio.linkedInUrl, fallbackBio.githubUrl].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f0f9ff] text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <ExperienceChrome>{children}</ExperienceChrome>
      </body>
    </html>
  );
}
