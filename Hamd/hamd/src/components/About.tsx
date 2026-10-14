'use client'

import { CheckCircle } from 'lucide-react'
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
    <section id="about" className="bg-[#f8f5be] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#1a5c28] text-xs font-bold tracking-widest uppercase mb-2">Who We Are</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4">{a.title[lang]}</h2>
          <div className="w-12 h-1 bg-[#c9a227] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: description + highlights */}
          <div>
            <p className="text-gray-700 text-base leading-relaxed mb-8">{a.description[lang]}</p>
            <ul className="space-y-3">
              {HIGHLIGHTS.map((h) => (
                <li key={h.en} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#1a5c28] mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm">{h[lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stats + license badge */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white border border-[#c9a227]/20 rounded-xl p-5 text-center shadow-sm">
                  <p className="text-[#1a2744] font-extrabold text-3xl mb-1">{s.value}</p>
                  <p className="text-gray-500 text-xs font-medium leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1a2744] rounded-xl p-6 text-center">
              <p className="text-[#c9a227] text-xs font-bold tracking-widest uppercase mb-2">✓ {a.license[lang]}</p>
              <p className="text-white/60 text-xs leading-relaxed">
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
