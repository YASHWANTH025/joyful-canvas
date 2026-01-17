import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingElements = () => {
  // Very minimal floating dots - only 8, extremely subtle
  const dots = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 50,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Minimal floating dots - hero area only */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-foreground"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;