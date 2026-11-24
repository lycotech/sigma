import { AnnouncementBand } from "@/components/sections/AnnouncementBand";
import { Hero } from "@/components/sections/Hero";
import {
  Footprint,
  Gallery,
  GetInTouch,
  HowToStart,
  Intro,
  NewsletterSection,
  RegulatorMarquee,
  ServicesSection,
  STraderSpotlight,
  StorySection,
  TrustStrip,
  VisionBand,
  WhyUs,
} from "@/components/sections/HomeSections";

export default function HomePage() {
  return (
    <>
      <AnnouncementBand />
      <Hero />
      <TrustStrip />
      <Intro />
      <ServicesSection />
      <VisionBand />
      <STraderSpotlight />
      <WhyUs />
      <StorySection />
      <Gallery />
      <HowToStart />
      <Footprint />
      <RegulatorMarquee />
      <NewsletterSection />
      <GetInTouch />
    </>
  );
}
