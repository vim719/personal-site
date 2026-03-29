import type { ProjectContent, SiteRichContent } from "./types";

/** Full case-study rows — replace copy and imagery with your own; structure mirrors portfolio reference sites. */
export const RICH_PROJECTS: ProjectContent[] = [
  {
    _id: "p1",
    slug: "northwind-loyalty",
    title: "Northwind Loyalty & cashback",
    clientName: "Northwind (ex. sample)",
    category: "Fintech",
    year: "2024",
    excerpt:
      "Redesigning cashback surfaces for tens of millions of customers—behavioral data, experiments, and a calmer hierarchy.",
    industry: "Fintech · B2B2C · Banking",
    role: "Staff Product Designer",
    scope: "Web · PWA · iOS · Android",
    websiteUrl: "https://example.com",
    websiteLabel: "northwind.example",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
    imageAlt: "Finance product interface abstraction",
    bullets: [
      "Led a small design pod shipping loyalty surfaces end-to-end—measurable lift in offer CTR and redemption.",
      "Case study covers how we reframed cashback around intent, not noise, using research loops and A/B tests.",
    ],
    body:
      "Northwind’s loyalty stack needed clarity at scale. We reframed offers around intent, tightened visual hierarchy, and paired qualitative research with experiment velocity.\n\nOutcome: clearer journeys for high-frequency tasks and a calmer dense-data experience across web and native.",
  },
  {
    _id: "p2",
    slug: "indy-flows",
    title: "Indy — freelancer operations",
    clientName: "Indy",
    category: "SaaS",
    year: "2023",
    excerpt:
      "Invoices, proposals, and contracts in one calm system—shipping measurable lift in submission rate.",
    industry: "SaaS · B2B · Finance tools",
    role: "Staff Product Designer",
    scope: "Web · Design systems",
    websiteUrl: "https://example.com",
    websiteLabel: "indy.example",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    imageAlt: "Dashboard and charts on laptop",
    bullets: [
      "Rebuilt core invoicing flows with clearer states, fewer dead-ends, and stronger empty experiences.",
      "Documented a scalable system so product teams could ship without fragmenting UI patterns.",
    ],
    body:
      "Freelancers needed speed and confidence. We simplified proposal → contract → invoice with a shared structure and predictable interactions.\n\nWe validated with weekly usability sessions and shipped iteratively with analytics checkpoints.",
  },
  {
    _id: "p3",
    slug: "nocturne-rest",
    title: "Nocturne — sleep ritual",
    clientName: "Nocturne",
    category: "Consumer",
    year: "2022",
    excerpt:
      "0→1 interaction design for a calm nightly ritual—later recognized in year-end app roundups.",
    industry: "0→1 · iOS · Android · Interaction",
    role: "Senior Product Designer",
    scope: "Startup · Consumer · Health",
    websiteUrl: "https://example.com",
    websiteLabel: "nocturne.example",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
    imageAlt: "Phone with soft UI in hand",
    bullets: [
      "Defined the motion and tonal system for launch—sound, haptics, and pacing treated as one interface.",
      "Partnered with founders on narrative, onboarding, and retention loops for the first 90 days.",
    ],
    body:
      "Nocturne needed a product that felt like a ritual, not a utility. We prototyped motion early, tested pacing, and refined copy alongside visual design.\n\nThe result: a cohesive language that carried from marketing into the core loop.",
  },
  {
    _id: "p4",
    slug: "coach-program",
    title: "The Coach — habit programs",
    clientName: "The Coach",
    category: "Health",
    year: "2021",
    excerpt:
      "End-to-end redesign of the program experience—research, experiments, and retention-focused iteration.",
    industry: "Startup · Consumer · Health tech",
    role: "Product Design Lead",
    scope: "iOS · Android · Design systems",
    websiteUrl: "https://example.com",
    websiteLabel: "coach.example",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
    imageAlt: "Wellness and health app context",
    bullets: [
      "Ran dozens of interviews and tests to isolate drop-off in week-one activation.",
      "Introduced a clearer program model and pacing UI—validated with A/B roadmaps.",
    ],
    body:
      "Retention was the north star. We mapped the emotional journey of week one, simplified decisions, and made progress legible without guilt-based patterns.\n\nDesign partnered tightly with research and growth.",
  },
  {
    _id: "p5",
    slug: "stadium-index",
    title: "Stadium Index — sports × markets",
    clientName: "Blink Studio",
    category: "Web3",
    year: "2020",
    excerpt:
      "0→1 trading concept around club narratives—brand, UX, and high-fidelity flows with engineering.",
    industry: "B2C · Web3 · DeFi",
    role: "Lead Designer · Art direction",
    scope: "Web · Branding · Design systems",
    websiteUrl: "https://example.com",
    websiteLabel: "stadium.example",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    imageAlt: "Futuristic sports and data visualization",
    bullets: [
      "Shipped an MVP with a small team—wireframes to hi-fi with tight stakeholder feedback loops.",
      "Established visual language that balanced fandom energy with financial clarity.",
    ],
    body:
      "A speculative market needed trust. We anchored the experience in familiar trading patterns while letting club storytelling breathe in marketing surfaces.\n\nClose collaboration with eng kept performance and accessibility in scope.",
  },
  {
    _id: "p6",
    slug: "aurora-brand-system",
    title: "Aurora brand system",
    clientName: "Internal",
    category: "Identity",
    year: "2025",
    excerpt:
      "Light-first tokens, motion, and marketing surfaces for a Gemini-inspired product line.",
    industry: "Identity · Systems",
    role: "Principal Designer",
    scope: "Brand · Web · Motion",
    websiteUrl: "https://example.com",
    websiteLabel: "aurora.example",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    imageAlt: "Soft abstract gradient",
    bullets: [
      "Defined semantic color, elevation, and motion curves aligned to accessibility targets.",
      "Shipped documentation that design and engineering could adopt without drift.",
    ],
    body:
      "Aurora unified marketing and product under one language—tokens first, components second, motion last.\n\nThe system prioritized legibility in bright environments and reduced visual noise in dense dashboards.",
  },
];

