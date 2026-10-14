'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { lang, t } = useLanguage()
  const a = t.about

  const stats = [
    { label: a.stats.years[lang] },
    { label: a.stats.clients[lang] },
    { label: a.stats.countries[lang] },
  ]

  return (
    <section id="about" className="bg-[#f8f9fa] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4">
            {a.title[lang]}
          </h2>
          <div className="w-16 h-1 bg-[#c9a227] mx-auto" />
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center mb-12">
          {a.description[lang]}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center"
            >
              <p className="text-[#1a2744] font-bold text-xl">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* License note */}
        <p className="text-center text-sm text-[#c9a227] font-medium tracking-wide uppercase">
          {a.license[lang]}
        </p>
      </div>
    </section>
  )
}
