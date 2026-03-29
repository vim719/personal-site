"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { HeroMetricSlide } from "@/lib/types";

const ROTATE_MS = 5200;

export function HeroMetricsTicker({ slides }: { slides: HeroMetricSlide[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const list = slides.length ? slides : [];

  useEffect(() => {
    if (reduce || list.length < 2) return;
    const id = window.setInterval(
      () => setI((n) => (n + 1) % list.length),
      ROTATE_MS
    );
    return () => window.clearInterval(id);
  }, [list.length, reduce]);

  if (!list.length) return null;

  const current = list[i] ?? list[0];

  return (
    <div
      className="mb-8 md:mb-10 min-h-[3.5rem] md:min-h-[4rem]"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-sky-200/60 bg-white/50 px-4 py-3 md:px-5 md:py-3.5 backdrop-blur-md shadow-sm"
        >
          <p className="font-sans text-[0.8125rem] md:text-sm font-medium tracking-[-0.02em] text-slate-900">
            {current.headline}
          </p>
          <p className="mt-1 font-sans text-[0.6875rem] md:text-xs font-medium tracking-[0.08em] text-sky-700/75 uppercase">
            {current.subline}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
