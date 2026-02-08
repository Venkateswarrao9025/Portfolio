import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-b from-emerald-50/50 to-white dark:from-slate-950 dark:to-slate-950">
        <HeroSection />

        <div className="mx-auto max-w-6xl px-4 space-y-16 pb-20">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
