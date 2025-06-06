import { SITE_CONFIG } from "@/lib/site-config";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        src: "/icon1.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/icon2.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon3.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon4.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
