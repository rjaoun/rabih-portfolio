
import { useRef, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useIsMobile } from "@/hooks/use-mobile";
import HeroSkill from "./hero/HeroSkill";
import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";
import HeroArrow from "./hero/HeroArrow";
import { skillsData, type SkillItem } from "./hero/skills-data";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Filter out skills that would overlap with buttons on mobile
  const filteredSkills: SkillItem[] = isMobile 
    ? skillsData.filter(skill => 
        !(skill.y > 35 && skill.y < 60 && skill.x > 35 && skill.x < 65)) 
    : skillsData;

  return (
    <section
      ref={heroRef}
      className={`min-h-screen flex items-center justify-center pt-20 overflow-hidden relative ${
        theme === "light"
          ? "bg-gradient-to-br from-[#51e2f5]/80 to-[#51e2f5]/50"
          : "bg-gradient-to-br from-background to-secondary"
      }`}
      id="hero"
    >
      {/* Floating skill words */}
      {filteredSkills.map((skill, index) => (
        <HeroSkill 
          key={index}
          text={skill.text}
          x={skill.x}
          y={skill.y}
          delay={skill.delay}
          index={index}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Content section */}
          <HeroContent />
          
          {/* Image section */}
          <HeroImage imageSrc="/lovable-uploads/9c963020-3879-49f1-bce9-a816f6dc20d9.png" />
        </div>
      </div>

      {/* Arrow for desktop only */}
      {!isMobile && <HeroArrow />}
    </section>
  );
};

export default Hero;
