import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'asmtechpower.co.in';
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}