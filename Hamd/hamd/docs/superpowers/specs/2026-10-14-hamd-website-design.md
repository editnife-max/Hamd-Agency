# HAMD FOREIGN EMPLOYMENT AGENT PLC — Website Design Spec

**Date:** 2026-10-14  
**Project:** hamd-website  
**Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS

---

## Overview

A bilingual (Arabic/English) professional agency website for HAMD FOREIGN EMPLOYMENT AGENT PLC (مكتب حمد للإستقدام). Single-page multi-section layout with RTL/LTR toggle.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Language switching:** Custom React context, toggle button in navbar
- **RTL support:** `dir` attribute on `<html>` via context

## Color Palette

- Navy: `#1a2744`
- Gold: `#c9a227`
- White: `#ffffff`
- Light gray: `#f8f9fa`

## File Structure

```
hamd/
├── src/
│   ├── app/
│   │   ├── layout.tsx        — root layout, applies dir/lang from context
│   │   ├── page.tsx          — renders all sections in order
│   │   └── globals.css       — base styles, font imports
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Staff.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── context/
│   │   └── LanguageContext.tsx   — lang state + toggle, dir getter
│   └── translations/
│       └── index.ts              — all EN/AR string pairs
├── public/
│   └── logo.svg (placeholder)
├── package.json
├── tailwind.config.ts
└── next.config.ts
```

## Sections

### Navbar
- Logo (text-based: "HAMD" / "حمد") with gold accent
- Nav links: Home, About, Services, Staff, Contact
- EN/AR toggle button (top right)
- Mobile hamburger menu

### Hero
- Full-width navy background, gold accents
- Company name in both English and Arabic
- Tagline: "Your Trusted Partner in International Recruitment" / "شريكك الموثوق في التوظيف الدولي"
- CTA button: "Contact Us" / "تواصل معنا"
- Subtle background pattern

### About
- Section: "About Us" / "من نحن"
- Company description paragraph (EN + AR)
- 3 stat cards: Years Experience, Clients Served, Countries
- License/registration note

### Services
- 6 service cards in a grid
  1. Domestic Workers / عمالة منزلية
  2. Professional Drivers / سائقون محترفون
  3. Skilled Labor / عمالة ماهرة
  4. Medical Staff / كوادر طبية
  5. Security Personnel / أفراد أمن
  6. Office Staff / موظفو مكاتب

### Staff
- 5 cards in a responsive grid
  1. Ahmed Hassan — General Manager / المدير العام
  2. Fatima Al-Zahra — Operations Director / مديرة العمليات
  3. Mohammed Ali — Recruitment Officer / ضابط التوظيف
  4. Sara Ibrahim — Client Relations / علاقات العملاء
  5. Omar Abdullah — Administrative Officer / مسؤول إداري
- Each card: avatar placeholder (initials), name, title

### Contact
- Address, phone, email, WhatsApp button
- Simple contact form: Name, Email, Message, Send button

### Footer
- Logo, nav links, copyright line
- Social media icon placeholders

## Translations

All UI strings defined in `src/translations/index.ts` as `{ en: string; ar: string }` objects. Components consume via `useLanguage()` hook.

## RTL Behavior

- `LanguageContext` exposes `lang` (`'en' | 'ar'`) and `dir` (`'ltr' | 'rtl'`)
- Root `<html>` element sets `dir` and `lang` dynamically via a client wrapper
- Tailwind RTL classes (`rtl:text-right`, `rtl:flex-row-reverse`) used where needed

## Success Criteria

- Loads correctly in both EN and AR modes
- Arabic layout uses RTL direction throughout
- Mobile responsive (hamburger nav on small screens)
- No broken links or missing content
- Deploys with `next build` without errors
