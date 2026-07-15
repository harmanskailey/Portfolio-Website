import type { APIRoute } from "astro";
import { workItems } from "../data/portfolio";

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://harmanskailey.com");
  const paths = [
    "/",
    "/cooking/",
    ...workItems.map((item) => `/work/${item.slug}/`),
  ];
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, base).toString()}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
