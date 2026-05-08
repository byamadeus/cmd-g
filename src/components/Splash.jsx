import { useState, useEffect, useRef } from 'react'
import { EMAIL, clients } from '../data'
import logo from '../assets/logo.svg'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ✏️  EDIT HERE — words that cycle in "We'll ___ it."
// Last word is the snarky one. Keep it short.
const WORDS = ['Brand', 'Print', 'Build', 'Deck', 'Market', 'Do']

// ✏️  EDIT HERE — timing (milliseconds)
const SCRAMBLE_MS = 380   // how long the glitch scramble lasts
const HOLD_MS     = 1800  // how long each word stays readable
const CHARS       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#@$%&?!'
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function useScramble(words, scrambleMs, holdMs, chars) {
  const [display, setDisplay] = useState(words[0])
  const frameRef = useRef(null)
  const timerRef = useRef(null)

  useEffect(() => {
    let index = 0

    const run = () => {
      const target = words[index]
      const start  = Date.now()

      const tick = () => {
        const elapsed  = Date.now() - start
        const progress = Math.min(elapsed / scrambleMs, 1)
        const revealed = Math.floor(progress * target.length)

        setDisplay(
          target
            .split('')
            .map((ch, i) =>
              i < revealed
                ? ch
                : chars[Math.floor(Math.random() * chars.length)]
            )
            .join('')
        )

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick)
        } else {
          setDisplay(target)
          timerRef.current = setTimeout(() => {
            index = (index + 1) % words.length
            run()
          }, holdMs)
        }
      }

      frameRef.current = requestAnimationFrame(tick)
    }

    run()

    return () => {
      cancelAnimationFrame(frameRef.current)
      clearTimeout(timerRef.current)
    }
  }, [])

  return display
}

// Marquee inline (avoids importing the section variant)
const Sep = () => <span className="text-neutral-600 px-6 shrink-0">·</span>

function ClientMarquee() {
  const Items = () => (
    <>
      {clients.map((c, i) => (
        <span key={i} className="flex items-center shrink-0">
          <Sep />
          <span className="text-base font-medium text-neutral-500 px-4 hover:text-white transition cursor-default">
            {c}
          </span>
        </span>
      ))}
      <Sep />
    </>
  )
  return (
    <div className="py-8 border-t border-neutral-900 overflow-hidden">
      <div className="marquee-track">
        <Items /><Items />
      </div>
    </div>
  )
}

export default function Splash() {
  const [copied, setCopied] = useState(false)
  const word = useScramble(WORDS, SCRAMBLE_MS, HOLD_MS, CHARS)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-6 shrink-0">
        <a href="/">
          <img src={logo} alt="CMD+G" className="h-[11px] w-auto opacity-90 hover:opacity-100 transition" />
        </a>
        <button
          onClick={copyEmail}
          className="font-mono text-base border border-neutral-800 px-4 py-2 text-neutral-400 hover:border-white hover:text-white transition"
        >
          {copied ? '[ ✓ copied ]' : '[ ⌘C our email ]'}
        </button>
      </nav>

      {/* Hero — fills remaining viewport height */}
      <main className="flex-1 flex flex-col justify-end px-8 pb-16 min-h-[calc(100vh-72px)]">

        {/* Eyebrow */}
        <p className="font-mono text-base text-neutral-500 uppercase tracking-widest mb-10">
          <span className="text-neutral-300">⌘G</span> — Press to Group
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tight leading-[1.05] mb-14">
          Four Designers.
          <br />
          Any Context.
          <br />
          We'll{' '}
          <span className="text-neutral-400 font-mono">
            {word}
          </span>{' '}
          it.
        </h1>

        {/* CTA */}
        <div>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 text-base font-medium hover:bg-neutral-200 transition-colors group"
          >
            <span>{copied ? '✓ Copied to clipboard' : '⌘G — Group up'}</span>
            {!copied && (
              <span className="font-mono text-xs border border-black/20 px-2 py-1 group-hover:border-black/40 transition">
                ⌘C
              </span>
            )}
          </button>
        </div>

      </main>

      {/* Marquee — just below the fold, visible on slightest scroll */}
      <ClientMarquee />

    </div>
  )
}
