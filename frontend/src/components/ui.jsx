import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-lead">{text}</p>}
    </div>
  )
}

export function PageHero({ title, text, image, imageAlt }) {
  return (
    <section className="page-hero">
      <img src={image} alt={imageAlt} />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}

export function CtaBanner({ title, text }) {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link to="/contact" className="button button-light">
          Contact Us <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
