import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { IslamicPattern, IslamicEmblem } from '../components/IslamicPattern';
import {
  GraduationCap,
  BookMarked,
  Sun,
  Shield,
  Layers,
  Sparkles,
} from 'lucide-react';

export const EducationPage: React.FC = () => {
  const { t, localize } = useLanguage();
  const { siteInfo } = useData();

  return (
    <div className="space-y-12 pb-16">
      {/* Banner */}
      <section className="relative bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white py-14 px-4 sm:px-6 border-b-4 border-amber-500/40 overflow-hidden">
        <IslamicPattern className="absolute inset-0 text-amber-400 opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center space-y-4">
          <div className="flex justify-center mb-2">
            <IslamicEmblem size={64} />
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
            {localize(siteInfo.type)}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {t('educationHeading')}
          </h1>
          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl mx-auto">
            {t('educationSubheading')}
          </p>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-950 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-emerald-800" />
            <span>{t('corePillars')}</span>
          </h2>
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed text-justify">
            কওমি মাদ্রাসা শিক্ষা ব্যবস্থা মুসলিম বিশ্বের হাজার বছরের ঐতিহ্যবাহী দ্বীনি শিক্ষা ব্যবস্থার প্রতীক।
            উম্মুল মুমিনীন হযরত আয়েশা সিদ্দীকা (রা.) বালিকা মাদ্রাসায় আমরা এমন এক পাঠদান পদ্ধতি অনুসরণ করি যা
            একদিকে কুরআন ও সহীহ হাদীসের নির্ভুল জ্ঞান দান করে, অন্যদিকে শিক্ষার্থীদের আত্মমর্যাদাশীল,
            পর্দানশীন ও খোদাভীরু নারী হিসেবে গড়ে তোলে।
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center font-bold">
              ১
            </div>
            <h3 className="font-bold text-emerald-950 text-base sm:text-lg">
              সহীহ কুরআন ও তাজবীদ শিক্ষা
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              পবিত্র কুরআনের বিশুদ্ধ মাখরাজ ও সিফাত অনুযায়ী তিলাওয়াত শেখানো হয় যাতে প্রতিটি শিক্ষার্থী শুদ্ধ ও স্পষ্ট কণ্ঠে আল্লাহর কালাম পাঠ করতে পারে।
            </p>
          </div>

          <div className="bg-amber-50/70 p-6 rounded-2xl border border-amber-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-700 text-amber-100 flex items-center justify-center font-bold">
              ২
            </div>
            <h3 className="font-bold text-emerald-950 text-base sm:text-lg">
              কিতাব বিভাগ ও দারসে নিজামী
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              আরবি ব্যাকরণ (নাহব-সরফ), ফিকহ শাস্ত্র ও ইসলামী আইনের ভিত্তিগত পাঠদান, যা শিক্ষার্থীদের দ্বীনের গভীর বোধ অর্জন করতে সহায়তা করে।
            </p>
          </div>

          <div className="bg-teal-50/70 p-6 rounded-2xl border border-teal-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-800 text-teal-100 flex items-center justify-center font-bold">
              ৩
            </div>
            <h3 className="font-bold text-emerald-950 text-base sm:text-lg">
              তারবিয়াত ও আত্মশুদ্ধি
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              দৈনন্দিন জীবনের আদব-কায়দা, পিতামাতার প্রতি শ্রদ্ধা, সত্যবাদিতা, ধৈর্য ও ইসলামী শিষ্টাচারের নিয়মিত অনুশীলন।
            </p>
          </div>

          <div className="bg-stone-100 p-6 rounded-2xl border border-stone-300 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-stone-800 text-stone-100 flex items-center justify-center font-bold">
              ৪
            </div>
            <h3 className="font-bold text-emerald-950 text-base sm:text-lg">
              সুন্নাত ও ফরজ আমলের তদারকি
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              পাঁচ ওয়াক্ত সালাত, মাসনূন দোয়া এবং প্রাত্যহিক জিকির-আযকারের উপর বিশেষ যত্ন ও সার্বক্ষণিক নজরদারি।
            </p>
          </div>
        </div>

        {/* Daily Routine Summary Box */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
          <h3 className="font-bold text-emerald-950 text-lg flex items-center gap-2">
            <Sun className="w-5 h-5 text-amber-500" />
            <span>{t('dailyRoutineOverview')}</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            শিক্ষার্থীদের প্রতিটি দিন সুশৃঙ্খলভাবে সাজানো: ফজরের নামাজ ও কুরআন তিলাওয়াত দিয়ে দিবসের সূচনা, নিয়মমাফিক শ্রেণি পাঠদান, যোহরের বিশ্রাম ও সালাত, আসরের পর মাসনূন আমল ও মাগরিব পরবর্তী তাকরার (পুনরাবৃত্তি) পাঠ।
          </p>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-500 text-center">
            {t('routineNoticeMsg')}
          </div>
        </div>
      </section>
    </div>
  );
};
