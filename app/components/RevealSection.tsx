"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function RevealSection({
  id,
  className = "",
  scrollClassName = "scroll-mt-28",
  children,
}: {
  id?: string;
  className?: string;
  /** e.g. scroll-mt-0 for hero-adjacent blocks */
  scrollClassName?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      id={id}
      data-nav-section={id ?? undefined}
      className={[scrollClassName, className].filter(Boolean).join(" ")}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
