import type { MetadataRoute } from "next";
import { articlesMetadata } from "@/data/articlesClientData";
import { DOMESTIC_DESTINATIONS } from "@/data/domesticPackagesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://travelhawkers.com";
  const now = new Date();

  // Core static pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/domestic-packages`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/international-packages`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/weekend-getaways`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/chardham-yatra`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experiences`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/car-hire`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Domestic destination hub pages
  const destinationHubs: MetadataRoute.Sitemap = Object.keys(DOMESTIC_DESTINATIONS).map(
    (slug) => ({
      url: `${baseUrl}/domestic-packages/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })
  );

  // Standalone dedicated tour package pages
  const dedicatedPackages = [
    "shimla-manali-tour-package",
    "honeymoon-in-manali",
    "amritsar-dharmshala-tour-package",
    "dharamshala-dalhousie-amritsar-tour-package",
    "rajasthan-fort-and-places",
    "rajasthan-honeymoon-tour-package",
    "udaipur-mountabu-jodhpur",
    "jaipur-tour-package",
    "himachal-tour-packages",
    "kashmir-tour-packages",
    "rajasthan-tour-packages",
    "kerala-tour-packages",
    "kerala-tour-package",
    "kerala-honeymoon-tour-package",
    "beautiful-kerala-with-blackwaters",
    "goa-tour-packages",
    "goa-honeymoon-tour-package",
    "ladakh-tour-packages",
    "leh-ladakh-tour-package",
    "ladakh-tour-via-nubra-valley",
    "golden-triangle-tour-packages",
    "same-day-tour-packages",
    "dubai-abu-dhabi",
    "thailand",
    "indonesia",
    "singapore-malaysia",
    "vietnam",
    "mystical-bhutan",
    "chakrata",
    "kasauli",
    "mussoorie-the-queen-of-hills",
    "nanital-the-lake-district-of-india",
    "shimla-the-queen-of-hills",
    "jaipur-the-pink-city-of-india",
    "jim-corbett",
    "ranthambore-national-park",
    "rishikesh",
  ];

  const packagePages: MetadataRoute.Sitemap = dedicatedPackages.map((pkgSlug) => ({
    url: `${baseUrl}/${pkgSlug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // All 450 unique travel articles
  const articlePages: MetadataRoute.Sitemap = articlesMetadata.map((art) => ({
    url: `${baseUrl}/articles/${art.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...destinationHubs, ...packagePages, ...articlePages];
}
