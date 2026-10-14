'use client'

import { Home, Car, Wrench, Stethoscope, Shield, Briefcase } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import type { LucideIcon } from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  Home,
  Car,
  Wrench,
  Stethoscope,
  Shield,
  Briefcase,
}

export default function Services() {
  const { lang, t } = useLanguage()
  const s = t.services

  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4">
            {s.title[lang]}
          </h2>
          <div className="w-16 h-1 bg-[#c9a227] mx-auto mb-4" />
          <p className="text-gray-500 text-base">{s.subtitle[lang]}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.items.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <div
                key={item.en}
                className="group bg-[#f8f9fa] rounded-xl p-6 flex flex-col items-center text-center hover:bg-[#1a2744] transition-colors duration-200"
              >
                <div className="w-14 h-14 rounded-full bg-[#1a2744] group-hover:bg-[#c9a227] flex items-center justify-center mb-4 transition-colors duration-200">
                  <Icon size={26} className="text-[#c9a227] group-hover:text-[#1a2744] transition-colors duration-200" />
                </div>
                <p className="text-[#1a2744] group-hover:text-white font-semibold text-base transition-colors duration-200">
                  {item[lang]}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
