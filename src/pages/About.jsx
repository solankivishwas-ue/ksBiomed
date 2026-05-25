import { PageHero, Section } from "../components/Section.jsx";
import { milestones, stats, whatWeDo } from "../data/siteData.js";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Trusted biomedical and radiology equipment supplier in India"
        intro="KS Biomed Services is a trusted biomedical and radiology equipment supplier in India, delivering advanced medical imaging and diagnostic solutions to hospitals, diagnostic centers, and healthcare institutions."
      >
        <div className="metric-glass">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </PageHero>

      <Section eyebrow="Who Are We?" title="Based in Gujarat and serving clients across India">
        <div className="split-layout">
          <div className="copy-stack">
            <p>
              With over 30 years of industry experience, we specialize in the sales, installation, and
              servicing of Digital Radiography (DR) systems, Computed Radiography (CR) systems, X-Ray
              Machines, Ultrasound machines,Mammography Machines, Bone densitometry (DEXA), and other
              diagnostic equipment as well as Imaging Consumables & Accessories.
            </p>
            <p>
              Based in Gujarat and serving clients across India, we are known for our reliable products,
              technical expertise, Customized Solutions and prompt after-sales support. Our focus is on
              helping healthcare providers enhance diagnostic accuracy, improve operational efficiency,
              and deliver better patient care through high-quality, cost-effective solutions.
            </p>
          </div>
          <div className="feature-stack">
            <div><strong>Industry Leadership</strong><span>Delivering best-in-class medical imaging solutions</span></div>
            <div><strong>Operational Strength</strong><span>Built a team of 50+ skilled engineers and dedicated back-office support for seamless operations</span></div>
            <div><strong>Service Excellence</strong><span>Providing round-the-clock support for high-end systems ranging from DR systems, CR systems, X-Ray machines, Mammography machines, BMD machines.</span></div>
          </div>
        </div>
      </Section>

      <Section
        className="surface-section"
        eyebrow="What We Do"
        title="We specialize in a wide range of advanced healthcare technologies"
        align="center"
      >
        <div className="pill-grid">
          {whatWeDo.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Mr. Kaushik S Shah">
        <div className="leader-layout">
          <img src="/images/doc-image-11.png" alt="Mr. Kaushik S Shah" />
          <div className="copy-stack">
            <p>
              K S Biomed Services is led by Mr. Kaushik S. Shah, a seasoned professional with over three
              decades of experience in the biomedical and healthcare technology industry. He began his
              career with Siemens, Ahmedabad (1987–1996), where he worked as a Service Executive handling
              advanced systems including X-ray, ultrasound, ventilators, CT, MRI, and Cath-Lab equipment.
            </p>
            <p>
              In 1996, he founded K S Biomed Services with a vision to deliver MNC-level after-sales
              service and dependable solutions to healthcare providers. Under his leadership, the company
              has consistently grown to become a trusted name, recognized as one of the leading third-party
              maintenance and service providers for the medical fraternity in Gujarat.
            </p>
            <p>
              Guided by the philosophy of “Quality is never an accident; it is always the result of an
              intelligent & Consistent effort.,” he continues to drive excellence, reliability, and
              customer-focused innovation.
            </p>
          </div>
        </div>
      </Section>

      <Section className="surface-section" eyebrow="Milestones" title="Milestones Achieved by the Company">
        <div className="timeline">
          {milestones.map((item) => {
            const [year, text] = item.includes(":") ? item.split(/:(.*)/s) : ["", item];
            return (
              <article key={item}>
                {year && <strong>{year}</strong>}
                <p>{text?.trim() || item}</p>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
