import Link from "next/link";
import type { BioContent } from "@/lib/types";
import { MobileNav } from "./MobileNav";

export function SiteNav({ bio }: { bio: BioContent }) {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-sky-200/50 bg-white/55 backdrop-blur-xl supports-[backdrop-filter]:bg-white/40"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4 px-6 sm:px-8 py-4 md:py-5">
        <Link
          href="/"
          className="font-sans text-sm md:text-[15px] font-medium tracking-[-0.03em] text-slate-950 shrink-0"
          data-cursor-hover
        >
          {bio.name}
        </Link>

        <div className="hidden lg:flex flex-wrap items-center justify-end gap-x-8 gap-y-2 text-sky-800/90">
          <a
            href="#work"
            className="type-label hover:text-slate-900 transition-colors"
            data-cursor-hover
          >
            Work
          </a>
          <a
            href={`mailto:${bio.contactEmail}`}
            className="type-label hover:text-sky-700 transition-colors"
            data-cursor-hover
          >
            Contact
          </a>
          {bio.linkedInUrl ? (
            <a
              href={bio.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="type-label hover:text-slate-900 transition-colors"
              data-cursor-hover
            >
              LinkedIn ↗
            </a>
          ) : null}
          <a
            href="#about"
            className="type-label hover:text-slate-900 transition-colors"
            data-cursor-hover
          >
            About
          </a>
          <a
            href={`mailto:${bio.contactEmail}`}
            className="type-label hover:text-sky-700 transition-colors underline underline-offset-[6px] decoration-sky-300/70"
            data-cursor-hover
          >
            Email me ↗
          </a>
        </div>

        <MobileNav bio={bio} />
      </div>
    </nav>
  );
}
