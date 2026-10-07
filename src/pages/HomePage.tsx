import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { PageId } from '../types';
import { IslamicPattern, IslamicEmblem } from '../components/IslamicPattern';
import {
  BookOpen,
  Award,
  Users,
  Bell,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const { t, localize, isRTL } = useLanguage();
  const { siteInfo, homeData, authorities, departments, notices } = useData();

  const publishedNotices = notices.filter((n) => n.isPublished).slice(0, 3);

  return (
    <div className="space-y-12 sm:space-y-16 pb-12">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white overflow-hidden py-16 sm:py-24 border-b-4 border-amber-500/40">
        <IslamicPattern className="absolute inset-0 text-amber-400 opacity-10" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          {/* Bismillah Calligraphy */}
          <div className="inline-block px-5 py-2 rounded-full bg-emerald-900/80 border border-amber-400/30 backdrop-blur-xs shadow-inner">
            <p className="font-arabic text-xl sm:text-2xl md:text-3xl text-amber-300 font-bold tracking-wide">
              {localize(homeData.bismillah) || t('bismillah')}
            </p>
          </div>

          {/* Emblem */}
          <div className="flex justify-center">
            <IslamicEmblem size={76} className="shadow-2xl ring-4 ring-amber-400/40" />
          </div>

          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/40">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {localize(siteInfo.type)}
            </span>
          </div>

          {/* Official Madrasa Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-sm">
            {localize(homeData.heroTitle)}
          </h1>

          {/* Official Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto font-medium leading-relaxed">
            {localize(homeData.heroSubtitle)}
          </p>

          {/* Action Buttons */}
          <div className="pt-6 sm:pt-8 md:pt-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <button
              onClick={() => setCurrentPage('admission')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer text-sm sm:text-base border border-amber-300"
            >
              <span>{localize(homeData.primaryButton.label)}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center gap-2 bg-emerald-800/80 hover:bg-emerald-700/80 text-emerald-100 font-semibold px-6 py-3 rounded-xl border border-emerald-600 backdrop-blur-xs transition-all cursor-pointer text-sm sm:text-base"
            >
              <span>{localize(homeData.secondaryButton.label)}</span>
            </button>
          </div>

          {/* Location snippet */}
          <div className="pt-6 sm:pt-8 md:pt-10 flex items-center justify-center gap-2 text-xs sm:text-sm text-emerald-200/90">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{localize(siteInfo.address)}</span>
          </div>
        </div>

        {/* Announcement ticker if available */}
        {homeData.announcementTicker && (
          <div className="mt-12 sm:mt-16 md:mt-20 border-t border-amber-500/20 bg-emerald-950/90 py-3.5 sm:py-4 px-4 sm:px-6 md:px-8 text-xs sm:text-sm text-amber-200">
            <div className="max-w-7xl mx-auto flex items-center gap-3">
              <span className="shrink-0 flex items-center gap-1 font-bold bg-amber-500 text-emerald-950 px-2.5 py-1 rounded text-xs">
                <Bell className="w-3 h-3" />
                {t('latestNotices')}:
              </span>
              <p className="line-clamp-1 flex-1 font-medium">
                {localize(homeData.announcementTicker)}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 2. Welcome & Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-amber-50/70 via-white to-emerald-50/60 rounded-2xl p-6 sm:p-10 border border-emerald-900/10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
                <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                <span>{localize(siteInfo.type)}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950">
                {localize(homeData.welcomeHeading)}
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed text-justify">
                {localize(homeData.welcomeText)}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="inline-flex items-center gap-2 text-emerald-900 font-bold hover:text-emerald-700 text-sm cursor-pointer underline-offset-4 hover:underline"
                >
                  <span>{t('readMore')}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
                <button
                  onClick={() => setCurrentPage('education')}
                  className="inline-flex items-center gap-2 text-stone-600 hover:text-emerald-800 font-medium text-sm cursor-pointer"
                >
                  <span>{t('nav_education')}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Quick Feature Pillars */}
            <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-3">
              <h3 className="font-bold text-emerald-950 text-sm pb-2 border-b border-stone-100 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>{t('whyChooseUs')}</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>কওমি পাঠ্যক্রম ও ঐতিহ্যবাহী দারসে নিজামী শিক্ষা</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>হিফজুল কুরআন ও সহীহ মাখরাজ-তাজবীদ প্রশিক্ষণ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>পরিপূর্ণ শরয়ী পর্দা ও নিরাপদ আবাসিক পরিবেশ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>যোগ্য ও বিজ্ঞ আলেম-ওলামাদের সার্বক্ষণিক তত্ত্বাবধান</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Responsible Persons Section (Authorities) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            <Users className="w-3.5 h-3.5" />
            <span>{t('authoritiesSection')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950">
            {t('authoritiesHeading')}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            {t('authoritiesSubheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {authorities.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-xl border border-stone-200/90 hover:border-emerald-500/50 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-900 text-amber-300 flex items-center justify-center font-bold text-lg shadow-sm border-2 border-amber-400/40 group-hover:scale-105 transition-transform mx-auto">
                  {localize(person.name).charAt(0) || 'م'}
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-emerald-950 text-base leading-snug">
                    {localize(person.name)}
                  </h3>
                  <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/60">
                    {localize(person.position)}
                  </span>
                </div>
                <p className="text-xs text-stone-600 text-center leading-relaxed">
                  {localize(person.description)}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 text-center">
                <button
                  onClick={() => setCurrentPage('authorities')}
                  className="text-xs text-emerald-800 font-semibold hover:text-emerald-600 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{t('responsibilities')}</span>
                  <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Academic Departments Overview */}
      <section className="bg-stone-100/70 py-12 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                {t('featuredDepartments')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 mt-1">
                {t('departmentsHeading')}
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('departments')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-900 hover:text-emerald-700 bg-white px-4 py-2 rounded-lg border border-stone-300 shadow-xs cursor-pointer"
            >
              <span>{t('viewAll')}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-xl p-5 border border-stone-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-emerald-950 text-base leading-snug">
                    {localize(dept.name)}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {localize(dept.shortDesc)}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100">
                  <button
                    onClick={() => setCurrentPage('departments')}
                    className="text-xs text-emerald-800 font-semibold hover:text-emerald-600 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{t('readMore')}</span>
                    <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Notice Board Section & Admission Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Latest Notices (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-lg text-emerald-950">
                  {t('latestNotices')}
                </h3>
              </div>
              <button
                onClick={() => setCurrentPage('notices')}
                className="text-xs font-semibold text-emerald-800 hover:text-emerald-600 cursor-pointer"
              >
                {t('viewAll')}
              </button>
            </div>

            <div className="space-y-3">
              {publishedNotices.length > 0 ? (
                publishedNotices.map((notice) => (
                  <div
                    key={notice.id}
                    onClick={() => setCurrentPage('notices')}
                    className="p-3.5 rounded-xl bg-stone-50 hover:bg-emerald-50 border border-stone-200/80 hover:border-emerald-300 transition-colors cursor-pointer space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="font-medium text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        {localize(notice.category)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {notice.date}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-stone-900">
                      {localize(notice.title)}
                    </h4>
                    <p className="text-xs text-stone-600 line-clamp-2">
                      {localize(notice.content)}
                    </p>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-xs text-stone-500">
                  {t('noNotices')}
                </div>
              )}
            </div>
          </div>

          {/* Admission Callout Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-2xl p-6 sm:p-7 shadow-md border border-amber-400/30 space-y-5">
            <div className="inline-block bg-amber-400 text-emerald-950 text-xs font-bold px-3 py-1 rounded-full uppercase">
              {t('admissionHeading')}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold leading-snug text-white">
              দ্বীনি শিক্ষায় আপনার সন্তানকে আদর্শবান করে গড়ে তুলুন
            </h3>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              নূরানী, হিফজ ও কিতাব বিভাগে সীমিত সংখ্যক আসনে ভর্তি চলছে। প্রয়োজনীয় তথ্যের জন্য এখনই সরাসরি যোগাযোগ করুন।
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <a
                href={`tel:${siteInfo.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-emerald-800/80 hover:bg-emerald-700/80 border border-emerald-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="block text-[11px] text-emerald-200">{t('phoneCall')}</span>
                  <span className="font-bold font-mono text-sm text-white">{siteInfo.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${siteInfo.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-emerald-800/80 hover:bg-emerald-700/80 border border-emerald-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="truncate">
                  <span className="block text-[11px] text-emerald-200">{t('officialEmail')}</span>
                  <span className="font-semibold text-xs text-white truncate">{siteInfo.email}</span>
                </div>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setCurrentPage('admission')}
                className="w-full bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold py-2.5 rounded-xl text-center text-sm transition-colors cursor-pointer shadow"
              >
                {t('applyNow')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quick Location & Contact Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-emerald-800 text-amber-300 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-emerald-950 text-base">
                {localize(siteInfo.address)}
              </h4>
              <p className="text-xs text-emerald-800">
                {localize(siteInfo.name)} | {localize(siteInfo.type)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteInfo.phone}`}
              className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-4 py-2.5 rounded-lg text-xs sm:text-sm shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{t('callNow')}</span>
            </a>
            <button
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-emerald-900 font-bold px-4 py-2.5 rounded-lg text-xs sm:text-sm border border-emerald-300 shadow-sm cursor-pointer transition-colors"
            >
              <span>{t('contactNow')}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
