import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { PageId } from '../types';
import { IslamicPattern, IslamicEmblem } from '../components/IslamicPattern';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface DepartmentsPageProps {
  setCurrentPage: (page: PageId) => void;
}

export const DepartmentsPage: React.FC<DepartmentsPageProps> = ({ setCurrentPage }) => {
  const { t, localize, isRTL } = useLanguage();
  const { siteInfo, departments } = useData();

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
            {t('departmentsHeading')}
          </h1>
          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl mx-auto">
            {t('departmentsSubheading')}
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <div
              key={dept.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                    বিভাগ #{index + 1}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-emerald-950">
                  {localize(dept.name)}
                </h2>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {localize(dept.shortDesc)}
                </p>

                {/* Duration */}
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-2 text-xs text-stone-600">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    <strong>{t('durationLabel')}:</strong> {localize(dept.duration)}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{t('keyFeatures')}</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {dept.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{localize(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => setCurrentPage('admission')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-900 hover:text-emerald-700 cursor-pointer"
                >
                  <span>{t('applyNow')}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>

                <button
                  onClick={() => setCurrentPage('contact')}
                  className="text-xs text-stone-500 hover:text-emerald-800 cursor-pointer"
                >
                  {t('contactNow')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
