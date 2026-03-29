"use client";

import { GeminiBackdrop } from "./GeminiBackdrop";
import { MagneticCursor } from "./MagneticCursor";

export function ExperienceChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GeminiBackdrop />
      <MagneticCursor />
      {children}
    </>
  );
}
