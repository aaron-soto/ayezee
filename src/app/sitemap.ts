import { WORKS } from "@/data/works";

export default function sitemap() {
  const baseUrl = "https://ayezeewebdesigns.com";

  const staticPages = [
    {
      url: `${baseUrl}/`,
      changefreq: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changefreq: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-work`,
      changefreq: "daily",
      priority: 0.8,
    },
  ];

  const workPages = WORKS.map((work) => ({
    url: `${baseUrl}/our-work/${work.slug}`,
    changefreq: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...workPages];
}
