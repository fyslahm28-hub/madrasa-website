import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { ExamResult } from '../types';
import { IslamicPattern, IslamicEmblem } from '../components/IslamicPattern';
import {
  Award,
  Search,
  FileCheck2,
  AlertCircle,
  GraduationCap,
  Calendar,
  Printer,
} from 'lucide-react';

export const ResultsPage: React.FC = () => {
  const { t, localize } = useLanguage();
  const { siteInfo, results } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [matchedResults, setMatchedResults] = useState<ExamResult[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setMatchedResults([]);
      setHasSearched(false);
      return;
    }
    const cleanTerm = searchTerm.trim().toLowerCase();
    const found = results.filter(
      (r) =>
        r.roll.toLowerCase() === cleanTerm ||
        r.studentId.toLowerCase() === cleanTerm ||
        localize(r.studentName).toLowerCase().includes(cleanTerm)
    );
    setMatchedResults(found);
    setHasSearched(true);
  };

  const handlePrint = () => {
    window.print();
  };

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
            {t('resultsHeading')}
          </h1>
          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl mx-auto">
            {t('resultsSubheading')}
          </p>
        </div>
      </section>

      {/* Results Search Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
          <form onSubmit={handleSearch} className="space-y-4">
            <label className="block text-xs sm:text-sm font-bold text-emerald-950">
              {t('searchResultPlaceholder')}
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-stone-400 absolute start-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="যেমন: Roll 101 বা ID 2026-A"
                  className="w-full ps-11 pe-4 py-3 rounded-xl border border-stone-300 focus:border-emerald-700 outline-none text-sm transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer shadow-xs"
              >
                {t('searchButton')}
              </button>
            </div>
          </form>

          {/* Results Display */}
          {hasSearched ? (
            matchedResults.length > 0 ? (
              <div className="space-y-6 pt-4 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-emerald-950 text-base flex items-center gap-2">
                    <FileCheck2 className="w-5 h-5 text-emerald-600" />
                    <span>ফলাফল বিবরণী</span>
                  </h3>
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-emerald-900 border border-stone-200 px-3 py-1.5 rounded-lg cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>প্রিন্ট করুন</span>
                  </button>
                </div>

                {matchedResults.map((result) => (
                  <div
                    key={result.id}
                    className="bg-stone-50 rounded-2xl border border-stone-200 p-6 space-y-4 shadow-inner"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <span className="text-stone-500 block text-[11px]">{t('studentName')}</span>
                        <strong className="text-emerald-950 font-bold text-sm">
                          {localize(result.studentName)}
                        </strong>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <span className="text-stone-500 block text-[11px]">{t('rollNumber')} / {t('studentId')}</span>
                        <strong className="text-emerald-950 font-bold text-sm font-mono">
                          {result.roll} ({result.studentId})
                        </strong>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <span className="text-stone-500 block text-[11px]">{t('classLabel')}</span>
                        <strong className="text-emerald-950 font-bold text-sm">
                          {localize(result.className)}
                        </strong>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-stone-200">
                        <span className="text-stone-500 block text-[11px]">{t('examTitle')}</span>
                        <strong className="text-emerald-950 font-bold text-sm">
                          {localize(result.examName)}
                        </strong>
                      </div>
                    </div>

                    <div className="p-4 bg-emerald-100/70 border border-emerald-300 rounded-xl flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-emerald-800 block">{t('marksLabel')}</span>
                        <strong className="text-lg font-extrabold text-emerald-950 font-mono">
                          {result.marks}
                        </strong>
                      </div>
                      <div>
                        <span className="text-xs text-emerald-800 block">{t('gradeLabel')}</span>
                        <strong className="text-lg font-extrabold text-emerald-950">
                          {result.grade}
                        </strong>
                      </div>
                      <div>
                        <span className="text-xs text-emerald-800 block">{t('resultStatus')}</span>
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-800 text-amber-300 font-bold text-xs shadow-xs">
                          {localize(result.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 bg-stone-50 border border-stone-200 rounded-xl text-center text-xs text-stone-500">
                {t('noResultsFound')}
              </div>
            )
          ) : (
            <div className="p-8 bg-stone-50 rounded-xl border border-stone-200 text-center space-y-2">
              <Award className="w-10 h-10 text-stone-400 mx-auto" />
              <p className="text-xs sm:text-sm text-stone-600">
                {results.length > 0
                  ? 'আপনার সঠিক রোল বা আইডি দিয়ে ফলাফল অনুসন্ধান করুন।'
                  : t('resultsNoticeMsg')}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
