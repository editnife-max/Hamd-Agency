'use client'

import Image from 'next/image'
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div className="text-center lg:text-start">
            <h1 className="text-[#c9a227] font-extrabold text-5xl sm:text-6xl tracking-tight mb-1">
              HAMD
            </h1>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-8">
              Foreign Employment Agent PLC &nbsp;·&nbsp; مكتب حمد للإستقدام
            </p>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 border border-[#c9a227]/30 text-[#c9a227] text-xs font-semibold px-4 py-1.5 rounded-full mb-7 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] inline-block" />
              {t.hero.badge[lang]}
            </div>

            <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-snug mb-5">
              {t.hero.headline[lang]}
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-10 max-w-xl">
              {t.hero.subline[lang]}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#contact"
                className="bg-[#c9a227] text-[#1a2744] font-bold px-8 py-3.5 rounded-lg hover:bg-[#e6b82a] transition-colors shadow-lg text-sm">
                {t.hero.cta[lang]}
              </a>
              <a href="#services"
                className="border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/5 transition-colors text-sm">
                {t.hero.ctaSecond[lang]}
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
              {(['licensed', 'years', 'placed', 'countries'] as const).map((key) => (
                <div key={key} className="bg-[#1a2744] px-3 py-3 text-center">
                  <p className="text-[#c9a227] font-bold text-xs">{t.trust[key][lang]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — maid photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Gold accent frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-[#c9a227]/40 rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/maid-hero.jpg"
                  alt="House Maid Services"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a2744]/90 to-transparent px-5 py-4">
                  <p className="text-[#c9a227] font-semibold text-sm">
                    {lang === 'en' ? 'Professional House Maids' : 'عاملات منزل محترفات'}
                  </p>
                  <p className="text-white/60 text-xs">
                    {lang === 'en' ? 'Vetted · Trained · Ready' : 'موثوقات · مدربات · جاهزات'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
