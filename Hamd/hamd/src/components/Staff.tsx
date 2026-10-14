'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Staff() {
  const { lang, t } = useLanguage()
  const s = t.staff

  return (
    <section id="staff" className="bg-[#f8f5be] py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#1a5c28] text-xs font-bold tracking-widest uppercase mb-2">Our People</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4">{s.title[lang]}</h2>
          <div className="w-12 h-1 bg-[#c9a227] mx-auto mb-4" />
          <p className="text-gray-500 text-sm max-w-xl mx-auto">{s.subtitle[lang]}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {s.members.map((m) => (
            <div key={m.initials}
              className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#1a2744] flex items-center justify-center mb-3">
                <span className="text-[#c9a227] font-bold text-base">{m.initials}</span>
              </div>
              <p className="text-[#1a2744] font-semibold text-sm mb-0.5">
                {lang === 'ar' ? m.nameAr : m.nameEn}
              </p>
              <p className="text-gray-400 text-xs leading-snug">
                {lang === 'ar' ? m.titleAr : m.titleEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
