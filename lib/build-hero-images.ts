import type { ProjectContent } from "./types";
import { heroLoopExtras } from "./hero-loop-assets";

export type HeroLoopSlide = { src: string; alt: string };

/**
 * Deduplicate by URL: project thumbnails first, then extra stock for a longer loop.
 */
export function buildHeroLoopImages(projects: ProjectContent[]): HeroLoopSlide[] {
  const seen = new Set<string>();
  const out: HeroLoopSlide[] = [];

  for (const p of projects) {
    if (!seen.has(p.imageUrl)) {
      seen.add(p.imageUrl);
      out.push({ src: p.imageUrl, alt: p.imageAlt });
    }
  }

  for (const e of heroLoopExtras) {
    if (!seen.has(e.src)) {
      seen.add(e.src);
      out.push(e);
    }
  }

  if (out.length >= 2) return out;
  return heroLoopExtras.slice(0, Math.max(2, heroLoopExtras.length));
}
