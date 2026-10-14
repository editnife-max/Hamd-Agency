import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Naskh_Arabic } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import HtmlWrapper from '@/components/HtmlWrapper'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'HAMD Foreign Employment Agent PLC',
  description: 'Your Trusted Partner in International Recruitment',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <HtmlWrapper className={`${inter.variable} ${notoNaskhArabic.variable}`}>
        {children}
      </HtmlWrapper>
    </LanguageProvider>
  )
}
