'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const NAV_LINKS = ['home', 'about', 'services', 'staff', 'contact'] as const

export default function Footer() {
  const { lang, t } = useLanguage()

  return (
    <footer style={{ background: 'linear-gradient(160deg, #08111c 0%, #1a2744 100%)' }} className="text-white">
      <div className="h-0.5 bg-[#c9a227]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-emblem.png"
                alt="HAMD logo"
                width={40}
                height={40}
                className="rounded-sm object-contain opacity-90"
              />
              <div>
                <p className="font-display text-[#c9a227] font-bold text-2xl leading-tight">{lang === 'en' ? 'HAMD' : 'حمد'}</p>
                <p className="text-white/30 text-[10px] tracking-widest uppercase leading-tight">
                  {lang === 'en' ? 'Foreign Employment Agent PLC' : 'مكتب حمد للإستقدام'}
                </p>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">{t.footer.tagline[lang]}</p>
          </div>

          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">
              {lang === 'en' ? 'Navigation' : 'روابط سريعة'}
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(key => (
                <li key={key}>
                  <a href={`#${key}`} className="text-white/45 hover:text-[#c9a227] text-sm transition-colors">
                    {t.nav[key][lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">
              {lang === 'en' ? 'Contact' : 'اتصل بنا'}
            </p>
            <ul className="space-y-2.5 text-sm text-white/45">
              <li>{t.contact.address[lang]}</li>
              <li>{t.contact.phone1[lang]}</li>
              <li>{t.contact.phone2[lang]}</li>
              <li>
                <a href={`mailto:${t.contact.email[lang]}`} className="hover:text-[#c9a227] transition-colors">
                  {t.contact.email[lang]}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-7 text-center">
          <p className="text-white/25 text-xs">{t.footer.copyright[lang]}</p>
        </div>
      </div>
    </footer>
  )
}
