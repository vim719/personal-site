"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function MagneticCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 500, damping: 38, mass: 0.4 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);
  const hover = useMotionValue(0);
  const ringScale = useTransform(hover, [0, 1], [1, 1.85]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || coarse) return;

    const id = requestAnimationFrame(() => {
      setEnabled(true);
    });
    document.documentElement.classList.add("cursor-none");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const over = Boolean(el?.closest("[data-cursor-hover]"));
      hover.set(over ? 1 : 0);
    };

    window.addEventListener("mousemove", move);

    return () => {
      cancelAnimationFrame(id);
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", move);
    };
  }, [hover, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-multiply"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="h-3 w-3 rounded-full bg-[#38BDF8]/90 shadow-[0_0_24px_rgba(56,189,248,0.55)]"
          style={{ scale: ringScale }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] mix-blend-multiply"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="h-10 w-10 rounded-full border border-sky-400/35 bg-white/10 backdrop-blur-[2px]"
          style={{ scale: ringScale }}
        />
      </motion.div>
    </>
  );
}
