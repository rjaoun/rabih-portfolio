
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { CursorProvider } from "@/context/CursorContext";
import { animateOnScroll, useSmoothScroll } from "@/lib/animations";

const Index = () => {
  useSmoothScroll();

  useEffect(() => {
    const observer = animateOnScroll();
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <CursorProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </CursorProvider>
  );
};

export default Index;
