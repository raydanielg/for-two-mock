import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ILEMELA MC: DISTRICT FORM TWO PRE-MOCK EXAMINATION RESULTS 2026",
    template: "%s | ILEMELA MC RESULTS"
  },
  description:
    "Official portal for Ilemela Municipal Council District Form Two Pre-MOCK Examination Results, March 2026. Access school rankings, subject performance, and individual school results.",
  keywords: [
    "Matokeo ya Form Two 2026",
    "Ilemela Pre-MOCK Results 2026",
    "District Form Two Examination",
    "Ilemela Municipal Council Results",
    "Tanzania Form Two Results",
    "School Rankings Ilemela",
    "Education Statistics Tanzania",
    "Pre-NECTA Form Two 2026"
  ],
  authors: [{ name: "ILEMELA Municipal Council", url: "https://ilemela-pre-mock-results.vercel.app" }],
  creator: "Zerixa Technologies",
  publisher: "ILEMELA MC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ilemela-pre-mock-results.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/paper_16367484.png",
    shortcut: "/paper_16367484.png",
    apple: "/paper_16367484.png",
  },
  openGraph: {
    type: "website",
    locale: "sw_TZ",
    url: "https://ilemela-pre-mock-results.vercel.app",
    title: "ILEMELA MC: DISTRICT FORM TWO PRE-MOCK RESULTS 2026",
    description: "Pata matokeo yote ya District Form Two Pre-MOCK Examination Ilemela 2026. Rahisi, Haraka na Uhakika.",
    siteName: "ILEMELA MC RESULTS PORTAL",
    images: [
      {
        url: "/seo-image.png",
        width: 1200,
        height: 630,
        alt: "ILEMELA DISTRICT FORM TWO PRE-MOCK 2026 SEO Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ILEMELA MC: DISTRICT FORM TWO PRE-MOCK RESULTS 2026",
    description: "Mfumo wa Matokeo ya District Form Two Pre-MOCK Examination Ilemela 2026. Rahisi na Haraka.",
    images: ["/seo-image.png"],
    creator: "@zerixatech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import SiteFooter from "@/components/SiteFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>{children}</div>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
