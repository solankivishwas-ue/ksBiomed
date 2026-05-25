import { ArrowRight, Activity, MonitorCheck, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LinkPanel, ProductCard } from "../components/Cards.jsx";
import { Section } from "../components/Section.jsx";
import { products, services, stats } from "../data/siteData.js";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">30+ Years of Biomedical and Radiology Expertise</span>
            <h1>Empowering Healthcare Through Advanced Diagnostic Solutions</h1>
            <p>
              We are Gujarat-based biomedical and radiology equipment provider with 30+ years of
              experience, offering sales, installation, and servicing of advanced diagnostic Radiology
              systems like DR, CR, X-ray, ultrasound, Mammography and more.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="button button-accent">
                Explore Products <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="button button-ghost">
                View Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="device-stage">
              <img src="/images/doc-image-12.png" alt="Mobile DR system" />
              <img src="/images/doc-image-16.png" alt="Ultrasound machine" />
              <img src="/images/doc-image-02.jpg" alt="Digital radiography detector" />
            </div>
            <div className="quality-strip">Quality is never an accident; it is always the result of an intelligent & consistent effort.</div>
          </motion.div>
        </div>
      </section>

      <section className="stats-band">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <Section eyebrow="About Us" title="Reliable diagnostic equipment solutions across India">
        <div className="split-layout">
          <div className="copy-stack">
            <p>
              Known for reliability and strong after-sales support, we help healthcare providers
              across India improve diagnostic accuracy and efficiency with cost-effective solutions.
            </p>
            <Link to="/about" className="text-link">
              Read more about K.S. Biomed <ArrowRight size={16} />
            </Link>
          </div>
          <div className="lifecycle-panel">
            <MonitorCheck />
            <h3>We support the full equipment lifecycle</h3>
            <p>
              Selection, site planning, installation, commissioning, maintenance, compliance assistance,
              remote support, and technician training.
            </p>
          </div>
        </div>
      </Section>

      <Section
        className="surface-section"
        eyebrow="Products"
        title="Advanced Medical Imaging Solutions"
        intro="Complete radiology product coverage for modern hospitals, diagnostic centers, clinics, and teaching institutions."
        align="center"
      >
        <div className="product-grid featured">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Services" title="At K S Biomed Services, we bring over 30 years of proven expertise">
        <div className="service-ribbon">
          <LinkPanel title="Installation" text="Room planning, commissioning, and calibration" to="/services" />
          <LinkPanel title="AMC/CMC Support" text="Preventive maintenance and long-term reliability" to="/services" />
          <LinkPanel title="Remote Assistance" text="Fast troubleshooting and lower downtime" to="/services" />
        </div>
      </Section>

      <section className="immersive-band">
        <div>
          <span className="eyebrow">Service Assurance</span>
          <h2>Reliable performance and seamless operations for your diagnostic systems.</h2>
          <p>{services[0].text}</p>
          <Link to="/contact" className="button button-accent">
            Talk to our team <ArrowRight size={17} />
          </Link>
        </div>
        <div className="assurance-grid">
          <span><ShieldCheck /> AERB & BIS Certified</span>
          <span><Wrench /> Expert Engineering Team</span>
          <span><Activity /> 24x7 Support Team</span>
        </div>
      </section>
    </>
  );
}
