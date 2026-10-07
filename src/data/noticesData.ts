import { Notice } from '../types';

export const defaultNoticesData: Notice[] = [
  {
    id: 'notice-1',
    title: {
      bn: 'মাদ্রাসার অফিসিয়াল নোটিশ বোর্ড সংক্রান্ত তথ্য',
      en: 'Official Madrasa Notice Board Information',
      ar: 'معلومات لوحة الإعلانات الرسمية للمدرسة',
    },
    content: {
      bn: 'মাদ্রাসার সার্বিক শিক্ষাবর্ষ ও পরীক্ষার যাবতীয় বিজ্ঞপ্তি এখানে নিয়মিত আপডেট করা হবে। বিস্তারিত তথ্য শীঘ্রই প্রকাশ করা হবে। জরুরি প্রয়োজনে 01300448147 নম্বরে যোগাযোগ করুন।',
      en: 'All academic session notices and exam circulars will be published here periodically. Information will be published soon. For urgent queries, call 01300448147.',
      ar: 'سيتم نشر جميع الإعلانات الأكاديمية وجداول الامتحانات والتعاميم هنا تباعًا. سيتم نشر المعلومات قريبًا. في الحالات العاجلة اتصل على 01300448147.',
    },
    date: '2026-10-01',
    category: {
      bn: 'সাধারণ বিজ্ঞপ্তি',
      en: 'General Circular',
      ar: 'إعلان عام',
    },
    isPublished: true,
    isImportant: true,
  },
];
