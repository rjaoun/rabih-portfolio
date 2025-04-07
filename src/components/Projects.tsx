import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useCursor } from "@/context/CursorContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
	id: number;
	title: string;
	category: string;
	image: string;
	description: string;
	slug: string;
	year: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: "Renting Tools website - 2025",
		category: "Interactive Experience",
		image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1920&q=80",
		description:
			"A fully responsive website that Connects with tool owners in your area and rent the equipment you need for your next project",
		slug: "RenTools-portfolio",
		year: "2025",
	},
	{
		id: 2,
		title: "Lunar Agency Website",
		category: "Web Design",
		image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
		description:
			"A minimalist website design for a creative agency with focus on user experience",
		slug: "lunar-agency-website",
		year: "2022",
	},
	{
		id: 3,
		title: "Digital Art Installation",
		category: "Installation",
		image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
		description:
			"An interactive art installation that responds to viewer movements",
		slug: "digital-art-installation",
		year: "2022",
	},
	{
		id: 4,
		title: "Ecosystem Mobile App",
		category: "Mobile Design",
		image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
		description:
			"A sustainable living companion app designed for eco-conscious users",
		slug: "ecosystem-mobile-app",
		year: "2021",
	},
];

const Projects = () => {
	const { setIsHovered } = useCursor();
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const filteredProjects = activeCategory
		? projects.filter((project) => project.category === activeCategory)
		: projects;

	const categories = Array.from(
		new Set(projects.map((project) => project.category))
	);

	return (
		<section
			id="projects"
			className="py-20 md:py-32 overflow-hidden max-w-[1440px] mx-auto"
		>
			<div className="container">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
					<div>
						<h2 className="text-3xl md:text-4xl font-medium mb-4">
							Selected Projects
						</h2>
						<p className="text-muted-foreground max-w-xl">
							A collection of work I've crafted with attention to detail and
							passion for creating exceptional digital experiences.
						</p>
					</div>

					<div className="mt-6 md:mt-0 flex flex-wrap gap-2">
						<button
							className={`px-4 py-2 text-sm rounded-full transition-all ${
								activeCategory === null
									? "bg-foreground text-background"
									: "bg-muted hover:bg-muted/80"
							}`}
							onClick={() => setActiveCategory(null)}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							All
						</button>
						{categories.map((category) => (
							<button
								key={category}
								className={`px-4 py-2 text-sm rounded-full transition-all ${
									activeCategory === category
										? "bg-foreground text-background"
										: "bg-muted hover:bg-muted/80"
								}`}
								onClick={() => setActiveCategory(category)}
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				<div
					ref={ref}
					className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
				>
					{filteredProjects.map((project, index) => (
						<Link
							to={`/project/${project.slug}`}
							key={project.id}
							className={`project-card group rounded-lg overflow-hidden bg-card border border-border/50 transition-all ${
								inView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-10"
							}`}
							style={{
								transitionDelay: `${index * 100}ms`,
							}}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<div className="relative overflow-hidden aspect-video">
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<div
									className="w-full h-full bg-cover bg-center project-image transition-transform duration-700"
									style={{ backgroundImage: `url(${project.image})` }}
								></div>
							</div>
							<div className="p-6 md:p-8">
								<div className="flex justify-between items-start mb-3">
									<div>
										<span className="text-sm text-muted-foreground mb-2 block">
											{project.category} — {project.year}
										</span>
										<h3 className="text-xl font-medium">{project.title}</h3>
									</div>
									<span className="p-2 rounded-full bg-muted opacity-0 group-hover:opacity-100 transition-opacity">
										<ArrowRight size={16} />
									</span>
								</div>
								<p className="text-muted-foreground">{project.description}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
