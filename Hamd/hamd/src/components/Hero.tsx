'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section id="home" className="relative overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #08111c 0%, #1a2744 100%)' }}>

      {/* Ambient depth glows */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 65%)', transform: 'translate(-35%, -25%)' }} />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(26,92,40,0.08) 0%, transparent 65%)', transform: 'translateY(35%)' }} />
      </div>

      <div className="relative flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">

        {/* ── Photo ── */}
        <div className="order-1 lg:order-2 lg:w-[46%] relative h-72 sm:h-96 lg:h-auto group overflow-hidden anim-fade-in"
          style={{ animationDelay: '150ms' }}>
          <Image
            src="/images/maid-hero.png"
            alt="Professional house maid services"
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            priority
          />
          {/* Mobile: fade photo into section below */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#08111c] to-transparent lg:hidden" />
          {/* Desktop: blend left edge into text column */}
          <div className="absolute inset-0 hidden lg:block"
            style={{ background: 'linear-gradient(to right, #0b1622 0%, rgba(11,22,34,0.55) 22%, transparent 52%)' }} />
          {/* Desktop: bottom gradient behind caption */}
          <div className="absolute bottom-0 left-0 right-0 h-40 hidden lg:block"
            style={{ background: 'linear-gradient(to top, rgba(8,17,28,0.72) 0%, transparent 100%)' }} />
          {/* Caption */}
          <div className="hidden lg:block absolute bottom-9 left-10 anim-slide-up" style={{ animationDelay: '950ms' }}>
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-5 h-px bg-[#c9a227]" />
              <p className="text-[#c9a227] font-semibold text-sm">
                {lang === 'en' ? 'Professional House Maids' : 'عاملات منزل محترفات'}
              </p>
            </div>
            <p className="text-white/40 text-sm" style={{ paddingInlineStart: '1.875rem' }}>
              {lang === 'en' ? 'Vetted · Trained · Ready' : 'موثوقات · مدربات · جاهزات'}
            </p>
          </div>
        </div>

        {/* ── Text ── */}
        <div className="order-2 lg:order-1 lg:w-[54%] flex items-center">
          <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 py-12 lg:py-0">

            {/* Credential badge */}
            <div className="inline-flex items-center gap-2 border text-xs font-medium px-3.5 py-1.5 rounded-full mb-6 anim-slide-up"
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
            <div className="mb-8 anim-slide-up" style={{ animationDelay: '100ms' }}>
              <h1 className="font-display text-[#c9a227] font-bold leading-none tracking-tight text-7xl sm:text-8xl">
                {lang === 'en' ? 'HAMD' : 'حمد'}
              </h1>
              <p className="text-white/35 text-[11px] tracking-[0.28em] uppercase mt-2">
                {lang === 'en' ? 'Foreign Employment Agent PLC' : 'مكتب حمد للإستقدام'}
              </p>
            </div>

            {/* Divider */}
            <div className="w-10 h-0.5 bg-[#c9a227] mb-7 anim-slide-up" style={{ animationDelay: '190ms' }} />

            {/* Value proposition */}
            <h2 className="font-display text-white font-bold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-tight mb-5 anim-slide-up"
              style={{ animationDelay: '280ms', maxWidth: '520px' }}>
              {t.hero.headline[lang]}
            </h2>

            <p className="text-white/55 text-base leading-[1.75] mb-9 anim-slide-up"
              style={{ animationDelay: '380ms', maxWidth: '440px' }}>
              {t.hero.subline[lang]}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10 anim-slide-up" style={{ animationDelay: '460ms' }}>
              <a href="#contact"
                className="inline-flex items-center justify-center bg-[#c9a227] text-[#08111c] font-bold px-9 py-4 rounded-lg text-sm shadow-xl shadow-[#c9a227]/20
                  hover:bg-[#dbb42c] hover:-translate-y-0.5 active:translate-y-0
                  transition-[background-color,transform,box-shadow] duration-150">
                {t.hero.cta[lang]}
              </a>
              <a href="#services"
                className="inline-flex items-center justify-center border border-white/25 text-white/75 font-medium px-9 py-4 rounded-lg text-sm
                  hover:border-white/45 hover:text-white hover:-translate-y-0.5 active:translate-y-0
                  transition-[border-color,color,transform] duration-150">
                {t.hero.ctaSecond[lang]}
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 border-t border-white/[0.09] pt-7 anim-slide-up"
              style={{ animationDelay: '560ms' }}>
              <div>
                <p className="font-display text-white font-bold text-[1.6rem] leading-none mb-1">10+</p>
                <p className="text-white/30 text-xs">{lang === 'en' ? 'Years Active' : 'سنوات خبرة'}</p>
              </div>
              <div className="w-px h-8 bg-white/[0.09] shrink-0" />
              <div>
                <p className="font-display text-white font-bold text-[1.6rem] leading-none mb-1">500+</p>
                <p className="text-white/30 text-xs">{lang === 'en' ? 'Workers Placed' : 'عامل موظَّف'}</p>
              </div>
              <div className="w-px h-8 bg-white/[0.09] shrink-0" />
              <div>
                <p className="font-display text-white font-bold text-[1.6rem] leading-none mb-1">8+</p>
                <p className="text-white/30 text-xs">{lang === 'en' ? 'Gulf Countries' : 'دول خليجية'}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
