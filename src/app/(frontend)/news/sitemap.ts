import { domainURL } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { ALL_NEWS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 3600;

export default async function sitemap() {
  try {
    const allNews = await client.fetch(ALL_NEWS_QUERY);
    if (!allNews) return [];

    return allNews.map((news) => ({
      url: domainURL("/news/" + news.slug?.current),
      lastModified: new Date(news._updatedAt),
      changeFrequency: "daily",
      priority: 1,
    }));
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}
