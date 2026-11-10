import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { profile } from '../data/site.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          {profile.name}
        </Link>
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>
        <nav className={`nav__links${open ? ' is-open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
