import { motion } from "framer-motion";

/**
 * Versa-style auto-scrolling logo strip.
 * Renders a marquee of brand wordmarks (text-based to avoid asset deps).
 * Pauses on hover.
 */
const LOGOS = [
  "DISA",
  "Qatar Airways",
  "bp",
  "Amazon",
  "Samsung",
  "Verizon",
  "McLaren",
  "Adobe",
  "Barclays",
  "BIO-RAD",
];

const LogoMarquee = () => {
  // Duplicate for seamless loop
  const items = [...LOGOS, ...LOGOS];

  return (
    <section
      aria-label="Trusted by"
      className="relative py-12 md:py-16 border-y border-border/60 bg-background/40 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-6">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center">
          Trusted &amp; inspired by industry leaders
        </p>
      </div>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-16 md:gap-24 w-max animate-marquee group-hover:[animation-play-state:paused]"
        >
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground/40 hover:text-foreground transition-colors duration-300 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMarquee;
