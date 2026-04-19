import { motion } from "framer-motion";

/**
 * Versa-inspired animated gradient mesh background.
 * Lime → teal → sky fluid blobs that slowly drift.
 */
const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Base mesh */}
      <div className="absolute inset-0 gradient-mesh-bg" />

      {/* Drifting blob 1 — lime */}
      <motion.div
        className="absolute -top-40 -left-40 w-[60vw] h-[60vw] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.45) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 120, -60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Drifting blob 2 — teal */}
      <motion.div
        className="absolute top-1/3 -right-40 w-[55vw] h-[55vw] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--teal) / 0.4) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 60, -80, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Drifting blob 3 — sky */}
      <motion.div
        className="absolute -bottom-40 left-1/4 w-[50vw] h-[50vw] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--sky) / 0.35) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft top-right lime accent */}
      <motion.div
        className="absolute top-10 right-10 w-[30vw] h-[30vw] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.35) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grain/vignette to tame brightness */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background) / 0.4) 100%)",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
