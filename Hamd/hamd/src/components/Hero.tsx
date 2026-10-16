'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section id="home" className="relative overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #08111c 0%, #1a2744 100%)' }}>

      {/* Ambient glow — depth without noise */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.07) 0%, transparent 70%)', transform: 'translate(-30%, -20%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(26,92,40,0.09) 0%, transparent 70%)', transform: 'translateY(30%)' }} />
      </div>

      <div className="relative flex flex-col lg:flex-row min-h-screen">

        {/* Photo */}
        <div className="order-1 lg:order-2 lg:w-[48%] relative h-80 sm:h-[420px] lg:h-auto group overflow-hidden anim-fade-in"
          style={{ animationDelay: '180ms' }}>
          <Image
            src="/images/maid-hero.png"
            alt="Professional house maid services"
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            priority
          />
          {/* Mobile: bottom fade so photo dissolves into text area */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#08111c] to-transparent lg:hidden" />
          {/* Desktop: left-edge blend into text column */}
          <div className="absolute inset-0 hidden lg:block"
            style={{ background: 'linear-gradient(to right, #0c1825 0%, rgba(12,24,37,0.4) 28%, transparent 55%)' }} />
          {/* Bottom gradient for caption */}
          <div className="absolute bottom-0 left-0 right-0 h-36 hidden lg:block"
            style={{ background: 'linear-gradient(to top, rgba(8,17,28,0.6) 0%, transparent 100%)' }} />
          {/* Desktop caption */}
          <div className="hidden lg:block absolute bottom-10 left-10 anim-slide-up" style={{ animationDelay: '920ms' }}>
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="w-5 h-px bg-[#c9a227]" />
              <p className="text-[#c9a227] font-semibold text-sm tracking-wide">
                {lang === 'en' ? 'Professional House Maids' : 'عاملات منزل محترفات'}
              </p>
            </div>
            <p className="text-white/45 text-sm" style={{ paddingInlineStart: '2rem' }}>
              {lang === 'en' ? 'Vetted · Trained · Ready' : 'موثوقات · مدربات · جاهزات'}
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="order-2 lg:order-1 lg:w-[52%] flex items-center">
          <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-14 lg:py-28">

            {/* Credential badge */}
            <div className="inline-flex items-center gap-2 border text-xs font-medium px-3.5 py-1.5 rounded-full mb-8 anim-slide-up"
              style={{
                animationDelay: '0ms',
                background: 'rgba(26,92,40,0.18)',
                borderColor: 'rgba(74,222,128,0.3)',
                color: 'rgba(134,239,172,0.9)',
              }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
              {lang === 'en' ? 'Government Licensed Employment Agency' : 'وكالة توظيف خارجي مرخصة حكومياً'}
            </div>

            <h1 className="font-display text-[#c9a227] font-bold text-8xl sm:text-9xl leading-none tracking-tight mb-2 anim-slide-up"
              style={{ animationDelay: '110ms' }}>
              HAMD
            </h1>
            <p className="text-white/40 text-[11px] tracking-[0.26em] uppercase mb-8 anim-slide-up"
              style={{ animationDelay: '200ms' }}>
              Foreign Employment Agent PLC &nbsp;·&nbsp; مكتب حمد للإستقدام
            </p>

            {/* Gold rule */}
            <div className="w-10 h-0.5 bg-[#c9a227] mb-7 anim-slide-up" style={{ animationDelay: '280ms' }} />

            <h2 className="font-display text-white font-semibold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.2] mb-5 max-w-[480px] anim-slide-up"
              style={{ animationDelay: '340ms' }}>
              {t.hero.headline[lang]}
            </h2>
            <p className="text-white/55 text-[15px] leading-relaxed mb-10 max-w-md anim-slide-up"
              style={{ animationDelay: '440ms' }}>
              {t.hero.subline[lang]}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12 anim-slide-up" style={{ animationDelay: '530ms' }}>
              <a href="#contact"
                className="inline-flex items-center justify-center bg-[#c9a227] text-[#08111c] font-bold px-8 py-4 rounded-lg text-sm shadow-lg shadow-[#c9a227]/20
                  hover:bg-[#dbb42c] hover:-translate-y-0.5 active:translate-y-0
                  transition-[background-color,transform,box-shadow] duration-150">
                {t.hero.cta[lang]}
              </a>
              <a href="#services"
                className="inline-flex items-center justify-center border border-white/20 text-white/70 font-medium px-8 py-4 rounded-lg text-sm
                  hover:border-white/40 hover:text-white hover:-translate-y-0.5 active:translate-y-0
                  transition-[border-color,color,transform] duration-150">
                {t.hero.ctaSecond[lang]}
              </a>
            </div>

            {/* Mini stats — replaces faint trust text */}
            <div className="flex items-center gap-7 border-t border-white/10 pt-7 anim-slide-up"
              style={{ animationDelay: '640ms' }}>
              <div>
                <p className="font-display text-white font-bold text-2xl leading-none mb-0.5">10+</p>
                <p className="text-white/35 text-xs">{lang === 'en' ? 'Years Active' : 'سنوات خبرة'}</p>
              </div>
              <div className="w-px h-9 bg-white/10 shrink-0" />
              <div>
                <p className="font-display text-white font-bold text-2xl leading-none mb-0.5">500+</p>
                <p className="text-white/35 text-xs">{lang === 'en' ? 'Workers Placed' : 'عامل موظَّف'}</p>
              </div>
              <div className="w-px h-9 bg-white/10 shrink-0" />
              <div>
                <p className="font-display text-white font-bold text-2xl leading-none mb-0.5">8+</p>
                <p className="text-white/35 text-xs">{lang === 'en' ? 'Gulf Countries' : 'دول خليجية'}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
