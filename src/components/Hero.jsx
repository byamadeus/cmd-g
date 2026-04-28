import { capabilities } from '../data'

export default function Hero() {
  return (
    <header className="min-h-screen flex flex-col justify-end px-6 pb-20 pt-40 max-w-7xl mx-auto">
      <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-12">
        <span className="text-neutral-500">⌘G</span> — Press to Group
      </p>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] max-w-5xl mb-0">
        Four designers.
        <br />
        Any industry.
        <br />
        <span className="text-neutral-500 italic">
          Any context.
          <span className="cursor-blink" />
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-16 bg-neutral-900 border border-neutral-900">
        {capabilities.map((cap) => (
          <div key={cap.id} className="bg-black p-8">
            <p className="font-mono text-xs text-neutral-500 mb-3"><span className="text-neutral-400">⌘</span>{cap.id}</p>
            <h3 className="text-lg font-medium mb-2">{cap.title}</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">{cap.desc}</p>
          </div>
        ))}
      </div>
    </header>
  )
}
