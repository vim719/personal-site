import { AboutSection } from "./components/AboutSection";
import { CaseStudyAccessCTA } from "./components/CaseStudyAccessCTA";
import { CinematicHero } from "./components/CinematicHero";
import { ClosingStatement } from "./components/ClosingStatement";
import { ExperienceRibbon } from "./components/ExperienceRibbon";
import { FeaturedCaseStudies } from "./components/FeaturedCaseStudies";
import { HomeJsonLd } from "./components/HomeJsonLd";
import { PastProjectsFiltered } from "./components/PastProjectsFiltered";
import { RevealSection } from "./components/RevealSection";
import { ScrollSectionNav } from "./components/ScrollSectionNav";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { StatsAwardsBand } from "./components/StatsAwardsBand";
import { TabletNotice } from "./components/TabletNotice";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { buildHeroLoopImages } from "@/lib/build-hero-images";
import { getBio, getProjects, getSiteRich } from "@/lib/content";

export default async function Home() {
  const [bio, projects, rich] = await Promise.all([
    getBio(),
    getProjects(),
    getSiteRich(),
  ]);
  const heroImages = buildHeroLoopImages(projects);

  return (
    <>
      <HomeJsonLd bio={bio} projects={projects} />
      <ScrollSectionNav />
      {rich.tabletNotice ? (
        <TabletNotice notice={rich.tabletNotice} contactEmail={bio.contactEmail} />
      ) : null}
      <SiteNav bio={bio} />
      <main id="main">
        <CinematicHero
          bio={bio}
          heroImages={heroImages}
          heroMetrics={rich.heroMetrics}
        />
        <RevealSection id="access">
          <CaseStudyAccessCTA content={rich.accessCta} />
        </RevealSection>
        <RevealSection id="stats">
          <StatsAwardsBand
            awardsIntro={rich.awardsIntro}
            statsLines={rich.statsLines}
          />
        </RevealSection>
        <RevealSection id="experience">
          <ExperienceRibbon
            entries={rich.experience}
            caption={rich.experienceCaption}
          />
        </RevealSection>
        <RevealSection id="work">
          <FeaturedCaseStudies projects={projects} />
        </RevealSection>
        <RevealSection id="testimonials">
          <TestimonialsSection items={rich.testimonials} />
        </RevealSection>
        <RevealSection id="past">
          <PastProjectsFiltered items={rich.pastProjects} />
        </RevealSection>
        <RevealSection id="closing" scrollClassName="scroll-mt-28">
          <ClosingStatement text={rich.closingStatement} />
        </RevealSection>
        <RevealSection id="about">
          <AboutSection about={rich.about} />
        </RevealSection>
      </main>
      <SiteFooter bio={bio} />
    </>
  );
}
