import { Server, Smartphone, Database, Code2, GitBranch, Globe } from 'lucide-react'

const traits = [
  {
    icon: Server,
    title: 'Backend-Oriented Mindset',
    description:
      'Primary focus on server-side logic, API design, and data modeling. Experience with Laravel MVC and Spring Boot service architecture.',
  },
  {
    icon: Code2,
    title: 'Multi-Stack Fluency',
    description:
      'Comfortable working across PHP (Laravel) and Java (Spring Boot), enabling practical flexibility across different project ecosystems.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description:
      'Hands-on experience with relational schema design, normalization, complex SQL queries, and query optimization using MySQL.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Cross-platform app development with React Native — navigation, REST API integration, state management, and async storage.',
  },
  {
    icon: Globe,
    title: 'Web & CMS Exposure',
    description:
      'Built production websites using WordPress with Elementor, responsive layout design, and SEO-friendly content structure.',
  },
  {
    icon: GitBranch,
    title: 'Collaborative Workflow',
    description:
      'Versioned code with Git and GitHub in a team environment, following feature branching, pull requests, and agile practices.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-28"
      style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        {/* Section header */}
        <div className="flex flex-col gap-3 mb-14 fade-up">
          <span className="label">About</span>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight text-balance"
            style={{ color: '#111827' }}
          >
            A developer focused on solid foundations
          </h2>
          <p
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: '#4B5563' }}
          >
            I approach development as an engineering discipline — building systems
            that are correct, maintainable, and structured. My strengths lie in the
            backend layer: RESTful API design, relational database modeling, and
            business logic implementation. I am comfortable working across web and
            mobile, and I bring production-level thinking to every project I build.
          </p>
        </div>

        {/* Facts row */}
        <div
          className="fade-up delay-1 grid grid-cols-2 sm:grid-cols-4 gap-px mb-14 rounded-xl overflow-hidden"
          style={{ border: '1px solid #E5E7EB' }}
        >
          {[
            { label: 'Location',  value: 'Spain' },
            { label: 'Focus',     value: 'Backend & Full-Stack' },
            { label: 'Status',    value: 'Open to Work' },
            { label: 'Languages', value: 'ES · EN · AR' },
          ].map((f, i) => (
            <div
              key={f.label}
              className="flex flex-col gap-1 px-5 py-4"
              style={{
                background: '#FFFFFF',
                borderRight: i < 3 ? '1px solid #E5E7EB' : 'none',
              }}
            >
              <span
                className="text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: '#9CA3AF' }}
              >
                {f.label}
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: '#111827' }}
              >
                {f.value}
              </span>
            </div>
          ))}
        </div>

        {/* Traits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {traits.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`fade-up delay-${Math.min(i + 1, 5)} card p-5 flex flex-col gap-3`}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}
              >
                <Icon size={16} style={{ color: '#2563EB' }} />
              </div>
              <h3
                className="text-sm font-semibold"
                style={{ color: '#111827' }}
              >
                {title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: '#6B7280' }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
