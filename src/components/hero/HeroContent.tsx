
import { useCursor } from "@/context/CursorContext";
import { useTheme } from "@/context/ThemeContext";
import { useIsMobile } from "@/hooks/use-mobile";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowDown } from "lucide-react";

const HeroContent = () => {
  const { theme } = useTheme();
  const { setIsHovered } = useCursor();
  const isMobile = useIsMobile();

  return (
    <div className="w-full md:w-1/2">
      <div
        className={`space-y-6 p-8 rounded-lg ${
          theme === "light" ? "bg-white/80 shadow-md" : "bg-background/50"
        } backdrop-blur-sm bg-[url('/code-background.jpg')] bg-cover bg-center bg-blend-overlay`}
      >
        <div className="inline-block px-4 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
          Digital Designer & Developer
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
          <AnimatedText
            text="Web Development & Design Solutions"
            tag="span"
            duration={20}
            once={true}
            className={
              theme === "light" ? "text-gray-800" : "text-foreground"
            }
          />
        </h1>
        <p
          className={`text-lg max-w-lg font-medium ${
            theme === "light" ? "text-gray-700" : "text-foreground"
          }`}
        >
          Crafting exceptional digital experiences with modern technologies
          and design principles that engage your audience and elevate your
          brand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-md transition-all hover:bg-primary/90 inline-flex items-center justify-center font-medium transform transition-transform hover:scale-105 hover:-translate-y-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={`px-8 py-3 border rounded-md transition-all inline-flex items-center justify-center font-medium transform transition-transform hover:scale-105 hover:-translate-y-1 ${
              theme === "light"
                ? "border-gray-400 bg-gray-100/50 hover:bg-gray-200/70 text-gray-800"
                : "border-foreground bg-background/10 hover:bg-background/20 text-foreground transform transition-transform hover:scale-105 hover:-translate-y-1"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Contact Me
          </a>
          
          {/* Arrow button for mobile - only shown on mobile */}
          {isMobile && (
            <a
              href="#projects"
              className={`w-10 h-10 mx-auto flex items-center justify-center rounded-full backdrop-blur-sm ${
                theme === "light"
                  ? "border border-gray-400 bg-gray-100/20 text-gray-800"
                  : "border border-foreground bg-background/20 text-foreground"
              } animate-bounce`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <ArrowDown size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
