
import { useCursor } from "@/context/CursorContext";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const { setIsHovered } = useCursor();
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-medium">Bruno.</h3>
            <p className="text-muted-foreground mt-2">
              Crafting digital experiences that inspire.
            </p>
          </div>
          
          <div className="space-y-6 md:space-y-0 md:flex md:items-center md:gap-10">
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#projects" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Projects
              </a>
              <a 
                href="#about" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Contact
              </a>
            </div>
            
            <a 
              href="#hero" 
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-muted transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {year} Bruno Simon. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Built with ♥️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
