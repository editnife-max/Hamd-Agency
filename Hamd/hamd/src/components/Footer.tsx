'use client'

import { useLanguage } from '@/context/LanguageContext'

const NAV_LINKS = ['home', 'about', 'services', 'staff', 'contact'] as const

export default function Footer() {
  const { lang, t } = useLanguage()

  return (
    <footer className="bg-[#1a2744] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-8">
          {/* Logo */}
          <div className="text-center">
            <span className="text-[#c9a227] font-bold text-2xl tracking-wide">
              {lang === 'ar' ? 'مكتب حمد للإستقدام' : 'HAMD Foreign Employment Agent PLC'}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-white/60 text-sm text-center max-w-sm">
            {t.footer.tagline[lang]}
          </p>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-4">
            {NAV_LINKS.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-white/70 hover:text-[#c9a227] text-sm transition-colors"
              >
                {t.nav[key][lang]}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-xs">{t.footer.copyright[lang]}</p>
        </div>
      </div>
    </footer>
  )
}
