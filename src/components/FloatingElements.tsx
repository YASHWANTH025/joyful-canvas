import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingElements = () => {
  // Enhanced floating orbs with varied properties
  const orbs = useMemo(() => [
    { id: 1, size: 400, x: 10, y: 15, duration: 25, delay: 0, blur: 100, opacity: 0.08 },
    { id: 2, size: 300, x: 80, y: 25, duration: 30, delay: 3, blur: 80, opacity: 0.06 },
    { id: 3, size: 350, x: 50, y: 60, duration: 28, delay: 1, blur: 90, opacity: 0.07 },
    { id: 4, size: 250, x: 20, y: 75, duration: 22, delay: 5, blur: 70, opacity: 0.05 },
    { id: 5, size: 280, x: 70, y: 85, duration: 26, delay: 2, blur: 85, opacity: 0.06 },
  ], []);

  // Sparkles with enhanced glow
  const sparkles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: 5 + Math.random() * 90,
      y: 5 + Math.random() * 90,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
      glowSize: Math.random() * 10 + 5,
    }));
  }, []);

  // Floating particles that drift slowly
  const particles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large central glow orb - 800px with bioluminescent effect */}
      <motion.div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2"
        style={{
          width: 800,
          height: 800,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, hsl(var(--primary) / 0.08) 30%, hsl(var(--accent) / 0.05) 50%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary accent glow */}
      <motion.div
        className="absolute -bottom-20 left-1/4"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, hsl(var(--accent) / 0.05) 40%, transparent 70%)",
          filter: "blur(120px)",
        }}
        animate={{
          x: [-80, 80, -80],
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top corner glow */}
      <motion.div
        className="absolute -top-40 -right-40"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating orbs with enhanced animations */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, hsl(var(--primary) / ${orb.opacity}) 0%, hsl(var(--accent) / ${orb.opacity * 0.5}) 40%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
          }}
          animate={{
            y: [-40, 40, -40],
            x: [-30, 30, -30],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Enhanced sparkles with glow effect */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
            background: "hsl(var(--primary))",
            boxShadow: `0 0 ${sparkle.glowSize}px hsl(var(--primary) / 0.6)`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.8, 1],
            boxShadow: [
              `0 0 ${sparkle.glowSize}px hsl(var(--primary) / 0.3)`,
              `0 0 ${sparkle.glowSize * 2}px hsl(var(--primary) / 0.7)`,
              `0 0 ${sparkle.glowSize}px hsl(var(--primary) / 0.3)`,
            ],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Drifting particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.startX}%`,
            top: `${particle.startY}%`,
            boxShadow: "0 0 10px hsl(var(--primary) / 0.4)",
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.sin(particle.id) * 100, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient mesh overlay for depth */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/60 pointer-events-none"
      />
    </div>
  );
};

export default FloatingElements;
