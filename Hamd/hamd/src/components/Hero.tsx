'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-[#1a2744] overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #c9a227 1px, transparent 0)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a227]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">

        {/* Company name */}
        <h1 className="text-[#c9a227] font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-1">
          HAMD
        </h1>
        <p className="text-white/50 text-sm tracking-widest uppercase mb-8">
          Foreign Employment Agent PLC &nbsp;·&nbsp; مكتب حمد للإستقدام
        </p>

        {/* License badge */}
        <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 border border-[#c9a227]/30 text-[#c9a227] text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] inline-block" />
          {t.hero.badge[lang]}
        </div>

        {/* Headline */}
        <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug mb-5 max-w-3xl mx-auto">
          {t.hero.headline[lang]}
        </h2>

        {/* Sub-line */}
        <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {t.hero.subline[lang]}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contact"
            className="bg-[#c9a227] text-[#1a2744] font-bold px-8 py-3.5 rounded-lg hover:bg-[#e6b82a] transition-colors shadow-lg text-sm">
            {t.hero.cta[lang]}
          </a>
          <a href="#services"
            className="border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/5 transition-colors text-sm">
            {t.hero.ctaSecond[lang]}
          </a>
        </div>

        {/* Trust stats */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
          {(['licensed', 'years', 'placed', 'countries'] as const).map((key) => (
            <div key={key} className="bg-[#1a2744] px-4 py-4 text-center">
              <p className="text-[#c9a227] font-bold text-sm">{t.trust[key][lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
