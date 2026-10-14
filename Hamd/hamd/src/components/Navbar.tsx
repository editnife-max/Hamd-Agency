'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const NAV_LINKS = ['home', 'about', 'services', 'staff', 'contact'] as const

export default function Navbar() {
  const { lang, dir, t, toggle } = useLanguage()
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a2744] border-b border-white/10" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand name */}
          <a href="#home" onClick={close} className="flex flex-col leading-tight">
            <span className="text-[#c9a227] font-bold text-lg tracking-wide">HAMD</span>
            <span className="text-white/40 text-[10px] tracking-widest uppercase hidden sm:block">Foreign Employment Agent PLC</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((key) => (
              <a key={key} href={`#${key}`}
                className="px-3 py-2 text-white/70 hover:text-white text-sm font-medium rounded transition-colors hover:bg-white/5">
                {t.nav[key][lang]}
              </a>
            ))}
          </div>

          {/* Lang + hamburger */}
          <div className="flex items-center gap-2">
            <button onClick={toggle}
              className="px-3 py-1.5 border border-[#c9a227]/60 text-[#c9a227] rounded text-xs font-semibold hover:bg-[#c9a227] hover:text-[#1a2744] transition-colors">
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <button onClick={() => setOpen(v => !v)}
              className="md:hidden text-white/80 p-1.5 rounded hover:bg-white/10 transition-colors"
              aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#1a2744] border-t border-white/10">
          {NAV_LINKS.map((key) => (
            <a key={key} href={`#${key}`} onClick={close}
              className="flex items-center px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">
              {t.nav[key][lang]}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
