import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingElements = () => {
  // 3 floating orbs with different sizes
  const orbs = useMemo(() => [
    { id: 1, size: 300, x: 15, y: 20, duration: 20, delay: 0 },
    { id: 2, size: 200, x: 75, y: 60, duration: 25, delay: 2 },
    { id: 3, size: 250, x: 50, y: 80, duration: 22, delay: 4 },
  ], []);

  // 10 sparkles - small dots with pulsing opacity
  const sparkles = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large glow orb at bottom - 800px blurred gradient */}
      <motion.div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary glow for depth */}
      <motion.div
        className="absolute -bottom-20 left-1/3 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [-50, 50, -50],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 3 Floating orbs with y, x, rotate animations */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.02) 50%, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 10 Sparkles - small dots with pulsing opacity */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50 pointer-events-none"
      />
    </div>
  );
};

export default FloatingElements;
