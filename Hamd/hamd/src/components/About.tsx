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
    <section id="about" className="bg-white">

      {/* Bold stats banner */}
      <div className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {stats.map((s) => (
              <div key={s.label} className="py-12 sm:py-16 text-center">
                <p className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1a2744] mb-1">{s.value}</p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1a2744] mb-5 leading-tight">
              {a.title[lang]}
            </h2>
            <div className="w-12 h-0.5 bg-[#c9a227] mb-7" />
            <p className="text-gray-500 text-base leading-relaxed">{a.description[lang]}</p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <ul className="space-y-4">
              {HIGHLIGHTS.map((h) => (
                <li key={h.en} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#1a2744] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={10} className="text-[#c9a227]" strokeWidth={3} />
                  </span>
                  <span className="text-gray-500 text-sm leading-relaxed">{h[lang]}</span>
                </li>
              ))}
            </ul>

            <div className="mt-2 bg-[#1a2744] rounded-2xl p-6 flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#c9a227]/15 border border-[#c9a227]/25 flex items-center justify-center shrink-0">
                <Check size={14} className="text-[#c9a227]" strokeWidth={3} />
              </div>
              <div>
                <p className="text-[#c9a227] font-semibold text-sm mb-1">{a.license[lang]}</p>
                <p className="text-white/45 text-sm leading-relaxed">
                  {lang === 'en'
                    ? 'Operating under Ethiopian Ministry of Labour & Skills regulation'
                    : 'تعمل وفق لوائح وزارة العمل والمهارات الإثيوبية'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
