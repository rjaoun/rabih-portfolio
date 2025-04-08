
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useCursor } from "@/context/CursorContext";
import useParallax from "@/hooks/useParallax";

const About = () => {
  const { setIsHovered } = useCursor();
  const imageRef = useRef<HTMLDivElement>(null);
  const { position } = useParallax(imageRef, { speed: 0.05 });
  
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skills = [
    "Interactive Design",
    "Three.js",
    "WebGL",
    "UX/UI Design",
    "Frontend Development",
    "Creative Coding",
    "Animation",
    "Responsive Design",
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div
            ref={imageRef}
            className="relative h-[500px] overflow-hidden rounded-lg order-2 lg:order-1"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-accent opacity-70 mix-blend-multiply z-10"></div>
            <img 
              src="/lovable-uploads/323ace5a-e8d0-4e7f-a439-699a48ddaebd.png" 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          <div 
            ref={textRef}
            className={`space-y-6 order-1 lg:order-2 transition-all duration-1000 ${
              textInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-foreground/10 text-sm font-medium">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-medium">
              Designer & developer focused on crafting exceptional digital experiences
            </h2>
            <p className="text-muted-foreground">
              I'm a digital designer and developer with over 5 years of experience creating immersive digital experiences. I specialize in blending creative design with technical implementation to build projects that stand out.
            </p>
            <p className="text-muted-foreground">
              My approach focuses on innovation, attention to detail, and creating meaningful connections through digital interfaces. I believe in pushing boundaries while maintaining usability and accessibility.
            </p>
            
            <div className="pt-4">
              <h3 className="text-lg font-medium mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-background rounded-full text-sm border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-foreground text-background rounded-md transition-all hover:bg-foreground/90 inline-flex items-center justify-center transform hover:scale-105 hover:-translate-y-1 hover:shadow-md"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
