
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

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
  const elementRef = useRef<HTMLDivElement>(null);

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
        }
      }, intervalDelay);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [text, isVisible, delay, duration]);

  return (
    <div ref={elementRef}>
      <Tag className={cn("", className)}>
        {displayedText}
        <span className="inline-block w-0.5 h-5 bg-foreground animate-pulse-slow ml-0.5">
          &nbsp;
        </span>
      </Tag>
    </div>
  );
};

export default AnimatedText;