export const SITE_RICH = {
  accessCta: {
    title: "Access full case studies",
    description:
      "Dive deeper into process, constraints, metrics, and shipped outcomes. Access is granted manually within a few business days.",
    buttonLabel: "Send request",
    footnote:
      "*info — by requesting access you agree to be contacted about this portfolio only.",
  },
  awardsIntro:
    "Recognition is a lagging indicator—still, it helps teams trust the craft. Selected highlights from shipped work and collaborations.",
  statsLines: [
    "Multi-year depth across consumer, fintech, and SaaS—with a bias for measurable outcomes.",
    "Startups and scale-ups: from 0→1 narrative to systems that survive real traffic.",
    "Partnerships with research, product, and engineering—design as a multiplier, not a gate.",
  ],
  heroMetrics: [
    {
      id: "m1",
      headline: "Design award — Nocturne",
      subline: "Consumer · sleep ritual",
    },
    {
      id: "m2",
      headline: "Day-1 retention +5 pts",
      subline: "The Coach · programs",
    },
    {
      id: "m3",
      headline: "$12B+ cashback volume",
      subline: "Northwind · loyalty",
    },
  ],
  experience: [
    { id: "e1", company: "Northwind", role: "Staff Product Designer", category: "Fintech" },
    { id: "e2", company: "Indy", role: "Staff Product Designer", category: "SaaS" },
    { id: "e3", company: "The Coach", role: "Product Design Lead", category: "Consumer" },
    { id: "e4", company: "Blink Studio", role: "Lead Designer", category: "Fintech" },
    { id: "e5", company: "Synesis", role: "Lead Product Designer", category: "Consumer" },
    { id: "e6", company: "LatticeSoft", role: "Product Designer", category: "SaaS" },
    { id: "e7", company: "HiRoute", role: "Product Designer", category: "SaaS" },
  ],
  experienceCaption:
    "Leading loyalty and growth surfaces at Northwind with 55M+ customers—measurable lift in cashback engagement and redemption.",
  testimonials: [
    {
      id: "t1",
      quote:
        "Exceptional craft and product sense—always connects design decisions to business constraints and user evidence.",
      author: "Victor A.",
      role: "Founder · health startup",
      year: "2022",
    },
    {
      id: "t2",
      quote:
        "As a manager: rare combination of systems thinking, taste, and velocity. Teams around them ship with fewer rewrites.",
      author: "Eugene Z.",
      role: "Head of Design · SaaS",
      year: "2023",
    },
    {
      id: "t3",
      quote:
        "Reliable partner across research, UX, and delivery—clear communication and calm under deadlines.",
      author: "Dmitry H.",
      role: "Delivery lead",
      year: "2025",
    },
    {
      id: "t4",
      quote:
        "Strong research literacy and a sharp eye for consistency—great collaborator for PMs and engineers alike.",
      author: "Julia K.",
      role: "Lead PM",
      year: "2020",
    },
    {
      id: "t5",
      quote:
        "Professional, accountable, and hungry to improve—raises the bar for the whole product org.",
      author: "Maksim K.",
      role: "Engineering manager",
      year: "2019",
    },
    {
      id: "t6",
      quote:
        "Integrity and diligence—someone you want in the room when stakes are high and ambiguity is real.",
      author: "Vitali K.",
      role: "Business analyst",
      year: "2017",
    },
  ],
  pastProjects: [
    {
      id: "pp1",
      title: "Beat Reals",
      url: "https://example.com",
      year: "2023",
      tenure: "3 mo · Video",
      domain: "Health tech",
      tags: ["Health Tech", "Consumer", "SaaS"],
      outcome: "Core onboarding +24% completion",
    },
    {
      id: "pp2",
      title: "Unicoor",
      url: "https://example.com",
      year: "2023",
      tenure: "6 mo · Travel",
      domain: "Travel",
      tags: ["Consumer", "Misc"],
      outcome: "0→1 · seed narrative",
    },
    {
      id: "pp3",
      title: "Broccole",
      url: "https://example.com",
      year: "2020",
      tenure: "2 mo · Entertainment",
      domain: "Entertainment",
      tags: ["Consumer"],
      outcome: "First 2K users",
    },
    {
      id: "pp4",
      title: "Hint",
      url: "https://example.com",
      year: "2020",
      tenure: "4 mo · Lifestyle",
      domain: "Lifestyle",
      tags: ["Consumer", "Health Tech"],
      outcome: "D1 retention 7% → 10%",
    },
    {
      id: "pp5",
      title: "WaKa",
      url: "https://example.com",
      year: "2019",
      tenure: "4 mo · Dating",
      domain: "Consumer",
      tags: ["Consumer"],
      outcome: "0→1 · pre-seed",
    },
    {
      id: "pp6",
      title: "Gem4me",
      url: "https://example.com",
      year: "2019",
      tenure: "12 mo · Superapp",
      domain: "Consumer",
      tags: ["Consumer", "SaaS"],
      outcome: "Scaled MAU toward 200K",
    },
    {
      id: "pp7",
      title: "Finex",
      url: "https://example.com",
      year: "2025",
      tenure: "Present · Trading",
      domain: "Fintech",
      tags: ["Fintech"],
    },
    {
      id: "pp8",
      title: "Invoice Maker web",
      url: "https://example.com",
      year: "2019",
      tenure: "3 mo · B2C",
      domain: "Productivity",
      tags: ["SaaS", "Consumer"],
      outcome: "0→1 strategy",
    },
    {
      id: "pp9",
      title: "Able",
      url: "https://example.com",
      year: "2019",
      tenure: "3 mo · Health",
      domain: "Health",
      tags: ["Health Tech"],
      outcome: "Research → UX",
    },
    {
      id: "pp10",
      title: "DeoVR",
      url: "https://example.com",
      year: "2025",
      tenure: "3 mo · VR",
      domain: "XR",
      tags: ["Misc", "Consumer"],
      outcome: "+12% registration CR",
    },
    {
      id: "pp11",
      title: "Keyhole",
      url: "https://example.com",
      year: "2018",
      tenure: "6 mo · Security",
      domain: "Cybersecurity",
      tags: ["SaaS"],
      outcome: "0→1 UX",
    },
    {
      id: "pp12",
      title: "AirDNA",
      url: "https://example.com",
      year: "2016",
      tenure: "4 mo · Real estate",
      domain: "Prop tech",
      tags: ["SaaS"],
      outcome: "0→1 research + UX",
    },
  ],
  about: {
    paragraphs: [
      "I turn ambiguous product problems into simple, shippable surfaces—pairing systems thinking with obsessive craft.",
      "Outside of work: music, photography, and long walks—anything that trains taste and timing.",
    ],
    spotifyUrl: "https://open.spotify.com",
    secondaryLinkLabel: "Are.na",
    secondaryLinkUrl: "https://are.na",
  },
  closingStatement:
    "I turn complex product challenges into simple, profitable solutions—from high-scale platforms to tiny apps that still deserve award-level care.",
  tabletNotice: {
    title: "Optimized for desktop & mobile",
    body:
      "This portfolio is tuned for large screens and phones. For the best experience, please switch devices—or continue anyway.",
  },
} satisfies SiteRichContent;

export const CREDENTIALS_LINE =
  "Staff / Senior Product Designer · 12+ yrs · Fintech · Consumer · Health · SaaS";
