import { AuthorityPerson } from '../types';

export const defaultAuthoritiesData: AuthorityPerson[] = [
  {
    id: 'auth-1',
    name: {
      bn: 'মাওলানা নুরুল আলম সাহেব',
      en: 'Maulana Nurul Alam',
      ar: 'مولانا نور العالم',
    },
    position: {
      bn: 'মুহতামিম',
      en: 'Muhtamim (Principal)',
      ar: 'المهتمم (المدير العام)',
    },
    description: {
      bn: 'মাদ্রাসার সামগ্রিক প্রশাসনিক ও পরিচালনা কার্যক্রমের প্রধান অভিভাবক ও মুহতামিম।',
      en: 'General Director and Principal overseeing administrative and educational management.',
      ar: 'المشرف العام والمهتمم بإدارة شؤون المدرسة والعملية التعليمية.',
    },
    order: 1,
  },
  {
    id: 'auth-2',
    name: {
      bn: 'মাওলানা জামাল উদ্দিন সাহেব',
      en: 'Maulana Jamal Uddin',
      ar: 'مولانا جمال الدين',
    },
    position: {
      bn: 'নায়েবে মুহতামিম',
      en: 'Naib-e-Muhtamim (Vice Principal)',
      ar: 'نائب المهتمم (نائب المدير)',
    },
    description: {
      bn: 'মুহতামিম মহোদয়ের সার্বিক দিকনির্দেশনায় সহকারী প্রশাসন ও নির্বাহী তদারকির দায়িত্বে নিয়োজিত।',
      en: 'Assisting in general executive administration and academic supervision.',
      ar: 'معاونة الإدارة ومتابعة الشؤون التنفيذية تحت توجيهات فضيلة المهتمم.',
    },
    order: 2,
  },
  {
    id: 'auth-3',
    name: {
      bn: 'মাওলানা রুহুল আমিন সাহেব',
      en: 'Maulana Ruhul Amin',
      ar: 'مولانا روح الأمين',
    },
    position: {
      bn: 'নাজেমে তালিমাত',
      en: 'Nazim-e-Talimāt (Head of Education & Academics)',
      ar: 'ناظم التعليمات (رئيس الشؤون الأكاديمية)',
    },
    description: {
      bn: 'পাঠ্যক্রম প্রণয়ন, রুটিন প্রস্তুতকরণ, শিক্ষক তত্ত্বাবধান ও পরীক্ষার সার্বিক কার্যক্রমের প্রধান।',
      en: 'Responsible for educational curriculum, routine management, academic supervision and exams.',
      ar: 'المسؤول عن المناهج الدراسية، والجدول الأسبوعي، ومتابعة المعلمين والامتحانات.',
    },
    order: 3,
  },
  {
    id: 'auth-4',
    name: {
      bn: 'মাওলানা ফয়সাল আহমদ সাহেব',
      en: 'Maulana Foysal Ahamad',
      ar: 'مولانا فيصل أحمد',
    },
    position: {
      bn: 'দারুল ইকামা',
      en: 'Darul Iqama (Head of Residential & Student Affairs)',
      ar: 'دار الإقامة (مسؤول السكن والشؤون الطلابية)',
    },
    description: {
      bn: 'আবাসিক ছাত্রীদের শৃংখলা, নিরাপত্তা, সার্বক্ষণিক তদারকি ও হস্টেল ব্যবস্থাপনার দায়িত্বশীল।',
      en: 'Supervising student residential affairs, discipline, security, and hostel management.',
      ar: 'مسؤول الشؤون السكنية للطالبات، والانضباط، والأمن والمتابعة المستمرة في السكن الداخلي.',
    },
    order: 4,
  },
];
