import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { PageId, Language } from '../types';
import { IslamicEmblem } from './IslamicPattern';
import {
  Phone,
  Mail,
  Facebook,
  Menu,
  X,
  ShieldAlert,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { language, setLanguage, t, localize, isRTL } = useLanguage();
  const { siteInfo, homeData } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; labelKey: string }[] = [
    { id: 'home', labelKey: 'nav_home' },
    { id: 'about', labelKey: 'nav_about' },
    { id: 'education', labelKey: 'nav_education' },
    { id: 'departments', labelKey: 'nav_departments' },
    { id: 'authorities', labelKey: 'nav_authorities' },
    { id: 'teachers', labelKey: 'nav_teachers' },
    { id: 'admission', labelKey: 'nav_admission' },
    { id: 'notices', labelKey: 'nav_notices' },
    { id: 'routine', labelKey: 'nav_routine' },
    { id: 'results', labelKey: 'nav_results' },
    { id: 'gallery', labelKey: 'nav_gallery' },
    { id: 'contact', labelKey: 'nav_contact' },
  ];

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'bn', label: 'বাংলা' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
  ];

  return (
    <header className="w-full bg-white shadow-sm border-b border-emerald-900/10 sticky top-0 z-40 transition-colors">
      {/* Top Bar with Islamic Tone, Contact info & Language Selector */}
      <div className="bg-emerald-950 text-emerald-100 text-xs sm:text-sm py-2 px-4 sm:px-6 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          {/* Bismillah & Callout */}
          <div className="flex items-center gap-2">
            <span className="font-arabic font-semibold text-amber-300 tracking-wide text-sm sm:text-base">
              {localize(homeData.bismillah) || t('bismillah')}
            </span>
            <span className="hidden md:inline-block text-emerald-400/50">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {localize(siteInfo.type)}
            </span>
          </div>

          {/* Quick contact and Language Switcher */}
          <div className="flex items-center flex-wrap gap-3 sm:gap-4 ml-auto">
            {/* Phone */}
            <a
              href={`tel:${siteInfo.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              title={t('callNow')}
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-xs">{siteInfo.phone}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteInfo.email}`}
              className="hidden lg:inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              title={t('emailUs')}
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs truncate max-w-[180px]">{siteInfo.email}</span>
            </a>

            {/* Facebook */}
            <a
              href={siteInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-200 hover:text-amber-300 transition-colors"
              title={t('officialFb')}
            >
              <Facebook className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline text-xs">{t('officialFb')}</span>
            </a>

            {/* 3-Language Switcher */}
            <div className="inline-flex items-center bg-emerald-900/80 rounded-md p-0.5 border border-emerald-700/60 shadow-inner">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-0.5 text-xs rounded font-medium transition-all cursor-pointer ${
                    language === lang.code
                      ? 'bg-amber-400 text-emerald-950 font-bold shadow-sm'
                      : 'text-emerald-200 hover:text-white hover:bg-emerald-800'
                  }`}
                  aria-pressed={language === lang.code}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Admin Switch */}
            <button
              onClick={() => handleNavClick(currentPage === 'admin' ? 'home' : 'admin')}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer border ${
                currentPage === 'admin'
                  ? 'bg-amber-400 text-emerald-950 border-amber-300 font-bold shadow'
                  : 'bg-emerald-900/90 text-amber-200 hover:bg-emerald-800 border-amber-500/30'
              }`}
              title="Content Management"
            >
              <ShieldAlert className="w-3 h-3 text-amber-300" />
              <span>{currentPage === 'admin' ? t('adminExit') : t('adminLogin')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Brand Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 sm:gap-4 cursor-pointer group select-none"
        >
          <IslamicEmblem size={52} className="group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-semibold border border-emerald-200">
                {localize(siteInfo.type)}
              </span>
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-950 leading-tight tracking-tight group-hover:text-emerald-800 transition-colors">
              {localize(siteInfo.name)}
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 line-clamp-1 max-w-xl">
              {localize(siteInfo.address)}
            </p>
          </div>
        </div>

        {/* Action Button & Hamburger for Mobile */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNavClick('admission')}
            className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 text-amber-200 px-3.5 py-2 rounded-lg text-xs md:text-sm font-semibold shadow-sm border border-amber-400/30 transition-all cursor-pointer"
          >
            <GraduationCap className="w-4 h-4 text-amber-300" />
            <span>{t('applyNow')}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-stone-100 text-emerald-950 hover:bg-emerald-50 hover:text-emerald-800 border border-stone-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Main Navigation Bar */}
      <nav className="hidden lg:block bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-900 text-emerald-50 border-t border-b border-amber-500/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between overflow-x-auto scrollbar-none py-1">
            <ul className="flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-1 ${
                        isActive
                          ? 'bg-amber-400 text-emerald-950 font-bold shadow-sm'
                          : 'text-emerald-100 hover:bg-emerald-800/80 hover:text-amber-200'
                      }`}
                    >
                      {t(item.labelKey)}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex ${
            isRTL ? 'justify-start' : 'justify-end'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-4/5 max-w-sm h-full bg-white text-stone-800 shadow-2xl flex flex-col p-5 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-4">
              <div className="flex items-center gap-2">
                <IslamicEmblem size={38} />
                <span className="font-bold text-sm text-emerald-950 line-clamp-1">
                  {localize(siteInfo.name)}
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-md hover:bg-stone-100 text-stone-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Language Switcher */}
            <div className="mb-4 p-2 bg-stone-100 rounded-lg flex items-center justify-between">
              <span className="text-xs text-stone-600 font-medium">{t('language')}:</span>
              <div className="flex items-center gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2 py-1 text-xs rounded font-semibold cursor-pointer ${
                      language === lang.code
                        ? 'bg-emerald-800 text-amber-300 shadow'
                        : 'text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation links */}
            <div className="flex-1 space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-start px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-emerald-800 text-amber-200 font-bold'
                        : 'text-stone-700 hover:bg-emerald-50 hover:text-emerald-900'
                    }`}
                  >
                    <span>{t(item.labelKey)}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-amber-400"></span>}
                  </button>
                );
              })}

              <div className="pt-2 border-t border-stone-200 mt-2">
                <button
                  onClick={() => handleNavClick('admin')}
                  className={`w-full text-start px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
                    currentPage === 'admin'
                      ? 'bg-amber-400 text-emerald-950'
                      : 'bg-emerald-900 text-amber-200 hover:bg-emerald-800'
                  }`}
                >
                  <ShieldAlert className="w-4 h-4" />
                  <span>{t('adminLogin')}</span>
                </button>
              </div>
            </div>

            {/* Footer in Drawer with clickable contact */}
            <div className="pt-4 border-t border-stone-200 text-xs space-y-2 text-stone-600">
              <a
                href={`tel:${siteInfo.phone}`}
                className="flex items-center gap-2 text-emerald-900 font-mono font-medium hover:text-emerald-700"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>{siteInfo.phone}</span>
              </a>
              <a
                href={`mailto:${siteInfo.email}`}
                className="flex items-center gap-2 text-stone-600 hover:text-emerald-700 truncate"
              >
                <Mail className="w-4 h-4 text-emerald-700" />
                <span className="truncate">{siteInfo.email}</span>
              </a>
              <a
                href={siteInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-700 hover:underline"
              >
                <Facebook className="w-4 h-4 text-blue-600" />
                <span>Facebook Page</span>
              </a>
              <div className="pt-2 text-[11px] text-stone-400 border-t border-stone-100">
                {siteInfo.developer}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
