import { motion } from "framer-motion";
import { useMemo } from "react";

const ParticleField = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Larger floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
            width: 100 + i * 30,
            height: 100 + i * 30,
            background: `radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -50 - i * 10, 0],
            x: [0, 30 - i * 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
