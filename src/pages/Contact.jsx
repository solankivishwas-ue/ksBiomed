import { Send } from "lucide-react";
import { PageHero, Section } from "../components/Section.jsx";
import { contact, departments } from "../data/siteData.js";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        intro="Have a requirement or want to know more about our products and services? Reach out to our team and we will respond promptly."
      >
        <div className="contact-stack">
          <span>{contact.phone}</span>
          <span>{contact.email}</span>
          <span>Linkedin / Instagram / Facebook</span>
        </div>
      </PageHero>

      <Section>
        <div className="contact-layout">
          <div className="contact-info">
            <span className="eyebrow">Departments</span>
            <h2>Contact Information</h2>
            <div className="department-grid">
              {departments.map((department) => (
                <article key={department.title}>
                  <h3>{department.title}</h3>
                  <a href={`tel:${department.phone.replace(/\s/g, "")}`}>{department.phone}</a>
                  <a href={`mailto:${department.email}`}>{department.email}</a>
                </article>
              ))}
            </div>
            <div className="address-card">
              <h3>K S Biomed</h3>
              <p>{contact.address}</p>
              <a href="https://maps.google.com/?q=701%20Shikhar%20Navrangpura%20Ahmedabad%20380009" target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <span className="eyebrow">Message</span>
            <h2>Give us a message</h2>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email ID
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Contact No
              <input type="tel" name="phone" placeholder="+91 98000 00000" />
            </label>
            <label>
              Message
              <textarea name="message" rows="6" placeholder="Tell us about your requirement" />
            </label>
            <button className="button button-accent" type="submit">
              <Send size={17} />
              Form integration coming next
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
