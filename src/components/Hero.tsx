
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
			{/* Floating geometric shapes */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-primary/30 rounded-full animate-pulse"></div>
				<div className="absolute top-1/3 right-16 w-12 h-12 bg-primary/20 transform rotate-45 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
				<div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-primary/40 transform rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
				<div className="absolute top-2/3 right-1/4 w-8 h-8 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
			</div>

			{/* Animated grid pattern */}
			<div className="absolute inset-0 opacity-5 pointer-events-none">
				<div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.05)_25px,rgba(255,255,255,0.05)_26px,transparent_27px,transparent_74px,rgba(255,255,255,0.05)_75px,rgba(255,255,255,0.05)_76px,transparent_77px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
			</div>

			{/* Floating particles */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{Array.from({ length: 20 }).map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 3}s`,
							animationDuration: `${2 + Math.random() * 3}s`
						}}
					></div>
				))}
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div
					className={`space-y-6 p-8 rounded-lg ${
						theme === "light" ? "bg-white/80 shadow-md" : "bg-background/50"
					} backdrop-blur-sm bg-[url('/code-background.jpg')] bg-cover bg-center bg-blend-overlay transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl`}
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
