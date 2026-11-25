import type { MetadataRoute } from "next";
import { CASES } from "@/data/site";
import { SITE_URL } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${SITE_URL}/opengraph-image.png`, ...CASES.flatMap((c) => c.imgs.map(([src]) => `${SITE_URL}${src}`))],
    },
  ];
}
