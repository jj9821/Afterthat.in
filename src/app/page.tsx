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
import WorkSection from "@/components/WorkSection";
import PhilosophySection from "@/components/PhilosophySection";
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
      <main className="min-h-screen bg-[#080808] text-white selection:bg-[#ff2020] selection:text-white relative z-10">
        <Navbar />

        {/* Hero Section */}
        <Hero onOpenProject={handleOpenProjectById} />

        {/* Editorial About Section */}
        <AboutSection />

        {/* Pinned Horizontal Reel Gallery */}
        <HorizontalGallery />

        {/* Interactive Services Section */}
        <ServicesSection />

        {/* Dynamic Selected Work Section */}
        <WorkSection onSelectProject={setSelectedProject} />

        {/* Brand Philosophy / Manifesto */}
        <PhilosophySection />

        {/* Interactive Contact / Commission Terminal */}
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
