import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WorkCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
}

const WorkCard = ({ title, description, icon, gradient, delay = 0 }: WorkCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card p-6 group cursor-pointer relative overflow-hidden"
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${gradient}`}
      />

      {/* Icon */}
      <div className="relative mb-4">
        <div className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center`}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          className="inline-flex items-center gap-1 text-sm text-primary font-medium"
        >
          Learn More
          <ArrowUpRight className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Glow effect */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default WorkCard;
