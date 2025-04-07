
import { useMemo } from "react";
import { useTheme } from "@/context/ThemeContext";

interface HeroSkillProps {
  text: string;
  x: number;
  y: number;
  delay: number;
  index: number;
}

const HeroSkill = ({ text, x, y, delay, index }: HeroSkillProps) => {
  const { theme } = useTheme();
  
  // Calculate y-offset based on a sine wave for floating effect
  const yOffset = useMemo(() => {
    return Math.sin(Date.now() * 0.001 + index) * 10;
  }, [index]);

  return (
    <div
      className="absolute z-20 text-foreground font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm animate-float select-none opacity-70"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        transform: `translate(-50%, -50%) translateY(${yOffset}px)`,
        transition: "transform 2s ease-in-out",
      }}
    >
      {text}
    </div>
  );
};

export default HeroSkill;
