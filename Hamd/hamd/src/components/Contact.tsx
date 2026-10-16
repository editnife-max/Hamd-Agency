'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import AnimateIn from './AnimateIn'

export default function Contact() {
  const { lang, t } = useLanguage()
  const c = t.contact
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="bg-[#f8fafc] py-24 px-4">
      <div className="max-w-6xl mx-auto">

        <AnimateIn animation="fade-in" className="text-center mb-14">
          <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-4">
            {lang === 'en' ? 'Reach Out' : 'تواصل معنا'}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1a2744] mb-4">{c.title[lang]}</h2>
          <div className="w-10 h-0.5 bg-[#c9a227] mx-auto mb-4" />
          <p className="text-gray-500 text-sm">{c.subtitle[lang]}</p>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left info panel */}
          <AnimateIn className="lg:col-span-2 bg-[#1a2744] rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#c9a227]" />
                </div>
                <div>
                  <p className="text-[#c9a227] font-semibold text-xs mb-1">{c.labels.address[lang]}</p>
                  <p className="text-white/60 text-sm">{c.address[lang]}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#c9a227]" />
                </div>
                <div>
                  <p className="text-[#c9a227] font-semibold text-xs mb-1">{c.labels.phone[lang]}</p>
                  <p className="text-white/60 text-sm">{c.phone1[lang]}</p>
                  <p className="text-white/60 text-sm">{c.phone2[lang]}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#c9a227]" />
                </div>
                <div>
                  <p className="text-[#c9a227] font-semibold text-xs mb-1">{c.labels.email[lang]}</p>
                  <a href={`mailto:${c.email[lang]}`} className="text-white/60 text-sm hover:text-[#c9a227] transition-colors">
                    {c.email[lang]}
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-5 flex flex-col gap-2">
              <p className="text-white/40 text-xs mb-1">{c.labels.whatsapp[lang]}</p>
              <a href="https://wa.me/251926810075" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25d366] hover:bg-[#20b857] hover:-translate-y-px active:translate-y-0
                  text-white font-semibold px-4 py-2.5 rounded-lg transition-[background-color,transform] duration-150 text-sm">
                <MessageCircle size={15} />
                {c.whatsapp1[lang]}
              </a>
              <a href="https://wa.me/251913539743" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25d366] hover:bg-[#20b857] hover:-translate-y-px active:translate-y-0
                  text-white font-semibold px-4 py-2.5 rounded-lg transition-[background-color,transform] duration-150 text-sm">
                <MessageCircle size={15} />
                {c.whatsapp2[lang]}
              </a>
            </div>
          </AnimateIn>

          {/* Right — form */}
          <AnimateIn delay={150} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5">
              {sent && (
                <div className="bg-[#1a5c28]/10 border border-[#1a5c28]/20 text-[#1a5c28] text-sm rounded-lg px-4 py-3 anim-fade-in">
                  {c.form.success[lang]}
                </div>
              )}
              <div>
                <label className="block text-xs font-semibold text-[#1a2744] mb-1.5">
                  {c.form.name[lang]}
                </label>
                <input type="text" required value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder={c.form.placeholder.name[lang]}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1a2744] mb-1.5">
                  {c.form.email[lang]}
                </label>
                <input type="email" required value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder={c.form.placeholder.email[lang]}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1a2744] mb-1.5">
                  {c.form.message[lang]}
                </label>
                <textarea required rows={5} value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder={c.form.placeholder.message[lang]}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] transition-all resize-none"
                />
              </div>
              <button type="submit"
                className="bg-[#1a2744] hover:bg-[#243566] hover:-translate-y-0.5 active:translate-y-0
                  text-white font-semibold px-6 py-3.5 rounded-xl
                  transition-[background-color,transform] duration-150 text-sm">
                {c.form.send[lang]}
              </button>
            </form>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
