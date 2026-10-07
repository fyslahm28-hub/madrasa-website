import { Department } from '../types';

export const defaultDepartmentsData: Department[] = [
  {
    id: 'dept-noorani',
    name: {
      bn: 'নূরানী ও নাজেরা বিভাগ',
      en: 'Noorani & Nazera Department',
      ar: 'قسم النورانية والناظرة',
    },
    shortDesc: {
      bn: 'সহীহ-শুদ্ধভাবে পবিত্র কুরআনুল কারীম তিলাওয়াত, সহীহ মাখরাজ ও প্রাথমিক দ্বীনি তা’লীম।',
      en: 'Correct recitation of the Holy Quran with precise pronunciation, Makhaarij, and primary Islamic etiquette.',
      ar: 'تعليم التلاوة الصحيحة لكتاب الله تعالى بمخارج الحروف السليمة والتربية الإسلامية الأولية.',
    },
    duration: {
      bn: 'তথ্য শীঘ্রই প্রকাশ করা হবে।',
      en: 'Information will be published soon.',
      ar: 'سيتم نشر المعلومات قريبًا.',
    },
    features: [
      {
        bn: 'বিশুদ্ধ হরফ উচ্চারণ ও কায়দা শিক্ষা',
        en: 'Accurate Arabic phonetics and Qaeda instruction',
        ar: 'مخارج الحروف وقواعد النطق الصحيح',
      },
      {
        bn: 'জরুরি মাসনূন দোয়া ও দৈনন্দিন মাসআলা',
        en: 'Essential Masnoon Duas and daily rulings',
        ar: 'الأدعية المأثورة والمسائل الفقهية اليومية',
      },
      {
        bn: 'স্নেহশীল পরিবেশে যত্নসহকারে পাঠদান',
        en: 'Gentle, affectionate learning environment for young girls',
        ar: 'بيئة تعليمية حانية ترعى مدارك الطالبات',
      },
    ],
    order: 1,
  },
  {
    id: 'dept-hifz',
    name: {
      bn: 'হিফজুল কুরআন বিভাগ',
      en: 'Hifzul Quran (Memorization) Department',
      ar: 'قسم تحفيظ القرآن الكريم',
    },
    shortDesc: {
      bn: 'তাজবীদসহ পূর্ণ ৩০ পারা কুরআনুল কারীম হিফজ ও নিয়মিত দাওর (পুনরাবৃত্তি)।',
      en: 'Complete 30 Para Quran memorization with verified Tajweed and systematic daily revision.',
      ar: 'حفظ كتاب الله كاملاً ٣٠ جزءاً مع التجويد والإتقان والمدارسة المستمرة.',
    },
    duration: {
      bn: 'তথ্য শীঘ্রই প্রকাশ করা হবে।',
      en: 'Information will be published soon.',
      ar: 'سيتم نشر المعلومات قريبًا.',
    },
    features: [
      {
        bn: 'অভিজ্ঞ হাফেজা ও ক্বারীদের দ্বারা সার্বক্ষণিক নিরীক্ষণ',
        en: 'Round-the-clock mentorship by experienced teachers',
        ar: 'إشراف معلمات متميزات ومتقنات للقرآن',
      },
      {
        bn: 'সবক, সাতসবক ও আমপারা সুশৃঙ্খল পদ্ধতি',
        en: 'Systematic daily Sabak, Sabki, and Amokhtah revision',
        ar: 'نظام منهجي للدرس الجديد والمراجعة اليومية',
      },
      {
        bn: 'নিয়মিত তিলাওয়াত ও কণ্ঠের সৌন্দর্য বর্ধন',
        en: 'Polishing melodious Quranic recitation',
        ar: 'تحسين الصوت وتطبيق أحكام التجويد عملياً',
      },
    ],
    order: 2,
  },
  {
    id: 'dept-kitab',
    name: {
      bn: 'কিতাব বিভাগ (শরীয়াহ ও কওমি পাঠ্যক্রম)',
      en: 'Kitab Department (Shariah & Qawmi Studies)',
      ar: 'قسم الكتب والعلوم الشرعية (المنهج القومي)',
    },
    shortDesc: {
      bn: 'আরবি ভাষা, নাহব-সরফ, তাফসীর, হাদীস ও ফিকহ শাস্ত্রের গভীর পাঠদান।',
      en: 'In-depth study of Arabic grammar, morphology, Quranic exegesis, Hadith, and Islamic jurisprudence.',
      ar: 'دراسة العلوم الشرعية والعربية من النحو والصرف، والتفسير والحديث والفقه الإسلامي.',
    },
    duration: {
      bn: 'তথ্য শীঘ্রই প্রকাশ করা হবে।',
      en: 'Information will be published soon.',
      ar: 'سيتم نشر المعلومات قريبًا.',
    },
    features: [
      {
        bn: 'দারসে নিজামীর মানসম্মত কিতাবসমূহ পাঠদান',
        en: 'Classical Dars-e-Nizami textbooks and commentary',
        ar: 'كتب المنهج النظامي الأصيل مع الشروح المعتمدة',
      },
      {
        bn: 'নারীদের প্রাত্যহিক মাসআলা-মাসায়েল ও শরয়ী নির্দেশনা',
        en: 'Specialized Shariah rulings regarding women and household',
        ar: 'فقه الأسرة وأحكام النساء الشرعية بدقة وأمانة',
      },
      {
        bn: 'আত্মশুদ্ধি ও দ্বীনি দাওয়াহর প্রস্তুতি',
        en: 'Spiritual purification and preparation for community guidance',
        ar: 'التزكية الروحية والتأهيل للدعوة بالحكمة والموعظة',
      },
    ],
    order: 3,
  },
  {
    id: 'dept-tarbiyah',
    name: {
      bn: 'তারবিয়াত ও ইসলামী শিষ্টাচার বিভাগ',
      en: 'Tarbiyah & Character Development Department',
      ar: 'قسم التربية والتزكية والآداب النبوية',
    },
    shortDesc: {
      bn: 'সুন্নাত অনুযায়ী জীবনযাপন, শরয়ী পর্দা, শালীনতা ও আমলী জিন্দেগীর অনুকরণীয় প্রশিক্ষণ।',
      en: 'Practical training in Prophetic Sunnah, Islamic modesty, high moral values, and spiritual etiquette.',
      ar: 'غرس الأخلاق النبوية الكريمة، والحجاب الشرعي، والسمت الصالح والآداب الإسلامية.',
    },
    duration: {
      bn: 'তথ্য শীঘ্রই প্রকাশ করা হবে।',
      en: 'Information will be published soon.',
      ar: 'سيتم نشر المعلومات قريبًا.',
    },
    features: [
      {
        bn: 'পর্দা ও চারিত্রিক পবিত্রতার সার্বক্ষণিক পরিবেশ',
        en: 'Continuous sanctuary of chastity and dignified modesty',
        ar: 'بيئة تصون العفة وتغرس الحياء',
      },
      {
        bn: 'নামাজ ও মাসনূন আমলের কঠোর নিয়মিতকরণ',
        en: 'Strict adherence to five daily prayers and Sunnah practices',
        ar: 'المحافظة التامة على الصلوات والأذكار المسنونة',
      },
    ],
    order: 4,
  },
];
