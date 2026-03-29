export function ClosingStatement({ text }: { text: string }) {
  return (
    <section
      className="max-w-7xl mx-auto px-6 sm:px-8 py-14 md:py-20"
      aria-labelledby="closing-heading"
    >
      <h2 id="closing-heading" className="sr-only">
        Summary
      </h2>
      <p className="type-display max-w-4xl text-[clamp(1.35rem,3.2vw,2rem)] font-light leading-snug text-slate-900">
        {text}
      </p>
    </section>
  );
}
