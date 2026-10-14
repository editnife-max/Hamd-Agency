export type Lang = 'en' | 'ar'

export const translations = {
  nav: {
    home:     { en: 'Home',     ar: 'الرئيسية' },
    about:    { en: 'About',    ar: 'من نحن' },
    services: { en: 'Services', ar: 'خدماتنا' },
    staff:    { en: 'Staff',    ar: 'فريقنا' },
    contact:  { en: 'Contact',  ar: 'تواصل معنا' },
  },
  hero: {
    companyEn:  { en: 'HAMD FOREIGN EMPLOYMENT AGENT PLC', ar: 'HAMD FOREIGN EMPLOYMENT AGENT PLC' },
    companyAr:  { en: 'مكتب حمد للإستقدام',               ar: 'مكتب حمد للإستقدام' },
    tagline:    { en: 'Trusted House Maid & Foreign Employment Agency', ar: 'وكالة موثوقة للعمالة المنزلية والتوظيف الخارجي' },
    cta:        { en: 'Contact Us',                        ar: 'تواصل معنا' },
    subTagline: { en: 'Providing qualified domestic workers, house maids & skilled staff across the Gulf region', ar: 'نوفر عمالة منزلية مؤهلة وعاملات منزل وكوادر ماهرة في منطقة الخليج' },
  },
  about: {
    title:       { en: 'About Us',    ar: 'من نحن' },
    description: {
      en: 'HAMD Foreign Employment Agent PLC is a licensed recruitment agency dedicated to connecting qualified professionals with reputable employers across the Gulf region and beyond. With years of experience, we provide ethical, transparent, and reliable employment services.',
      ar: 'مكتب حمد للإستقدام هو وكالة توظيف مرخصة متخصصة في ربط المهنيين المؤهلين بأصحاب العمل الموثوقين في منطقة الخليج وخارجها. بفضل سنوات من الخبرة، نقدم خدمات توظيف أخلاقية وشفافة وموثوقة.',
    },
    license: {
      en: 'Licensed & Registered Recruitment Agency',
      ar: 'وكالة توظيف مرخصة ومسجلة رسمياً',
    },
    stats: {
      years:     { en: '10+ Years Experience', ar: '+10 سنوات خبرة' },
      clients:   { en: '500+ Clients Served',  ar: '+500 عميل' },
      countries: { en: '20+ Countries',        ar: '+20 دولة' },
    },
  },
  services: {
    title:    { en: 'Our Services', ar: 'خدماتنا' },
    subtitle: { en: 'We provide skilled workforce across a wide range of sectors', ar: 'نوفر القوى العاملة الماهرة في مختلف القطاعات' },
    items: [
      { en: 'Domestic Workers',    ar: 'عمالة منزلية',   icon: 'Home' },
      { en: 'Professional Drivers', ar: 'سائقون محترفون', icon: 'Car' },
      { en: 'Skilled Labor',       ar: 'عمالة ماهرة',    icon: 'Wrench' },
      { en: 'Medical Staff',       ar: 'كوادر طبية',      icon: 'Stethoscope' },
      { en: 'Security Personnel',  ar: 'أفراد أمن',       icon: 'Shield' },
      { en: 'Office Staff',        ar: 'موظفو مكاتب',     icon: 'Briefcase' },
    ],
  },
  staff: {
    title:    { en: 'Our Team',  ar: 'فريقنا' },
    subtitle: { en: 'Meet the dedicated professionals behind HAMD', ar: 'تعرف على الفريق المتخصص وراء حمد' },
    members: [
      { nameEn: 'Ahmed Hassan',    nameAr: 'أحمد حسن',      titleEn: 'General Manager',       titleAr: 'المدير العام',        initials: 'AH' },
      { nameEn: 'Fatima Al-Zahra', nameAr: 'فاطمة الزهراء', titleEn: 'Operations Director',   titleAr: 'مديرة العمليات',      initials: 'FZ' },
      { nameEn: 'Mohammed Ali',    nameAr: 'محمد علي',       titleEn: 'Recruitment Officer',   titleAr: 'ضابط التوظيف',        initials: 'MA' },
      { nameEn: 'Sara Ibrahim',    nameAr: 'سارة إبراهيم',  titleEn: 'Client Relations',      titleAr: 'علاقات العملاء',      initials: 'SI' },
      { nameEn: 'Omar Abdullah',   nameAr: 'عمر عبدالله',   titleEn: 'Administrative Officer', titleAr: 'مسؤول إداري',         initials: 'OA' },
    ],
  },
  contact: {
    title:    { en: 'Contact Us', ar: 'تواصل معنا' },
    subtitle: { en: 'Get in touch with our team today', ar: 'تواصل مع فريقنا اليوم' },
    address:  { en: 'Addis Ababa, Ethiopia', ar: 'أديس أبابا، إثيوبيا' },
    phone:    { en: '0926810075 / 0913539743', ar: '0926810075 / 0913539743' },
    email:    { en: 'hamdagency8@gmail.com', ar: 'hamdagency8@gmail.com' },
    whatsapp: { en: 'WhatsApp Us', ar: 'واتساب' },
    form: {
      name:    { en: 'Full Name', ar: 'الاسم الكامل' },
      email:   { en: 'Email',     ar: 'البريد الإلكتروني' },
      message: { en: 'Message',   ar: 'الرسالة' },
      send:    { en: 'Send Message', ar: 'إرسال' },
      placeholder: {
        name:    { en: 'Your full name',    ar: 'اسمك الكامل' },
        email:   { en: 'your@email.com',    ar: 'بريدك@الإلكتروني.com' },
        message: { en: 'How can we help?', ar: 'كيف يمكننا مساعدتك؟' },
      },
    },
    labels: {
      address: { en: 'Address', ar: 'العنوان' },
      phone:   { en: 'Phone',   ar: 'الهاتف' },
      email:   { en: 'Email',   ar: 'البريد الإلكتروني' },
    },
  },
  footer: {
    tagline:   { en: 'Your Trusted Partner in International Recruitment', ar: 'شريكك الموثوق في التوظيف الدولي' },
    copyright: { en: '© 2024 HAMD Foreign Employment Agent PLC. All rights reserved.', ar: '© 2024 مكتب حمد للإستقدام. جميع الحقوق محفوظة.' },
  },
} as const

export type Translations = typeof translations
