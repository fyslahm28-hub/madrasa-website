import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { IslamicPattern, IslamicEmblem } from '../components/IslamicPattern';
import {
  GraduationCap,
  FileText,
  CheckCircle2,
  Phone,
  Calendar,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export const AdmissionPage: React.FC = () => {
  const { t, localize } = useLanguage();
  const { siteInfo, admissionData } = useData();

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
            {localize(admissionData.status)}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {t('admissionHeading')}
          </h1>
          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl mx-auto">
            {t('admissionSubheading')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Session Status & Quick Help */}
        <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-amber-950 text-base">
                {localize(admissionData.status)}
              </h3>
              <p className="text-xs text-amber-800">
                শিক্ষাবর্ষ সংক্রান্ত বিস্তারিত: {localize(admissionData.session)}
              </p>
            </div>
          </div>

          <a
            href={`tel:${siteInfo.phone}`}
            className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors shadow-xs"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{localize(admissionData.contactPrompt)}</span>
          </a>
        </div>

        {/* Admission Procedure */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-emerald-950 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-700" />
            <span>{t('admissionProcedure')}</span>
          </h2>
          <p className="text-stone-700 text-xs sm:text-sm leading-relaxed text-justify">
            {localize(admissionData.procedure)}
          </p>
        </div>

        {/* Requirements & Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Requirements */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-emerald-950 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>{t('admissionRequirements')}</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
              {admissionData.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{localize(req)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-emerald-950 flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-600" />
              <span>{t('requiredDocuments')}</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
              {admissionData.documentsRequired.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{localize(doc)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Official Notes on Fees & Dates */}
        <div className="p-5 rounded-2xl bg-stone-100 border border-stone-300 flex items-start gap-3 text-xs sm:text-sm text-stone-700">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p>{localize(admissionData.notes)}</p>
        </div>
      </section>
    </div>
  );
};
