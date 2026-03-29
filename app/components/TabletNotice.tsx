"use client";

import { useEffect, useState } from "react";
import type { SiteRichContent } from "@/lib/types";

export function TabletNotice({
  notice,
  contactEmail,
}: {
  notice: NonNullable<SiteRichContent["tabletNotice"]>;
  contactEmail: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed =
      typeof window !== "undefined" &&
      sessionStorage.getItem("tablet-notice-dismissed") === "1";
    if (dismissed) return;

    const mq = window.matchMedia(
      "(min-width: 641px) and (max-width: 1024px)"
    );
    const apply = () => setOpen(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (!open) return null;

  const dismiss = () => {
    sessionStorage.setItem("tablet-notice-dismissed", "1");
    setOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/40 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tablet-notice-title"
    >
      <div className="max-w-md rounded-2xl border border-sky-200/60 bg-white p-8 shadow-2xl">
        <h2
          id="tablet-notice-title"
          className="type-display text-xl font-light text-slate-950"
        >
          {notice.title}
        </h2>
        <p className="mt-3 text-sm font-light text-slate-600 leading-relaxed">
          {notice.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={dismiss}
            className="type-label rounded-xl bg-sky-600 px-6 py-3 text-white hover:bg-sky-700"
          >
            Continue anyway
          </button>
          <a
            href={`mailto:${contactEmail}`}
            className="type-label rounded-xl border border-sky-200 px-6 py-3 text-sky-800 hover:bg-sky-50"
            data-cursor-hover
          >
            Email me ↗
          </a>
        </div>
      </div>
    </div>
  );
}
