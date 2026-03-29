import type { AboutContent } from "@/lib/types";

export function AboutSection({ about }: { about: AboutContent }) {
  return (
    <section
      className="border-t border-sky-200/50 bg-white/30 pb-8"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24">
        <h2
          id="about-heading"
          className="type-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-slate-950"
        >
          About
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-base font-light text-slate-600 leading-relaxed tracking-[-0.01em]">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          {about.spotifyUrl ? (
            <a
              href={about.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-light text-sky-800 hover:text-slate-950 border-b border-sky-200/80"
              data-cursor-hover
            >
              Listen on Spotify ↗
            </a>
          ) : null}
          {about.secondaryLinkUrl && about.secondaryLinkLabel ? (
            <a
              href={about.secondaryLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-light text-sky-800 hover:text-slate-950 border-b border-sky-200/80"
              data-cursor-hover
            >
              {about.secondaryLinkLabel} ↗
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
