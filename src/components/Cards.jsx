import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ProductCard({ product }) {
  return (
    <motion.article className="product-card" whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
      <div className="product-media">
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
      </div>
    </motion.article>
  );
}

export function ServiceCard({ title, text, index }) {
  return (
    <motion.article className="service-card" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.article>
  );
}

export function LinkPanel({ title, text, to }) {
  return (
    <a href={to} className="link-panel">
      <span>
        <strong>{title}</strong>
        <small>{text}</small>
      </span>
      <ArrowRight size={18} />
    </a>
  );
}
