
import { useRef, useEffect, useState } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import useParallax from "@/hooks/useParallax";
import { useCursor } from "@/context/CursorContext";
import { ArrowDown } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Hero = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const { setIsHovered } = useCursor();
	const { theme } = useTheme();
	const { position } = useParallax(imageRef, { speed: 0.05, reverse: true });
	const [showFixedArrow, setShowFixedArrow] = useState(false);
	const [skills] = useState([
		{ text: "React", x: 10, y: 20, delay: 0.5 },
		{ text: "JavaScript", x: 70, y: 25, delay: 0.7 },
		{ text: "TypeScript", x: 40, y: 70, delay: 0.9 },
		{ text: "CSS", x: 20, y: 40, delay: 1.1 },
		{ text: "HTML5", x: 85, y: 30, delay: 1.3 },
		{ text: "UI/UX", x: 50, y: 40, delay: 1.5 },
		{ text: "Figma", x: 75, y: 35, delay: 1.7 },
		{ text: "Tailwind", x: 40, y: 20, delay: 1.9 },
		{ text: "Responsive", x: 10, y: 48, delay: 2.1 },
		{ text: "Next.js", x: 60, y: 80, delay: 2.3 },
		{ text: "Adobe XD", x: 55, y: 60, delay: 2.1 },
		{ text: "Git", x: 80, y: 70, delay: 2.1 },
	]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate-fade-in");
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll(".animate-on-scroll").forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (heroRef.current) {
				const heroBottom = heroRef.current.getBoundingClientRect().bottom;
				const windowHeight = window.innerHeight;
				
				// Show fixed arrow when we scroll past the hero section
				setShowFixedArrow(heroBottom < windowHeight * 0.5);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section
			ref={heroRef}
			className={`min-h-screen flex items-center justify-center pt-20 overflow-hidden relative ${
				theme === "light"
					? "bg-gradient-to-br from-[#51e2f5]/80 to-[#51e2f5]/50"
					: "bg-gradient-to-br from-background to-secondary"
			}`}
			id="hero"
		>
			{/* Floating skill words */}
			{skills.map((skill, index) => (
				<div
					key={index}
					className="absolute z-20 text-foreground font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm animate-float select-none opacity-70"
					style={{
						left: `${skill.x}%`,
						top: `${skill.y}%`,
						animationDelay: `${skill.delay}s`,
						transform: `translate(-50%, -50%) translateY(${
							Math.sin(Date.now() * 0.001 + index) * 10
						}px)`,
						transition: "transform 2s ease-in-out",
					}}
				>
					{skill.text}
				</div>
			))}

			<div className="container mx-auto px-6 relative z-10">
				<div
					className={`space-y-6 p-8 rounded-lg ${
						theme === "light" ? "bg-white/80 shadow-md" : "bg-background/50"
					} backdrop-blur-sm bg-no-repeat bg-cover bg-center bg-blend-overlay`}
					style={{ backgroundImage: "url('/code-background.jpg')" }}
				>
					<div className="inline-block px-4 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
						Digital Designer & Developer
					</div>
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
						<AnimatedText
							text="Web Development & Design Solutions"
							tag="span"
							duration={20}
							once={true}
							className={
								theme === "light" ? "text-gray-800" : "text-foreground"
							}
						/>
					</h1>
					<p
						className={`text-lg max-w-lg font-medium ${
							theme === "light" ? "text-gray-700" : "text-foreground"
						}`}
					>
						Crafting exceptional digital experiences with modern technologies
						and design principles that engage your audience and elevate your
						brand.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 pt-4">
						<a
							href="#projects"
							className="px-8 py-3 bg-primary text-primary-foreground rounded-md transition-all hover:bg-primary/90 inline-flex items-center justify-center font-medium"
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							View Projects
						</a>
						<a
							href="#contact"
							className={`px-8 py-3 border rounded-md transition-all inline-flex items-center justify-center font-medium ${
								theme === "light"
									? "border-gray-400 bg-gray-100/50 hover:bg-gray-200/70 text-gray-800"
									: "border-foreground bg-background/10 hover:bg-background/20 text-foreground"
							}`}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							Contact Me
						</a>
					</div>
				</div>
			</div>

			{/* Regular arrow in the hero section */}
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
				<a
					href="#projects"
					className={`flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-sm ${
						theme === "light"
							? "border border-gray-400 bg-gray-100/20 text-gray-800"
							: "border border-foreground bg-background/20 text-foreground"
					}`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<ArrowDown size={20} />
				</a>
			</div>

			{/* Fixed arrow that appears when scrolling past hero */}
			{showFixedArrow && (
				<div className="fixed bottom-6 right-6 z-50 transition-all duration-300 opacity-80 hover:opacity-100">
					<a
						href="#projects"
						className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg backdrop-blur-md transition-transform hover:scale-110 hover:-translate-y-1 ${
							theme === "light"
								? "bg-primary/90 text-white border border-primary"
								: "bg-primary text-primary-foreground border border-primary/30"
						}`}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<ArrowDown size={24} />
					</a>
				</div>
			)}
		</section>
	);
};

export default Hero;
