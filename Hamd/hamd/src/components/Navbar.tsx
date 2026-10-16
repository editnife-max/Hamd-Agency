'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const NAV_LINKS = ['home', 'about', 'services', 'staff', 'contact'] as const

export default function Navbar() {
  const { lang, dir, t, toggle } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      dir={dir}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? 'bg-[#08111c]/97 border-white/10 backdrop-blur-md'
          : 'bg-[#08111c]/70 border-white/5 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <a href="#home" onClick={close} className="flex items-center gap-3 group">
            <Image
              src="/images/logo-emblem.png"
              alt="HAMD logo"
              width={38}
              height={38}
              className="rounded-sm object-contain shrink-0 transition-opacity duration-200 group-hover:opacity-85"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[#c9a227] font-bold text-xl tracking-wide group-hover:text-[#dbb42c] transition-colors">{lang === 'en' ? 'HAMD' : 'حمد'}</span>
              <span className="text-white/35 text-[10px] tracking-widest hidden sm:block">
                {lang === 'en' ? 'Foreign Employment Agent PLC' : 'مكتب حمد للإستقدام'}
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((key) => (
              <a key={key} href={`#${key}`}
                className="relative px-4 py-2 text-white/60 hover:text-[#c9a227] text-sm font-medium transition-colors duration-200
                  after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-[#c9a227]
                  after:scale-x-0 after:origin-center after:transition-transform after:duration-200
                  hover:after:scale-x-100">
                {t.nav[key][lang]}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggle}
              className="px-3 py-1.5 border border-[#c9a227]/50 text-[#c9a227] rounded text-xs font-semibold
                hover:bg-[#c9a227] hover:text-[#1a2744] hover:-translate-y-px active:translate-y-0
                transition-all duration-150">
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <button onClick={() => setOpen(v => !v)}
              className="md:hidden text-white/70 p-1.5 rounded hover:bg-white/10 transition-colors"
              aria-label="Menu"
              aria-expanded={open}>
              <span className={`block transition-all duration-200 ${open ? 'rotate-90 opacity-100' : 'rotate-0'}`}>
                {open ? <X size={20} /> : <Menu size={20} />}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer — CSS max-height transition instead of unmount */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-[#08111c]/97 border-t border-white/10 ${
          open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {NAV_LINKS.map((key) => (
          <a key={key} href={`#${key}`} onClick={close}
            className="flex items-center px-6 py-3.5 text-white/60 hover:text-[#c9a227] hover:bg-white/5 text-sm font-medium transition-colors border-b border-white/5 last:border-0">
            {t.nav[key][lang]}
          </a>
        ))}
      </div>
    </nav>
  )
}
