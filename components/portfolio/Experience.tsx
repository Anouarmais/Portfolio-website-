import { CheckCircle2 } from 'lucide-react'

const areas = [
  {
    title: 'Frontend',
    items: [
      'Built React components with props-driven state management',
      'Consumed REST APIs and handled asynchronous data flows',
      'Resolved UI defects and improved component structure',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Developed Spring Boot service layer and controller methods',
      'Wrote SQL queries for relational data retrieval and aggregation',
      'Implemented REST API endpoints for feature requirements',
      'Applied business logic, validation rules, and error handling',
    ],
  },
  {
    title: 'Workflow',
    items: [
      'Managed code through Git with feature branch strategy',
      'Participated in agile sprints and task tracking',
      'Refactored existing code for improved readability',
      'Used Postman for API testing and contract verification',
    ],
  },
]

const techUsed = [
  'React', 'Spring Boot', 'Java', 'MySQL',
  'REST APIs', 'Git', 'GitHub', 'Postman', 'Agile / Scrum',
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28"
      style={{ background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col gap-3 mb-14 fade-up">
          <span className="label">Experience</span>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight text-balance"
            style={{ color: '#111827' }}
          >
            Professional development exposure
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl"
            style={{ color: '#4B5563' }}
          >
            One year contributing to a real-world web application in a structured
            team environment with production-level code and delivery workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">

          {/* Main card */}
          <div
            className="fade-up delay-1 card p-8 flex flex-col gap-8"
            style={{ background: '#FFFFFF' }}
          >
            {/* Role */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3">
                <h3
                  className="text-lg font-bold"
                  style={{ color: '#111827' }}
                >
                  Junior Developer
                </h3>
                <span className="badge">1 Year</span>
              </div>
              <p
                className="text-sm"
                style={{ color: '#6B7280' }}
              >
                Web Application Project &nbsp;·&nbsp; Development Team
              </p>
            </div>

            {/* Description */}
            <p
              className="text-sm leading-relaxed pt-6"
              style={{ color: '#4B5563', borderTop: '1px solid #F3F4F6' }}
            >
              Contributed to the development of a web application within a structured
              team. Worked across frontend and backend layers of the stack, gaining
              direct exposure to production-level code, collaborative engineering
              practices, and delivery workflows. Participated in feature development,
              bug fixing, and code refactoring in an agile environment.
            </p>

            {/* Contribution areas */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4" style={{ borderTop: '1px solid #F3F4F6' }}>
              {areas.map(area => (
                <div key={area.title} className="flex flex-col gap-3">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#9CA3AF' }}
                  >
                    {area.title}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {area.items.map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2
                          size={13}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: '#2563EB' }}
                        />
                        <span
                          className="text-xs leading-relaxed"
                          style={{ color: '#4B5563' }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">

            {/* Tech */}
            <div
              className="fade-up delay-2 card p-6 flex flex-col gap-4"
              style={{ background: '#FFFFFF' }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#9CA3AF' }}
              >
                Technologies Used
              </p>
              <div className="flex flex-wrap gap-2">
                {techUsed.map(t => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>

            {/* Reflection */}
            <div
              className="fade-up delay-3 rounded-xl p-5 flex flex-col gap-2"
              style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: '#2563EB' }}
              >
                Key Takeaway
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#1E40AF' }}
              >
                Gained direct exposure to how production software is designed, tested,
                and shipped in a team setting — beyond academic project experience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
