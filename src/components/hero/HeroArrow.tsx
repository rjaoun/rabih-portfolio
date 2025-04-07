
import { useCursor } from "@/context/CursorContext";
import { useTheme } from "@/context/ThemeContext";
import { ArrowDown } from "lucide-react";

const HeroArrow = () => {
  const { theme } = useTheme();
  const { setIsHovered } = useCursor();

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
      <a
        href="#projects"
        className={`flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-sm ${
          theme === "light"
            ? "border border-gray-400 bg-gray-100/20 text-gray-800"
            : "border border-foreground bg-background/20 text-foreground"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ArrowDown size={20} />
      </a>
    </div>
  );
};

export default HeroArrow;
