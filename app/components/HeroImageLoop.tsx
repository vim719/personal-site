"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { HeroLoopSlide } from "@/lib/build-hero-images";

const INTERVAL_MS = 4200;

export function HeroImageLoop({ images }: { images: HeroLoopSlide[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const slides = images;

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const id = window.setInterval(advance, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [advance, reduce, slides.length]);

  const current = slides[index] ?? slides[0];

  if (!current) return null;

  return (
    <div
      className="relative w-full max-w-xl mx-auto lg:max-w-none lg:justify-self-end"
      aria-roledescription="carousel"
      aria-label="Rotating project imagery"
    >
      <div className="relative aspect-[4/5] sm:aspect-[16/11] overflow-hidden rounded-[1.75rem] ring-1 ring-sky-200/55 shadow-[0_32px_120px_-40px_rgba(14,165,233,0.45)] bg-sky-100/40">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduce ? 0 : 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 42vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-950/10 via-transparent to-white/10"
          aria-hidden
        />
      </div>

      {slides.length > 1 ? (
        <div
          className="mt-4 flex justify-center gap-1.5"
          role="group"
          aria-label="Slide indicators"
        >
          {slides.map((s, i) => (
            <button
              key={`${s.src}-${i}`}
              type="button"
              aria-current={i === index ? "true" : undefined}
              aria-label={`Image ${i + 1} of ${slides.length}`}
              className={`h-1 rounded-full transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${
                i === index
                  ? "w-8 bg-sky-500/90"
                  : "w-1.5 bg-sky-300/50 hover:bg-sky-400/70"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
