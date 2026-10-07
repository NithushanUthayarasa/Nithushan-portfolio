import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '../data/profile'
const links = [
  ['Projects', 'projects'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const toggle = useRef(null)
  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 12)
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -60% 0px' },
    )
    document
      .querySelectorAll('main > section[id]')
      .forEach((section) => observer.observe(section))
    const media = window.matchMedia('(min-width: 960px)')
    const close = () => setOpen(false)
    media.addEventListener('change', close)
    return () => {
      observer.disconnect()
      media.removeEventListener('change', close)
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])
  return (
    <header
      className={'site-header' + (scrolled ? ' is-scrolled' : '')}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false)
          toggle.current?.focus()
        }
      }}
    >
      <nav className="section-shell nav" aria-label="Main navigation">
        <a
          className="brand"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Nithushan, home"
        >
          Nithushan<span>.</span>
        </a>
        <div className="desktop-nav">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={'#' + id}
              aria-current={active === id ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a
            className="button nav-resume"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
            <ArrowUpRight size={15} />
          </a>
          <button
            ref={toggle}
            className="icon-button menu-toggle"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map(([label, id]) => (
          <a
            key={id}
            href={'#' + id}
            aria-current={active === id ? 'location' : undefined}
            onClick={() => {
              setOpen(false)
              document.getElementById(id)?.focus({ preventScroll: true })
            }}
          >
            {label}
            <ArrowUpRight size={17} />
          </a>
        ))}
      </nav>
    </header>
  )
}
