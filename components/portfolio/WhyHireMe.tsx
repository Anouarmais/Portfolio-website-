import {
  TrendingUp,
  Layers,
  FlaskConical,
  Globe,
  BrainCircuit,
  Users,
} from 'lucide-react'

const reasons = [
  {
    icon: TrendingUp,
    title: 'Strong Backend Foundation',
    description:
      'Deep practical knowledge of backend architecture using Laravel and Spring Boot. Comfortable with the full request lifecycle, from routing and middleware to database queries and API responses.',
  },
  {
    icon: Layers,
    title: 'Multi-Stack Competence',
    description:
      'Experience working across PHP and Java ecosystems, with frontend exposure via React. This cross-stack adaptability reduces onboarding friction and increases contribution velocity.',
  },
  {
    icon: FlaskConical,
    title: 'Real-World Project Experience',
    description:
      'All projects were built to solve real functional requirements — a booking platform, a mobile API client, and a production CMS site — not academic exercises or tutorials.',
  },
  {
    icon: Globe,
    title: 'Web and Mobile Coverage',
    description:
      'Capable of contributing to both web backend services and React Native mobile clients, making me useful across multiple product verticals within the same team.',
  },
  {
    icon: BrainCircuit,
    title: 'Structured Problem Solver',
    description:
      'Approach technical challenges with systematic thinking: understand the domain, model the data, design the interface, then implement. Prioritize clarity and correctness.',
  },
  {
    icon: Users,
    title: 'Team-Ready Developer',
    description:
      'Professional experience in a team environment using Git workflows, code reviews, and Agile task management. Understands the difference between writing code and delivering software.',
  },
]

export default function WhyHireMe() {
  return (
    <section id="why-hire" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-14">
          <span className="section-label">06 — Why Hire Me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            What I bring to your team
          </h2>
          <p className="text-muted-foreground max-w-xl">
            A direct, honest assessment. No buzzwords, no inflated claims — just
            concrete technical value and the mindset to keep growing.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-xl p-6 card-hover flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/5 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="relative bg-card border border-primary/20 rounded-2xl p-8 md:p-12 overflow-hidden">
          {/* Background glow */}
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, oklch(0.58 0.20 250) 0%, transparent 70%)',
            }}
          />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
                Let&apos;s build scalable and impactful digital products together.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I am actively seeking a junior developer position where I can
                contribute meaningfully from day one while continuing to grow as an
                engineer. If your team values structured thinking and technical
                discipline, I would welcome the opportunity to connect.
              </p>
            </div>

            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
