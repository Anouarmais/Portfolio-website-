import { Server, Smartphone, Globe, Database, Wrench } from 'lucide-react'

const categories = [
  {
    icon: Server,
    label: 'Backend',
    skills: [
      'PHP',
      'Laravel',
      'MVC Architecture',
      'Eloquent ORM',
      'Middleware & Auth',
      'Java',
      'Spring Boot',
      'Controllers & Services',
      'Dependency Injection',
      'RESTful API Design',
      'JWT Authentication',
      'Role-Based Authorization',
    ],
  },
  {
    icon: Smartphone,
    label: 'Mobile',
    skills: [
      'React Native',
      'Stack Navigation',
      'Tab Navigation',
      'API Integration',
      'Axios / Fetch',
      'Async Storage',
      'State Management',
      'Functional Components',
    ],
  },
  {
    icon: Globe,
    label: 'Frontend',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript ES6+',
      'React',
      'Responsive Design',
      'Flexbox & Grid',
    ],
  },
  {
    icon: Database,
    label: 'Database',
    skills: [
      'MySQL',
      'SQL Queries',
      'JOINs & Subqueries',
      'Indexing',
      'Query Optimization',
      'Relational Modeling',
      'Data Normalization',
    ],
  },
  {
    icon: Wrench,
    label: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Environment Config (.env)',
      'Deployment Basics',
      'Agile / Scrum',
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
      style={{ background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col gap-3 mb-14 fade-up">
       
          <span className="text-blue-600 font-semibold text-lg uppercase">Skills</span>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight text-balance"
            style={{ color: '#111827' }}
          >
            Technical capabilities by domain
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl"
            style={{ color: '#4B5563' }}
          >
            Organized by practice area. Each entry reflects genuine, hands-on experience
            from project work and professional exposure.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-5">
          {categories.map(({ icon: Icon, label, skills }, i) => (
            <div
              key={label}
              className={`fade-up delay-${Math.min(i + 1, 5)} card p-6 flex flex-col gap-4`}
              style={{ background: '#FFFFFF' }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}
                >
                  <Icon size={15} style={{ color: '#2563EB' }} />
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: '#111827' }}
                >
                  {label}
                </span>
                <span
                  className="ml-auto text-xs"
                  style={{ color: '#9CA3AF' }}
                >
                  {skills.length} skills
                </span>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
