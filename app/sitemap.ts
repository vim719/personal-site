import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/content";

const base = () =>
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const root = base();

  return [
    {
      url: root,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projects.map((p) => ({
      url: `${root}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
