import { domainURL } from "@/lib/utils";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domainURL("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: domainURL("/journeys"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: domainURL("/events"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: domainURL("/about"),
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: domainURL("/contact"),
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: domainURL("/charities"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: domainURL("/charities/local-partners"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
