
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  tag?: keyof JSX.IntrinsicElements;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  delay = 0,
  duration = 50,
  tag: Tag = "div",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else {
          if (!once) {
            setIsVisible(false);
            setDisplayedText("");
            setIsAnimationComplete(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [once]);

  useEffect(() => {
    if (!isVisible) return;

    let intervalDelay = duration;
    let currentIndex = 0;
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
        
        if (currentIndex >= text.length) {
          clearInterval(interval);
          setIsAnimationComplete(true);
        }
      }, intervalDelay);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [text, isVisible, delay, duration]);

  // If animation is complete or we're not visible, show full text
  const textToShow = isAnimationComplete || !isVisible ? text : displayedText;

  return (
    <div ref={elementRef}>
      <Tag className={cn("", className)}>
        {textToShow}
        {isVisible && !isAnimationComplete && (
          <span className={`inline-block w-0.5 h-5 animate-pulse-slow ml-0.5 ${
            theme === 'light' ? 'bg-gray-800' : 'bg-foreground'
          }`}>
            &nbsp;
          </span>
        )}
      </Tag>
    </div>
  );
};

export default AnimatedText;
