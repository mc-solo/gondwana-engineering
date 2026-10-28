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
        text="A selection of laboratory and engineering work, shown for demonstration. Real project details can replace these samples as they are approved."
        image={images.projectsHero}
        imageAlt={images.projectsHeroAlt}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Project gallery"
            title="Work in laboratory and industrial settings"
            text="Filter by category, or browse the full gallery. Hover or focus a project card to see what its scope covers."
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
        text="Tell us about your laboratory or facility and we will discuss the equipment and support it needs."
      />
    </main>
  )
}
