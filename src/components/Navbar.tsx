import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useCursor } from "../context/CursorContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const { setIsHovered } = useCursor();

	const navItems = [
		{ label: "Projects", href: "#projects" },
		{ label: "About", href: "#about" },
		{ label: "Contact", href: "#contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 ${
				isScrolled
					? "py-4 bg-background/80 backdrop-blur-md border-b border-border/50"
					: "py-6"
			}`}
		>
			<div className="container flex items-center justify-between">
				<Link
					to="/"
					className="text-xl font-medium z-10"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					Rabih.
				</Link>

				<nav className="hidden md:flex items-center space-x-10">
					{navItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-sm link"
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							{item.label}
						</a>
					))}
					<ThemeToggle />
				</nav>

				<div className="md:hidden flex items-center gap-4 z-10">
					<ThemeToggle />
					<button
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				<div
					className={`fixed inset-0 bg-background flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
						isOpen ? "translate-y-0" : "-translate-y-full"
					}`}
				>
					<nav className="flex flex-col items-center space-y-10">
						{navItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="text-2xl font-medium link"
								onClick={() => setIsOpen(false)}
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
