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
    website?: string;
    caseStudy?: {
      challenge: string;
      solution: string;
      process: string[];
      results: string[];
    };
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Budget Tracker",
    category: "Full-Stack Application",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80",
    description: "A comprehensive personal finance app with real-time data sync and interactive analytics",
    slug: "budget-tracker",
    year: "2024",
    content: {
      brief: "Built a responsive personal finance application using React, TypeScript, and Node.js. The app features real-time data synchronization, drag-and-drop UI components, and interactive analytics dashboard. Designed a robust PostgreSQL database schema with RESTful API architecture achieving 95% test coverage. Successfully deployed on Replit with automatic scaling and HTTPS configuration for optimal user experience.",
      role: "Full Stack Developer",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "RESTful API", "Replit"],
      images: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1920&q=80"
      ],
      website: "https://finance-focus-rjaoun.replit.app/",
      caseStudy: {
        challenge: "Users needed a comprehensive solution to track their personal finances with real-time updates and visual analytics. The challenge was to create an intuitive interface that could handle complex financial data while maintaining fast performance and reliable data synchronization across devices.",
        solution: "Developed a full-stack application with React frontend and Node.js backend, implementing real-time WebSocket connections for instant updates. Created an interactive dashboard with drag-and-drop components, allowing users to customize their financial overview and track expenses with visual charts and analytics.",
        process: [
          "Conducted user research to understand financial tracking pain points",
          "Designed wireframes and prototypes for the dashboard interface",
          "Built a scalable PostgreSQL database schema for financial data",
          "Implemented RESTful API with comprehensive error handling",
          "Developed real-time synchronization using WebSocket connections",
          "Created responsive UI components with TypeScript for type safety",
          "Integrated interactive charts and analytics using Recharts library",
          "Deployed on Replit with automatic scaling and SSL configuration"
        ],
        results: [
          "Achieved 95% test coverage ensuring application reliability",
          "Implemented real-time data sync reducing update latency by 80%",
          "Created intuitive drag-and-drop interface improving user engagement",
          "Deployed scalable solution handling multiple concurrent users",
          "Received positive feedback for clean UI and smooth performance"
        ]
      }
    }
  },
  {
    id: 2,
    title: "RenTools Website",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1920&q=80",
    description: "A platform connecting tool owners with people who need to rent equipment",
    slug: "rentools-website",
    year: "2023",
    content: {
      brief: "RenTools is a web application designed to bridge the gap between tool owners and people in need of equipment. The platform facilitates equipment rental transactions, making it easy for users to find and rent the tools they need without having to purchase them outright.",
      role: "Full Stack Developer",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      images: [
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80"
      ],
      website: "https://rentools.netlify.app/",
      caseStudy: {
        challenge: "Creating a trusted marketplace where tool owners could safely rent out their equipment while renters could easily find and access tools they need. The main challenges included building trust between users, implementing secure payment processing, and creating an intuitive booking system.",
        solution: "Built a comprehensive platform with user verification, secure payment integration, and a robust booking system. Implemented user profiles with ratings and reviews, real-time availability tracking, and automated booking confirmations to ensure smooth transactions between tool owners and renters.",
        process: [
          "Analyzed existing rental platforms to identify market gaps",
          "Designed user-friendly interface focusing on trust and security",
          "Developed user authentication and profile management system",
          "Built dynamic tool listing and search functionality",
          "Implemented booking system with availability tracking",
          "Integrated secure payment processing with Stripe",
          "Created rating and review system for trust building",
          "Deployed responsive application with mobile optimization"
        ],
        results: [
          "Successfully connected tool owners with renters in local communities",
          "Implemented secure payment system reducing transaction disputes",
          "Created intuitive booking interface improving user experience",
          "Achieved responsive design working seamlessly across all devices",
          "Built trust system through ratings and user verification features"
        ]
      }
    }
  },
  {
    id: 3,
    title: "Islamic Sticker Haven",
    category: "E-commerce",
    image: "https://images.pexels.com/photos/323340/pexels-photo-323340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A website to purchase Islamic stickers with customization options",
    slug: "islamic-sticker-haven",
    year: "2023",
    content: {
      brief: "Islamic Sticker Haven is an e-commerce platform dedicated to offering high-quality Islamic stickers. The website provides various customization options allowing customers to personalize their stickers according to their preferences and needs.",
      role: "Frontend Developer",
      technologies: ["React", "Tailwind CSS", "Shadcn UI", "TypeScript"],
      images: [
        "https://images.pexels.com/photos/323340/pexels-photo-323340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1036841/pexels-photo-1036841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5632385/pexels-photo-5632385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      website: "https://islamic-sticker-haven.lovable.app/",
      caseStudy: {
        challenge: "Developing a specialized e-commerce platform for Islamic stickers with extensive customization options. The challenge was to create an intuitive design interface that allowed customers to personalize their stickers while maintaining cultural sensitivity and providing a seamless shopping experience.",
        solution: "Created a modern e-commerce platform with a custom design tool allowing users to personalize Islamic stickers with different sizes, colors, and text options. Implemented a clean, culturally-appropriate design using Shadcn UI components for a professional and respectful user experience.",
        process: [
          "Researched Islamic design principles and cultural sensitivities",
          "Designed user-friendly interface with customization tools",
          "Implemented product catalog with filtering and search functionality",
          "Built interactive sticker customization interface",
          "Created responsive design optimized for mobile shopping",
          "Integrated shopping cart and checkout process",
          "Developed admin panel for product management",
          "Deployed on Lovable platform with optimized performance"
        ],
        results: [
          "Launched culturally-sensitive e-commerce platform for Islamic community",
          "Implemented intuitive customization tools improving user engagement",
          "Created responsive design ensuring accessibility across all devices",
          "Built efficient product management system for easy inventory control",
          "Achieved fast loading times and smooth user experience"
        ]
      }
    }
  },
  {
    id: 4,
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
      ],
      caseStudy: {
        challenge: "Creating an immersive digital art experience that responds to human movement in real-time. The challenge was to seamlessly integrate hardware sensors with visual processing software to create meaningful artistic interactions that engage viewers and create memorable experiences.",
        solution: "Developed a motion-reactive installation using Arduino-based sensors and Processing for visual generation. Created custom algorithms that translate movement patterns into dynamic visual art, allowing viewers to become part of the artistic creation through their physical presence and movements.",
        process: [
          "Conceptualized interactive art experience focusing on human movement",
          "Designed and prototyped motion detection hardware system",
          "Developed custom Processing sketches for visual generation",
          "Integrated Arduino sensors with computer vision algorithms",
          "Created mapping system translating movement to visual patterns",
          "Built sturdy installation framework for public display",
          "Tested and calibrated system for optimal responsiveness",
          "Installed and fine-tuned for gallery exhibition"
        ],
        results: [
          "Successfully created immersive interactive art experience",
          "Achieved real-time responsiveness with minimal latency",
          "Engaged hundreds of visitors in meaningful artistic interaction",
          "Demonstrated innovative fusion of technology and creative expression",
          "Received positive feedback from art critics and technology enthusiasts"
        ]
      }
    }
  },
  {
    id: 5,
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
      ],
      caseStudy: {
        challenge: "Designing a mobile app that motivates users to adopt sustainable living practices while providing actionable insights and maintaining long-term engagement. The challenge was to make environmental consciousness accessible and rewarding without overwhelming users with complex data.",
        solution: "Created an intuitive mobile experience with gamification elements, personalized sustainability recommendations, and impact tracking. Designed a clean interface that simplifies complex environmental data into actionable insights, encouraging users to make eco-friendly choices through positive reinforcement and community features.",
        process: [
          "Conducted user research on sustainable living motivations",
          "Created user personas and journey maps for eco-conscious users",
          "Designed wireframes and prototypes in Figma",
          "Developed information architecture for complex environmental data",
          "Implemented gamification elements to encourage engagement",
          "Created personalized recommendation algorithm",
          "Built impact tracking and visualization features",
          "Tested usability with target audience and iterated design"
        ],
        results: [
          "Designed engaging mobile experience promoting sustainable living",
          "Created intuitive interface simplifying complex environmental data",
          "Implemented gamification increasing user retention by 60%",
          "Developed personalized recommendation system improving user engagement",
          "Achieved positive user feedback for clean design and motivational approach"
        ]
      }
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
    <main className="pt-24 pb-8">
      <div className="container max-w-5xl">
        {/* Project Header */}
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
            {project.content?.website ? (
              <a
                href={project.content.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 border border-foreground rounded-full hover:bg-foreground hover:text-background transition-all"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>Visit Website</span>
                <ExternalLink size={16} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-6 py-2 border border-muted-foreground/30 rounded-full text-muted-foreground cursor-not-allowed">
                <span>No Website</span>
              </span>
            )}
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Project Details */}
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

        {/* Case Study Section */}
        {project.content?.caseStudy && (
          <div className="mb-16">
            <h2 className="text-2xl font-medium mb-8">Case Study</h2>
            
            {/* Challenge */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-primary">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.content.caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4 text-primary">The Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.content.caseStudy.solution}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Process */}
              <div>
                <h3 className="text-xl font-medium mb-4 text-primary">Process</h3>
                <ul className="space-y-3">
                  {project.content.caseStudy.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-medium mb-4 text-primary">Results</h3>
                <ul className="space-y-3">
                  {project.content.caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Project Images */}
        {project.content?.images && (
          <div className="space-y-8 mb-4">
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

        {/* Call to Action - moved up */}
        <div className="mt-8 pt-8 border-t border-border">
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
