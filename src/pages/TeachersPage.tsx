import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { IslamicPattern, IslamicEmblem } from '../components/IslamicPattern';
import { GraduationCap, Award, BookOpen, Info } from 'lucide-react';

export const TeachersPage: React.FC = () => {
  const { t, localize } = useLanguage();
  const { siteInfo, teachers } = useData();

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
            {t('teachersHeading')}
          </h1>
          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl mx-auto">
            {t('teachersSubheading')}
          </p>
        </div>
      </section>

      {/* Teachers Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {teachers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md transition-shadow space-y-4"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-800 text-amber-300 flex items-center justify-center font-bold text-2xl mx-auto border-2 border-amber-400/50 shadow">
                  {teacher.photoUrl ? (
                    <img
                      src={teacher.photoUrl}
                      alt={localize(teacher.name)}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    localize(teacher.name).charAt(0) || 'أ'
                  )}
                </div>

                <div className="text-center space-y-1">
                  <h3 className="font-bold text-lg text-emerald-950">
                    {localize(teacher.name)}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 bg-amber-50 inline-block px-2.5 py-0.5 rounded-full border border-amber-200">
                    {localize(teacher.designation)}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 text-xs text-stone-600 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{localize(teacher.department)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{localize(teacher.qualification)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-2xl mx-auto shadow-xs space-y-4">
            <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
              <Info className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-emerald-950">
              {t('noTeachersNotice')}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
              কওমি মাদ্রাসার নীতি অনুযায়ী সম্মানিত শিক্ষকমণ্ডলীর পূর্ণাঙ্গ প্রোফাইল ও বিভাগভিত্তিক তথ্য শীঘ্রই অনলাইনে সংযোজন করা হবে।
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
