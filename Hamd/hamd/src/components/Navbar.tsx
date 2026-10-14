'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const NAV_LINKS = ['home', 'about', 'services', 'staff', 'contact'] as const

export default function Navbar() {
  const { lang, dir, t, toggle } = useLanguage()
  const [open, setOpen] = useState(false)

  const handleNavClick = () => setOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a5c28] shadow-md" dir={dir}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" onClick={handleNavClick} className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="HAMD Foreign Employment Agent PLC"
              width={130}
              height={44}
              className="object-contain h-11 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-white/80 hover:text-[#c9a227] text-sm font-medium transition-colors"
              >
                {t.nav[key][lang]}
              </a>
            ))}
            <button
              onClick={toggle}
              className="ml-4 px-3 py-1.5 border border-[#c9a227] text-[#c9a227] rounded text-sm font-medium hover:bg-[#c9a227] hover:text-[#1a5c28] transition-colors"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggle}
              className="px-2.5 py-1 border border-[#c9a227] text-[#c9a227] rounded text-xs font-medium"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-white p-1"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a5c28] border-t border-white/10 px-4 pb-4 pt-2">
          {NAV_LINKS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={handleNavClick}
              className="block py-2 text-white/80 hover:text-[#c9a227] text-sm font-medium"
            >
              {t.nav[key][lang]}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
