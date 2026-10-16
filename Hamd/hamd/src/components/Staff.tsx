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
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Photo */}
      <div className="relative w-full aspect-[3/4] bg-[#1a2744]">
        {!imgError ? (
          <Image
            src={src}
            alt={member.nameEn}
            fill
            className="object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#c9a227] font-bold text-3xl">{member.initials}</span>
          </div>
        )}
      </div>

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
            <StaffCard key={m.initials} member={m} lang={lang} />
          ))}
        </div>

      </div>
    </section>
  )
}
