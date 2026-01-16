import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      hsl(var(--primary) / 0.15),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative group overflow-hidden ${className}`}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />
      
      {/* Border glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/50 via-transparent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative glass-card h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
