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
      style={{ background: 'linear-gradient(160deg, #09131f 0%, #1a2744 100%)' }}>
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">{s.title[lang]}</h2>
          <div className="w-14 h-0.5 bg-[#c9a227] mx-auto mb-4" />
          <p className="text-white/45 text-sm max-w-md mx-auto">{s.subtitle[lang]}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {s.items.map((item) => {
            const Icon = ICON_MAP[item.icon] ?? Home
            return (
              <div key={item.en}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#c9a227]/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#c9a227]/10 border border-[#c9a227]/20 flex items-center justify-center mb-5 group-hover:bg-[#c9a227]/20 transition-colors">
                  <Icon size={22} className="text-[#c9a227]" />
                </div>
                <h3 className="font-display text-white font-semibold text-lg mb-2">
                  {lang === 'en' ? item.en : item.ar}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {lang === 'en' ? item.desc_en : item.desc_ar}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-12 text-center">
          <a href="#contact"
            className="inline-flex items-center gap-2 bg-[#c9a227] text-[#09131f] font-bold px-8 py-3.5 rounded-lg hover:bg-[#dbb42c] transition-colors text-sm shadow-lg shadow-[#c9a227]/20">
            {lang === 'en' ? 'Request Staff Now' : 'اطلب موظفين الآن'}
          </a>
        </div>

      </div>
    </section>
  )
}
