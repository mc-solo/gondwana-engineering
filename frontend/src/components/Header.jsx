import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Hexagon } from 'lucide-react'
import { site } from '../data/siteContent.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' }
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Gondwana Engineering home">
          <span className="brand-mark" aria-hidden="true"><Hexagon size={28} strokeWidth={2.2} /></span>
          <span className="brand-text">
            <span className="brand-name">{site.logoText}</span>
            <span className="brand-sub">{site.logoAccent}</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav id="primary-navigation" className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="button button-primary nav-cta" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
