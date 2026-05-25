import { PageHero, Section } from "../components/Section.jsx";
import { clientHighlights, esteemedClients } from "../data/siteData.js";

export default function Clients() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Our Clients"
        title="Trusted by Leading Healthcare Professionals"
        intro="At K S Biomed Services, our clients are at the heart of everything we do. Over the past three decades, we have built strong, long-term relationships with hospitals, diagnostic centres, imaging clinics, and healthcare institutions across India."
      >
        <div className="client-metrics">
          <div><strong>5000+</strong><span>Clients</span></div>
          <div><strong>30+</strong><span>Years</span></div>
          <div><strong>250+</strong><span>Refurb Mammo Installations</span></div>
        </div>
      </PageHero>

      <Section
        eyebrow="Client Network"
        title="Today, we are proud to be a trusted partner for thousands of satisfied customers nationwide."
      >
        <p className="lead-copy">
          Our growing client network reflects our commitment to delivering reliable technology, expert
          service, and consistent support.
        </p>
        <div className="client-list">
          {esteemedClients.map((client) => (
            <div key={client}>{client}</div>
          ))}
        </div>
      </Section>

      <Section className="surface-section" eyebrow="Why Do Clients Choose Us?" title="Why Do Clients Choose Us?">
        <div className="benefit-grid">
          {clientHighlights.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        <p className="closing-copy">
          We are committed to supporting our clients with advanced technology, dependable service, and
          continuous innovation—helping them deliver better diagnostics and improved patient care.
        </p>
      </Section>

      <Section eyebrow="Our Work in Action" title="Photos of various conferences, installations, etc.">
        <div className="work-gallery">
          <img src="/images/doc-image-19.png" alt="Conference participation" />
          <img src="/images/doc-image-20.png" alt="Contact reference graphic" />
          <img src="/images/doc-image-22.png" alt="Department cards" />
        </div>
      </Section>
    </>
  );
}
