'use client'

import { Home } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Services() {
  const { lang, t } = useLanguage()
  const s = t.services

  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#1a5c28] text-xs font-bold tracking-widest uppercase mb-2">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4">{s.title[lang]}</h2>
          <div className="w-12 h-1 bg-[#c9a227] mx-auto mb-4" />
          <p className="text-gray-500 text-sm">{s.subtitle[lang]}</p>
        </div>

        <div className="bg-[#1a2744] rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-lg">
          <div className="w-16 h-16 rounded-xl bg-[#c9a227] flex items-center justify-center shrink-0">
            <Home size={28} className="text-[#1a2744]" />
          </div>
          <div>
            <h3 className="text-white font-bold text-xl mb-2">{s.items[0][lang]}</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {lang === 'en' ? s.items[0].desc_en : s.items[0].desc_ar}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
