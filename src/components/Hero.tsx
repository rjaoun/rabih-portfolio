
import { useRef, useEffect, useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import useParallax from "@/hooks/useParallax";
import { useCursor } from "@/context/CursorContext";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { setIsHovered } = useCursor();
  const { position } = useParallax(imageRef, { speed: 0.05, reverse: true });
  const [skills] = useState([
    { text: "React", x: 10, y: 20, delay: 0.5 },
    { text: "JavaScript", x: 70, y: 15, delay: 0.7 },
    { text: "TypeScript", x: 30, y: 70, delay: 0.9 },
    { text: "CSS", x: 20, y: 85, delay: 1.1 },
    { text: "HTML5", x: 85, y: 30, delay: 1.3 },
    { text: "UI/UX", x: 50, y: 40, delay: 1.5 },
    { text: "Figma", x: 75, y: 60, delay: 1.7 },
    { text: "Tailwind", x: 40, y: 10, delay: 1.9 },
    { text: "Responsive", x: 10, y: 50, delay: 2.1 },
    { text: "Next.js", x: 60, y: 80, delay: 2.3 },
  ]);

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

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative bg-gradient-to-br from-background to-secondary"
      id="hero"
    >
      {/* Floating skill words */}
      {skills.map((skill, index) => (
        <div
          key={index}
          className="absolute z-20 text-foreground font-medium px-3 py-1 rounded-full bg-primary/30 backdrop-blur-sm animate-float select-none"
          style={{
            left: `${skill.x}%`,
            top: `${skill.y}%`,
            animationDelay: `${skill.delay}s`,
            transform: `translate(-50%, -50%) translateY(${Math.sin(Date.now() * 0.001 + index) * 10}px)`,
            transition: "transform 2s ease-in-out",
          }}
        >
          {skill.text}
        </div>
      ))}

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
        <div className="space-y-6 animate-on-scroll opacity-0 delay-100 bg-background/50 backdrop-blur-sm p-6 rounded-lg">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/90 text-background text-sm font-medium">
            Digital Designer & Developer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground">
            <AnimatedText
              text="Web Development & Design Solutions"
              tag="span"
              duration={20}
              once={true}
            />
          </h1>
          <p className="text-foreground text-lg max-w-lg font-medium">
            Crafting exceptional digital experiences with modern technologies and design principles that engage your audience and elevate your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-background rounded-md transition-all hover:bg-primary/90 inline-flex items-center justify-center font-medium"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-foreground bg-background/10 rounded-md transition-all hover:bg-background/20 inline-flex items-center justify-center text-foreground font-medium"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Contact Me
            </a>
          </div>
        </div>

        <div
          ref={imageRef}
          className="relative h-[500px] w-full overflow-hidden rounded-lg animate-on-scroll opacity-0 delay-300"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/40 mix-blend-multiply z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 project-image bg-secondary/50"
          ></div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a
          href="#projects"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground bg-background/20 backdrop-blur-sm text-foreground"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
