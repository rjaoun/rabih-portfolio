
import { useEffect, useState, RefObject } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "horizontal" | "vertical" | "both";
  reverse?: boolean;
}

export const useParallax = <T extends HTMLElement>(
  ref: RefObject<T>,
  options: ParallaxOptions = {}
) => {
  const { speed = 0.1, direction = "vertical", reverse = false } = options;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const isVisible = 
        rect.top < window.innerHeight && 
        rect.bottom > 0;
      
      setIsInView(isVisible);

      if (!isVisible) return;

      // Calculate how far the element is from the middle of the viewport
      const distanceFromCenter = (rect.top + rect.height / 2) - (window.innerHeight / 2);
      
      // Calculate the movement based on direction
      let xMovement = 0;
      let yMovement = 0;

      if (direction === "horizontal" || direction === "both") {
        xMovement = distanceFromCenter * speed * (reverse ? -1 : 1);
      }

      if (direction === "vertical" || direction === "both") {
        yMovement = distanceFromCenter * speed * (reverse ? -1 : 1);
      }

      setPosition({ x: xMovement, y: yMovement });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, speed, direction, reverse]);

  return { position, isInView };
};

export default useParallax;
