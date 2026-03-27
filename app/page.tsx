export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar - Brave Style (Glassmorphism) */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-brave-dark/80 backdrop-blur-xl px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-bold tracking-tighter text-xl uppercase">Portfolio</span>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-brave-muted">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="mailto:your@email.com" className="hover:text-brave-accent transition-colors underline underline-offset-4">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Blinkov Style Typography */}
      <header className="max-w-7xl mx-auto px-8 py-32 md:py-48">
        <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-medium leading-[0.85] tracking-tight">
          Product <br /> 
          <span className="text-brave-muted italic font-light">Designer.</span>
        </h1>
        <p className="mt-12 text-lg md:text-2xl text-brave-muted max-w-2xl leading-snug font-light">
          Crafting high-performance digital tools with the precision of a 
          <span className="text-white"> senior engineer</span> and the eye of an artist.
        </p>
      </header>

      {/* Project Grid */}
      <section id="work" className="max-w-7xl mx-auto px-8 pb-40 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Project Card */}
        <div className="project-card group cursor-pointer">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-brave-surface ring-1 ring-white/10">
            <img 
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200" 
              alt="Work Example" 
              className="project-image object-cover w-full h-full"
            />
          </div>
          <div className="mt-8 flex justify-between items-start group">
            <div>
              <h3 className="text-2xl font-medium tracking-tight">Financial Interface</h3>
              <p className="text-brave-muted text-xs uppercase tracking-widest mt-2">Fintech • 2026</p>
            </div>
            <div className="text-brave-muted group-hover:text-brave-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
