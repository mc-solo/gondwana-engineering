import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { site } from '../data/siteContent.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{site.name}</p>
          <p>{site.tagline}.</p>
          <p className="placeholder-note">Company description to be supplied by the client.</p>
        </div>

        <nav aria-label="Footer">
          <h2>Explore</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <h2>Contact</h2>
          <ul className="footer-contact">
            <li><Mail size={17} aria-hidden="true" /><span>{site.email}</span></li>
            <li><Phone size={17} aria-hidden="true" /><span>{site.phone}</span></li>
            <li><MapPin size={17} aria-hidden="true" /><span>{site.address}</span></li>
            <li><Clock size={17} aria-hidden="true" /><span>{site.workingHours}</span></li>
          </ul>
        </div>

        <div>
          <h2>Follow us</h2>
          <p>Social media links to be supplied by the client.</p>
          <ul className="social-links">
            <li><a href={site.social.linkedin}>LinkedIn</a></li>
            <li><a href={site.social.facebook}>Facebook</a></li>
            <li><a href={site.social.instagram}>Instagram</a></li>
            <li><a href={site.social.x}>X</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} {site.name}. Demo website. Contact details, images and product information are placeholders.</p>
        </div>
      </div>
    </footer>
  )
}
