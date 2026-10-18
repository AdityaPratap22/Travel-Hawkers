import articlesMetadataRaw from "./articlesMetadata.json";
import { ArticleMeta } from "./articlesTypes";

export const articlesMetadata: ArticleMeta[] = articlesMetadataRaw as ArticleMeta[];

export function getArticleMetadataBySlug(slug: string): ArticleMeta | null {
  return articlesMetadata.find((a) => a.slug === slug) || null;
}
