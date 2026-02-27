import { Github, Linkedin, Mail } from 'lucide-react'

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{ background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Name + copyright */}
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span
            className="text-sm font-semibold"
            style={{ color: '#111827' }}
          >
            Anouar Mais
          </span>
          <span
            className="text-xs"
            style={{ color: '#9CA3AF' }}
          >
            &copy; {new Date().getFullYear()} — Junior Full-Stack Developer
          </span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {navLinks.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-medium transition-colors duration-150 no-underline"
              style={{ color: '#6B7280' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#111827')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#6B7280')}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {[
            { href: 'https://github.com/',   Icon: Github,   label: 'GitHub' },
            { href: 'https://linkedin.com/', Icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:maisanouar30@gmail.com', Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="transition-colors duration-150"
              style={{ color: '#9CA3AF' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#111827')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#9CA3AF')}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
