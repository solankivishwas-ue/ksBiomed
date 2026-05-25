import { PageHero, Section } from "../components/Section.jsx";
import { partners } from "../data/siteData.js";

export default function Brands() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Brands"
        title="Trusted Technology Partners and Distributor Network"
        intro="We are distributors for:"
      >
        <div className="hero-product-stack">
          <img src="/images/doc-image-12.png" alt="Mobile DR system" />
          <img src="/images/doc-image-16.png" alt="Ultrasound machine" />
        </div>
      </PageHero>

      <Section eyebrow="Distributors" title="We are distributors for:">
        <div className="partner-grid">
          {partners.map((partner) => (
            <article key={partner.title}>
              <h3>{partner.title}</h3>
              <p>{partner.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
