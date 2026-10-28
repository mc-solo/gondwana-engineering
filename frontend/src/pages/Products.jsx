import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { images, productCategories, products } from '../data/siteContent.js'
import { CtaBanner, PageHero, SectionHeading } from '../components/ui.jsx'

export default function Products() {
  const [category, setCategory] = useState('All products')

  const visible = useMemo(
    () => (category === 'All products' ? products : products.filter((item) => item.category === category)),
    [category]
  )

  return (
    <main>
      <PageHero
        title="Products"
        text="Sample laboratory equipment categories and products. Real models, specifications and pricing can be added later."
        image={images.productsHero}
        imageAlt={images.productsHeroAlt}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Product catalogue"
            title="Browse by category"
            text="This layout is reusable: add a product to the central content file and it appears here automatically."
          />

          <div className="filter-bar" role="group" aria-label="Filter products by category">
            {productCategories.map((item) => (
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
            <p>No products in this category yet.</p>
          ) : (
            <div className="card-grid four">
              {visible.map((product) => (
                <article className="card product-card" key={product.id}>
                  <img src={product.image} alt={product.imageAlt} />
                  <div className="card-body">
                    <p className="product-category">{product.category}</p>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="product-spec">{product.specification}</p>
                    <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="button button-outline small">
                      Request Information
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title="Looking for a specific model?"
        text="If you do not see the equipment you need, send us the model or specification and we will check availability."
      />
    </main>
  )
}
