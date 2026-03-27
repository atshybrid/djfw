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

export const metadata: Metadata = {
  title: "DJF(W) | Democratic Journalist Federation (Working)",
  description:
    "Your pen is protected. Your family is secure. The Democratic Journalist Federation (Working) — REG NO: 343/2025 — stands between you and the risks of the profession.",
  keywords: ["journalist union", "DJFW", "press freedom", "journalist protection", "DJF Working"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/djfw_logo.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/djfw_logo.jpeg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-screen bg-surface font-body text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}


