'use client'

import { Home, Car, Wrench, Stethoscope, Shield, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const ICONS: Record<string, LucideIcon> = { Home, Car, Wrench, Stethoscope, Shield, Briefcase }

export default function Services() {
  const { lang, t } = useLanguage()
  const s = t.services

  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#1a5c28] text-xs font-bold tracking-widest uppercase mb-2">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4">{s.title[lang]}</h2>
          <div className="w-12 h-1 bg-[#c9a227] mx-auto mb-4" />
          <p className="text-gray-500 text-sm">{s.subtitle[lang]}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.items.map((item, i) => {
            const Icon = ICONS[item.icon]
            const featured = i === 0
            return (
              <div
                key={item.en}
                className={`relative rounded-xl p-6 border transition-shadow hover:shadow-md ${
                  featured
                    ? 'bg-[#1a2744] border-[#c9a227]/40 text-white'
                    : 'bg-[#f8f5be] border-transparent text-[#1a2744]'
                }`}
              >
                {featured && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold bg-[#c9a227] text-[#1a2744] px-2 py-0.5 rounded-full tracking-wide uppercase">
                    {lang === 'en' ? 'Primary' : 'رئيسي'}
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  featured ? 'bg-[#c9a227]' : 'bg-[#1a2744]'
                }`}>
                  <Icon size={22} className={featured ? 'text-[#1a2744]' : 'text-[#c9a227]'} />
                </div>
                <h3 className={`font-bold text-base mb-2 ${featured ? 'text-white' : 'text-[#1a2744]'}`}>
                  {item[lang]}
                </h3>
                <p className={`text-sm leading-relaxed ${featured ? 'text-white/60' : 'text-gray-500'}`}>
                  {lang === 'en' ? item.desc_en : item.desc_ar}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
