import { caseStudies } from '../data'

function LargeTile({ study }) {
  return (
    <div className="bg-black group cursor-pointer">
      <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 relative overflow-hidden flex items-center justify-center">
        <span className="font-mono text-xs text-neutral-500">{study.client}</span>
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="font-mono text-xs border border-white/30 px-4 py-2">
            Case Study ↗
          </span>
        </div>
      </div>
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {study.roles.map((role, i) => (
            <span
              key={i}
              className="font-mono text-xs border border-neutral-700 px-2 py-1 text-neutral-400 uppercase"
            >
              {role}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-medium mb-2">{study.client}</h3>
        <p className="text-lg text-neutral-400 mb-3">{study.title}</p>
        {study.description && (
          <p className="text-sm text-neutral-500 leading-relaxed">{study.description}</p>
        )}
      </div>
    </div>
  )
}

function SmallTile({ study }) {
  return (
    <div className="bg-black group cursor-pointer">
      <div className="aspect-video bg-neutral-950 border border-neutral-900 relative overflow-hidden flex items-center justify-center">
        <span className="font-mono text-xs text-neutral-500">{study.client}</span>
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="font-mono text-xs border border-white/30 px-3 py-1.5">↗</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {study.roles.map((role, i) => (
            <span
              key={i}
              className="font-mono text-xs border border-neutral-700 px-2 py-1 text-neutral-400 uppercase"
            >
              {role}
            </span>
          ))}
        </div>
        <h3 className="text-base font-medium">{study.client}</h3>
      </div>
    </div>
  )
}

export default function Work() {
  const large = caseStudies.filter((s) => s.span === 'large')
  const small = caseStudies.filter((s) => s.span === 'small')

  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-baseline mb-20 border-b border-neutral-900 pb-6">
        <h2 className="text-3xl font-medium tracking-tight">
          ⌘O this project.
        </h2>
        <span className="font-mono text-xs text-neutral-500 hidden md:block">
          — add images + links when ready
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 mb-px">
        {large.map((study) => (
          <LargeTile key={study.id} study={study} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900">
        {small.map((study) => (
          <SmallTile key={study.id} study={study} />
        ))}
      </div>
    </section>
  )
}
