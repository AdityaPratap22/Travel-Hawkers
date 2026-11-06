import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  INTERNATIONAL_PACKAGES,
  getInternationalPackageBySlug,
} from "@/data/internationalPackagesData";
import InternationalPackageDetailView from "@/components/InternationalPackageDetailView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(INTERNATIONAL_PACKAGES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getInternationalPackageBySlug(slug);

  if (!pkg) {
    return {
      title: "International Package | Travel Hawkers",
    };
  }

  const canonicalUrl = `https://travelhawkers.com/international-packages/${slug}`;

  return {
    title: `${pkg.title} (${pkg.duration}) | Travel Hawkers`,
    description: pkg.overview.slice(0, 160),
    keywords: [
      pkg.title,
      pkg.country,
      "Travel Hawkers",
      "international holiday package",
      "tour packages",
      "flight hotel packages",
      "luxury vacation",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${pkg.title} (${pkg.duration}) | Travel Hawkers`,
      description: pkg.overview.slice(0, 160),
      url: canonicalUrl,
      siteName: "Travel Hawkers",
      images: [
        {
          url: pkg.image,
          width: 1200,
          height: 630,
          alt: pkg.title,
        },
      ],
    },
  };
}

export default async function InternationalPackageDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getInternationalPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return <InternationalPackageDetailView pkg={pkg} />;
}
