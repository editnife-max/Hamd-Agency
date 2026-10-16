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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a2744]/95 backdrop-blur-md border-b border-white/10" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <a href="#home" onClick={close} className="flex flex-col leading-tight">
            <span className="font-display text-[#c9a227] font-bold text-xl tracking-wide">HAMD</span>
            <span className="text-white/35 text-[10px] tracking-widest hidden sm:block">Foreign Employment Agent PLC</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((key) => (
              <a key={key} href={`#${key}`}
                className="px-4 py-2 text-white/60 hover:text-white text-sm font-medium transition-colors border-b-2 border-transparent hover:border-[#c9a227] hover:text-[#c9a227]">
                {t.nav[key][lang]}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggle}
              className="px-3 py-1.5 border border-[#c9a227]/50 text-[#c9a227] rounded text-xs font-semibold hover:bg-[#c9a227] hover:text-[#1a2744] transition-colors">
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <button onClick={() => setOpen(v => !v)}
              className="md:hidden text-white/70 p-1.5 rounded hover:bg-white/10 transition-colors"
              aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#1a2744] border-t border-white/10">
          {NAV_LINKS.map((key) => (
            <a key={key} href={`#${key}`} onClick={close}
              className="flex items-center px-6 py-3 text-white/60 hover:text-[#c9a227] hover:bg-white/5 text-sm font-medium transition-colors">
              {t.nav[key][lang]}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
