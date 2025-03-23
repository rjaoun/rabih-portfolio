
import { useCursor } from "@/context/CursorContext";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
	const { setIsHovered } = useCursor();
	const { theme } = useTheme();
	const year = new Date().getFullYear();
	const [showFixedArrow, setShowFixedArrow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const heroSection = document.getElementById("hero");
			if (heroSection) {
				const heroBottom = heroSection.getBoundingClientRect().bottom;
				// Show fixed arrow when we scroll past the hero section
				setShowFixedArrow(heroBottom < 0);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Fixed Back to Top Arrow */}
			{showFixedArrow && (
				<div className="fixed bottom-6 right-6 z-50 transition-all duration-300 opacity-80 hover:opacity-100">
					<a
						href="#hero"
						className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg backdrop-blur-md transition-transform hover:scale-110 hover:-translate-y-1 ${
							theme === "light"
								? "bg-primary/90 text-white border border-primary"
								: "bg-primary text-primary-foreground border border-primary/30"
						}`}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						aria-label="Back to top"
					>
						<ArrowUp size={24} />
					</a>
				</div>
			)}

			<footer className="py-12 border-t border-border/50">
				<div className="container">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-6 md:mb-0">
							<h3 className="text-xl font-medium font-code">Rabih<span className="text-primary">_</span></h3>
							<p className="text-muted-foreground mt-2">
								Crafting digital experiences that inspires.
							</p>
						</div>

						<div className="space-y-6 md:space-y-0 md:flex md:items-center md:gap-10">
							<div className="flex flex-wrap justify-center gap-6">
								<a
									href="#projects"
									className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
								>
									Projects
								</a>
								<a
									href="#about"
									className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
								>
									About
								</a>
								<a
									href="#contact"
									className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
								>
									Contact
								</a>
							</div>
						</div>
					</div>

					<div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm font-mono text-muted-foreground mb-4 md:mb-0">
							© {year} <span className="text-primary">console.log(</span>"Rabih"<span className="text-primary">)</span>;
						</p>
						<p className="text-sm font-mono text-muted-foreground">
							<span className="text-primary">{`{`}</span> Designed & Built with ♥️ <span className="text-primary">{`}`}</span>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
