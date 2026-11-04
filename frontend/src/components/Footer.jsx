import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Printer } from 'lucide-react'
import { site } from '../data/siteContent.js'
import { logoFullData as logoFull } from '../assets/profileImages.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          {/*
            Full official logo lockup, supplied as a 323 x 324 px JPEG. It is
            shown at 240 px wide, below its native size, so it stays crisp
            without upscaling or distortion. It is placed on a white card so
            its white background reads as an intentional logo panel on the
            light-blue footer.
          */}
          <div className="footer-logo-card">
            <img className="footer-logo" src={logoFull} alt="Gondwana Engineering Plc logo" width="240" height="241" />
          </div>
          <p className="footer-brand">{site.fullName}</p>
          <p>{site.description}</p>
        </div>

        <nav aria-label="Footer">
          <h2>Explore</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <h2>Contact</h2>
          <ul className="footer-contact">
            <li><Phone size={17} aria-hidden="true" /><span>{site.phone}</span></li>
            <li><Printer size={17} aria-hidden="true" /><span>Fax {site.fax}</span></li>
            <li><MapPin size={17} aria-hidden="true" /><span>{site.address}</span></li>
            <li><Mail size={17} aria-hidden="true" /><span>{site.email}</span></li>
          </ul>
        </div>

        <div>
          <h2>Certification</h2>
          <p>{site.certification}, as stated in the company profile.</p>
          <p>Social media links are not given in the company profile, so none are listed here.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} {site.fullName}.</p>
        </div>
      </div>
    </footer>
  )
}
