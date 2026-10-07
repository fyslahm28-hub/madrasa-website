import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { GalleryItem } from '../types';
import { IslamicPattern, IslamicEmblem } from '../components/IslamicPattern';
import { Image as ImageIcon, X, ZoomIn, Info } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { t, localize } = useLanguage();
  const { siteInfo, gallery } = useData();
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

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
            {t('galleryHeading')}
          </h1>
          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl mx-auto">
            {t('gallerySubheading')}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {gallery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all cursor-pointer aspect-4/3"
              >
                <img
                  src={item.imageUrl}
                  alt={localize(item.title)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="text-[11px] font-semibold text-amber-300 bg-black/40 px-2 py-0.5 rounded w-max mb-1">
                    {localize(item.category)}
                  </span>
                  <h3 className="font-bold text-sm leading-snug">
                    {localize(item.title)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-xl mx-auto shadow-xs space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto border border-emerald-200">
              <ImageIcon className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-emerald-950">
              {t('noPhotos')}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              মাদ্রাসার প্রাতিষ্ঠানিক পরিবেশ ও শিক্ষা কার্যক্রমের আলোকচিত্রসমূহ শীঘ্রই সংযোজন করা হবে।
            </p>
          </div>
        )}
      </section>

      {/* Fullscreen Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-black">
              <img
                src={activeImage.imageUrl}
                alt={localize(activeImage.title)}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-1">
              <span className="text-xs text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded font-semibold">
                {localize(activeImage.category)}
              </span>
              <h3 className="font-bold text-base text-emerald-950">
                {localize(activeImage.title)}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
