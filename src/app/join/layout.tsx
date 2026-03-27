import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join DJF(W) | Apply for Membership",
  description:
    "Become a member of the Democratic Journalist Federation (Working). Get legal protection, ₹5 lakh life insurance, and professional support. Apply online — REG NO: 343/2025.",
  keywords: [
    "join journalist union",
    "DJFW membership",
    "journalist membership application",
    "journalist union Telangana",
    "journalist union Andhra Pradesh",
    "జర్నలిస్ట్ యూనియన్ సభ్యత్వం",
  ],
  alternates: { canonical: "/join" },
  openGraph: {
    title: "Join DJF(W) | Apply for Membership",
    description:
      "Apply for membership and get legal protection, ₹5 lakh life insurance, and professional solidarity for journalists.",
    url: "/join",
    images: [{ url: "/djfw_logo.png", alt: "DJF(W) Membership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join DJF(W) | Apply for Membership",
    description:
      "Legal protection + ₹5 lakh life insurance for journalists. Apply for DJF(W) membership today.",
  },
};

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
