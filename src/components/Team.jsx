import { team } from '../data'

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-medium tracking-tight mb-3">
            The Command Group
          </h2>
          <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
            <span className="text-neutral-300">⌘G</span> — Four independent practices. One shortcut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-900">
          {team.map((member) => (
            <a
              key={member.id}
              href={member.url}
              target="_blank"
              rel="noreferrer"
              className="block bg-black p-8 group hover:bg-neutral-950 transition border border-transparent hover:border-neutral-800"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-xs text-neutral-500">{member.id}</span>
                <span className="font-mono text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition">
                  ↗
                </span>
              </div>
              <h3 className="text-xl font-medium mb-1">{member.name}</h3>
              <p className="font-mono text-xs text-neutral-500 mb-6">{member.specialty}</p>
              <span className="font-mono text-xs text-neutral-500 group-hover:text-white transition underline underline-offset-4 decoration-neutral-700">
                {member.urlLabel}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
