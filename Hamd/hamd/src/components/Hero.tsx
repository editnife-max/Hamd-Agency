'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#1a2744] overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Company name */}
        <h1 className="text-[#c9a227] font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-2">
          {t.hero.companyEn.en}
        </h1>
        <p className="text-[#c9a227]/80 text-2xl sm:text-3xl mb-6 font-medium">
          {t.hero.companyAr.en}
        </p>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-[#c9a227] mx-auto mb-8" />

        {/* Tagline */}
        <p className="text-white text-lg sm:text-xl lg:text-2xl mb-3 font-light">
          {t.hero.tagline[lang]}
        </p>
        <p className="text-white/60 text-sm sm:text-base mb-10">
          {t.hero.subTagline[lang]}
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-block bg-[#c9a227] text-[#1a2744] font-semibold px-8 py-4 rounded-lg text-base hover:bg-[#e6b82a] transition-colors shadow-lg"
        >
          {t.hero.cta[lang]}
        </a>
      </div>
    </section>
  )
}
