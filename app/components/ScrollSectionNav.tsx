"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "hero", label: "Intro" },
  { id: "access", label: "Access" },
  { id: "stats", label: "Proof" },
  { id: "experience", label: "Roles" },
  { id: "work", label: "Work" },
  { id: "testimonials", label: "Quotes" },
  { id: "past", label: "Past" },
  { id: "closing", label: "Thesis" },
  { id: "about", label: "About" },
] as const;

export function ScrollSectionNav() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const ids = LINKS.map((l) => l.id);

    const update = () => {
      const centerY = window.innerHeight / 2;
      let best = ids[0];
      let bestDist = Number.POSITIVE_INFINITY;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const mid = r.top + r.height / 2;
        const d = Math.abs(mid - centerY);
        if (d < bestDist) {
          bestDist = d;
          best = id;
        }
      }
      setActive(best);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav
      aria-label="On-page section navigation"
      className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-2.5 rounded-full border border-sky-200/50 bg-white/70 px-2 py-3 shadow-lg backdrop-blur-md">
        {LINKS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              title={label}
              className={`group flex h-2.5 w-2.5 items-center justify-center rounded-full transition-all duration-300 ${
                active === id
                  ? "bg-sky-500 scale-125 shadow-[0_0_12px_rgba(14,165,233,0.6)]"
                  : "bg-sky-200/90 hover:bg-sky-400/90 hover:scale-110"
              }`}
              data-cursor-hover
            >
              <span className="sr-only">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
