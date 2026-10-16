'use client'

import { Home, Car, Heart, Briefcase, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimateIn from './AnimateIn'

const ICON_MAP: Record<string, LucideIcon> = {
  Home, Car, Heart, Briefcase,
}

export default function Services() {
  const { lang, t } = useLanguage()
  const s = t.services

  return (
    <section id="services" className="py-24 px-4"
      style={{ background: 'linear-gradient(160deg, #08111c 0%, #1a2744 100%)' }}>
      <div className="max-w-6xl mx-auto">

        <AnimateIn className="mb-14">
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-4">
            {lang === 'en' ? 'What We Offer' : 'ما نقدمه'}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {s.title[lang]}
          </h2>
          <div className="w-10 h-0.5 bg-[#c9a227] mb-5" />
          <p className="text-white/45 text-base max-w-sm">{s.subtitle[lang]}</p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {s.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Home
            return (
              <AnimateIn key={item.en} delay={i * 90}>
                <div className="group relative border border-white/[0.08] rounded-2xl p-7 h-full
                  hover:border-[#c9a227]/35 hover:bg-white/[0.04] hover:-translate-y-1
                  transition-[border-color,background-color,transform] duration-300 cursor-default overflow-hidden">
                  {/* Subtle gold shimmer on top edge on hover */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-[#c9a227]/0 group-hover:bg-[#c9a227]/50 transition-colors duration-300" />
                  {/* Icon box */}
                  <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center mb-6
                    transition-colors duration-300 group-hover:bg-[#c9a227]/12">
                    <Icon size={22} className="text-[#c9a227]" />
                  </div>
                  <h3 className="font-display text-white font-semibold text-xl mb-2.5">
                    {lang === 'en' ? item.en : item.ar}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {lang === 'en' ? item.desc_en : item.desc_ar}
                  </p>
                </div>
              </AnimateIn>
            )
          })}
        </div>

        <AnimateIn delay={200} className="mt-10 pt-9 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-center gap-3 text-white/35 text-sm">
              <div className="w-1 h-1 rounded-full bg-[#c9a227] shrink-0" />
              {lang === 'en'
                ? 'Every worker is screened, trained, and documented before placement.'
                : 'كل عامل يتم فحصه وتدريبه وتوثيقه قبل التوظيف.'}
            </div>
            <a href="#contact"
              className="shrink-0 bg-[#c9a227] text-[#08111c] font-bold px-8 py-3.5 rounded-lg text-sm shadow-lg shadow-[#c9a227]/15
                hover:bg-[#dbb42c] hover:-translate-y-0.5 active:translate-y-0
                transition-[background-color,transform,box-shadow] duration-150">
              {lang === 'en' ? 'Request Staff' : 'اطلب موظفين'}
            </a>
          </div>
        </AnimateIn>

      </div>
    </section>
  )
}
