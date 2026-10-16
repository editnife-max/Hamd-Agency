'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Lang } from '@/translations'

interface LanguageContextValue {
  lang: Lang
  dir: 'ltr' | 'rtl'
  t: typeof translations
  toggle: () => void
  transitioning: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const [transitioning, setTransitioning] = useState(false)

  const toggle = () => {
    setTransitioning(true)
    setTimeout(() => {
      setLang(prev => (prev === 'en' ? 'ar' : 'en'))
      setTransitioning(false)
    }, 180)
  }

  return (
    <LanguageContext.Provider value={{
      lang,
      dir: lang === 'ar' ? 'rtl' : 'ltr',
      t: translations,
      toggle,
      transitioning,
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
