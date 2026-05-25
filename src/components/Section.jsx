import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function Section({ eyebrow, title, intro, children, className = "", align = "left" }) {
  return (
    <motion.section
      className={`section ${className}`}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="section-shell">
        {(eyebrow || title || intro) && (
          <div className={`section-heading ${align === "center" ? "center" : ""}`}>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2>{title}</h2>}
            {intro && <p>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  );
}

export function PageHero({ eyebrow, title, intro, children, dark = false }) {
  return (
    <section className={`page-hero ${dark ? "dark" : ""}`}>
      <div className="page-hero-shell">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
