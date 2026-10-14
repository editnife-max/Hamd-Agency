'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

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
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#1a5c28] text-xs font-bold tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-4">{c.title[lang]}</h2>
          <div className="w-12 h-1 bg-[#c9a227] mx-auto mb-4" />
          <p className="text-gray-500 text-sm">{c.subtitle[lang]}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact details — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            <div className="bg-[#f8f5be] rounded-xl p-5 flex flex-col gap-4">
              {/* Address */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-[#1a2744] flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#c9a227]" />
                </div>
                <div>
                  <p className="text-[#1a2744] font-semibold text-xs uppercase tracking-wide mb-0.5">{c.labels.address[lang]}</p>
                  <p className="text-gray-600 text-sm">{c.address[lang]}</p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-[#1a2744] flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#c9a227]" />
                </div>
                <div>
                  <p className="text-[#1a2744] font-semibold text-xs uppercase tracking-wide mb-0.5">{c.labels.phone[lang]}</p>
                  <p className="text-gray-600 text-sm">{c.phone1[lang]}</p>
                  <p className="text-gray-600 text-sm">{c.phone2[lang]}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-[#1a2744] flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#c9a227]" />
                </div>
                <div>
                  <p className="text-[#1a2744] font-semibold text-xs uppercase tracking-wide mb-0.5">{c.labels.email[lang]}</p>
                  <a href={`mailto:${c.email[lang]}`} className="text-[#1a5c28] text-sm hover:underline">{c.email[lang]}</a>
                </div>
              </div>
            </div>

            {/* WhatsApp buttons */}
            <div className="flex flex-col gap-2">
              <p className="text-[#1a2744] font-semibold text-xs uppercase tracking-wide">{c.labels.whatsapp[lang]}</p>
              <a href="https://wa.me/251926810075" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25d366] hover:bg-[#20b857] text-white font-semibold px-4 py-3 rounded-lg transition-colors text-sm">
                <MessageCircle size={16} />
                {c.whatsapp1[lang]}
              </a>
              <a href="https://wa.me/251913539743" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25d366] hover:bg-[#20b857] text-white font-semibold px-4 py-3 rounded-lg transition-colors text-sm">
                <MessageCircle size={16} />
                {c.whatsapp2[lang]}
              </a>
            </div>
          </div>

          {/* Form — 3 cols */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-4">
            {sent && (
              <div className="bg-[#1a5c28]/10 border border-[#1a5c28]/20 text-[#1a5c28] text-sm rounded-lg px-4 py-3">
                {c.form.success[lang]}
              </div>
            )}
            <div>
              <label className="block text-xs font-semibold text-[#1a2744] uppercase tracking-wide mb-1.5">
                {c.form.name[lang]}
              </label>
              <input type="text" required value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder={c.form.placeholder.name[lang]}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1a2744] uppercase tracking-wide mb-1.5">
                {c.form.email[lang]}
              </label>
              <input type="email" required value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder={c.form.placeholder.email[lang]}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1a2744] uppercase tracking-wide mb-1.5">
                {c.form.message[lang]}
              </label>
              <textarea required rows={5} value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder={c.form.placeholder.message[lang]}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227] resize-none"
              />
            </div>
            <button type="submit"
              className="bg-[#1a2744] hover:bg-[#243566] text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm tracking-wide">
              {c.form.send[lang]}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
