import { useState } from 'react'
import { capabilities } from '../data'

const DETAIL = {
  '01': {
    tags: ['User Research', 'Journey Mapping', 'Interaction Design', 'Usability Testing', 'Design Systems'],
    stat: '12+',
    statLabel: 'product teams advised',
  },
  '02': {
    tags: ['Logo Systems', 'Visual Identity', 'Brand Guidelines', 'Typography', 'Design Tokens'],
    stat: '20+',
    statLabel: 'brands built from scratch',
  },
  '03': {
    tags: ['Narrative Structure', 'Investor Decks', 'Sales Decks', 'Data Visualization', 'Storytelling'],
    stat: '$XM+',
    statLabel: 'raised with our decks',
  },
}

export default function Capabilities() {
  const [active, setActive] = useState(null)

  return (
    <section id="capabilities" className="border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

        {/* Sticky left */}
        <div className="lg:w-[38%] lg:sticky lg:top-20 lg:self-start px-6 pt-32 pb-12 lg:pb-32">
          <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-10">
            <span className="text-neutral-300">⌘S</span> our capabilities.
          </p>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] mb-8">
            What<br />we do.
          </h2>
          <p className="text-neutral-400 leading-relaxed max-w-xs">
            Full design spectrum — first sketch to shipped product.
            Across industries, contexts, and constraints.
          </p>

          {/* Active nav dots */}
          <div className="hidden lg:flex flex-col gap-3 mt-16">
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => {
                  document.getElementById(`cap-${cap.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}
                className={`text-left font-mono text-xs transition ${
                  active === cap.id ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                <span className={active === cap.id ? 'text-neutral-400' : 'text-neutral-500'}>⌘</span>{cap.id} {cap.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right: large capability panels */}
        <div className="lg:w-[62%] lg:border-l border-neutral-900">
          {capabilities.map((cap, i) => {
            const detail = DETAIL[cap.id]
            return (
              <CapPanel
                key={cap.id}
                cap={cap}
                detail={detail}
                isLast={i === capabilities.length - 1}
                onEnter={() => setActive(cap.id)}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}

function CapPanel({ cap, detail, isLast, onEnter }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      id={`cap-${cap.id}`}
      onMouseEnter={() => { setHovered(true); onEnter() }}
      onMouseLeave={() => setHovered(false)}
      className={`relative px-8 lg:px-16 py-24 lg:py-32 flex flex-col justify-between min-h-[70vh] transition-colors duration-500 ${
        hovered ? 'bg-neutral-900' : 'bg-neutral-950'
      } ${!isLast ? 'border-b border-neutral-900' : ''}`}
    >
      <div>
        <div className="flex items-start justify-between mb-12">
          <span className="font-mono text-xs text-neutral-500">
            <span className="text-neutral-400">⌘</span>{cap.id}
          </span>
          <span
            className={`font-mono text-xs transition-opacity duration-300 ${
              hovered ? 'opacity-100 text-white' : 'opacity-0'
            }`}
          >
            ↗
          </span>
        </div>

        <h3
          className={`text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] transition-colors duration-300 ${
            hovered ? 'text-white' : 'text-neutral-300'
          }`}
        >
          {cap.title}
        </h3>
      </div>

      {/* Bottom: desc + tags + stat */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
        <p className="text-neutral-400 leading-relaxed">{cap.desc}</p>

        <div className="flex flex-col gap-6">
          {/* Stat */}
          <div>
            <p
              className={`text-5xl font-medium tracking-tight transition-colors duration-300 ${
                hovered ? 'text-white' : 'text-neutral-500'
              }`}
            >
              {detail.stat}
            </p>
            <p className="font-mono text-xs text-neutral-500 mt-1">{detail.statLabel}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {detail.tags.map((tag) => (
              <span
                key={tag}
                className={`font-mono text-xs uppercase px-2 py-1 border transition-colors duration-300 ${
                  hovered
                    ? 'border-neutral-500 text-neutral-300'
                    : 'border-neutral-700 text-neutral-500'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
