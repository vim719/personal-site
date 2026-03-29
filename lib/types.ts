export type BioContent = {
  name: string;
  titleLine1: string;
  titleLine2: string;
  tagline: string;
  /** One line under hero, e.g. role · years · verticals */
  credentialsLine?: string;
  contactEmail: string;
  linkedInUrl?: string;
  githubUrl?: string;
  /** e.g. Are.na profile — shown in footer like reference */
  arenaUrl?: string;
};

export type ProjectContent = {
  _id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  body?: string;
  industry?: string;
  role?: string;
  scope?: string;
  websiteUrl?: string;
  websiteLabel?: string;
  bullets?: string[];
  clientName?: string;
};

export type HeroMetricSlide = {
  id: string;
  headline: string;
  subline: string;
};

export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  category: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  year: string;
};

export type PastProject = {
  id: string;
  title: string;
  url?: string;
  year: string;
  tenure: string;
  domain: string;
  tags: string[];
  outcome?: string;
};

export type AccessCtaContent = {
  title: string;
  description: string;
  buttonLabel: string;
  footnote?: string;
};

export type AboutContent = {
  paragraphs: string[];
  spotifyUrl?: string;
  secondaryLinkLabel?: string;
  secondaryLinkUrl?: string;
};

export type SiteRichContent = {
  accessCta: AccessCtaContent;
  awardsIntro: string;
  statsLines: string[];
  heroMetrics: HeroMetricSlide[];
  experience: ExperienceEntry[];
  /** Optional callout under the experience strip (reference: “Leading all Loyalty at…”) */
  experienceCaption?: string;
  testimonials: Testimonial[];
  pastProjects: PastProject[];
  about: AboutContent;
  closingStatement: string;
  /** Shown on typical tablet widths — reference “desktop + mobile only” notice */
  tabletNotice?: { title: string; body: string };
};
