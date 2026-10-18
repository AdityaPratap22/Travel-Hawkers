import fs from "fs";
import path from "path";
import { ArticleContent, ArticleMeta } from "./articlesTypes";
import { articlesMetadata } from "./articlesClientData";

let cachedContent: Record<string, ArticleContent> | null = null;

export async function getAllArticlesContent(): Promise<Record<string, ArticleContent>> {
  if (cachedContent) {
    return cachedContent;
  }
  const filePath = path.join(process.cwd(), "src", "data", "articlesContent.json");
  const rawData = await fs.promises.readFile(filePath, "utf-8");
  cachedContent = JSON.parse(rawData);
  return cachedContent || {};
}

export async function getArticleBySlug(slug: string): Promise<ArticleContent | null> {
  const allContent = await getAllArticlesContent();
  return allContent[slug] || null;
}

export function getRelatedArticles(
  currentSlug: string,
  category: string,
  limit = 4
): ArticleMeta[] {
  const matches = articlesMetadata.filter(
    (a) => a.slug !== currentSlug && a.category === category
  );
  if (matches.length >= limit) {
    return matches.slice(0, limit);
  }
  const remaining = articlesMetadata.filter(
    (a) => a.slug !== currentSlug && a.category !== category
  );
  return [...matches, ...remaining].slice(0, limit);
}
