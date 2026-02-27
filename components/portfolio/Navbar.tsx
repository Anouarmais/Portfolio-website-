'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [open, setOpen]                 = useState(false)
  const [active, setActive]             = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV.map(n => n.href.slice(1))
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background:     scrolled ? 'rgba(249,250,251,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)'             : 'none',
        borderBottom:   scrolled ? '1px solid #E5E7EB'     : '1px solid transparent',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <span
            className="text-sm font-semibold tracking-tight"
            style={{ color: '#111827' }}
          >
            Anouar Mais
          </span>
          <span
            className="hidden sm:inline text-xs font-normal"
            style={{ color: '#9CA3AF' }}
          >
            — Full-Stack Developer
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map(n => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium transition-colors duration-150 no-underline"
              style={{ color: active === n.href.slice(1) ? '#2563EB' : '#4B5563' }}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Hire Me CTA */}
        <a href="#contact" className="btn-primary hidden md:inline-flex text-sm py-2 px-4">
          Hire Me
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden p-1.5 rounded"
          style={{ color: '#374151' }}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden px-6 pt-2 pb-5 flex flex-col gap-3 border-t"
          style={{ background: '#F9FAFB', borderColor: '#E5E7EB' }}
        >
          {NAV.map(n => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium py-2 border-b no-underline"
              style={{ color: '#374151', borderColor: '#F3F4F6' }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-center justify-center mt-1"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
