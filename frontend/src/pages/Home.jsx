import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { images, products, services, site, testimonials } from '../data/siteContent.js'
import { projects } from '../data/projects.js'
import { CtaBanner, SectionHeading } from '../components/ui.jsx'

export default function Home() {
  // Home shows a readable selection; the Services page lists all services.
  const homeServices = services.slice(0, 6)
  const [featuredService, ...otherServices] = homeServices
  const featuredProducts = products.slice(0, 4)
  const featuredProjects = projects.slice(0, 3)

  return (
    <main>
      <section className="hero">
        <img className="hero-image" src={images.hero} alt={images.heroAlt} />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1>{site.name}</h1>
          <div className="hero-actions">
            <Link to="/projects" className="button button-primary">Explore Projects</Link>
            <Link to="/contact" className="button button-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="About Gondwana Engineering"
              title="A multi-disciplinary civil engineering firm"
              text="Gondwana Engineering Private Limited Company (PLC) is registered and licensed to conduct a wide spectrum of services in civil engineering, including geotechnical investigation, highway and bridge design, land survey, GIS and water well drilling."
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
            title="Services from the company profile"
            text="Geotechnical investigation, highway and bridge design, survey, GIS, water well drilling and materials testing, among the firm’s listed services."
          />
          <div className="editorial-services">
            <Link to={`/services#${featuredService.id}`} className="service-feature">
              <img src={featuredService.image} alt={featuredService.imageAlt} />
              <div className="service-feature-body">
                <span className="service-feature-label">Featured service</span>
                <h3>{featuredService.title}</h3>
                <p>{featuredService.short}</p>
              </div>
            </Link>
            <div className="service-list">
              {otherServices.map((service, index) => (
                <Link to={`/services#${service.id}`} className="service-row" key={service.id}>
                  <span className="service-row-number">{String(index + 2).padStart(2, '0')}</span>
                  <span>
                    <h3>{service.title}</h3>
                    <p>{service.short}</p>
                  </span>
                  <ArrowRight size={20} aria-hidden="true" className="service-row-arrow" />
                </Link>
              ))}
            </div>
          </div>
          <div className="section-action">
            <Link to="/services" className="button button-secondary">View all services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects"
            text="Selected major past work from the company profile, for buildings, bridges, dams and wind power projects."
          />
          <div className="project-showcase">
            {featuredProjects.map((project, index) => (
              <Link to="/projects" className={`project-card ${index === 0 ? 'large' : ''}`} key={project.id}>
                <img src={project.image} alt={project.imageAlt} />
                <div className="project-body">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="section-action">
            <Link to="/projects" className="button button-secondary">View All Projects</Link>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeading
            eyebrow="Workshop products"
            title="Laboratory accessories and bridge steel bearings"
            text="Items produced in the company’s workshop, as listed in the company profile. Photographs shown are representative, except where the caption says an image is from the company profile."
          />
          <div className="card-grid four">
            {featuredProducts.map((product) => (
              <article className="card product-card" key={product.id}>
                <img src={product.image} alt={product.imageAlt} />
                <div className="card-body">
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="section-action">
            <Link to="/products" className="button button-secondary">Browse all products</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Client feedback"
            title="What Our Clients Say"
            text="Demonstration testimonials shown for layout review only. Replace them with verified client feedback, with permission, before the public website is launched."
          />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.quote}>
                <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
                <blockquote>{testimonial.quote}</blockquote>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Tell us about your project"
        text="Share your investigation, design or drilling enquiry and we will respond with the next steps."
      />
    </main>
  )
}
