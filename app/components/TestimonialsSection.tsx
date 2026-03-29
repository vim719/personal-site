import type { Testimonial } from "@/lib/types";

export function TestimonialsSection({ items }: { items: Testimonial[] }) {
  return (
    <section
      className="border-t border-sky-200/50 bg-sky-50/30"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24">
        <h2
          id="testimonials-heading"
          className="type-display text-[clamp(1.75rem,3vw,2.5rem)] font-light text-slate-950"
        >
          Testimonials
        </h2>
        <p className="mt-2 text-sm font-light text-slate-600 max-w-lg">
          Direct feedback from founders, managers, and partners.
        </p>
        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide md:grid md:gap-6 md:overflow-visible md:pb-0 md:snap-none md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <blockquote
              key={t.id}
              className="snap-start shrink-0 w-[min(88vw,340px)] md:w-auto rounded-2xl border border-sky-200/55 bg-white/70 p-6 backdrop-blur-md shadow-sm flex flex-col"
            >
              <p className="text-sm font-light text-slate-700 leading-relaxed flex-1">
                “{t.quote}”
              </p>
              <footer className="mt-5 pt-4 border-t border-sky-100">
                <cite className="not-italic font-medium text-slate-900 text-sm tracking-[-0.02em]">
                  {t.author}
                </cite>
                <p className="text-xs font-light text-slate-500 mt-1">
                  {t.role} · {t.year}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
