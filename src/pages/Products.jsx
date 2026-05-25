import { ProductCard } from "../components/Cards.jsx";
import { PageHero, Section } from "../components/Section.jsx";
import { partners, productBenefits, products } from "../data/siteData.js";

export default function Products() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Product Range"
        title="Advanced Medical Imaging Solutions for Modern Healthcare"
        intro="Our product range covers radiology, diagnostic imaging, mammography, DEXA, medical education, printers, films, and accessories."
      >
        <div className="hero-product-stack">
          <img src="/images/doc-image-15.png" alt="Surgical C-Arm" />
          <img src="/images/doc-image-06.png" alt="Bone Densitometry machine" />
        </div>
      </PageHero>

      <Section eyebrow="Products" title="Advanced Medical Imaging Solutions for Modern Healthcare" align="center">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </Section>

      <Section className="surface-section" eyebrow="Why Choose Our Products?" title="Why Choose Our Products?">
        <div className="benefit-grid">
          {productBenefits.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </Section>

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
