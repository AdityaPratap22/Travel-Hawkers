export interface ArticleMeta {
  id: string;
  slug: string;
  title: string;
  category: string;
  destination: string;
  region: string;
  summary: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  wordCount: number;
}

export interface ArticleSection {
  heading: string;
  content: string;
}

export interface ArticleContent extends ArticleMeta {
  sections: ArticleSection[];
}
