
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CursorProvider, useCursor } from "@/context/CursorContext";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  slug: string;
  year: string;
  content?: {
    brief: string;
    role: string;
    technologies: string[];
    images: string[];
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Immersive 3D Portfolio",
    category: "Interactive Experience",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "A fully interactive 3D portfolio experience built with Three.js and WebGL",
    slug: "immersive-3d-portfolio",
    year: "2023",
    content: {
      brief: "This project showcases a fully interactive 3D portfolio experience where users can navigate through a virtual space to explore different projects and information. The goal was to create an innovative and memorable way to present creative work.",
      role: "Designer & Developer",
      technologies: ["Three.js", "WebGL", "JavaScript", "GLSL", "React"],
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      ]
    }
  },
  {
    id: 2,
    title: "Lunar Agency Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "A minimalist website design for a creative agency with focus on user experience",
    slug: "lunar-agency-website",
    year: "2022",
    content: {
      brief: "Lunar Agency needed a website that reflected their minimalist aesthetic while providing an intuitive user experience. The design focused on clean layouts, subtle animations, and a refined color palette to convey the agency's sophisticated approach.",
      role: "UI/UX Designer",
      technologies: ["Figma", "React", "GSAP", "Tailwind CSS"],
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      ]
    }
  },
  {
    id: 3,
    title: "Digital Art Installation",
    category: "Installation",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "An interactive art installation that responds to viewer movements",
    slug: "digital-art-installation",
    year: "2022",
    content: {
      brief: "This digital art installation uses motion sensors to detect viewer movements and translates them into dynamic visual displays. The project aims to blur the line between the physical and digital world, creating a unique interactive experience.",
      role: "Creative Developer",
      technologies: ["Processing", "Arduino", "Computer Vision", "Custom Hardware"],
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      ]
    }
  },
  {
    id: 4,
    title: "Ecosystem Mobile App",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "A sustainable living companion app designed for eco-conscious users",
    slug: "ecosystem-mobile-app",
    year: "2021",
    content: {
      brief: "Ecosystem is a mobile application designed to help users make more sustainable choices in their daily lives. The app provides personalized recommendations, tracks environmental impact, and connects users with eco-friendly products and services.",
      role: "Mobile UX Designer",
      technologies: ["Swift", "Kotlin", "Figma", "Firebase"],
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1518770660439-4636190af475"
      ]
    }
  }
];

const ProjectNavigation = () => {
  const { setIsHovered } = useCursor();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12">
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full border border-foreground group-hover:bg-foreground group-hover:text-background transition-all">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>
    </header>
  );
};

const ProjectContent = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const { setIsHovered } = useCursor();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setIsLoading(true);
    const timer = setTimeout(() => {
      const foundProject = projects.find((p) => p.slug === slug);
      if (foundProject) {
        setProject(foundProject);
      } else {
        toast({
          title: "Project not found",
          description: "The requested project could not be found.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [slug, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-muted rounded-full border-t-foreground animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-6">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="px-6 py-2 bg-foreground text-background rounded-md inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-20">
      <div className="container max-w-5xl">
        <div className="mb-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-sm text-muted-foreground block mb-2">
                {project.category} — {project.year}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">
                {project.title}
              </h1>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-2 border border-foreground rounded-full hover:bg-foreground hover:text-background transition-all"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span>Visit Website</span>
              <ExternalLink size={16} />
            </a>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {project.description}
          </p>
        </div>

        <div className="mb-16">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {project.content && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-xl font-medium mb-4">Brief</h2>
              <p className="text-muted-foreground">{project.content.brief}</p>
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Role</h3>
                <p className="text-muted-foreground">{project.content.role}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.content.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {project.content?.images && (
          <div className="space-y-8">
            {project.content.images.map((image, index) => (
              <div
                key={index}
                className="w-full overflow-hidden rounded-lg animate-on-scroll opacity-0"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="text-xl font-medium">
              Interested in working together?
            </h2>
            <Link
              to="/#contact"
              className="px-8 py-3 bg-foreground text-background rounded-md transition-all hover:bg-foreground/90 inline-flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CursorProvider>
      <div className="min-h-screen">
        <ProjectNavigation />
        <ProjectContent />
      </div>
    </CursorProvider>
  );
};

export default ProjectPage;
