'use client'

import { useState } from 'react'
import { Github, ChevronRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Restaurant Booking Platform',
    type: 'Full-Stack Web Application',
    stack: 'Laravel',
    description:
      'Full-stack web application built with Laravel following the MVC architectural pattern. Users can discover restaurants, create and manage reservations, curate favorites, and leave reviews.',
    architecture:
      'Laravel MVC with RESTful routing, Eloquent ORM relationships across users, restaurants, reservations and reviews, middleware-protected routes, and session-based authentication.',
    responsibilities: [
      'Backend architecture design and database schema modeling',
      'Authentication system with role-based access control',
      'Business logic for reservation and availability management',
      'RESTful API endpoint design and implementation',
      'Query optimization and database indexing strategy',
      'Form validation with structured error responses',
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'Eloquent ORM', 'Blade', 'JavaScript'],
    screenshots: [
      {
        label: 'Hero',
        src: '/images/restervar-hero.jpg',
        alt: 'Restervar landing page hero section with dark restaurant ambiance and call to action button',
      },
      {
        label: 'Features',
        src: '/images/restervar-features.jpg',
        alt: 'Restervar features section showing why choose us cards with clean light UI',
      },
      {
        label: 'Cuisine Filter',
        src: '/images/restervar-filter.jpg',
        alt: 'Restervar cuisine type selection modal with comprehensive list of restaurant categories',
      },
      {
        label: 'Restaurant Detail',
        src: '/images/restervar-detail.jpg',
        alt: 'Restervar restaurant detail page showing opening hours, address, rating and photo',
      },
      {
        label: 'Login',
        src: '/images/restervar-login.jpg',
        alt: 'Restervar login page with gradient background and authentication form',
      },
      {
        label: 'Pricing',
        src: '/images/restervar-pricing.jpg',
        alt: 'Restervar pricing plans page with three subscription tiers for restaurant owners',
      },
    ],
  },
  {
    id: 2,
    title: 'Cross-Platform Mobile App',
    type: 'React Native Application',
    stack: 'React Native',
    description:
      'Cross-platform mobile application built with React Native, consuming REST APIs for dynamic content. Designed with functional components and hooks throughout the entire codebase.',
    architecture:
      'Functional component architecture with custom hooks, React Navigation for screen routing, Axios for API communication with interceptors, and Async Storage for local persistence.',
    responsibilities: [
      'Mobile UI design and implementation across all screens',
      'REST API integration and async data flow management',
      'Navigation system setup — Stack and Tab navigators',
      'State management and component data flow',
      'Cross-platform compatibility and layout testing',
      'Performance optimization and loading state handling',
    ],
    tech: ['React Native', 'JavaScript', 'Axios', 'React Navigation', 'Async Storage', 'REST API'],
    screenshots: [
      {
        label: 'Bienvenida',
        src: '/images/app-splash.jpg',
        alt: 'App splash screen with NF logo in yellow on black background and welcome message',
      },
      {
        label: 'Seguimiento',
        src: '/images/app-seguimiento.jpg',
        alt: 'Weight tracking screen showing 90kg with chart and body composition stats',
      },
      {
        label: 'Ejercicios',
        src: '/images/app-ejercicios.jpg',
        alt: 'Exercise categories screen with muscle group cards for chest, back, legs and shoulders',
      },
      {
        label: 'Alimentación',
        src: '/images/app-alimentacion.jpg',
        alt: 'Nutrition screen with HerbaLife product categories including sport, packs and weight loss',
      },
      {
        label: 'Ingresos',
        src: '/images/app-ingresos.jpg',
        alt: 'Extra income screen showing Trabaja con Paco Montes section with video and description',
      },
      {
        label: 'Premium',
        src: '/images/app-premium.jpg',
        alt: 'Premium plans screen showing transformation challenges and maderotherapy programs',
      },
    ],
    isMobile: true,
  },
  {
    id: 3,
    title: 'Real Estate Website',
    type: 'WordPress + Elementor',
    stack: 'WordPress',
    description:
      'Professional real estate website built using WordPress CMS with Elementor page builder. Focused on responsive layout design, SEO-friendly structure, and client-facing usability for property browsing.',
    architecture:
      'WordPress CMS with Elementor-based custom layouts, responsive grid for property listings, contact form integration, and performance optimization through caching and media compression.',
    responsibilities: [
      'Full layout design and implementation using Elementor',
      'Responsive, mobile-first page structure across all screens',
      'Property listing and detail page design',
      'Contact form integration and email routing',
      'Performance optimization — image compression and lazy loading',
      'SEO-friendly URL structure and meta content setup',
    ],
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS3', 'JavaScript', 'SEO'],
    screenshots: [],
    liveDemo: 'https://bazanrealestate.es/',
  },
]

