"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HeroLoopSlide } from "@/lib/build-hero-images";
import type { BioContent, HeroMetricSlide } from "@/lib/types";
import { HeroImageLoop } from "./HeroImageLoop";
import { HeroMetricsTicker } from "./HeroMetricsTicker";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const line = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const instant = {
  hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function CinematicHero({
  bio,
  heroImages,
  heroMetrics,
}: {
  bio: BioContent;
  heroImages: HeroLoopSlide[];
  heroMetrics: HeroMetricSlide[];
}) {
  const reduce = useReducedMotion();
  const c = reduce ? instant : container;
  const l = reduce ? instant : line;

  return (
    <header
      id="hero"
      className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-16 md:pt-32 md:pb-24 min-h-[min(88vh,960px)] flex flex-col justify-center scroll-mt-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-12 lg:gap-14 xl:gap-20 items-center">
        <motion.div
          variants={c}
          initial="hidden"
          animate="show"
          className="will-change-transform [transform:translateZ(0)] order-2 lg:order-1"
        >
          <motion.div variants={l}>
            <HeroMetricsTicker slides={heroMetrics} />
          </motion.div>
          <motion.p
            variants={l}
            className="type-label text-sky-700/75 mb-7 md:mb-10"
          >
            {bio.name}
          </motion.p>
          <h1 className="type-display text-[clamp(2.85rem,10.5vw,6.85rem)] font-light leading-[0.86] text-slate-950">
            <motion.span variants={l} className="block">
              {bio.titleLine1}
            </motion.span>
            <motion.span
              variants={l}
              className="block mt-2 md:mt-3 italic font-normal text-sky-600/90 text-[0.92em] tracking-[-0.02em]"
            >
              {bio.titleLine2}
            </motion.span>
          </h1>
          {bio.credentialsLine ? (
            <motion.p
              variants={l}
              className="mt-8 max-w-xl font-sans text-sm md:text-[0.9375rem] font-light leading-snug text-slate-600 tracking-[-0.01em]"
            >
              {bio.credentialsLine}
            </motion.p>
          ) : null}
          <motion.p
            variants={l}
            className="mt-8 md:mt-10 max-w-[34rem] text-[1.0625rem] md:text-xl font-light text-slate-600 leading-[1.65] tracking-[-0.015em]"
          >
            {bio.tagline}
          </motion.p>
          <motion.div variants={l} className="mt-8 md:mt-10">
            <a
              href="#work"
              className="type-label inline-flex items-center gap-2 text-sky-800 hover:text-slate-950 transition-colors"
              data-cursor-hover
            >
              Explore cases <span aria-hidden>↓</span>
            </a>
          </motion.div>
        </motion.div>

        <div className="order-1 lg:order-2 min-w-0">
          <HeroImageLoop images={heroImages} />
        </div>
      </div>
    </header>
  );
}
