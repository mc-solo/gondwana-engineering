import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Target } from 'lucide-react'
import { images, values } from '../data/siteContent.js'
import { CtaBanner, PageHero, SectionHeading } from '../components/ui.jsx'

export default function About() {
  return (
    <main>
      <PageHero
        title="About Gondwana Engineering"
        text="Laboratory equipment, engineering solutions and related technical services."
        image={images.servicesHero}
        imageAlt={images.servicesHeroAlt}
      />

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="Company overview"
              title="Placeholder company overview"
              text="Replace this section with the client-approved company overview. It should describe what Gondwana Engineering does, the sectors it serves and how it works, without adding history, clients, partnerships or awards that have not been confirmed."
            />
            <p>
              This demo is intentionally neutral: it presents the company as a professional
              engineering and laboratory equipment provider, while leaving every factual
              claim for the client to approve.
            </p>
          </div>
          <figure className="split-media">
            <img src={images.aboutMain} alt={images.aboutMainAlt} />
          </figure>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="card-grid two">
            <article className="statement-card">
              <span className="feature-icon" aria-hidden="true"><Target size={24} /></span>
              <h2>Our mission</h2>
              <p>[Mission statement to be supplied by the client.]</p>
            </article>
            <article className="statement-card">
              <span className="feature-icon" aria-hidden="true"><Eye size={24} /></span>
              <h2>Our vision</h2>
              <p>[Vision statement to be supplied by the client.]</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core values"
            title="How we aim to work"
            text="Sample values for review. Replace the wording with the client-approved values."
          />
          <div className="feature-grid">
            {values.map((value) => (
              <article className="feature" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split reverse">
          <figure className="split-media">
            <img src={images.aboutSecondary} alt={images.aboutSecondaryAlt} />
          </figure>
          <div>
            <SectionHeading
              eyebrow="Company image"
              title="Placeholder for client photography"
              text="Replace this image with an approved company, team or facility photograph. Captions, staff details and project examples should only be added once confirmed by the client."
            />
            <Link to="/contact" className="button button-primary">
              Work with us <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a question about our services?"
        text="Contact the team with your enquiry and we will help you find the right next step."
      />
    </main>
  )
}
