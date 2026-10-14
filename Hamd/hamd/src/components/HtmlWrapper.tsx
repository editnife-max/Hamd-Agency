'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface HtmlWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function HtmlWrapper({ children, className }: HtmlWrapperProps) {
  const { lang, dir } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body className={`${className ?? ''} antialiased`}>{children}</body>
    </html>
  )
}
