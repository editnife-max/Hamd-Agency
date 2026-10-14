'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Staff() {
  const { lang, t } = useLanguage()
  const s = t.staff

  return (
    <section id="staff" className="bg-[#f8f9fa] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4">
            {s.title[lang]}
          </h2>
          <div className="w-16 h-1 bg-[#c9a227] mx-auto mb-4" />
          <p className="text-gray-500 text-base">{s.subtitle[lang]}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
          {s.members.map((member) => (
            <div
              key={member.initials}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center w-full max-w-[200px]"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-[#1a2744] flex items-center justify-center mb-4">
                <span className="text-[#c9a227] font-bold text-lg">{member.initials}</span>
              </div>
              <p className="text-[#1a2744] font-semibold text-sm mb-1">
                {lang === 'ar' ? member.nameAr : member.nameEn}
              </p>
              <p className="text-gray-500 text-xs">
                {lang === 'ar' ? member.titleAr : member.titleEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
