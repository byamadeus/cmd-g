import { clients } from '../data'

const Sep = () => (
  <span className="font-mono text-xs text-neutral-600 px-4 shrink-0">·</span>
)

const Items = () => (
  <>
    {/* <span className="font-mono text-xs text-neutral-600 uppercase tracking-widest px-10 shrink-0">
      Selected Clients
    </span> */}
    {clients.map((client, i) => (
      <span key={i} className="flex items-center shrink-0">
        <Sep />
        <span className="text-xl font-medium text-neutral-400 px-6 hover:text-white transition cursor-default">
          {client}
        </span>
      </span>
    ))}
    {/* <Sep /> */}
  </>
)

export default function Marquee() {
  return (
    <section className="border-y border-neutral-900 overflow-hidden">
      <div className="marquee-track">
        <Items />
        <Items />
      </div>
    </section>
  )
}
