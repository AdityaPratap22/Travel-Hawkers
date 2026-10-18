import { notFound } from "next/navigation";
import { Metadata } from "next";
import { DOMESTIC_DESTINATIONS } from "@/data/domesticPackagesData";
import DomesticDestinationView from "./DomesticDestinationView";
import StructuredData from "@/components/StructuredData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(DOMESTIC_DESTINATIONS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = DOMESTIC_DESTINATIONS[slug];

  if (!destination) {
    return {
      title: "Domestic Packages | Travel Hawkers",
    };
  }

  const canonicalUrl = `https://travelhawkers.com/domestic-packages/${slug}`;

  return {
    title: `${destination.title} | Travel Hawkers`,
    description: destination.description,
    keywords: [
      destination.name,
      destination.title,
      ...destination.keySpots,
      "Travel Hawkers",
      "holiday packages",
      "tour packages",
      "custom itinerary",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${destination.title} | Travel Hawkers`,
      description: destination.description,
      url: canonicalUrl,
      siteName: "Travel Hawkers",
      images: [
        {
          url: destination.heroImage,
          width: 1200,
          height: 630,
          alt: destination.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: destination.title,
      description: destination.description,
      images: [destination.heroImage],
    },
  };
}

export default async function DomesticDestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = DOMESTIC_DESTINATIONS[slug];

  if (!destination) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://travelhawkers.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Domestic Packages",
        item: "https://travelhawkers.com/domestic-packages",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: destination.name,
        item: `https://travelhawkers.com/domestic-packages/${slug}`,
      },
    ],
  };

  const faqSchema = destination.faqs && destination.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: destination.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  const schemas: Record<string, unknown>[] = [breadcrumbSchema];
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      <StructuredData data={schemas} />
      <DomesticDestinationView destination={destination} />
    </>
  );
}
