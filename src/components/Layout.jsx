import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { contact, navItems, products } from "../data/siteData.js";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">KS</span>
          <span>
            <strong>K.S. Biomed</strong>
            <small>Services</small>
          </span>
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a href={contact.phoneHref} className="header-phone">
            <Phone size={16} />
            {contact.phone}
          </a>
          <NavLink to="/contact" className="button button-dark">
            Get in Touch
          </NavLink>
        </div>

        <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}

      {children}

      <footer className="site-footer">
        <div className="footer-shell">
          <div className="footer-about">
            <span className="footer-logo">K.S. Biomed Services</span>
            <p>
              A trusted biomedical and radiology equipment partner delivering sales, installation, maintenance,
              and support for advanced diagnostic systems across India.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
            </div>
          </div>

          <div>
            <h3>Products Range</h3>
            {products.slice(0, 6).map((item) => (
              <NavLink key={item.title} to="/products">
                {item.title}
              </NavLink>
            ))}
          </div>

          <div>
            <h3>Service & Support</h3>
            <NavLink to="/services">Medical Imaging Services</NavLink>
            <NavLink to="/services">Warranty, AMC & CMC</NavLink>
            <NavLink to="/services">Remote/Online Support</NavLink>
            <NavLink to="/services">Compliance Support</NavLink>
            <NavLink to="/services">Site Planning & Installation</NavLink>
          </div>

          <div>
            <h3>Contact Information</h3>
            <p>{contact.address}</p>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href="https://maps.google.com/?q=701%20Shikhar%20Navrangpura%20Ahmedabad%20380009" target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>(c) 2026 K.S. Biomed Services. All rights reserved.</span>
          <span>Quality is never an accident; it is always the result of an intelligent & consistent effort.</span>
        </div>
      </footer>
    </>
  );
}
