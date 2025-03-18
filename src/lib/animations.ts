
import { useEffect } from "react";

export const fadeIn = (element: HTMLElement, duration: number = 700) => {
  if (!element) return;
  
  element.style.opacity = "0";
  element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
  element.style.transform = "translateY(20px)";
  
  // Force a reflow to make sure styles are applied before changing them
  void element.offsetWidth;
  
  element.style.opacity = "1";
  element.style.transform = "translateY(0)";
};

export const fadeOut = (element: HTMLElement, duration: number = 700) => {
  if (!element) return;
  
  element.style.opacity = "1";
  element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
  element.style.transform = "translateY(0)";
  
  // Force a reflow to make sure styles are applied before changing them
  void element.offsetWidth;
  
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
};

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (!closestAnchor) return;
      
      const href = closestAnchor.getAttribute('href');
      
      if (!href || !href.startsWith('#')) return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (!targetElement) return;
      
      e.preventDefault();
      
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
};

export const animateOnScroll = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => {
    el.classList.add('opacity-0');
    observer.observe(el);
  });
  
  return observer;
};
