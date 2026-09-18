import type { MetadataRoute } from "next";
const base = "https://aloha-auto-detailing-ga.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/services", "/how-it-works", "/work", "/faq", "/contact"].map((path, index) => ({ url: `${base}${path}`, changeFrequency: "monthly", priority: index === 0 ? 1 : .8 })); }
