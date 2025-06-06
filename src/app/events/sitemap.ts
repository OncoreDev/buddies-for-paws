import { EVENTS_CONFIG } from "@/lib/events-config";
import { domainURL } from "@/lib/utils";

export default function sitemap() {
  return EVENTS_CONFIG.map((event) => ({
    url: domainURL("/events/" + event.route),
    lastModified: new Date(),
    changeFrequency: "monthly",
  }));
}
