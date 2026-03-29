export function StatsAwardsBand({
  awardsIntro,
  statsLines,
}: {
  awardsIntro: string;
  statsLines: string[];
}) {
  return (
    <div
      role="region"
      className="border-y border-sky-200/50 bg-white/35 backdrop-blur-sm"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 md:py-20">
        <h2 id="stats-heading" className="sr-only">
          Highlights and experience
        </h2>
        <p className="type-display max-w-3xl text-xl md:text-2xl font-light leading-snug text-slate-900">
          {awardsIntro}
        </p>
        <ul className="mt-8 space-y-4 max-w-3xl">
          {statsLines.map((line) => (
            <li
              key={line.slice(0, 32)}
              className="flex gap-3 text-sm md:text-base font-light text-slate-600 leading-relaxed tracking-[-0.01em]"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-400/90" aria-hidden />
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
