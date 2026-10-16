'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: 'slide-up' | 'fade-in'
}

export default function AnimateIn({ children, className = '', delay = 0, animation = 'slide-up' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const animClass = inView ? (animation === 'fade-in' ? 'anim-fade-in' : 'anim-slide-up') : ''

  return (
    <div
      ref={ref}
      className={`${animClass} ${className}`.trim()}
      style={
        !inView
          ? { opacity: 0 }
          : delay
          ? { animationDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </div>
  )
}
