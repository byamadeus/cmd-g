import { useState, useEffect } from 'react'
import { EMAIL } from '../data'
import logo from '../assets/logo.svg'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'border-b border-neutral-900 bg-black/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <a href="#" className="flex items-center gap-2.5 group">
        <img
          src={logo}
          alt="CMD+G"
          className="h-[20px] w-auto opacity-90 group-hover:opacity-100 transition"
        />
      </a>

      <div className="flex items-center gap-8">
        <a href="#work" className="font-mono text-xs text-neutral-500 hover:text-white transition hidden md:block">
          Work
        </a>
        <a href="#capabilities" className="font-mono text-xs text-neutral-500 hover:text-white transition hidden md:block">
          Capabilities
        </a>
        <a href="#team" className="font-mono text-xs text-neutral-500 hover:text-white transition hidden md:block">
          Team
        </a>
        <button
          onClick={copyEmail}
          className="font-mono text-xs border border-neutral-800 px-4 py-2 text-neutral-400 hover:border-white hover:text-white transition"
        >
          {copied ? '[ ✓ copied ]' : '[ ⌘C our email ]'}
        </button>
      </div>
    </nav>
  )
}
