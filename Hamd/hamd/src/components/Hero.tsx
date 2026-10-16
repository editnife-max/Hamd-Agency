'use client'

import Image from 'next/image'
import { Award, Clock, Users, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { lang, t } = useLanguage()

  const trust = [
    { icon: Award, label: t.trust.licensed[lang] },
    { icon: Clock,  label: t.trust.years[lang] },
    { icon: Users,  label: t.trust.placed[lang] },
    { icon: Globe,  label: t.trust.countries[lang] },
  ]

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #09131f 0%, #1a2744 55%, #1c2f5e 100%)' }}>

      {/* Diagonal gold wash */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-32 top-0 w-[60%] h-full"
          style={{ background: 'linear-gradient(to bottom left, rgba(201,162,39,0.08) 0%, transparent 55%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.25), transparent)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="text-center lg:text-start">
            <div className="mb-8">
              <h1 className="font-display text-[#c9a227] font-bold text-7xl sm:text-8xl leading-none tracking-tight mb-2">
                HAMD
              </h1>
              <p className="text-white/30 text-xs tracking-[0.3em] uppercase">
                Foreign Employment Agent PLC &nbsp;·&nbsp; مكتب حمد للإستقدام
              </p>
            </div>

            <span className="inline-flex items-center gap-2 bg-[#c9a227]/10 border border-[#c9a227]/25 text-[#c9a227] text-xs font-medium px-4 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] animate-pulse" />
              {t.hero.badge[lang]}
            </span>

            <h2 className="font-display text-white font-semibold text-3xl sm:text-4xl leading-tight mb-5 text-balance">
              {t.hero.headline[lang]}
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-lg">
              {t.hero.subline[lang]}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12">
              <a href="#contact"
                className="bg-[#c9a227] text-[#09131f] font-bold px-8 py-3.5 rounded-lg hover:bg-[#dbb42c] transition-colors text-sm shadow-lg shadow-[#c9a227]/20">
                {t.hero.cta[lang]}
              </a>
              <a href="#services"
                className="border border-white/15 text-white/70 font-medium px-8 py-3.5 rounded-lg hover:border-white/30 hover:text-white transition-colors text-sm">
                {t.hero.ctaSecond[lang]}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {trust.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5">
                  <Icon size={14} className="text-[#c9a227] shrink-0" />
                  <span className="text-white/60 text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#c9a227]/20" />
              <div className="absolute -bottom-8 -right-8 w-full h-full rounded-2xl border border-[#c9a227]/08" />
              <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                <Image
                  src="/images/maid-hero.jpg"
                  alt="Professional house maid services"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#09131f]/95 via-[#09131f]/40 to-transparent px-5 py-5">
                  <p className="text-[#c9a227] font-medium text-sm mb-0.5">
                    {lang === 'en' ? 'Professional House Maids' : 'عاملات منزل محترفات'}
                  </p>
                  <p className="text-white/45 text-xs">
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
