import { motion } from "framer-motion";

const OrbitalElement = () => {
  return (
    <section id="lab" className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          {/* Central logo/orb */}
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-64 h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              {/* Orbit dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary/60" />
            </motion.div>

            {/* Middle ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 w-48 h-48 md:w-64 md:h-64"
            >
              <div className="absolute inset-0 rounded-full border border-primary/30 border-dashed" />
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent" />
            </motion.div>

            {/* Central element */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 60px hsl(270 91% 65% / 0.3)",
                  "0 0 100px hsl(270 91% 65% / 0.5)",
                  "0 0 60px hsl(270 91% 65% / 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-card to-background border border-primary/30 flex items-center justify-center"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 flex items-center justify-center backdrop-blur-sm">
                <motion.div
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-5xl md:text-6xl font-heading font-bold gradient-text"
                >
                  ∑
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            The Lab
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Exploring new design concepts and experimental interfaces that push the boundaries of digital experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OrbitalElement;
