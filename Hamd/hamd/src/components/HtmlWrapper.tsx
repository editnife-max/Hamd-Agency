'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface HtmlWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function HtmlWrapper({ children, className }: HtmlWrapperProps) {
  const { lang, dir, transitioning } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body
        className={`${className ?? ''} antialiased`}
        style={{
          opacity: transitioning ? 0 : 1,
          transition: 'opacity 0.18s ease',
        }}
      >
        {children}
      </body>
    </html>
  )
}
