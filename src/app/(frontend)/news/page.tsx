import { Metadata } from "next";
import { NewsPageContent } from "./page-content";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_NEWS_QUERY, NEWS_CATEGORIES_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "News",
  description: "Stay updated with the latest news.",
};

export default async function NewsPage() {
  const [allNews] = await Promise.all([
    sanityFetch({ query: ALL_NEWS_QUERY }),
    // sanityFetch({ query: NEWS_CATEGORIES_QUERY }),
  ]);
  return (
    <NewsPageContent
      allNews={allNews.data}
      // newsCategories={newsCategories.data}
    />
  );
}
