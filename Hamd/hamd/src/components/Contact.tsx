'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Contact() {
  const { lang, t } = useLanguage()
  const c = t.contact
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a5c28] mb-4">
            {c.title[lang]}
          </h2>
          <div className="w-16 h-1 bg-[#c9a227] mx-auto mb-4" />
          <p className="text-gray-500 text-base">{c.subtitle[lang]}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1a5c28] flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-[#c9a227]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a5c28] mb-1">{c.labels.address[lang]}</p>
                <p className="text-gray-600 text-sm">{c.address[lang]}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1a5c28] flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#c9a227]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a5c28] mb-1">{c.labels.phone[lang]}</p>
                <p className="text-gray-600 text-sm">{c.phone[lang]}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1a5c28] flex items-center justify-center shrink-0">
                <Mail size={18} className="text-[#c9a227]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a5c28] mb-1">{c.labels.email[lang]}</p>
                <p className="text-gray-600 text-sm">{c.email[lang]}</p>
              </div>
            </div>

            <a
              href="https://wa.me/251926810075"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-fit"
            >
              <MessageCircle size={18} />
              {c.whatsapp[lang]}
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1a5c28] mb-1">
                {c.form.name[lang]}
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder={c.form.placeholder.name[lang]}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1a5c28] mb-1">
                {c.form.email[lang]}
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder={c.form.placeholder.email[lang]}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1a5c28] mb-1">
                {c.form.message[lang]}
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder={c.form.placeholder.message[lang]}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a227] resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#1a5c28] hover:bg-[#226b32] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {c.form.send[lang]}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
