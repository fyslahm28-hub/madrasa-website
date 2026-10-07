import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { IslamicPattern, IslamicEmblem } from '../components/IslamicPattern';
import { Users, Award, Shield } from 'lucide-react';

export const AuthoritiesPage: React.FC = () => {
  const { t, localize } = useLanguage();
  const { siteInfo, authorities } = useData();

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
            {t('authoritiesHeading')}
          </h1>
          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl mx-auto">
            {t('authoritiesSubheading')}
          </p>
        </div>
      </section>

      {/* Authorities List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {authorities.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-amber-300 flex items-center justify-center font-bold text-3xl shadow-md border-2 border-amber-400/50 shrink-0">
                {localize(person.name).charAt(0) || 'م'}
              </div>

              <div className="space-y-3 text-center sm:text-start flex-1">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300/80 mb-1">
                    {localize(person.position)}
                  </span>
                  <h3 className="text-xl font-bold text-emerald-950 mt-1">
                    {localize(person.name)}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {localize(person.description)}
                </p>

                <div className="pt-2 text-xs text-emerald-800 flex items-center justify-center sm:justify-start gap-2">
                  <Shield className="w-4 h-4 text-emerald-700" />
                  <span>{localize(siteInfo.name)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
