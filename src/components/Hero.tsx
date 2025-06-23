
import { useRef, useEffect } from "react";
import AnimatedText from "@/components/ui/AnimatedText";
import useParallax from "@/hooks/useParallax";
import { useCursor } from "@/context/CursorContext";
import { ArrowDown } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const { setIsHovered } = useCursor();
	const { theme } = useTheme();
	const { position } = useParallax(imageRef, { speed: 0.05, reverse: true });
	const isMobile = useIsMobile();

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
			<div className="container mx-auto px-6 relative z-10">
				<div
					className={`space-y-6 p-8 rounded-lg ${
						theme === "light" ? "bg-white/80 shadow-md" : "bg-background/50"
					} backdrop-blur-sm bg-[url('/code-background.jpg')] bg-cover bg-center bg-blend-overlay`}
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
							className="px-8 py-3 bg-primary text-primary-foreground rounded-md transition-all hover:bg-primary/90 inline-flex items-center justify-center font-medium transform transition-transform hover:scale-105 hover:-translate-y-1"
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							View Projects
						</a>
						<a
							href="#contact"
							className={`px-8 py-3 border rounded-md transition-all inline-flex items-center justify-center font-medium transform transition-transform hover:scale-105 hover:-translate-y-1 ${
								theme === "light"
									? "border-gray-400 bg-gray-100/50 hover:bg-gray-200/70 text-gray-800"
									: "border-foreground bg-background/10 hover:bg-background/20 text-foreground transform transition-transform hover:scale-105 hover:-translate-y-1"
							}`}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							Contact Me
						</a>
						
						{/* Arrow button for mobile - only shown on mobile */}
						{isMobile && (
							<a
								href="#projects"
								className={`mt-4 w-10 h-10 mx-auto flex items-center justify-center rounded-full backdrop-blur-sm ${
									theme === "light"
										? "border border-gray-400 bg-gray-100/20 text-gray-800"
										: "border border-foreground bg-background/20 text-foreground"
								} animate-bounce`}
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
							>
								<ArrowDown size={20} />
							</a>
						)}
					</div>
				</div>
			</div>

			{/* Arrow for desktop only */}
			{!isMobile && (
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
			)}
		</section>
	);
};

export default Hero;
