import { useState } from 'react'
import { getDemoHref, site } from '../config/site.js'
import Button from './Button.jsx'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function close() {
    setOpen(false)
  }

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#inicio" onClick={close}>
          <span className="nav__mark">{site.company.name}</span>
          <span className="nav__sub">{site.company.country}</span>
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
        <div className={`nav__panel ${open ? 'is-open' : ''}`} id="site-nav">
          <nav aria-label="Principal">
            <ul className="nav__links">
              {site.nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={close}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="nav__cta nav__mobile-cta" href={getDemoHref()} onClick={close}>
            {site.cta.shortLabel}
          </Button>
        </div>
        <Button className="nav__cta" href={getDemoHref()}>
          {site.cta.shortLabel}
        </Button>
      </div>
    </header>
  )
}