export default function Projects() {
  const [active, setActive]     = useState(0)
  const [activeImg, setActiveImg] = useState(0)
  const project = projects[active]

  const handleSelect = (idx: number) => {
    setActive(idx)
    setActiveImg(0)
  }

  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col gap-3 mb-12 fade-up">
          <span className="label">Projects</span>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight text-balance"
            style={{ color: '#111827' }}
          >
            Selected work
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl"
            style={{ color: '#4B5563' }}
          >
            Each project was built with real technical requirements in mind —
            backend depth, structured architecture, and production-level thinking.
          </p>
        </div>

        {/* Project selector */}
        <div className="flex gap-2 mb-10 flex-wrap fade-up delay-1">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleSelect(i)}
              className="text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-150"
              style={{
                background:   active === i ? '#2563EB' : '#FFFFFF',
                color:        active === i ? '#FFFFFF' : '#4B5563',
                borderColor:  active === i ? '#2563EB' : '#E5E7EB',
              }}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Project content */}
        <div key={project.id} className={`grid gap-8 items-start ${project.screenshots.length > 0 ? 'lg:grid-cols-[1fr_380px]' : ''}`}>

          {/* ── Left — details ── */}
          <div className="flex flex-col gap-6">

            {/* Header card */}
            <div className="card p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="label mb-1">{project.stack}</p>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: '#111827' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: '#6B7280' }}
                  >
                    {project.type}
                  </p>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed pt-4"
                style={{ color: '#4B5563', borderTop: '1px solid #F3F4F6' }}
              >
                {project.description}
              </p>
            </div>

            {/* Architecture */}
            <div className="card p-6 flex flex-col gap-3">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#9CA3AF' }}
              >
                Architecture
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#374151' }}
              >
                {project.architecture}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="card p-6 flex flex-col gap-3">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#9CA3AF' }}
              >
                Responsibilities
              </p>
              <ul className="flex flex-col gap-2.5">
                {project.responsibilities.map(r => (
                  <li key={r} className="flex items-start gap-2.5">
                    <ChevronRight
                      size={13}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: '#2563EB' }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: '#4B5563' }}
                    >
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-3 flex-wrap">
              {project.id !== 3 && (
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <Github size={15} />
                  GitHub
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* ── Right — screenshots ── */}
          {project.screenshots.length > 0 && <div className="flex flex-col gap-3">

            {/* Main screenshot */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid #E5E7EB', background: '#F9FAFB' }}
            >
              {project.isMobile ? (
                <div className="flex justify-center py-6">
                  <img
                    src={project.screenshots[activeImg].src}
                    alt={project.screenshots[activeImg].alt}
                    className="rounded-2xl shadow-md"
                    style={{ width: '160px', height: 'auto' }}
                  />
                </div>
              ) : (
                <img
                  src={project.screenshots[activeImg].src}
                  alt={project.screenshots[activeImg].alt}
                  className="w-full"
                  style={{
                    display: 'block',
                    maxHeight: '420px',
                    objectFit: 'contain',
                    objectPosition: 'top center',
                  }}
                />
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
              {project.screenshots.map((shot, i) => (
                <button
                  key={shot.label}
                  onClick={() => setActiveImg(i)}
                  className="relative overflow-hidden rounded-lg border transition-all duration-150 text-left"
                  style={{
                    borderColor: activeImg === i ? '#2563EB' : '#E5E7EB',
                    background:  activeImg === i ? '#EFF6FF' : '#F9FAFB',
                  }}
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full"
                    style={{
                      height: '56px',
                      objectFit: 'contain',
                      objectPosition: 'top center',
                      background: '#F3F4F6',
                    }}
                  />
                  <span
                    className="block text-center py-1 text-[10px] font-medium"
                    style={{ color: activeImg === i ? '#2563EB' : '#6B7280' }}
                  >
                    {shot.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Counter */}
            <p
              className="text-center text-xs"
              style={{ color: '#9CA3AF' }}
            >
              {activeImg + 1} / {project.screenshots.length} — {project.screenshots[activeImg].label}
            </p>
          </div>}

        </div>
      </div>
    </section>
  )
}
