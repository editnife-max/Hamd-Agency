'use client'

import { useLanguage } from '@/context/LanguageContext'

const NAV_LINKS = ['home', 'about', 'services', 'staff', 'contact'] as const

export default function Footer() {
  const { lang, t } = useLanguage()

  return (
    <footer className="bg-[#1a2744] text-white">
      {/* Gold top line */}
      <div className="h-1 bg-[#c9a227]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="text-[#c9a227] font-bold text-xl tracking-wide">HAMD</p>
              <p className="text-white/40 text-[10px] tracking-widest uppercase">Foreign Employment Agent PLC</p>
            </div>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs">{t.footer.tagline[lang]}</p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[#c9a227] text-xs font-bold tracking-widest uppercase mb-4">
              {lang === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map(key => (
                <li key={key}>
                  <a href={`#${key}`} className="text-white/50 hover:text-white text-sm transition-colors">
                    {t.nav[key][lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact summary */}
          <div>
            <p className="text-[#c9a227] text-xs font-bold tracking-widest uppercase mb-4">
              {lang === 'en' ? 'Contact' : 'اتصل بنا'}
            </p>
            <ul className="space-y-2 text-sm text-white/50">
              <li>{t.contact.address[lang]}</li>
              <li>{t.contact.phone1[lang]}</li>
              <li>{t.contact.phone2[lang]}</li>
              <li>
                <a href={`mailto:${t.contact.email[lang]}`} className="hover:text-white transition-colors">
                  {t.contact.email[lang]}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/30 text-xs">{t.footer.copyright[lang]}</p>
        </div>
      </div>
    </footer>
  )
}
