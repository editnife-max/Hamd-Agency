'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

function StaffCard({ member, lang }: {
  member: { nameEn: string; nameAr: string; titleEn: string; titleAr: string; initials: string }
  lang: 'en' | 'ar'
}) {
  const [imgError, setImgError] = useState(false)
  const src = `/images/staff/${member.initials}.png`

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Photo */}
      {!imgError ? (
        <Image
          src={src}
          alt={member.nameEn}
          width={600}
          height={750}
          className="w-full h-auto block"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full aspect-[3/4] bg-[#1a2744] flex items-center justify-center">
          <span className="text-[#c9a227] font-bold text-3xl">{member.initials}</span>
        </div>
      )}

      {/* Info */}
      <div className="p-4 text-center">
        <p className="text-[#1a2744] font-semibold text-sm">
          {lang === 'ar' ? member.nameAr : member.nameEn}
        </p>
        <p className="text-gray-400 text-xs mt-0.5">
          {lang === 'ar' ? member.titleAr : member.titleEn}
        </p>
      </div>
    </div>
  )
}

export default function Staff() {
  const { lang, t } = useLanguage()
  const s = t.staff

  return (
    <section id="staff" className="bg-[#f8fafc] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1a2744] mb-4">{s.title[lang]}</h2>
          <div className="w-12 h-1 bg-[#c9a227] mx-auto mb-4" />
          <p className="text-gray-500 text-sm max-w-xl mx-auto">{s.subtitle[lang]}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {s.members.map((m) => (
            <div key={m.initials} className="w-[calc(50%-12px)] sm:w-56 lg:w-72">
              <StaffCard member={m} lang={lang} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
