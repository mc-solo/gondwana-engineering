import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Hexagon } from 'lucide-react'
import { site } from '../data/siteContent.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : 'is-top'}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Gondwana Engineering home">
          <span className="brand-mark" aria-hidden="true">
            <Hexagon size={30} strokeWidth={2.2} />
            <span className="brand-dot" />
          </span>
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
        </nav>
      </div>
    </header>
  )
}
