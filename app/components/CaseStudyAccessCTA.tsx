"use client";

import { useActionState } from "react";
import {
  contactInitialState,
  submitCaseStudyRequest,
  type ContactState,
} from "@/app/actions/contact";
import type { AccessCtaContent } from "@/lib/types";

export function CaseStudyAccessCTA({ content }: { content: AccessCtaContent }) {
  const [state, formAction, pending] = useActionState<
    ContactState,
    FormData
  >(submitCaseStudyRequest, contactInitialState);

  return (
    <div
      role="region"
      className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16"
      aria-labelledby="access-heading"
    >
      <div className="rounded-[1.75rem] border border-sky-200/70 bg-gradient-to-br from-white/80 to-sky-50/50 p-px shadow-[0_8px_40px_-12px_rgba(14,165,233,0.35)]">
        <div className="rounded-[1.65rem] bg-white/80 px-6 py-8 md:px-10 md:py-10 backdrop-blur">
          <h2
            id="access-heading"
            className="type-display text-2xl md:text-3xl font-light text-slate-950"
          >
            {content.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base font-light text-slate-600 leading-relaxed">
            {content.description}
          </p>
          <form action={formAction} className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-end">
            <label className="sr-only" htmlFor="access-email">
              Email
            </label>
            <input
              id="access-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="h-12 w-full sm:max-w-sm rounded-xl border border-sky-200/80 bg-white/90 px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200/60"
            />
            <button
              type="submit"
              disabled={pending}
              className="type-label h-12 shrink-0 rounded-xl bg-sky-600 px-8 text-white !tracking-[0.2em] hover:bg-sky-700 disabled:opacity-60 transition-colors"
              data-cursor-hover
            >
              {pending ? "…" : content.buttonLabel}
            </button>
          </form>
          {state.message ? (
            <p
              className={`mt-4 text-sm ${state.ok ? "text-emerald-700" : "text-red-700"}`}
              role="status"
            >
              {state.message}
            </p>
          ) : null}
          {content.footnote ? (
            <p className="mt-5 text-xs font-light italic text-slate-500">
              {content.footnote}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
