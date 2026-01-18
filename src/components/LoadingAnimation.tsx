import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 800);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Central orb with pulsing glow
  const centerOrb = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0.9],
    },
    exit: { scale: 2, opacity: 0 },
  };

  // Orbiting particles
  const orbitingParticles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.15,
    duration: 2 + Math.random() * 0.5,
    radius: 80 + i * 15,
    size: 8 + Math.random() * 6,
  }));

  // Scattered sparkles
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 300,
    y: (Math.random() - 0.5) * 300,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 1.5,
  }));

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          {/* Aurora background during loading */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
                  "radial-gradient(ellipse 60% 80% at 40% 60%, hsl(var(--accent) / 0.2) 0%, transparent 70%)",
                  "radial-gradient(ellipse 80% 60% at 60% 40%, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Central container */}
          <div className="relative">
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                width: 200,
                height: 200,
                left: -100,
                top: -100,
              }}
              animate={{
                boxShadow: [
                  "0 0 60px 20px hsl(var(--primary) / 0.3)",
                  "0 0 80px 30px hsl(var(--accent) / 0.4)",
                  "0 0 60px 20px hsl(var(--primary) / 0.3)",
                ],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Central glowing orb */}
            <motion.div
              className="relative w-20 h-20 rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
                boxShadow: "0 0 40px 10px hsl(var(--primary) / 0.5)",
              }}
              variants={centerOrb}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Inner glow */}
              <motion.div
                className="absolute inset-2 rounded-full bg-background/30"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Orbiting particles */}
            {orbitingParticles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  width: particle.size,
                  height: particle.size,
                  background: `radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)`,
                  boxShadow: `0 0 ${particle.size * 2}px hsl(var(--primary) / 0.5)`,
                  left: "50%",
                  top: "50%",
                  marginLeft: -particle.size / 2,
                  marginTop: -particle.size / 2,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0.8, 1, 0],
                  scale: [0, 1, 1, 1, 0],
                  x: [
                    0,
                    Math.cos(0) * particle.radius,
                    Math.cos(Math.PI / 2) * particle.radius,
                    Math.cos(Math.PI) * particle.radius,
                    Math.cos(Math.PI * 1.5) * particle.radius,
                  ],
                  y: [
                    0,
                    Math.sin(0) * particle.radius,
                    Math.sin(Math.PI / 2) * particle.radius,
                    Math.sin(Math.PI) * particle.radius,
                    Math.sin(Math.PI * 1.5) * particle.radius,
                  ],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Scattered sparkles */}
            {sparkles.map((sparkle) => (
              <motion.div
                key={`sparkle-${sparkle.id}`}
                className="absolute rounded-full bg-primary"
                style={{
                  width: sparkle.size,
                  height: sparkle.size,
                  left: "50%",
                  top: "50%",
                }}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: sparkle.x,
                  y: sparkle.y,
                }}
                transition={{
                  duration: 2,
                  delay: sparkle.delay,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Loading text */}
          <motion.div
            className="absolute bottom-32 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div className="flex gap-1">
              {["Y", "A", "S", "H", "W", "A", "N", "T", "H"].map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-2xl font-signature text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="flex gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
