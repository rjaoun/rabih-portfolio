
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
      className="min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      id="hero"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="space-y-6 animate-on-scroll opacity-0 delay-100">
          <div className="inline-block px-4 py-1 rounded-full bg-muted text-sm font-medium">
            Digital Designer & Developer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            <AnimatedText
              text="Creating digital experiences that amaze and inspire."
              tag="span"
              duration={20}
            />
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg">
            I design and build digital experiences with meticulous attention to
            detail, creating visually stunning interfaces that connect with
            people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-foreground text-background rounded-md transition-all hover:bg-foreground/90 inline-flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-foreground rounded-md transition-all hover:bg-foreground/5 inline-flex items-center justify-center"
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
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-accent opacity-70 mix-blend-multiply z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 project-image"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')",
            }}
          ></div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#projects"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-foreground"
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
