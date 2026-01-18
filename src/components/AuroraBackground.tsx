import { motion } from "framer-motion";

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base aurora layer - slow moving waves */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, hsl(var(--primary) / 0.03) 0%, transparent 30%, hsl(var(--accent) / 0.05) 60%, transparent 100%)",
            "linear-gradient(225deg, hsl(var(--accent) / 0.04) 0%, transparent 40%, hsl(var(--primary) / 0.03) 70%, transparent 100%)",
            "linear-gradient(315deg, hsl(var(--primary) / 0.05) 0%, transparent 35%, hsl(var(--accent) / 0.04) 65%, transparent 100%)",
            "linear-gradient(135deg, hsl(var(--primary) / 0.03) 0%, transparent 30%, hsl(var(--accent) / 0.05) 60%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Aurora wave 1 - Top section */}
      <motion.div
        className="absolute -top-1/4 left-0 right-0 h-[60vh]"
        style={{
          background: "radial-gradient(ellipse 100% 50% at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [-100, 100, -100],
          scaleX: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Aurora wave 2 - Mid section with color shift */}
      <motion.div
        className="absolute top-1/4 left-0 right-0 h-[50vh]"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 40% at 30% 50%, hsl(var(--accent) / 0.06) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 40% at 70% 50%, hsl(var(--primary) / 0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 40% at 50% 50%, hsl(var(--accent) / 0.07) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 40% at 30% 50%, hsl(var(--accent) / 0.06) 0%, transparent 60%)",
          ],
        }}
        style={{ filter: "blur(80px)" }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Aurora wave 3 - Flowing ribbon effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.03) 25%, hsl(var(--accent) / 0.04) 50%, hsl(var(--primary) / 0.03) 75%, transparent 100%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: ["-50%", "50%", "-50%"],
          scaleY: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vertical aurora streaks */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "repeating-linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.02) 10%, transparent 20%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 200, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom glow - warm accent */}
      <motion.div
        className="absolute -bottom-1/4 left-0 right-0 h-[60vh]"
        style={{
          background: "radial-gradient(ellipse 100% 50% at 50% 100%, hsl(var(--accent) / 0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scaleX: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, transparent 40%, hsl(var(--primary) / 0.02) 50%, transparent 60%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 200%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
