import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Travel Hawkers - Get Free Holiday Quotes & Support",
  description:
    "Reach out to Travel Hawkers for customized tour planning, hotel reservations, car hire, and immediate holiday support. Call +91 87002 96047 or visit our Delhi NCR offices.",
  alternates: {
    canonical: "https://travelhawkers.com/contact-us",
  },
  openGraph: {
    title: "Contact Travel Hawkers | Holiday Inquiries & 24/7 Support",
    description:
      "Get in touch with our destination specialists for customized quotes on Himachal, Kashmir, Rajasthan, Kerala, and international packages.",
    url: "https://travelhawkers.com/contact-us",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
