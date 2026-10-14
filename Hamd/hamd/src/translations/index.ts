export type Lang = 'en' | 'ar'

export const translations = {
  nav: {
    home:     { en: 'Home',     ar: 'الرئيسية' },
    about:    { en: 'About',    ar: 'من نحن' },
    services: { en: 'Services', ar: 'خدماتنا' },
    staff:    { en: 'Our Team', ar: 'فريقنا' },
    contact:  { en: 'Contact',  ar: 'اتصل بنا' },
  },
  hero: {
    badge:      { en: 'Licensed Foreign Employment Agency', ar: 'وكالة توظيف خارجي مرخصة' },
    headline:   { en: 'Professional House Maid & Employment Placement', ar: 'توظيف عمالة منزلية ومهنية محترفة' },
    subline:    { en: 'We connect qualified Ethiopian workers — domestic staff, drivers, and skilled professionals — with trusted employers across the Gulf region.', ar: 'نربط العمال الإثيوبيين المؤهلين — العمالة المنزلية والسائقين والمهنيين — بأصحاب العمل الموثوقين في منطقة الخليج.' },
    cta:        { en: 'Get in Touch',    ar: 'تواصل معنا' },
    ctaSecond:  { en: 'Our Services',   ar: 'خدماتنا' },
  },
  trust: {
    licensed:  { en: 'Government Licensed',     ar: 'مرخصة حكومياً' },
    years:     { en: '10+ Years Experience',    ar: '+١٠ سنوات خبرة' },
    placed:    { en: '500+ Workers Placed',     ar: '+٥٠٠ عامل تم توظيفهم' },
    countries: { en: 'Gulf Region Coverage',    ar: 'تغطية منطقة الخليج' },
  },
  about: {
    title:       { en: 'About HAMD Agency',  ar: 'عن مكتب حمد' },
    description: {
      en: 'HAMD Foreign Employment Agent PLC is a government-licensed recruitment agency based in Addis Ababa, Ethiopia. We specialise in placing qualified domestic workers, house maids, professional drivers, and skilled staff with reputable employers across Saudi Arabia, UAE, Qatar, Kuwait, and other Gulf countries. Our process is transparent, ethical, and fully compliant with Ethiopian labour law.',
      ar: 'مكتب حمد للإستقدام هو وكالة توظيف مرخصة حكومياً تتخذ من أديس أبابا بإثيوبيا مقراً لها. نتخصص في توظيف العمالة المنزلية وعاملات البيت والسائقين المحترفين والكوادر الماهرة لدى أصحاب العمل الموثوقين في المملكة العربية السعودية والإمارات وقطر والكويت ودول الخليج الأخرى. عملنا شفاف وأخلاقي ومتوافق تماماً مع قانون العمل الإثيوبي.',
    },
    license: {
      en: 'Fully Licensed & Government Registered',
      ar: 'مرخصة ومسجلة رسمياً لدى الحكومة',
    },
    stats: {
      years:     { en: '10+',  label_en: 'Years in Business',   ar: '+١٠',  label_ar: 'سنوات في المجال' },
      placed:    { en: '500+', label_en: 'Workers Placed',      ar: '+٥٠٠', label_ar: 'عامل تم توظيفه' },
      countries: { en: '8+',   label_en: 'Destination Countries', ar: '+٨', label_ar: 'دولة مستقبِلة' },
    },
  },
  services: {
    title:    { en: 'Our Services', ar: 'خدماتنا' },
    subtitle: { en: 'Qualified, vetted, and ready to work', ar: 'مؤهلون وموثوقون وجاهزون للعمل' },
    items: [
      { en: 'House Maids',          ar: 'عاملات المنازل',     desc_en: 'Experienced domestic workers for households', desc_ar: 'عمالة منزلية متمرسة للأسر', icon: 'Home' },
      { en: 'Professional Drivers', ar: 'سائقون محترفون',    desc_en: 'Licensed drivers with clean records',        desc_ar: 'سائقون مرخصون بسجلات نظيفة', icon: 'Car' },
      { en: 'Skilled Labor',        ar: 'عمالة ماهرة',       desc_en: 'Tradespeople across construction & industry', desc_ar: 'عمال حرفيون في البناء والصناعة', icon: 'Wrench' },
      { en: 'Medical Staff',        ar: 'كوادر طبية',         desc_en: 'Nurses, caregivers, and support staff',      desc_ar: 'ممرضون ومقدمو رعاية وطاقم دعم', icon: 'Stethoscope' },
      { en: 'Security Personnel',   ar: 'أفراد الأمن',        desc_en: 'Trained guards for residential & commercial', desc_ar: 'حراس مدربون للمواقع السكنية والتجارية', icon: 'Shield' },
      { en: 'Office & Admin Staff', ar: 'موظفو المكاتب',      desc_en: 'Administrators, receptionists & clerks',     desc_ar: 'إداريون وموظفو استقبال وكتبة', icon: 'Briefcase' },
    ],
  },
  staff: {
    title:    { en: 'Meet Our Team',  ar: 'تعرف على فريقنا' },
    subtitle: { en: 'Experienced professionals committed to ethical recruitment', ar: 'محترفون ذوو خبرة ملتزمون بالتوظيف الأخلاقي' },
    members: [
      { nameEn: 'Ahmed Hassan',    nameAr: 'أحمد حسن',      titleEn: 'General Manager',        titleAr: 'المدير العام',        initials: 'AH' },
      { nameEn: 'Fatima Al-Zahra', nameAr: 'فاطمة الزهراء', titleEn: 'Operations Director',    titleAr: 'مديرة العمليات',      initials: 'FZ' },
      { nameEn: 'Mohammed Ali',    nameAr: 'محمد علي',       titleEn: 'Recruitment Officer',    titleAr: 'مسؤول التوظيف',       initials: 'MA' },
      { nameEn: 'Sara Ibrahim',    nameAr: 'سارة إبراهيم',  titleEn: 'Client Relations',       titleAr: 'علاقات العملاء',      initials: 'SI' },
      { nameEn: 'Omar Abdullah',   nameAr: 'عمر عبدالله',   titleEn: 'Administrative Officer', titleAr: 'المسؤول الإداري',     initials: 'OA' },
    ],
  },
  contact: {
    title:    { en: 'Contact Us',                   ar: 'تواصل معنا' },
    subtitle: { en: 'We respond within 24 hours',   ar: 'نرد خلال ٢٤ ساعة' },
    address:  { en: 'Addis Ababa, Ethiopia',         ar: 'أديس أبابا، إثيوبيا' },
    phone1:   { en: '+251 926 810 075',              ar: '٠٧٥ ٨١٠ ٩٢٦ ٢٥١+' },
    phone2:   { en: '+251 913 539 743',              ar: '٧٤٣ ٥٣٩ ٩١٣ ٢٥١+' },
    email:    { en: 'hamdagency8@gmail.com',         ar: 'hamdagency8@gmail.com' },
    whatsapp1: { en: 'WhatsApp: +251 926 810 075',   ar: 'واتساب: 075 810 926 251+' },
    whatsapp2: { en: 'WhatsApp: +251 913 539 743',   ar: 'واتساب: 743 539 913 251+' },
    form: {
      name:    { en: 'Full Name',    ar: 'الاسم الكامل' },
      email:   { en: 'Email',        ar: 'البريد الإلكتروني' },
      message: { en: 'Message',      ar: 'الرسالة' },
      send:    { en: 'Send Message', ar: 'إرسال الرسالة' },
      success: { en: 'Message sent — we\'ll be in touch soon.', ar: 'تم الإرسال — سنتواصل معك قريباً.' },
      placeholder: {
        name:    { en: 'Your full name',      ar: 'اسمك الكامل' },
        email:   { en: 'your@email.com',      ar: 'بريدك@الإلكتروني.com' },
        message: { en: 'How can we help you?', ar: 'كيف يمكننا مساعدتك؟' },
      },
    },
    labels: {
      address:  { en: 'Office',    ar: 'المكتب' },
      phone:    { en: 'Phone',     ar: 'الهاتف' },
      email:    { en: 'Email',     ar: 'البريد الإلكتروني' },
      whatsapp: { en: 'WhatsApp',  ar: 'واتساب' },
    },
  },
  footer: {
    tagline:   { en: 'Connecting Ethiopian talent with Gulf opportunity — ethically and professionally.', ar: 'نربط الكفاءات الإثيوبية بفرص الخليج — بأخلاقية واحترافية.' },
    copyright: { en: '© 2024 HAMD Foreign Employment Agent PLC. All rights reserved.', ar: '© ٢٠٢٤ مكتب حمد للإستقدام. جميع الحقوق محفوظة.' },
  },
} as const

export type Translations = typeof translations
