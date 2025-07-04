import CTA from "./components/sections/CTA";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import SkillsSection from "./components/sections/SkillsSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <ProjectSection />
        <SkillsSection />
        <ExperienceSection />
        <CTA />
      </main>
    </div>
  );
}
