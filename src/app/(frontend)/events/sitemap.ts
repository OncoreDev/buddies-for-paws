import { domainURL } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 3600;

export default async function sitemap() {
  try {
    const events = await client.fetch(EVENTS_QUERY);
    if (!events) return [];

    return events.map((event) => ({
      url: domainURL("/events/" + event.slug?.current),
      lastModified: new Date(event._updatedAt),
      changeFrequency: "daily",
      priority: 1,
    }));
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}
