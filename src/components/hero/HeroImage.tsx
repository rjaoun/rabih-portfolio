
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import useParallax from "@/hooks/useParallax";

interface HeroImageProps {
  imageSrc: string;
}

const HeroImage = ({ imageSrc }: HeroImageProps) => {
  const { theme } = useTheme();
  const imageRef = useRef<HTMLDivElement>(null);
  const { position } = useParallax(imageRef, { speed: 0.05, reverse: true });

  return (
    <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
      <div 
        className="relative"
        ref={imageRef}
        style={{
          transform: `translateY(${position.y * 0.5}px)`,
        }}
      >
        <img 
          src={imageSrc} 
          alt="Profile" 
          className={`w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-center ${
            theme === "light" ? "border-4 border-white shadow-xl" : "border-4 border-primary/30"
          }`}
        />
      </div>
    </div>
  );
};

export default HeroImage;
