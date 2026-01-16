import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let trailId = 0;
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
      
      // Add trail point
      trailId++;
      setTrail(prev => [...prev.slice(-12), { x: e.clientX, y: e.clientY, id: trailId }]);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handlePointerChange = () => {
      const hoveredElement = document.elementFromPoint(cursorX.get(), cursorY.get());
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(
          computedStyle.cursor === "pointer" ||
          hoveredElement.tagName === "A" ||
          hoveredElement.tagName === "BUTTON" ||
          hoveredElement.closest("a") !== null ||
          hoveredElement.closest("button") !== null
        );
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handlePointerChange);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handlePointerChange);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(-8));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Trail particles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.6, scale: 0.5 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed pointer-events-none z-[9998] rounded-full bg-primary"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            width: 8 - index * 0.5,
            height: 8 - index * 0.5,
          }}
        />
      ))}

      {/* Main cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
          opacity: isVisible ? 0.3 : 0,
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 1.5 : 1,
            width: isPointer ? 60 : 40,
            height: isPointer ? 60 : 40,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full bg-primary blur-xl"
          style={{ width: 40, height: 40 }}
        />
      </motion.div>

      {/* Cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full border-2 border-primary"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: isPointer ? 48 : 24,
            height: isPointer ? 48 : 24,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-full"
        />
      </motion.div>

      {/* Cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full bg-primary"
        style={{
          left: cursorX,
          top: cursorY,
          x: "-50%",
          y: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: isPointer ? 0 : 6,
            height: isPointer ? 0 : 6,
          }}
          transition={{ duration: 0.15 }}
          className="rounded-full bg-primary"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
