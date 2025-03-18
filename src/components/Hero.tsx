
import { useRef, useEffect } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import useParallax from "@/hooks/useParallax";
import { useCursor } from "@/context/CursorContext";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { setIsHovered } = useCursor();
  const { position } = useParallax(imageRef, { speed: 0.05, reverse: true });

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
      className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative"
      id="hero"
    >
      {/* Full-width banner image overlay - Adjusted opacity and contrast */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-foreground/40 mix-blend-multiply z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')",
            backgroundPosition: "center 30%",
            filter: "brightness(1.1) contrast(1.1)"
          }}
        ></div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
        <div className="space-y-6 animate-on-scroll opacity-0 delay-100 bg-background/10 backdrop-blur-sm p-6 rounded-lg">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/90 text-background text-sm font-medium">
            Digital Designer & Developer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white drop-shadow-md">
            <AnimatedText
              text="Web Development & Design Solutions"
              tag="span"
              duration={20}
            />
          </h1>
          <p className="text-white text-lg max-w-lg drop-shadow-md font-medium">
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
              className="px-8 py-3 border border-white bg-white/10 rounded-md transition-all hover:bg-white/20 inline-flex items-center justify-center text-white font-medium"
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
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 project-image"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')",
            }}
          ></div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a
          href="#projects"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-background/20 backdrop-blur-sm text-white"
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
