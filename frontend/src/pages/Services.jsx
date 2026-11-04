import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { images, services } from '../data/siteContent.js'
import { CtaBanner, PageHero, SectionHeading } from '../components/ui.jsx'

export default function Services() {
  return (
    <main>
      <PageHero
        title="Our Services"
        text="Civil engineering services from the company profile: geotechnical investigation, highway and bridge design, survey, GIS, water well drilling and materials testing."
        image={images.servicesHero}
        imageAlt={images.servicesHeroAlt}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Services at a glance"
            title="Choose the service your project needs"
            text="Services as listed in the company profile. Where a service scope is not detailed in the profile, that is stated rather than invented."
          />
          <div className="card-grid three">
            {services.map((service) => (
              <article className="card" key={service.id}>
                <img src={service.image} alt={service.imageAlt} />
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <a href={`#${service.id}`} className="text-link">Read details <ArrowRight size={16} aria-hidden="true" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container service-details">
          <SectionHeading
            eyebrow="Service details"
            title="What each service covers"
            text="Each section is reusable: add, remove or rewrite a service in the central content file."
          />
          {services.map((service, index) => (
            <article className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`} id={service.id} key={service.id}>
              <img src={service.image} alt={service.imageAlt} />
              <div>
                <p className="eyebrow">Service {String(index + 1).padStart(2, '0')}</p>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
                <ul className="check-list">
                  {service.includes.map((item) => (
                    <li key={item}><Check size={18} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
                <Link to="/contact" className="button button-primary">Enquire about this service</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Not sure which service fits?"
        text="Describe your building, bridge, dam, road or well project and we will point you to the most relevant option."
      />
    </main>
  )
}
