import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members Directory | DJF(W)",
  description:
    "Browse the official member directory of the Democratic Journalist Federation (Working) — REG NO: 343/2025. Find journalists across Andhra Pradesh and Telangana.",
  keywords: [
    "DJFW members",
    "journalist directory Telangana",
    "journalist directory Andhra Pradesh",
    "DJF Working members list",
    "registered journalists India",
    "జర్నలిస్టుల జాబితా",
  ],
  alternates: { canonical: "/members" },
  openGraph: {
    title: "Members Directory | DJF(W)",
    description:
      "Browse the official member directory of the Democratic Journalist Federation (Working).",
    url: "/members",
    images: [{ url: "/djfw_logo.png", alt: "DJF(W) Members Directory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Members Directory | DJF(W)",
    description: "Official member directory of the Democratic Journalist Federation (Working).",
  },
};

export default function MembersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
