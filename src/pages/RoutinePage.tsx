import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { IslamicPattern, IslamicEmblem } from '../components/IslamicPattern';
import { CalendarDays, Clock, BookOpen, User, Info, Filter } from 'lucide-react';

export const RoutinePage: React.FC = () => {
  const { t, localize } = useLanguage();
  const { siteInfo, routine } = useData();
  const [selectedDay, setSelectedDay] = useState<string>('all');

  const filteredRoutine = selectedDay === 'all'
    ? routine
    : routine.filter((r) => localize(r.day).toLowerCase() === selectedDay.toLowerCase());

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
            {t('routineHeading')}
          </h1>
          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl mx-auto">
            {t('routineSubheading')}
          </p>
        </div>
      </section>

      {/* Routine Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        {routine.length > 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <h2 className="font-bold text-emerald-950 text-base sm:text-lg flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-emerald-700" />
                <span>{t('routineHeading')}</span>
              </h2>

              {/* Day filter */}
              <div className="flex items-center gap-2 text-xs">
                <Filter className="w-4 h-4 text-stone-500" />
                <button
                  onClick={() => setSelectedDay('all')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                    selectedDay === 'all'
                      ? 'bg-emerald-800 text-white font-bold'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {t('all')}
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-start">
                <thead className="bg-stone-50 border-b border-stone-200 text-emerald-950 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-4 text-start">{t('dayLabel')}</th>
                    <th className="p-4 text-start">{t('timeLabel')}</th>
                    <th className="p-4 text-start">{t('classLabel')}</th>
                    <th className="p-4 text-start">{t('subjectLabel')}</th>
                    <th className="p-4 text-start">{t('teacherLabel')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredRoutine.map((item) => (
                    <tr key={item.id} className="hover:bg-emerald-50/40 transition-colors">
                      <td className="p-4 font-semibold text-emerald-900">{localize(item.day)}</td>
                      <td className="p-4 text-stone-600 flex items-center gap-1.5 font-mono">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        {localize(item.time)}
                      </td>
                      <td className="p-4 font-medium text-stone-800">{localize(item.className)}</td>
                      <td className="p-4 text-emerald-950 font-bold">{localize(item.subject)}</td>
                      <td className="p-4 text-stone-700">{localize(item.teacher)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-xl mx-auto shadow-xs space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
              <Info className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-emerald-950">
              {t('noRoutine')}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              শ্রেণিভিত্তিক রুটিন প্রস্তুত সাপেক্ষে প্রকাশ করা হবে অথবা সরাসরি মাদ্রাসার কার্যালয় থেকে সংগ্রহ করা যাবে।
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
