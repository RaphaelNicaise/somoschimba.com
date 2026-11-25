import type { MetadataRoute } from "next";
import { DESCRIPTION, SITE_NAME } from "@/data/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chimba, agencia creativa",
    short_name: SITE_NAME,
    description: DESCRIPTION,
    start_url: "/",
    display: "browser",
    background_color: "#e4e4e4",
    theme_color: "#2b4991",
    lang: "es-AR",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
