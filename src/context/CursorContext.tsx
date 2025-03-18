
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CursorContextType {
  cursorPosition: { x: number; y: number };
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorPosition, isHovered, setIsHovered }}>
      {children}
      <div
        className={`custom-cursor ${isHovered ? "hovered" : ""}`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      />
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
