'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section id="home" className="relative overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #08111c 0%, #1a2744 100%)' }}>

      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Photo */}
        <div className="order-1 lg:order-2 lg:w-[48%] relative h-72 sm:h-96 lg:h-auto group overflow-hidden anim-fade-in"
          style={{ animationDelay: '200ms' }}>
          <Image
            src="/images/maid-hero.png"
            alt="Professional house maid services"
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            priority
          />
          <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-[#08111c]/60 lg:via-transparent lg:to-transparent" />
          <div className="hidden lg:block absolute bottom-10 left-10 anim-slide-up" style={{ animationDelay: '900ms' }}>
            <p className="text-[#c9a227] font-semibold text-base mb-1">
              {lang === 'en' ? 'Professional House Maids' : 'عاملات منزل محترفات'}
            </p>
            <p className="text-white/55 text-sm">
              {lang === 'en' ? 'Vetted · Trained · Ready' : 'موثوقات · مدربات · جاهزات'}
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="order-2 lg:order-1 lg:w-[52%] flex items-center">
          <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-28">

            <h1 className="font-display text-[#c9a227] font-bold text-8xl sm:text-9xl leading-none tracking-tight mb-3 anim-slide-up"
              style={{ animationDelay: '0ms' }}>
              HAMD
            </h1>
            <p className="text-white/30 text-xs tracking-[0.28em] uppercase mb-10 anim-slide-up"
              style={{ animationDelay: '120ms' }}>
              Foreign Employment Agent PLC &nbsp;·&nbsp; مكتب حمد للإستقدام
            </p>

            <h2 className="font-display text-white font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 max-w-lg anim-slide-up"
              style={{ animationDelay: '240ms' }}>
              {t.hero.headline[lang]}
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-md anim-slide-up"
              style={{ animationDelay: '360ms' }}>
              {t.hero.subline[lang]}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-14 anim-slide-up" style={{ animationDelay: '480ms' }}>
              <a href="#contact"
                className="bg-[#c9a227] text-[#08111c] font-bold px-9 py-4 rounded-lg text-sm text-center shadow-lg shadow-[#c9a227]/25
                  hover:bg-[#dbb42c] hover:-translate-y-0.5 active:translate-y-0
                  transition-[background-color,transform,box-shadow] duration-150">
                {t.hero.cta[lang]}
              </a>
              <a href="#services"
                className="border border-white/20 text-white/70 font-medium px-9 py-4 rounded-lg text-sm text-center
                  hover:border-white/40 hover:text-white hover:-translate-y-0.5 active:translate-y-0
                  transition-[border-color,color,transform] duration-150">
                {t.hero.ctaSecond[lang]}
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 anim-slide-up"
              style={{ animationDelay: '600ms' }}>
              {(['licensed', 'years', 'placed', 'countries'] as const).map((key) => (
                <span key={key} className="text-white/35 text-xs">{t.trust[key][lang]}</span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
