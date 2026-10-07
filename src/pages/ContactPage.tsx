import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { IslamicPattern, IslamicEmblem } from '../components/IslamicPattern';
import {
  Phone,
  Mail,
  Facebook,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t, localize } = useLanguage();
  const { siteInfo, contactData } = useData();

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 5000);
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
            {t('contactHeading')}
          </h1>
          <p className="text-sm sm:text-base text-emerald-200/90 max-w-2xl mx-auto">
            {t('contactSubheading')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-xs space-y-6">
              <h2 className="text-lg font-bold text-emerald-950 border-b border-stone-100 pb-3">
                {t('contactFooter')}
              </h2>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-emerald-950">
                    {t('madrasaAddress')}
                  </strong>
                  <p className="text-xs sm:text-sm text-stone-700 mt-0.5 leading-relaxed">
                    {localize(contactData.address)}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-emerald-950">
                    {t('phoneCall')}
                  </strong>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="font-mono text-sm text-emerald-800 hover:text-emerald-950 font-bold underline mt-0.5 inline-block"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-emerald-950">
                    {t('officialEmail')}
                  </strong>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-xs sm:text-sm text-stone-700 hover:text-emerald-900 underline mt-0.5 inline-block break-all"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                  <Facebook className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-emerald-950">
                    {t('facebookPage')}
                  </strong>
                  <a
                    href={contactData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 mt-1 hover:underline"
                  >
                    <span>facebook.com/Foysalofficial2</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-stone-700" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-emerald-950">
                    {t('officeHours')}
                  </strong>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {localize(contactData.officeHours)}
                  </p>
                </div>
              </div>
            </div>

            {/* Developer Credit Info */}
            <div className="bg-emerald-950 text-white p-5 rounded-2xl border border-amber-400/30 text-xs space-y-1">
              <span className="text-amber-400 font-bold block">{siteInfo.developer}</span>
              <p className="text-emerald-200">
                ওয়েবসাইট রক্ষণাবেক্ষণ, প্রযুক্তিগত সহায়তা এবং নতুন ফিচার সংক্রান্ত প্রয়োজনে সরাসরি যোগাযোগ করা যাবে।
              </p>
            </div>
          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-emerald-950 border-b border-stone-100 pb-3 flex items-center gap-2">
              <Send className="w-5 h-5 text-emerald-700" />
              <span>{t('sendMessageTitle')}</span>
            </h2>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base">{t('sendSuccess')}</h4>
                <p className="text-xs text-emerald-700">
                  আমাদের দায়িত্বশীল প্রতিনিধি আপনার সাথে শীঘ্রই যোগাযোগ করবেন ইনশাআল্লাহ।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-stone-700">
                      {t('senderName')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="আপনার নাম"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-emerald-700 outline-none text-xs sm:text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-stone-700">
                      {t('senderPhone')} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="মোবাইল নম্বর"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-emerald-700 outline-none text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-stone-700">
                      {t('senderEmail')}
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="ইমেইল ঠিকানা"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-emerald-700 outline-none text-xs sm:text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-stone-700">
                      {t('senderSubject')}
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="যেমন: ভর্তি অনুসন্ধান"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-emerald-700 outline-none text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-stone-700">
                    {t('senderMessage')} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="আপনার বার্তা বা প্রশ্ন লিখুন..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-emerald-700 outline-none text-xs sm:text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-8 py-3 rounded-xl text-sm transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('submit')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
