import { useMemo, useState } from 'react'
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
        title="Workshop Products"
        text="Laboratory accessories and bridge steel bearings produced in Gondwana Engineering’s workshop, as listed in the company profile."
        image={images.productsHero}
        imageAlt={images.productsHeroAlt}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Workshop catalogue"
            title="Browse by category"
            text="Photographs shown are representative, except where the caption says an image is from the company profile. Further specifications are to be confirmed for individual items."
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
            <div className="gallery-grid">
              {visible.map((product) => (
                <article className="gallery-card" key={product.id}>
                  <img src={product.image} alt={product.imageAlt} />
                  <div className="gallery-body">
                    <p className="product-category">{product.category}</p>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="product-spec">{product.specification}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title="Looking for a specific accessory?"
        text="If you do not see the item you need, contact us with the item and specification and we will check what the workshop can produce."
      />
    </main>
  )
}
