import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getArticleBySlug, getRelatedArticles } from "@/data/articlesServerData";
import { articlesMetadata } from "@/data/articlesClientData";
import ArticleClient from "./ArticleClient";
import StructuredData from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  // Pre-render the first 50 articles at build time for high speed, others rendered on-demand
  return articlesMetadata.slice(0, 50).map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Travel Hawkers",
    };
  }

  const canonicalUrl = `https://travelhawkers.com/articles/${slug}`;

  return {
    title: `${article.title} | Travel Hawkers`,
    description: article.summary,
    keywords: [
      article.destination,
      article.region,
      article.category,
      ...article.tags,
      "Travel Hawkers",
      "travel guide",
      "itinerary",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      url: canonicalUrl,
      siteName: "Travel Hawkers",
      publishedTime: "2026-10-01T00:00:00Z",
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(slug, article.category, 4);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.summary,
    image: article.image,
    datePublished: "2026-10-01T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Travel Hawkers",
      logo: {
        "@type": "ImageObject",
        url: "https://travelhawkers.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://travelhawkers.com/articles/${slug}`,
    },
    keywords: article.tags.join(", "),
    wordCount: article.wordCount,
  };

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
        name: "Travel Articles",
        item: "https://travelhawkers.com/articles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://travelhawkers.com/articles/${slug}`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={[articleSchema, breadcrumbSchema]} />
      <ArticleClient article={article} relatedArticles={related} />
    </>
  );
}
