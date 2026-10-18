import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chardham Yatra Tour Packages 2026 | Kedarnath, Badrinath, Gangotri, Yamunotri",
  description:
    "Book sacred Chardham Yatra tour packages from Haridwar and Delhi with Travel Hawkers. Includes biometric registration, Kedarnath helicopter tickets, verified hotel stays, and private cabs.",
  keywords: [
    "Chardham Yatra 2026",
    "Kedarnath tour package",
    "Badrinath Yatra",
    "Chardham helicopter booking",
    "Do Dham Kedarnath Badrinath",
    "Haridwar Chardham package",
    "Travel Hawkers Chardham",
  ],
  alternates: {
    canonical: "https://travelhawkers.com/chardham-yatra",
  },
  openGraph: {
    title: "Chardham Yatra 2026 Packages | Travel Hawkers",
    description:
      "Complete spiritual pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath with helicopter options and VIP darshan assistance.",
    url: "https://travelhawkers.com/chardham-yatra",
  },
};

export default function ChardhamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
