import type { ExperienceEntry } from "@/lib/types";

export function ExperienceRibbon({
  entries,
  caption,
}: {
  entries: ExperienceEntry[];
  caption?: string;
}) {
  return (
    <section
      className="max-w-7xl mx-auto px-6 sm:px-8 py-14 md:py-20"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="type-display text-[clamp(1.75rem,3vw,2.25rem)] font-light text-slate-950"
      >
        Experience
      </h2>
      <p className="mt-2 max-w-xl text-sm font-light text-slate-600">
        Teams and domains — condensed. Full narratives live in case studies.
      </p>
      <div className="mt-8 flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
        {entries.map((e) => (
          <article
            key={e.id}
            className="snap-start shrink-0 w-[min(78vw,280px)] rounded-2xl border border-sky-200/55 bg-white/60 px-5 py-4 backdrop-blur-md shadow-sm"
          >
            <p className="type-label-tight text-sky-700/85">{e.category}</p>
            <p className="mt-2 font-sans text-base font-medium tracking-[-0.02em] text-slate-950">
              {e.company}
            </p>
            <p className="mt-1 text-sm font-light text-slate-600">{e.role}</p>
          </article>
        ))}
      </div>
      {caption ? (
        <p className="mt-8 max-w-3xl text-sm md:text-base font-light text-slate-700 leading-relaxed border-t border-sky-200/50 pt-8">
          {caption}
        </p>
      ) : null}
    </section>
  );
}
