
import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useCursor } from "@/context/CursorContext";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowUpRight, 
  Linkedin, 
  Instagram, 
  Github,
  X,
  Download
} from "lucide-react";

const Contact = () => {
  const { setIsHovered } = useCursor();
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleDownloadResume = () => {
    // Create a downloadable resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add this file to your public folder
    link.download = 'Rabih-Aoun-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Downloaded!",
      description: "Thanks for your interest in my work.",
    });
  };

  const socials = [
    { name: "X", url: "https://x.com/RaYz0o0o0o", icon: <X size={16} /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/rabih-aoun", icon: <Linkedin size={16} /> },
    { name: "Instagram", url: "https://www.instagram.com/rjaoun", icon: <Instagram size={16} /> },
    { name: "GitHub", url: "https://github.com/rjaoun", icon: <Github size={16} /> },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-foreground/10 text-sm font-medium mb-4 animate-pulse-slow">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Let's start a project together
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project that needs magic? Drop me a line - I will get back within 24hrs
            </p>
          </div>

          {/* Resume Download Button */}
          <div className="text-center mb-8">
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Download size={16} className="group-hover:animate-bounce" />
              Download Resume
            </button>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-8 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background transition-all duration-200 focus:scale-[1.02] hover:border-primary/50"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background transition-all duration-200 focus:scale-[1.02] hover:border-primary/50"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="bg-background resize-none transition-all duration-200 focus:scale-[1.02] hover:border-primary/50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg disabled:transform-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin"></div>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>

          <div className="mt-16">
            <h3 className="text-xl font-medium text-center mb-6">
              Connect with me
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-md group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="group-hover:rotate-12 transition-transform duration-200">
                    {social.icon}
                  </span>
                  {social.name}
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
