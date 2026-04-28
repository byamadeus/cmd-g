import { useState } from 'react'
import { EMAIL, team } from '../data'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contact" className="border-t border-neutral-900 px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
          <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-8">
            <span className="text-neutral-300">⌘R</span> your life.
          </p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight mb-10">
            Ready to
            <br />
            group up?
          </h2>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 text-base font-medium hover:bg-neutral-200 transition-colors group"
          >
            <span>{copied ? '✓ copied' : '⌘C our email'}</span>
            {!copied && (
              <span className="font-mono text-xs border border-black/20 px-2 py-1 group-hover:border-black/40 transition">
                ⌘C
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-neutral-900 pt-10">
          <div>
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <span className="text-neutral-400">⌘</span>+G
            </p>
            <p className="font-mono text-xs text-neutral-500">
              © {new Date().getFullYear()} — Design in Context.
            </p>
          </div>
          <div className="flex gap-8">
            {team.map((member) => (
              <a
                key={member.id}
                href={member.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-neutral-500 hover:text-white transition"
              >
                {member.name.split(' ')[0]} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
