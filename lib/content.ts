import { fallbackBio } from "./fallback-content";
import { RICH_PROJECTS, SITE_RICH } from "./rich-site-data";
import type { BioContent, ProjectContent, SiteRichContent } from "./types";
import { getSanityClient } from "./sanity";

const bioQuery = `*[_type == "bio"][0]{
  name,
  titleLine1,
  titleLine2,
  tagline,
  credentialsLine,
  contactEmail,
  linkedInUrl,
  githubUrl,
  arenaUrl
}`;

const projectsQuery = `*[_type == "project"] | order(year desc) {
  _id,
  "slug": slug.current,
  title,
  category,
  year,
  excerpt,
  body,
  industry,
  role,
  scope,
  websiteUrl,
  websiteLabel,
  bullets,
  clientName,
  "imageUrl": coalesce(image.asset->url, imageUrl),
  "imageAlt": coalesce(image.alt, imageAlt, title)
}`;

type SanityBio = Partial<BioContent> & { arenaUrl?: string };
type SanityProject = {
  _id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  excerpt: string;
  body?: string;
  industry?: string;
  role?: string;
  scope?: string;
  websiteUrl?: string;
  websiteLabel?: string;
  bullets?: string[];
  clientName?: string;
  imageUrl?: string;
  imageAlt?: string;
};

function mergeProjectFromRich(slug: string, row: ProjectContent): ProjectContent {
  const rich = RICH_PROJECTS.find((p) => p.slug === slug);
  if (!rich) return row;
  return {
    ...rich,
    ...row,
    bullets: row.bullets?.length ? row.bullets : rich.bullets,
    industry: row.industry ?? rich.industry,
    role: row.role ?? rich.role,
    scope: row.scope ?? rich.scope,
    websiteUrl: row.websiteUrl ?? rich.websiteUrl,
    websiteLabel: row.websiteLabel ?? rich.websiteLabel,
    clientName: row.clientName ?? rich.clientName,
  };
}

export async function getBio(): Promise<BioContent> {
  const client = getSanityClient();
  if (!client) return fallbackBio;
  try {
    const doc = await client.fetch<SanityBio | null>(bioQuery);
    if (!doc?.name) return fallbackBio;
    return {
      ...fallbackBio,
      ...doc,
      name: doc.name,
      titleLine1: doc.titleLine1 ?? fallbackBio.titleLine1,
      titleLine2: doc.titleLine2 ?? fallbackBio.titleLine2,
      tagline: doc.tagline ?? fallbackBio.tagline,
      contactEmail: doc.contactEmail ?? fallbackBio.contactEmail,
      credentialsLine: doc.credentialsLine ?? fallbackBio.credentialsLine,
      arenaUrl: doc.arenaUrl ?? fallbackBio.arenaUrl,
    };
  } catch {
    return fallbackBio;
  }
}

export async function getProjects(): Promise<ProjectContent[]> {
  const client = getSanityClient();
  if (!client) return RICH_PROJECTS;
  try {
    const rows = await client.fetch<SanityProject[]>(projectsQuery);
    if (!rows?.length) return RICH_PROJECTS;
    return rows.map((p) => {
      const base: ProjectContent = {
        _id: p._id,
        slug: p.slug,
        title: p.title,
        category: p.category,
        year: p.year,
        excerpt: p.excerpt,
        body: p.body,
        industry: p.industry,
        role: p.role,
        scope: p.scope,
        websiteUrl: p.websiteUrl,
        websiteLabel: p.websiteLabel,
        bullets: p.bullets,
        clientName: p.clientName,
        imageUrl: p.imageUrl ?? RICH_PROJECTS[0]?.imageUrl ?? "",
        imageAlt: p.imageAlt ?? p.title,
      };
      return mergeProjectFromRich(p.slug, base);
    });
  } catch {
    return RICH_PROJECTS;
  }
}

export async function getProjectBySlug(
  slug: string
): Promise<ProjectContent | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) ?? null;
}

export async function getSiteRich(): Promise<SiteRichContent> {
  return SITE_RICH;
}
