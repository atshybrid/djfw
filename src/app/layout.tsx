import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://djfw.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DJF(W) | Democratic Journalist Federation (Working)",
    template: "%s | DJF(W)",
  },
  description:
    "Your pen is protected. Your family is secure. The Democratic Journalist Federation (Working) — REG NO: 343/2025 — provides legal protection, life insurance, and professional solidarity for journalists in Andhra Pradesh & Telangana.",
  keywords: [
    "journalist union",
    "DJFW",
    "DJF Working",
    "Democratic Journalist Federation",
    "press freedom India",
    "journalist protection Telangana",
    "journalist protection Andhra Pradesh",
    "media workers union",
    "journalist insurance",
    "journalist legal aid",
    "పత్రికా విలేఖరులు",
    "జర్నలిస్ట్ యూనియన్",
  ],
  authors: [{ name: "Democratic Journalist Federation (Working)", url: SITE_URL }],
  creator: "DJF(W)",
  publisher: "Democratic Journalist Federation (Working)",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "te-IN": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Democratic Journalist Federation (Working)",
    title: "DJF(W) | Your Pen is Protected. Your Family is Secure.",
    description:
      "The Democratic Journalist Federation (Working) — REG NO: 343/2025 — provides legal protection, ₹5 lakh life insurance, and professional solidarity for journalists.",
    images: [
      {
        url: "/djfw_logo.png",
        width: 1200,
        height: 630,
        alt: "DJF(W) — Democratic Journalist Federation (Working) Official Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJF(W) | Your Pen is Protected. Your Family is Secure.",
    description:
      "REG NO: 343/2025 — Legal aid, ₹5 lakh life insurance & professional solidarity for journalists in AP & Telangana.",
    images: ["/djfw_logo.png"],
  },
  icons: {
    icon: [{ url: "/djfw_logo.jpeg", type: "image/jpeg", sizes: "any" }],
    apple: "/djfw_logo.jpeg",
    shortcut: "/djfw_logo.jpeg",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Democratic Journalist Federation (Working)",
  alternateName: "DJF(W)",
  url: SITE_URL,
  logo: `${SITE_URL}/djfw_logo.png`,
  description:
    "A registered journalist union (REG NO: 343/2025) providing legal protection, life insurance coverage, and professional solidarity for journalists in Andhra Pradesh and Telangana.",
  foundingDate: "2025",
  areaServed: ["Andhra Pradesh", "Telangana"],
  memberOf: { "@type": "Organization", name: "Press Council of India" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "membership",
    areaServed: "IN",
    availableLanguage: ["Telugu", "English"],
  },
  sameAs: ["https://github.com/atshybrid/djfw"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DJF(W) — Democratic Journalist Federation (Working)",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/members?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-surface font-body text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}


