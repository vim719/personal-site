import type { BioContent } from "@/lib/types";

export function SiteFooter({ bio }: { bio: BioContent }) {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="border-t border-sky-200/60 bg-white/45 backdrop-blur-md mt-8"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 md:py-16">
        <p
          className="text-center text-sky-300/80 tracking-[0.5em] text-sm select-none"
          aria-hidden
        >
          • • •
        </p>
        <div className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          <div>
            <p
              className="type-display text-[clamp(1.75rem,3vw,2.25rem)] font-light text-slate-950"
              id="footer-connect"
            >
              Let&apos;s connect
            </p>
            <p className="mt-2 text-sm font-light text-slate-600 max-w-md">
              {bio.tagline}
            </p>
          </div>
          <nav
            aria-labelledby="footer-connect"
            className="flex flex-col gap-3 text-sm font-light"
          >
            <a
              href="#work"
              className="text-sky-800 hover:text-slate-950 w-fit"
              data-cursor-hover
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sky-800 hover:text-slate-950 w-fit"
              data-cursor-hover
            >
              About
            </a>
            {bio.linkedInUrl ? (
              <a
                href={bio.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-800 hover:text-slate-950 w-fit"
                data-cursor-hover
              >
                Connect on LinkedIn
              </a>
            ) : null}
            <a
              href={`mailto:${bio.contactEmail}`}
              className="text-sky-800 hover:text-slate-950 w-fit"
              data-cursor-hover
            >
              {bio.contactEmail} ↗
            </a>
            {bio.arenaUrl ? (
              <a
                href={bio.arenaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-800 hover:text-slate-950 w-fit"
                data-cursor-hover
              >
                Are.na ↗
              </a>
            ) : null}
          </nav>
        </div>
        <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-sky-200/40 text-xs font-light text-slate-500">
          <p>
            © {year} {bio.name}
          </p>
          <p className="text-slate-400">Portfolio · case studies on request</p>
        </div>
      </div>
    </footer>
  );
}
