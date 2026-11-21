import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { listProjects } from "@/lib/mdx";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/research", "/publications", "/projects", "/thesis", "/experience", "/teaching", "/cv"];
  const projects = listProjects().map((p) => `/projects/${p.slug}`);
  return [...routes, ...projects].map((r) => ({ url: `${profile.siteUrl}${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.7 }));
}
