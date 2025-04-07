
export interface SkillItem {
  text: string;
  x: number;
  y: number;
  delay: number;
}

export const skillsData: SkillItem[] = [
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
];
