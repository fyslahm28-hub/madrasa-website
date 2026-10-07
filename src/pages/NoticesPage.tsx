import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { Notice } from '../types';
import { IslamicPattern, IslamicEmblem } from '../components/IslamicPattern';
import {
  Bell,
  Calendar,
  Tag,
  Search,
  Eye,
  X,
  FileText,
  AlertCircle,
} from 'lucide-react';

export const NoticesPage: React.FC = () => {
  const { t, localize } = useLanguage();
  const { siteInfo, notices } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const publishedNotices = notices.filter((n) => n.isPublished);

  const filteredNotices = publishedNotices.filter((n) => {
    const title = localize(n.title).toLowerCase();
    const content = localize(n.content).toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || content.includes(query);
  });

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
            {t('noticesHeading')}
          </h1>
          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl mx-auto">
            {t('noticesSubheading')}
          </p>
        </div>
      </section>

      {/* Notices Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('search')}
            className="w-full text-sm outline-none bg-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Notices List */}
        {filteredNotices.length > 0 ? (
          <div className="space-y-4">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 hover:border-emerald-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span className="font-semibold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {localize(notice.category)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      {notice.date}
                    </span>
                    {notice.isImportant && (
                      <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">
                        জরুরি
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-emerald-950 hover:text-emerald-700 transition-colors">
                    {localize(notice.title)}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-2">
                    {localize(notice.content)}
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-100 hover:bg-emerald-800 hover:text-white text-stone-700 text-xs font-semibold transition-colors shrink-0"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{t('readNotice')}</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-md mx-auto shadow-xs space-y-3">
            <AlertCircle className="w-10 h-10 text-stone-400 mx-auto" />
            <h4 className="font-bold text-stone-800 text-base">{t('noNotices')}</h4>
          </div>
        )}
      </section>

      {/* Notice Detail Modal */}
      {selectedNotice && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedNotice(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-3 border-b border-stone-100">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  {localize(selectedNotice.category)}
                </span>
                <span className="text-xs text-stone-500 block">
                  তারিখ: {selectedNotice.date}
                </span>
              </div>
              <button
                onClick={() => setSelectedNotice(null)}
                className="p-1.5 rounded-md hover:bg-stone-100 text-stone-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-emerald-950">
              {localize(selectedNotice.title)}
            </h2>

            <div className="text-stone-700 text-sm leading-relaxed whitespace-pre-line border-t border-stone-100 pt-3">
              {localize(selectedNotice.content)}
            </div>

            <div className="pt-4 border-t border-stone-100 flex justify-end">
              <button
                onClick={() => setSelectedNotice(null)}
                className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-colors"
              >
                {t('close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
