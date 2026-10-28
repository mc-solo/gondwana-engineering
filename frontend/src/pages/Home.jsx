import { Link } from 'react-router-dom'
import { ArrowRight, Award, Headset, ShieldCheck, Wrench } from 'lucide-react'
import { images, products, services, site, whyChooseUs } from '../data/siteContent.js'
import { CtaBanner, SectionHeading } from '../components/ui.jsx'

const whyIcons = [ShieldCheck, Award, Wrench, Headset]

export default function Home() {
  const featuredServices = services.slice(0, 3)
  const featuredProducts = products.slice(0, 4)

  return (
    <main>
      <section className="hero">
        <img className="hero-image" src={images.hero} alt={images.heroAlt} />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow light">Laboratory equipment · Engineering solutions</p>
          <h1>Reliable equipment and engineering support for modern laboratories.</h1>
          <p className="hero-text">
            Gondwana Engineering supplies laboratory equipment and provides practical
            technical services, from installation and training to ongoing maintenance
            and support.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="button button-primary">Explore Our Solutions</Link>
            <Link to="/contact" className="button button-outline-light">Contact Us</Link>
          </div>
          <p className="demo-note">Demo content: company details and imagery are placeholders for client review.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="About Gondwana Engineering"
              title="Practical engineering, built around laboratory needs"
              text="Placeholder introduction: replace this paragraph with the client-approved company description, including what the company does and who it serves. No history, clients or certifications are claimed here until the client confirms them."
            />
            <Link to="/about" className="text-link">Learn more about us <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <figure className="split-media">
            <img src={images.introduction} alt={images.introductionAlt} />
          </figure>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeading
            eyebrow="Our solutions"
            title="Services that support the full equipment lifecycle"
            text="From supply and installation to calibration, training and after-sales support."
          />
          <div className="card-grid three">
            {featuredServices.map((service) => (
              <article className="card" key={service.id}>
                <img src={service.image} alt={service.imageAlt} />
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <Link to={`/services#${service.id}`} className="text-link">View service <ArrowRight size={16} aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Link to="/services" className="button button-secondary">View all services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured products"
            title="Laboratory equipment, presented clearly"
            text="Sample product cards only. Names, images and specifications are placeholders and can be replaced as real product information becomes available."
          />
          <div className="card-grid four">
            {featuredProducts.map((product) => (
              <article className="card product-card" key={product.id}>
                <img src={product.image} alt={product.imageAlt} />
                <div className="card-body">
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link to="/contact" className="button button-outline small">Request Information</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Link to="/products" className="button button-secondary">Browse all products</Link>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeading
            eyebrow="Why choose us"
            title="A professional, practical partner"
            text="These statements describe approach and service only. No specific certifications, awards or achievements are claimed."
          />
          <div className="feature-grid">
            {whyChooseUs.map((item, index) => {
              const Icon = whyIcons[index % whyIcons.length]
              return (
                <article className="feature" key={item.title}>
                  <span className="feature-icon" aria-hidden="true"><Icon size={24} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section image-led">
        <div className="container split reverse">
          <figure className="split-media">
            <img src={images.showcase} alt={images.showcaseAlt} />
          </figure>
          <div>
            <SectionHeading
              eyebrow="Engineering in practice"
              title="Equipment installed, tested and supported properly"
              text="Placeholder section: replace this image and text with real project or facility photography and approved client wording when available."
            />
            <ul className="check-list">
              <li>Installation and commissioning support</li>
              <li>Calibration and planned maintenance</li>
              <li>Operator training and after-sales assistance</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Tell us what your laboratory needs"
        text="Share your equipment or service enquiry and we will respond with the next steps."
      />
    </main>
  )
}
