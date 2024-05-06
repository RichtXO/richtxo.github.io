import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import {Certifications} from "../sections/certifications/Certifications";

export default function IndexPage() {
  return (
    <>
      <Seo title="Richard Tsai" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <Certifications />
        <InterestsSection sectionId="skills" heading="Skills"/>
        <ProjectsSection sectionId="projects" heading="Projects"/>
        <ContactSection sectionId="contact" heading="Reach Out"/>
      </Page>
    </>
  );
}
