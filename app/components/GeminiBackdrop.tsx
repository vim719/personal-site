"use client";

import { useReducedMotion } from "framer-motion";
import { FluidBackground } from "./FluidBackground";

export function GeminiBackdrop() {
  const reduced = useReducedMotion();
  return <FluidBackground reducedMotion={Boolean(reduced)} />;
}
