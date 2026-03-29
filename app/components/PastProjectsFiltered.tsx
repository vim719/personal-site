"use client";

import { useMemo, useState } from "react";
import type { PastProject } from "@/lib/types";

const FILTERS = [
  "All",
  "Health Tech",
  "Fintech",
  "Consumer",
  "SaaS",
  "Miscellaneous",
] as const;

function projectMatches(project: PastProject, filter: string): boolean {
  if (filter === "All") return true;
  if (filter === "Miscellaneous") {
    return project.tags.some((t) => t === "Misc" || t === "Miscellaneous");
  }
  return project.tags.includes(filter);
}

export function PastProjectsFiltered({ items }: { items: PastProject[] }) {
  const [filter, setFilter] = useState<string>("All");

  const visible = useMemo(
    () => items.filter((p) => projectMatches(p, filter)),
    [items, filter]
  );

  return (
    <section
      className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24"
      aria-labelledby="past-heading"
    >
      <h2
        id="past-heading"
        className="type-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-slate-950"
      >
        Past projects
      </h2>
      <p className="mt-2 text-sm font-light text-slate-600 max-w-xl">
        Additional engagements—filter by domain. Many under NDA.
      </p>

      <div
        className="mt-8 flex flex-wrap gap-2"
        role="toolbar"
        aria-label="Filter past projects"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full border px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-wider transition-colors ${
              filter === f
                ? "border-sky-500 bg-sky-500 text-white shadow-sm"
                : "border-sky-200/80 bg-white/60 text-sky-900 hover:border-sky-300"
            }`}
            aria-pressed={filter === f}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.id}>
            <article className="h-full rounded-2xl border border-sky-200/50 bg-white/50 p-5 backdrop-blur-sm transition-colors hover:border-sky-300/70 hover:shadow-md">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-sky-100/80 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-wider text-sky-800/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-sans text-base font-medium text-slate-950 tracking-[-0.02em]">
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-800"
                    data-cursor-hover
                  >
                    {p.title} ↗
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <p className="mt-1 text-xs font-light text-slate-500">
                {p.year} · {p.tenure} · {p.domain}
              </p>
              {p.outcome ? (
                <p className="mt-3 text-sm font-light text-slate-600 leading-snug">
                  {p.outcome}
                </p>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
      {visible.length === 0 ? (
        <p className="mt-8 text-sm font-light text-slate-500">
          No projects in this category.
        </p>
      ) : null}
    </section>
  );
}
