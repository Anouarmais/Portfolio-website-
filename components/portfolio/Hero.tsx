import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-28 md:pt-40 md:pb-36"
      style={{ background: '#F9FAFB' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[1fr_auto] items-center gap-16">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-7">

            {/* Status pill */}
            <div
              className="fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit text-xs font-medium"
              style={{
                background:   '#F0FDF4',
                color:        '#16A34A',
                border:       '1px solid #BBF7D0',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Available for hire
            </div>

            {/* Name & title */}
            <div className="fade-up delay-1 flex flex-col gap-2">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance"
                style={{ color: '#111827' }}
              >
                Anouar Mais
              </h1>
              <p
                className="text-lg md:text-xl font-medium"
                style={{ color: '#2563EB' }}
              >
                Junior Full-Stack Developer
              </p>
              <p
                className="text-sm font-normal tracking-wide"
                style={{ color: '#6B7280' }}
              >
                Laravel &nbsp;·&nbsp; React Native &nbsp;·&nbsp; Spring Boot
              </p>
            </div>

            {/* Divider */}
            <div
              className="fade-up delay-2 w-10 h-px"
              style={{ background: '#E5E7EB' }}
            />

            {/* Summary */}
            <p
              className="fade-up delay-2 text-base leading-relaxed max-w-lg"
              style={{ color: '#4B5563' }}
            >
              Full-stack developer with strong backend focus and hands-on experience
              building scalable web applications using{' '}
              <strong style={{ color: '#111827', fontWeight: 600 }}>Laravel</strong>{' '}
              and backend services with{' '}
              <strong style={{ color: '#111827', fontWeight: 600 }}>Spring Boot</strong>.
              Experienced in REST API design, relational database modeling, and mobile
              development with React Native. Currently seeking a junior developer role
              to contribute to impactful digital products.
            </p>

            {/* Buttons */}
            <div className="fade-up delay-3 flex flex-wrap gap-3">
<a
  href="#projects"
  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors duration-200"
>
  View Projects
  <ArrowRight size={15} />
</a>
            </div>

            {/* Social links */}
            <div className="fade-up delay-4 flex items-center gap-4 pt-1">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors duration-150"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#111827')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#9CA3AF')}
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors duration-150"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#111827')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#9CA3AF')}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:maisanouar30@gmail.com"
                aria-label="Email"
                className="transition-colors duration-150"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#111827')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#9CA3AF')}
              >
                <Mail size={18} />
              </a>
              <span
                className="ml-1 text-xs font-mono"
                style={{ color: '#D1D5DB' }}
              >
                maisanouar30@gmail.com
              </span>
            </div>
          </div>

          {/* ── Right column — profile photo ── */}
          <div className="fade-up delay-3 hidden md:flex flex-col items-center">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                width:  '220px',
                height: '264px',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 32px 0 rgba(0,0,0,0.06)',
              }}
            >
              <img
                src="/images/profile.jpg"
                alt="Anouar Mais — Junior Full-Stack Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Mini stat strip */}
            <div
              className="mt-4 flex gap-6 px-5 py-3 rounded-xl text-center"
              style={{ background: '#FFFFFF', border: '1px solid #E5E7EB' }}
            >
              {[
                { value: '3', label: 'Projects' },
                { value: '4mo', label: 'Experience' },
                { value: '3+', label: 'Tech stacks' },
              ].map(s => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span
                    className="text-base font-bold leading-none"
                    style={{ color: '#111827' }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-[10px] font-medium uppercase tracking-wide"
                    style={{ color: '#9CA3AF' }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
