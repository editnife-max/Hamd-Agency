'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#1a5c28] overflow-hidden"
    >
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #c9a227 0, #c9a227 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.jpg"
            alt="HAMD Foreign Employment Agent PLC"
            width={420}
            height={140}
            className="object-contain rounded-lg shadow-xl"
            priority
          />
        </div>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-[#c9a227] mx-auto mb-8" />

        {/* Tagline */}
        <p className="text-white text-lg sm:text-xl lg:text-2xl mb-3 font-semibold">
          {t.hero.tagline[lang]}
        </p>
        <p className="text-white/70 text-sm sm:text-base mb-10">
          {t.hero.subTagline[lang]}
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-block bg-[#c9a227] text-[#1a5c28] font-bold px-8 py-4 rounded-lg text-base hover:bg-[#e6b82a] transition-colors shadow-lg"
        >
          {t.hero.cta[lang]}
        </a>
      </div>
    </section>
  )
}
