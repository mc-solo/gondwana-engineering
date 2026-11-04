import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { logoMarkData as logoMark } from '../assets/profileImages.js'

// Navigation order and labels follow the November 2026 enhancement prompt:
// Home | About Us | Services | Products | Projects | Contact.
const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' }
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
          {/*
            Official logo mark, supplied as a 270 x 270 px JPEG. It is shown
            at 44 px tall, well below its native size, so it stays crisp
            (HD appearance) without upscaling or distortion. The image is
            not stretched, cropped or recoloured.
          */}
          <img className="logo-mark" src={logoMark} alt="Gondwana Engineering logo" width="44" height="44" />
          <span className="brand-text">
            <span className="brand-name">Gondwana</span>
            <span className="brand-sub">Engineering</span>
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
