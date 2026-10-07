import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { PageId } from '../types';
import { IslamicEmblem, IslamicPattern } from './IslamicPattern';
import {
  Phone,
  Mail,
  Facebook,
  MapPin,
  ArrowUp,
  Heart,
  ExternalLink,
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { t, localize } = useLanguage();
  const { siteInfo } = useData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageId; labelKey: string }[] = [
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

  return (
    <footer className="relative bg-gradient-to-b from-emerald-950 via-emerald-950 to-stone-950 text-emerald-100 overflow-hidden border-t-4 border-amber-500/40">
      <IslamicPattern className="absolute inset-0 text-emerald-500 opacity-5" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Madrasa Identity & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <IslamicEmblem size={56} />
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  {localize(siteInfo.type)}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1 leading-snug">
                  {localize(siteInfo.name)}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed max-w-md">
              {t('footerAbout')}
            </p>

            <div className="pt-2 text-xs text-amber-300/90 font-arabic italic">
              «طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ»
              <span className="block text-[11px] text-emerald-300 font-sans mt-0.5">
                (জ্ঞান অর্জন করা প্রত্যেক মুসলিমের উপর আবশ্যক)
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              {t('quickLinks')}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setCurrentPage(link.id);
                    scrollToTop();
                  }}
                  className="text-start text-emerald-200/90 hover:text-amber-300 transition-colors py-1 cursor-pointer truncate"
                >
                  {t(link.labelKey)}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Contact Information (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              {t('contactFooter')}
            </h4>

            <ul className="space-y-3 text-xs text-emerald-200/90">
              {/* Address */}
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{localize(siteInfo.address)}</span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="font-mono text-emerald-100 hover:text-amber-300 transition-colors underline-offset-4 hover:underline"
                >
                  {siteInfo.phone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="text-emerald-100 hover:text-amber-300 transition-colors break-all underline-offset-4 hover:underline"
                >
                  {siteInfo.email}
                </a>
              </li>

              {/* Facebook */}
              <li className="flex items-center gap-2.5 pt-1">
                <Facebook className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={siteInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-900/80 hover:bg-emerald-800 text-amber-200 hover:text-white px-3 py-1.5 rounded-md transition-colors border border-amber-400/20"
                >
                  <span>{t('officialFb')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Developer Credit & Copyright */}
        <div className="mt-10 pt-6 border-t border-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/90">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-start">
            <span>
              © {new Date().getFullYear()} {localize(siteInfo.name)}. {t('allRightsReserved')}
            </span>
          </div>

          {/* Prominent Developer Credit */}
          <div className="flex items-center gap-1.5 bg-emerald-900/90 px-3.5 py-1.5 rounded-full border border-amber-400/30 text-amber-300 font-medium shadow-xs">
            <span>{siteInfo.developer}</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400 inline" />
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-emerald-900 hover:bg-amber-400 hover:text-emerald-950 text-amber-300 transition-all border border-emerald-700 cursor-pointer shadow-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
