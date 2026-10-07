import { AdmissionInfo } from '../types';

export const defaultAdmissionData: AdmissionInfo = {
  status: {
    bn: 'ভর্তি সংক্রান্ত তথ্যের জন্য সরাসরি যোগাযোগ করুন',
    en: 'Contact us directly for admission inquiries',
    ar: 'للاستفسار عن إجراءات القبول يرجى التواصل مباشرة',
  },
  session: {
    bn: 'তথ্য শীঘ্রই প্রকাশ করা হবে।',
    en: 'Information will be published soon.',
    ar: 'سيتم نشر المعلومات قريبًا.',
  },
  procedure: {
    bn: '১. মাদ্রাসা কার্যালয়ে উপস্থিত হয়ে ভর্তি ফরম সংগ্রহ করুন। ২. প্রয়োজনীয় কাগজপত্রসহ আবেদন জমা দিন। ৩. মৌখিক সাক্ষাৎকার ও মেধা যাচাইয়ের পর চূড়ান্ত ভর্তি নিশ্চিত করা হবে। বিস্তারিত তথ্যের জন্য 01300448147 নম্বরে যোগাযোগ করুন।',
    en: '1. Collect the official admission form from the madrasa office. 2. Submit the completed application along with required documents. 3. Final admission is confirmed following an oral interview. For detailed assistance, call 01300448147.',
    ar: '١. الحصول على استمارة القبول من مكتب إدارة المدرسة. ٢. تقديم الطلب مكتملًا مع المستندات المطلوبة. ٣. اعتماد القبول بعد المقابلة الشفهية واختبار المستوى. للاستفسار اتصل على 01300448147.',
  },
  requirements: [
    {
      bn: 'শিক্ষার্থীর দ্বীনি শিক্ষার প্রতি আন্তরিক আগ্রহ ও অভিভাবকের লিখিত সম্মতি',
      en: 'Sincere dedication to Islamic learning and written parental consent',
      ar: 'الرغبة الصادقة للطالبة في تعلم العلوم الشرعية وموافقة ولي الأمر',
    },
    {
      bn: 'মাদ্রাসার নির্ধারিত পর্দা ও শৃঙ্খলাবিধি মেনে চলার অঙ্গীকার',
      en: 'Commitment to Islamic modesty, dress code, and campus discipline',
      ar: 'الالتزام بالحجاب الشرعي التام واللوائح السلوكية للمدرسة',
    },
    {
      bn: 'নিয়মিত ক্লাসে উপস্থিতি ও নামাজ-কালামের প্রতি যত্নবান হওয়া',
      en: 'Punctual attendance and diligence in daily prayers',
      ar: 'المواظبة على الحضور اليومي والمحافظة على الصلوات',
    },
  ],
  documentsRequired: [
    {
      bn: 'শিক্ষার্থীর জন্ম নিবন্ধন সনদের ফটোকপি',
      en: 'Photocopy of student birth registration certificate',
      ar: 'صورة من شهادة ميلاد الطالبة',
    },
    {
      bn: 'পিতা বা অভিভাবকের জাতীয় পরিচয়পত্রের ফটোকপি',
      en: 'Photocopy of National ID card of father/guardian',
      ar: 'صورة من بطاقة الهوية الوطنية لولي الأمر',
    },
    {
      bn: 'পাসপোর্ট সাইজের রঙিন ছবি',
      en: 'Passport size colored photographs',
      ar: 'صور شخصية ملونة بحجم جواز السفر',
    },
  ],
  notes: {
    bn: 'আসন সংখ্যা সীমিত। ভর্তি ফি ও অন্যান্য বিস্তারিত শর্তাবলী শীঘ্রই প্রকাশ করা হবে অথবা অফিসে জানা যাবে।',
    en: 'Seats are strictly limited. Fee structure and additional terms will be published soon or obtained at the office.',
    ar: 'المقاعد محدودة. سيتم نشر تفاصيل الرسوم والشروط قريبًا أو يمكن الاستفسار عنها في الإدارة.',
  },
  contactPrompt: {
    bn: 'ভর্তি বিষয়ে সরাসরি কথা বলতে কল করুন: 01300448147',
    en: 'To speak directly regarding admissions, call: 01300448147',
    ar: 'للتواصل المباشر بشأن القبول والتسجيل اتصل: 01300448147',
  },
};
