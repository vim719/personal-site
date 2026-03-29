import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBio, getProjectBySlug, getProjects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project" };

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return {
    title: project.title,
    description: project.excerpt,
    keywords: [project.category, project.industry, project.role].filter(
      (x): x is string => typeof x === "string" && x.length > 0
    ),
    alternates: {
      canonical: `${siteUrl}/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.excerpt,
      type: "article",
      url: `${siteUrl}/projects/${project.slug}`,
      images: [{ url: project.imageUrl, alt: project.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.excerpt,
    },
  };
}

export default async function ProjectPage(props: Props) {
  const { slug } = await props.params;
  const [project, bio] = await Promise.all([
    getProjectBySlug(slug),
    getBio(),
  ]);
  if (!project) notFound();

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.excerpt,
    dateCreated: project.year,
    image: project.imageUrl,
    url: `${siteUrl}/projects/${project.slug}`,
    genre: project.industry ?? project.category,
    author: {
      "@type": "Person",
      name: bio.name,
      url: siteUrl,
    },
  };

  const paragraphs = (project.body ?? project.excerpt)
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkJsonLd),
        }}
      />
      <header className="border-b border-sky-200/50 bg-white/50 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 py-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-medium tracking-[-0.02em] text-sky-800 hover:text-slate-950 transition-colors"
            data-cursor-hover
          >
            ← Home
          </Link>
          <p className="type-label-tight text-sky-700/80">
            {(project.industry ?? project.category) + " · " + project.year}
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12 md:py-16">
        <h1 className="type-display text-[clamp(2.25rem,5.5vw,3.25rem)] font-light md:font-normal text-slate-950 leading-[1.08]">
          {project.title}
        </h1>
        <p className="mt-5 text-lg font-light text-slate-600 leading-relaxed tracking-[-0.015em]">
          {project.excerpt}
        </p>

        {project.clientName ? (
          <p className="mt-2 text-sm font-light text-slate-500">{project.clientName}</p>
        ) : null}

        <dl className="mt-8 grid gap-4 sm:grid-cols-2 text-sm border-t border-sky-100 pt-8">
          {project.role ? (
            <div>
              <dt className="type-label-tight text-sky-600/90">Role</dt>
              <dd className="mt-1 font-light text-slate-800">{project.role}</dd>
            </div>
          ) : null}
          {project.scope ? (
            <div>
              <dt className="type-label-tight text-sky-600/90">Scope</dt>
              <dd className="mt-1 font-light text-slate-800">{project.scope}</dd>
            </div>
          ) : null}
        </dl>

        {project.websiteUrl ? (
          <p className="mt-6">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-sky-800 hover:text-slate-950 border-b border-sky-200/80"
              data-cursor-hover
            >
              {project.websiteLabel ?? "Website"} ↗
            </a>
          </p>
        ) : null}

        <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-3xl ring-1 ring-sky-200/60 shadow-xl bg-sky-50">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 768px"
            priority
          />
        </div>

        {project.bullets?.length ? (
          <ul className="mt-10 space-y-3 border-l-2 border-sky-200/80 pl-4">
            {project.bullets.map((b, i) => (
              <li
                key={i}
                className="text-[1.0625rem] font-light text-slate-700 leading-relaxed"
              >
                — {b}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-12 space-y-6 text-[1.0625rem] font-light text-slate-700 leading-[1.75] tracking-[-0.01em]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
