"use client";

import Link from "next/link";
import { useState } from "react";
import type { BioContent } from "@/lib/types";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#past", label: "Past" },
  { href: "#about", label: "About" },
] as const;

export function MobileNav({ bio }: { bio: BioContent }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="type-label rounded-lg border border-sky-200/70 px-3 py-2 text-sky-900"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label="Open menu"
      >
        Menu
      </button>
      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[150] bg-slate-900/30 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav-panel"
            className="fixed right-0 top-0 z-[160] flex h-full w-[min(100%,320px)] flex-col border-l border-sky-200/60 bg-[#f0f9ff] shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b border-sky-200/50 px-5 py-4">
              <Link
                href="/"
                className="font-medium text-slate-950"
                onClick={() => setOpen(false)}
              >
                {bio.name}
              </Link>
              <button
                type="button"
                className="text-sm text-sky-800"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 p-5" aria-label="Mobile">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="type-label border-b border-sky-100 py-3 text-left text-sky-900"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`mailto:${bio.contactEmail}`}
                className="type-label border-b border-sky-100 py-3 text-left text-sky-900"
                onClick={() => setOpen(false)}
              >
                Email me ↗
              </a>
              {bio.linkedInUrl ? (
                <a
                  href={bio.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-label border-b border-sky-100 py-3 text-left text-sky-900"
                  onClick={() => setOpen(false)}
                >
                  LinkedIn ↗
                </a>
              ) : null}
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
