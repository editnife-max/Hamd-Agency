'use client'

import { Check } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const HIGHLIGHTS = [
  { en: 'Fully licensed by the Ethiopian government', ar: 'مرخصة رسمياً من الحكومة الإثيوبية' },
  { en: 'Transparent placement process from start to finish', ar: 'عملية توظيف شفافة من البداية إلى النهاية' },
  { en: 'Ethical recruitment — no hidden fees for workers', ar: 'توظيف أخلاقي — لا رسوم خفية على العمال' },
  { en: 'Serving Saudi Arabia, UAE, Qatar, Kuwait & more', ar: 'نخدم السعودية، الإمارات، قطر، الكويت والمزيد' },
]

export default function About() {
  const { lang, t } = useLanguage()
  const a = t.about

  const stats = [
    { value: a.stats.years[lang],     label: lang === 'en' ? a.stats.years.label_en     : a.stats.years.label_ar },
    { value: a.stats.placed[lang],    label: lang === 'en' ? a.stats.placed.label_en    : a.stats.placed.label_ar },
    { value: a.stats.countries[lang], label: lang === 'en' ? a.stats.countries.label_en : a.stats.countries.label_ar },
  ]

  return (
    <section id="about" className="bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1a2744] mb-5 leading-tight">
              {a.title[lang]}
            </h2>
            <div className="w-14 h-0.5 bg-[#c9a227] mb-8" />
            <p className="text-gray-600 text-base leading-relaxed mb-9">{a.description[lang]}</p>
            <ul className="space-y-3.5">
              {HIGHLIGHTS.map((h) => (
                <li key={h.en} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#1a2744] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-[#c9a227]" strokeWidth={3} />
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed">{h[lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            {/* Big stats */}
            <div className="grid grid-cols-3 gap-0 border border-gray-100 rounded-2xl overflow-hidden">
              {stats.map((s, i) => (
                <div key={s.label}
                  className={`text-center py-8 px-4 ${i < 2 ? 'border-r border-gray-100' : ''}`}>
                  <p className="font-display text-4xl sm:text-5xl font-bold text-[#1a2744] mb-1.5">{s.value}</p>
                  <p className="text-gray-400 text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            {/* License card */}
            <div className="bg-[#1a2744] rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#c9a227]/15 border border-[#c9a227]/30 flex items-center justify-center shrink-0">
                  <Check size={16} className="text-[#c9a227]" strokeWidth={3} />
                </div>
                <p className="text-[#c9a227] font-semibold text-sm">{a.license[lang]}</p>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                {lang === 'en'
                  ? 'Operating under Ethiopian Ministry of Labour & Skills regulation'
                  : 'تعمل وفق لوائح وزارة العمل والمهارات الإثيوبية'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
