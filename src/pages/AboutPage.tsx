import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { IslamicPattern, IslamicEmblem } from '../components/IslamicPattern';
import {
  Compass,
  CheckCircle,
  MapPin,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t, localize } = useLanguage();
  const { siteInfo, aboutData } = useData();

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
            {localize(aboutData.title)}
          </h1>
          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl mx-auto">
            {localize(aboutData.subtitle)}
          </p>
        </div>
      </section>

      {/* Main Story & Origin */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
            <BookOpen className="w-6 h-6 text-emerald-800" />
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-950">
              {t('aboutHeading')}
            </h2>
          </div>

          <div className="prose max-w-none text-stone-700 leading-relaxed space-y-4 text-sm sm:text-base text-justify">
            <p>{localize(aboutData.mainStory)}</p>
            <p className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-amber-950 text-xs sm:text-sm italic">
              «উম্মুল মুমিনীন হযরত আয়েশা সিদ্দীকা (রা.) ছিলেন ইসলামী জ্ঞানের এক সুমহান বাতিঘর। তাঁর পুণ্যস্মৃতির প্রতি শ্রদ্ধা রেখে মুসলিম কন্যাদের সেই আদর্শে উজ্জীবিত করাই আমাদের প্রধান প্রত্যয়।»
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <div className="bg-gradient-to-br from-emerald-50/80 to-teal-50/50 rounded-2xl border border-emerald-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-800 text-amber-300 flex items-center justify-center shadow">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
              {localize(aboutData.visionTitle)}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {localize(aboutData.visionText)}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/50 rounded-2xl border border-amber-200 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-amber-700 text-amber-100 flex items-center justify-center shadow">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
              {localize(aboutData.missionTitle)}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {localize(aboutData.missionText)}
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-emerald-950 flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-emerald-700" />
            <span>{t('ourSpecialties')}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
            <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-emerald-950">কওমি ধারার বিশুদ্ধ পাঠ্যসূচি</strong>
                দারসে নিজামীর নির্ভরযোগ্য কিতাবাদি এবং কুরআন-হাদীসের সমন্বিত শিক্ষা।
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-emerald-950">পর্দা ও চারিত্রিক নিরাপত্তা</strong>
                ইসলামী শরীয়াহর পূর্ণ অনুশাসন ও কঠোর নিরাপত্তার সুব্যবস্থা।
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-emerald-950">আমল ও আখলাকের প্রশিক্ষণ</strong>
                কেবল তাত্ত্বিক পড়াশোনা নয়, বরং বাস্তব জীবনে সুন্নাত অনুসরণের তালিম।
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-emerald-950">অভিজ্ঞ শিক্ষকমণ্ডলী</strong>
                স্নেহশীল ও দায়িত্ববান আলেমা এবং আলেমদের সার্বক্ষণিক দিকনির্দেশনা।
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
              <MapPin className="w-5 h-5" />
              <span>{t('madrasaAddress')}</span>
            </div>
            <p className="text-sm sm:text-base text-emerald-100 font-medium">
              {localize(siteInfo.address)}
            </p>
          </div>

          <a
            href={`tel:${siteInfo.phone}`}
            className="shrink-0 bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold px-6 py-3 rounded-xl transition-colors shadow text-sm"
          >
            {t('contactNow')}: {siteInfo.phone}
          </a>
        </div>
      </section>
    </div>
  );
};
