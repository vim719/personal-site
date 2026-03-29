import type { BioContent, ProjectContent } from "@/lib/types";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function HomeJsonLd({
  bio,
  projects,
}: {
  bio: BioContent;
  projects: ProjectContent[];
}) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${bio.name} — selected work`,
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${siteUrl}/projects/${p.slug}`,
    })),
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: bio.name,
    description: bio.tagline,
    url: siteUrl,
    email: bio.contactEmail,
    areaServed: "Global",
    sameAs: [bio.linkedInUrl, bio.githubUrl].filter(Boolean),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalService),
        }}
      />
    </>
  );
}
