import Image from "next/image";
import Link from "next/link";
import type { ProjectContent } from "@/lib/types";

export function FeaturedCaseStudies({ projects }: { projects: ProjectContent[] }) {
  return (
    <section
      className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24"
      aria-labelledby="cases-heading"
    >
      <h2
        id="cases-heading"
        className="type-display text-[clamp(2rem,4vw,3rem)] font-light text-slate-950"
      >
        Selected projects
      </h2>
      <p className="mt-3 max-w-2xl text-sm md:text-base font-light text-slate-600 leading-relaxed">
        Deep dives with industry context, scope, and outcomes. Each links to a dedicated case page.
      </p>

      <div className="mt-12 md:mt-16 flex flex-col divide-y divide-sky-200/50">
        {projects.map((p, idx) => {
          const isOdd = idx % 2 === 1;
          return (
            <article
              key={p._id}
              className={`grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center py-14 md:py-20 ${
                isOdd ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group relative aspect-[16/11] overflow-hidden rounded-[1.75rem] ring-1 ring-sky-200/60 shadow-xl bg-sky-100/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
                data-cursor-hover
              >
                <Image
                  src={p.imageUrl}
                  alt={p.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent opacity-60" />
              </Link>

              <div className="min-w-0">
                <p className="type-label-tight text-sky-700/85">
                  {p.industry ?? p.category}
                </p>
                <h3 className="type-display mt-3 text-3xl md:text-4xl font-light text-slate-950 leading-tight">
                  {p.title}
                </h3>
                {p.clientName ? (
                  <p className="mt-2 text-sm font-light text-slate-500">{p.clientName}</p>
                ) : null}
                <p className="mt-4 text-base font-light text-slate-600 leading-relaxed">
                  {p.excerpt}
                </p>

                <dl className="mt-6 grid gap-4 sm:grid-cols-2 text-sm">
                  {p.industry ? (
                    <div>
                      <dt className="type-label-tight !text-[0.5625rem] text-sky-600/90">
                        Industry
                      </dt>
                      <dd className="mt-1 font-light text-slate-800">{p.industry}</dd>
                    </div>
                  ) : null}
                  {p.role ? (
                    <div>
                      <dt className="type-label-tight !text-[0.5625rem] text-sky-600/90">Role</dt>
                      <dd className="mt-1 font-light text-slate-800">{p.role}</dd>
                    </div>
                  ) : null}
                  {p.scope ? (
                    <div className="sm:col-span-2">
                      <dt className="type-label-tight !text-[0.5625rem] text-sky-600/90">Scope</dt>
                      <dd className="mt-1 font-light text-slate-800">{p.scope}</dd>
                    </div>
                  ) : null}
                </dl>

                {p.bullets?.length ? (
                  <ul className="mt-6 space-y-2 border-l-2 border-sky-200/80 pl-4">
                    {p.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="text-sm font-light text-slate-600 leading-relaxed"
                      >
                        — {b}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="type-label text-sky-800 hover:text-slate-950 border-b border-sky-300/80 pb-0.5"
                    data-cursor-hover
                  >
                    View case →
                  </Link>
                  {p.websiteUrl ? (
                    <a
                      href={p.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light text-sky-700 hover:text-slate-950"
                      data-cursor-hover
                    >
                      {p.websiteLabel ?? "Website"} ↗
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
