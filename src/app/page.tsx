"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HorizontalGallery from "@/components/HorizontalGallery";
import ServicesSection from "@/components/ServicesSection";
import AiTechSection from "@/components/AiTechSection";
import WorkSection from "@/components/WorkSection";
import AIAdFilmsSection from "@/components/AIAdFilmsSection";
import CreativeArchiveSection from "@/components/CreativeArchiveSection";
import PitchDecksSection from "@/components/PitchDecksSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import CommunicationPhilosophySection from "@/components/CommunicationPhilosophySection";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import InteractiveCanvasNoise from "@/components/motion/InteractiveCanvasNoise";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get("skipLoader") === "true") {
        setLoading(false);
      }
    }
  }, []);

  const handleOpenProjectById = (id: string) => {
    const proj = PROJECTS.find((p) => p.id === id) || null;
    setSelectedProject(proj);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  return (
    <SmoothScroll>
      {/* Interactive 60 FPS Canvas Background Layer */}
      <InteractiveCanvasNoise />

      {/* Advanced Custom Cursor with Floating Image Portal */}
      <CustomCursor />

      {/* Cinematic Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main Website Experience */}
      <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F20D18] selection:text-white relative z-10">
        <Navbar />

        {/* Section 01: Hero Section */}
        <Hero onOpenProject={handleOpenProjectById} />

        {/* Section 02: Company Positioning & About */}
        <AboutSection />

        {/* Dynamic Horizontal Production Reel Gallery */}
        <HorizontalGallery />

        {/* Section 03: 5 Integrated Capability Verticals */}
        <ServicesSection />

        {/* Section 04: AI-Powered Advertising & Creative Technology */}
        <AiTechSection />

        {/* Section 04B: AI Films. Real Impact (AI Video Showcase) */}
        <AIAdFilmsSection />

        {/* Section 05: Dynamic Selected Work & Case Studies */}
        <WorkSection onSelectProject={setSelectedProject} />

        {/* Section 05B: The Creative Archive (Ideas Made Visible) */}
        <CreativeArchiveSection />

        {/* Section 05C: Pitch Decks & Strategy Presentations (Ideas, Presented) */}
        <PitchDecksSection />

        {/* Section 06: Why After That — 6 Integrated Advantages */}
        <WhyUsSection />

        {/* Section 07: Execution Process — 5-Stage Framework */}
        <ProcessSection />

        {/* Section 08: Strategic Brand Communication Philosophy */}
        <CommunicationPhilosophySection />

        {/* Section 09: Regional Hubs & Presence (Kochi | Bangalore | Ahmedabad) */}
        <LocationsSection />

        {/* Section 10: Interactive Project Commission & Enquiry Terminal */}
        <ContactSection />

        {/* Maximalist Architectural Footer */}
        <Footer />

        {/* Case Study Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNextProject={handleNextProject}
        />
      </main>
    </SmoothScroll>
  );
}
