import { ServiceCard } from "../components/Cards.jsx";
import { PageHero, Section } from "../components/Section.jsx";
import { serviceBenefits, services } from "../data/siteData.js";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete Radiology Services for Reliable Performance & Peace of Mind"
        intro="At K S Biomed Services, we offer end-to-end solutions for medical imaging and radiology equipment—ensuring seamless performance, minimal downtime, and long-term reliability."
      >
        <div className="service-stack">
          <span>Warranty, AMC & CMC</span>
          <span>Site Planning & Installation</span>
          <span>Remote/ Online Support</span>
          <span>Compliance Support</span>
        </div>
      </PageHero>

      <Section
        eyebrow="Our Services"
        title="With over 30 years of experience, our services are designed to support healthcare providers at every stage"
        intro="from room planning & installation to ongoing maintenance and technical support."
      >
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} title={service.title} text={service.text} />
          ))}
        </div>
      </Section>

      <Section className="surface-section" eyebrow="Why Choose Our Services?" title="Why Choose Our Services?">
        <div className="benefit-grid">
          {serviceBenefits.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </Section>
    </>
  );
}
