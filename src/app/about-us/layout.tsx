import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Travel Hawkers - Holiday Design Experts",
  description:
    "Learn about Travel Hawkers, our journey, values, and dedication to crafting unforgettable holiday experiences across India and international destinations.",
  alternates: {
    canonical: "https://travelhawkers.com/about-us",
  },
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
