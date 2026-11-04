import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Target } from 'lucide-react'
import { company, images } from '../data/siteContent.js'
import { CtaBanner, PageHero, SectionHeading } from '../components/ui.jsx'

export default function About() {
  return (
    <main>
      <PageHero
        title="About Gondwana Engineering"
        text="Gondwana Engineering Private Limited Company (PLC), a multi-disciplinary civil engineering firm in Addis Ababa."
        image={images.aboutHero}
        imageAlt={images.aboutHeroAlt}
      />

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="Company overview"
              title="Civil engineering, geotechnical investigation and drilling"
              text={company.overview}
            />
            <p>{company.staff}</p>
            <p>{company.facilities}</p>
            <p><strong>Certification stated in the profile:</strong> ISO 9001:2015 Certified Company.</p>
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
              <p>{company.mission}</p>
            </article>
            <article className="statement-card">
              <span className="feature-icon" aria-hidden="true"><Eye size={24} /></span>
              <h2>Our vision</h2>
              <p>{company.vision}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Goals"
            title="What the company is working towards"
            text="Goals as stated in the company profile. The ISO/IEC 17025 laboratory accreditation listed here is a goal, not a certification already held."
          />
          <ul className="check-list">
            {company.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split reverse">
          <figure className="split-media">
            <img src={images.aboutSecondary} alt={images.aboutSecondaryAlt} />
          </figure>
          <div>
            <SectionHeading
              eyebrow="Materials testing laboratory"
              title="Testing from the company’s own laboratory"
              text="The company has a well-established soil laboratory furnished with modern equipment to carry out a variety of tests related to civil engineering construction, coupled with site investigation through drilling, pitting and DCP testing."
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
