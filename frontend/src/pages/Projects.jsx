import { useMemo, useState } from 'react'
import { images } from '../data/siteContent.js'
import { projectCategories, projects } from '../data/projects.js'
import { CtaBanner, PageHero, SectionHeading } from '../components/ui.jsx'

export default function Projects() {
  const [category, setCategory] = useState('All projects')

  const visible = useMemo(
    () => (category === 'All projects' ? projects : projects.filter((item) => item.category === category)),
    [category]
  )

  return (
    <main>
      <PageHero
        title="Our Projects"
        text="Selected major past work from the company profile. Photographs shown are representative, except where the caption says an image is from the company profile."
        image={images.projectsHero}
        imageAlt={images.projectsHeroAlt}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Project gallery"
            title="Geotechnical investigation for buildings, bridges, dams and wind power"
            text="Filter by category, or browse the full gallery. Each card shows the period, client and location given in the company profile, and the scope of work it covers."
          />

          <div className="filter-bar" role="group" aria-label="Filter projects by category">
            {projectCategories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? 'filter-button active' : 'filter-button'}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p>No projects in this category yet.</p>
          ) : (
            <div className="gallery-grid">
              {visible.map((project) => (
                <article className="gallery-card" key={project.id}>
                  <img src={project.image} alt={project.imageAlt} />
                  <div className="gallery-body">
                    <p className="product-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className="project-meta">{project.period} · {project.client}{project.location ? ` · ${project.location}` : ''}</p>
                    <p>{project.description}</p>
                    <div className="project-tags" aria-label="Project scope">
                      {project.scope.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title="Have a project in mind?"
        text="Tell us about your building, bridge, dam or road project and we will discuss the investigation it needs."
      />
    </main>
  )
}
