'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background image */}
      <Image
        src="/images/maid-hero.jpg"
        alt="Professional house maid services"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Primary overlay — left-heavy for text readability */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, rgba(8,17,28,0.93) 0%, rgba(8,17,28,0.78) 48%, rgba(8,17,28,0.28) 100%)' }} />
      {/* Bottom vignette */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(8,17,28,0.65) 0%, transparent 55%)' }} />
      {/* Ambient gold glow top-left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.07) 0%, transparent 65%)', transform: 'translate(-30%, -25%)' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 py-28 sm:py-36">

        {/* Credential badge */}
        <div className="inline-flex items-center gap-2 border text-xs font-medium px-3 py-1.5 rounded-full mb-6 anim-slide-up"
          style={{
            animationDelay: '0ms',
            background: 'rgba(26,92,40,0.18)',
            borderColor: 'rgba(74,222,128,0.28)',
            color: 'rgba(134,239,172,0.9)',
          }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
          {lang === 'en' ? 'Government Licensed Employment Agency' : 'وكالة توظيف خارجي مرخصة حكومياً'}
        </div>

        {/* Brand block */}
        <div className="mb-5 anim-slide-up" style={{ animationDelay: '100ms' }}>
          <h1 className="font-display text-[#c9a227] font-bold leading-none tracking-tight text-[3.5rem] sm:text-7xl lg:text-8xl">
            {lang === 'en' ? 'HAMD' : 'حمد'}
          </h1>
          <p className="text-white/40 text-[10px] sm:text-[11px] tracking-[0.24em] uppercase mt-2">
            {lang === 'en' ? 'Foreign Employment Agent PLC' : 'مكتب حمد للإستقدام'}
          </p>
        </div>

        {/* Divider */}
        <div className="w-10 h-0.5 bg-[#c9a227] mb-6 anim-slide-up" style={{ animationDelay: '190ms' }} />

        {/* Headline */}
        <h2 className="font-display text-white font-bold text-[1.75rem] sm:text-4xl lg:text-[3.25rem] leading-[1.15] tracking-tight mb-4 sm:mb-5 max-w-xl lg:max-w-2xl anim-slide-up"
          style={{ animationDelay: '280ms' }}>
          {t.hero.headline[lang]}
        </h2>

        {/* Subline */}
        <p className="text-white/55 text-sm sm:text-base leading-[1.75] mb-8 max-w-sm sm:max-w-lg anim-slide-up"
          style={{ animationDelay: '380ms' }}>
          {t.hero.subline[lang]}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 anim-slide-up" style={{ animationDelay: '460ms' }}>
          <a href="#contact"
            className="inline-flex items-center justify-center bg-[#c9a227] text-[#08111c] font-bold px-8 py-4 rounded-lg text-sm shadow-xl shadow-[#c9a227]/20
              hover:bg-[#dbb42c] hover:-translate-y-0.5 active:translate-y-0
              transition-[background-color,transform,box-shadow] duration-150">
            {t.hero.cta[lang]}
          </a>
          <a href="#services"
            className="inline-flex items-center justify-center border border-white/25 text-white/75 font-medium px-8 py-4 rounded-lg text-sm
              hover:border-white/45 hover:text-white hover:-translate-y-0.5 active:translate-y-0
              transition-[border-color,color,transform] duration-150">
            {t.hero.ctaSecond[lang]}
          </a>
        </div>

        {/* Stats strip */}
        <div className="flex items-center gap-5 sm:gap-8 border-t border-white/[0.09] pt-6 anim-slide-up"
          style={{ animationDelay: '560ms' }}>
          <div>
            <p className="font-display text-white font-bold text-xl sm:text-[1.6rem] leading-none mb-1">10+</p>
            <p className="text-white/30 text-[11px]">{lang === 'en' ? 'Years Active' : 'سنوات خبرة'}</p>
          </div>
          <div className="w-px h-8 bg-white/[0.09] shrink-0" />
          <div>
            <p className="font-display text-white font-bold text-xl sm:text-[1.6rem] leading-none mb-1">500+</p>
            <p className="text-white/30 text-[11px]">{lang === 'en' ? 'Workers Placed' : 'عامل موظَّف'}</p>
          </div>
          <div className="w-px h-8 bg-white/[0.09] shrink-0" />
          <div>
            <p className="font-display text-white font-bold text-xl sm:text-[1.6rem] leading-none mb-1">8+</p>
            <p className="text-white/30 text-[11px]">{lang === 'en' ? 'Gulf Countries' : 'دول خليجية'}</p>
          </div>
        </div>

      </div>
    </section>
  )
}
