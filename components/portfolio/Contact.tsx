import { Mail, Github, Linkedin } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'maisanouar30@gmail.com',
    href: 'mailto:maisanouar30@gmail.com',
    note: 'Best for job inquiries',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/anouar-mais',
    href: 'https://linkedin.com/',
    note: 'Professional profile',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/anouar-mais',
    href: 'https://github.com/',
    note: 'Source code & repositories',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
      style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col gap-3 mb-14 fade-up text-center items-center">
          <span className="label">Contact</span>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight text-balance"
            style={{ color: '#111827' }}
          >
            Let's build something impactful together
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl"
            style={{ color: '#4B5563' }}
          >
            Open to full-time junior developer positions, freelance projects, and
            technical collaborations. Response time is typically within 24 hours.
          </p>
        </div>

        {/* Contact links */}
        <div className="flex flex-col gap-4 fade-up delay-1 mb-8">
          {contactLinks.map(({ icon: Icon, label, value, href, note }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card flex items-center gap-4 px-5 py-4 no-underline"
              style={{ background: '#F9FAFB' }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}
              >
                <Icon size={16} style={{ color: '#2563EB' }} />
              </div>
              <div className="min-w-0">
                <p
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: '#9CA3AF' }}
                >
                  {label}
                </p>
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: '#111827' }}
                >
                  {value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{note}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Availability badge */}
        <div
          className="fade-up delay-2 rounded-xl p-5 flex items-start gap-3"
          style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}
        >
          <span
            className="w-2 h-2 rounded-full mt-1 flex-shrink-0"
            style={{ background: '#16A34A' }}
          />
          <div>
            <p className="text-sm font-semibold" style={{ color: '#15803D' }}>
              Currently Available
            </p>
            <p className="text-xs mt-0.5 leading-relaxed" style={{ color: '#166534' }}>
              Open to full-time junior roles — tech companies, digital agencies,
              or product startups. Remote or hybrid.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
