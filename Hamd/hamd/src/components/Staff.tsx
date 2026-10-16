'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import AnimateIn from './AnimateIn'

function StaffCard({ member, lang }: {
  member: { nameEn: string; nameAr: string; titleEn: string; titleAr: string; initials: string }
  lang: 'en' | 'ar'
}) {
  const [imgError, setImgError] = useState(false)
  const src = `/images/staff/${member.initials}.png`

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {!imgError ? (
        <div className="overflow-hidden">
          <Image
            src={src}
            alt={member.nameEn}
            width={600}
            height={750}
            className="w-full h-auto block transition-transform duration-500 hover:scale-[1.04]"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className="w-full aspect-[3/4] bg-[#1a2744] flex items-center justify-center">
          <span className="font-display text-[#c9a227] font-bold text-4xl">{member.initials}</span>
        </div>
      )}
      <div className="px-4 py-4 border-t border-gray-100">
        <p className="font-display text-[#1a2744] font-bold text-base">
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
    <section id="staff" className="bg-[#f8fafc] py-16 sm:py-24 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">

        <AnimateIn className="mb-10 sm:mb-14">
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-4">
            {lang === 'en' ? 'Our People' : 'فريقنا'}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2744] mb-4">{s.title[lang]}</h2>
          <div className="w-10 h-0.5 bg-[#c9a227] mb-4" />
          <p className="text-gray-400 text-sm">{s.subtitle[lang]}</p>
        </AnimateIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {s.members.map((m, i) => (
            <AnimateIn key={m.initials} delay={i * 80}>
              <StaffCard member={m} lang={lang} />
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}
