"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("#home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const revealSections = Array.from(document.querySelectorAll("section[data-reveal]"));

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(windowHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / windowHeight) * 100)) : 0);

      const currentSection = sections.reduce((closest, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top);
        return distance < closest.distance ? { section, distance } : closest;
      }, { section: sections[0], distance: Number.POSITIVE_INFINITY }).section;

      if (currentSection) {
        setActiveSection(`#${currentSection.id}`);
      }
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    revealSections.forEach((section) => revealObserver.observe(section));
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealSections.forEach((section) => revealObserver.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#090b21] text-white">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white/10">
        <div className="h-full bg-gradient-to-r from-[#36ADA3] via-[#2F578A] to-[#8c82ff] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>
      <Navbar activeSection={activeSection} />
      <main className="relative overflow-hidden">
        <Hero />
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
