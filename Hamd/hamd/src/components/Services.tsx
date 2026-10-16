'use client'

import { Home, Car, Heart, Briefcase } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Home, Car, Heart, Briefcase,
}

export default function Services() {
  const { lang, t } = useLanguage()
  const s = t.services

  return (
    <section id="services" className="py-24 px-4"
      style={{ background: 'linear-gradient(160deg, #08111c 0%, #1a2744 100%)' }}>
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {s.title[lang]}
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a227] mb-5" />
          <p className="text-white/40 text-base max-w-sm">{s.subtitle[lang]}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {s.items.map((item) => {
            const Icon = ICON_MAP[item.icon] ?? Home
            return (
              <div key={item.en}
                className="group border border-white/10 rounded-2xl p-8 hover:border-[#c9a227]/40 hover:bg-white/5 transition-all">
                <Icon size={32} className="text-[#c9a227] mb-6" />
                <h3 className="font-display text-white font-semibold text-2xl mb-3">
                  {lang === 'en' ? item.en : item.ar}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {lang === 'en' ? item.desc_en : item.desc_ar}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/40 text-sm max-w-md">
            {lang === 'en'
              ? 'Every worker is screened, trained, and documented before placement.'
              : 'كل عامل يتم فحصه وتدريبه وتوثيقه قبل التوظيف.'}
          </p>
          <a href="#contact"
            className="shrink-0 bg-[#c9a227] text-[#08111c] font-bold px-8 py-3.5 rounded-lg hover:bg-[#dbb42c] transition-colors text-sm shadow-lg shadow-[#c9a227]/20">
            {lang === 'en' ? 'Request Staff' : 'اطلب موظفين'}
          </a>
        </div>

      </div>
    </section>
  )
}
