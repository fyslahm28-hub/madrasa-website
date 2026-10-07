import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import {
  SiteInfo,
  SEOData,
  HomeContent,
  AboutContent,
  AuthorityPerson,
  Teacher,
  Department,
  AdmissionInfo,
  Notice,
  RoutineItem,
  ExamResult,
  GalleryItem,
  ContactInfo,
} from '../types';
import {
  ShieldAlert,
  Building,
  Home,
  FileText,
  Users,
  GraduationCap,
  Layers,
  CheckCircle,
  Bell,
  Calendar,
  Award,
  Image as ImageIcon,
  Phone,
  Search,
  Database,
  Plus,
  Trash2,
  Edit2,
  Save,
  RotateCcw,
  Download,
  Upload,
  Check,
} from 'lucide-react';

type AdminTab =
  | 'site'
  | 'home'
  | 'about'
  | 'authorities'
  | 'teachers'
  | 'departments'
  | 'admission'
  | 'notices'
  | 'routine'
  | 'results'
  | 'gallery'
  | 'contact'
  | 'seo'
  | 'backup';

export const AdminPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const {
    siteInfo,
    updateSiteInfo,
    seoData,
    updateSEOData,
    homeData,
    updateHomeData,
    aboutData,
    updateAboutData,
    authorities,
    saveAuthority,
    deleteAuthority,
    teachers,
    saveTeacher,
    deleteTeacher,
    departments,
    saveDepartment,
    deleteDepartment,
    admissionData,
    updateAdmissionData,
    notices,
    saveNotice,
    deleteNotice,
    routine,
    saveRoutineItem,
    deleteRoutineItem,
    results,
    saveResult,
    deleteResult,
    gallery,
    saveGalleryItem,
    deleteGalleryItem,
    contactData,
    updateContactData,
    resetAll,
    exportBackup,
    importBackup,
  } = useData();

  const [activeTab, setActiveTab] = useState<AdminTab>('site');
  const [notification, setNotification] = useState<string | null>(null);

  const showNotify = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // State buffers for forms
  const [localSite, setLocalSite] = useState<SiteInfo>(siteInfo);
  const [localHome, setLocalHome] = useState<HomeContent>(homeData);
  const [localAbout, setLocalAbout] = useState<AboutContent>(aboutData);
  const [localAdmission, setLocalAdmission] = useState<AdmissionInfo>(admissionData);
  const [localContact, setLocalContact] = useState<ContactInfo>(contactData);
  const [localSEO, setLocalSEO] = useState<SEOData>(seoData);

  // Modals for array items
  const [editingAuthority, setEditingAuthority] = useState<AuthorityPerson | null>(null);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [editingRoutine, setEditingRoutine] = useState<RoutineItem | null>(null);
  const [editingResult, setEditingResult] = useState<ExamResult | null>(null);
  const [editingGallery, setEditingGallery] = useState<GalleryItem | null>(null);
  const [editingDepartment, setEditingDepartment] = useState<Department | null>(null);

  const [backupJsonInput, setBackupJsonInput] = useState('');

  const tabs: { id: AdminTab; labelKey: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'site', labelKey: 'tab_site', icon: Building },
    { id: 'home', labelKey: 'tab_home', icon: Home },
    { id: 'about', labelKey: 'tab_about', icon: FileText },
    { id: 'authorities', labelKey: 'tab_authorities', icon: Users },
    { id: 'teachers', labelKey: 'tab_teachers', icon: GraduationCap },
    { id: 'departments', labelKey: 'tab_departments', icon: Layers },
    { id: 'admission', labelKey: 'tab_admission', icon: CheckCircle },
    { id: 'notices', labelKey: 'tab_notices', icon: Bell },
    { id: 'routine', labelKey: 'tab_routine', icon: Calendar },
    { id: 'results', labelKey: 'tab_results', icon: Award },
    { id: 'gallery', labelKey: 'tab_gallery', icon: ImageIcon },
    { id: 'contact', labelKey: 'tab_contact', icon: Phone },
    { id: 'seo', labelKey: 'tab_seo', icon: Search },
    { id: 'backup', labelKey: 'tab_system', icon: Database },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white p-6 sm:p-8 rounded-2xl border-b-4 border-amber-500 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-amber-400" />
            <h1 className="text-xl sm:text-2xl font-bold">{t('adminTitle')}</h1>
          </div>
          <p className="text-xs sm:text-sm text-emerald-200">{t('adminSubtitle')}</p>
        </div>

        {notification && (
          <div className="bg-amber-400 text-emerald-950 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow animate-fade-in">
            <Check className="w-4 h-4" />
            <span>{notification}</span>
          </div>
        )}
      </div>

      {/* Main Admin Body: Sidebar Tabs + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar Tabs (3 cols) */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-stone-200 p-3 shadow-xs space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors text-start cursor-pointer ${
                  isActive
                    ? 'bg-emerald-900 text-amber-300 font-bold shadow-xs'
                    : 'text-stone-700 hover:bg-stone-100 hover:text-emerald-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                <span className="truncate">{t(tab.labelKey)}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel (9 cols) */}
        <div className="lg:col-span-9 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
          {/* TAB 1: SITE INFORMATION */}
          {activeTab === 'site' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-emerald-950 pb-3 border-b border-stone-100">
                {t('tab_site')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">মাদ্রাসার নাম (বাংলা)</label>
                  <input
                    type="text"
                    value={localSite.name.bn}
                    onChange={(e) => setLocalSite({ ...localSite, name: { ...localSite.name, bn: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Madrasa Name (English)</label>
                  <input
                    type="text"
                    value={localSite.name.en}
                    onChange={(e) => setLocalSite({ ...localSite, name: { ...localSite.name, en: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 font-arabic">اسم المدرسة (العربية)</label>
                  <input
                    type="text"
                    dir="rtl"
                    value={localSite.name.ar}
                    onChange={(e) => setLocalSite({ ...localSite, name: { ...localSite.name, ar: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs font-arabic"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">ঠিকানা (বাংলা)</label>
                  <input
                    type="text"
                    value={localSite.address.bn}
                    onChange={(e) => setLocalSite({ ...localSite, address: { ...localSite.address, bn: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Address (English)</label>
                  <input
                    type="text"
                    value={localSite.address.en}
                    onChange={(e) => setLocalSite({ ...localSite, address: { ...localSite.address, en: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 font-arabic">العنوان (العربية)</label>
                  <input
                    type="text"
                    dir="rtl"
                    value={localSite.address.ar}
                    onChange={(e) => setLocalSite({ ...localSite, address: { ...localSite.address, ar: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs font-arabic"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">ফোন নম্বর</label>
                  <input
                    type="text"
                    value={localSite.phone}
                    onChange={(e) => setLocalSite({ ...localSite, phone: e.target.value })}
                    className="w-full p-2.5 border rounded-xl text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">ইমেইল</label>
                  <input
                    type="email"
                    value={localSite.email}
                    onChange={(e) => setLocalSite({ ...localSite, email: e.target.value })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">ফেসবুক লিংক</label>
                  <input
                    type="text"
                    value={localSite.facebook}
                    onChange={(e) => setLocalSite({ ...localSite, facebook: e.target.value })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  updateSiteInfo(localSite);
                  showNotify(t('savedSuccessfully'));
                }}
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs cursor-pointer shadow"
              >
                <Save className="w-4 h-4" />
                <span>{t('saveChanges')}</span>
              </button>
            </div>
          )}

          {/* TAB 2: HOMEPAGE CONTENT */}
          {activeTab === 'home' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-emerald-950 pb-3 border-b border-stone-100">
                {t('tab_home')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">হিরো টাইটেল (বাংলা)</label>
                  <input
                    type="text"
                    value={localHome.heroTitle.bn}
                    onChange={(e) => setLocalHome({ ...localHome, heroTitle: { ...localHome.heroTitle, bn: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Hero Title (English)</label>
                  <input
                    type="text"
                    value={localHome.heroTitle.en}
                    onChange={(e) => setLocalHome({ ...localHome, heroTitle: { ...localHome.heroTitle, en: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 font-arabic">العنوان الرئيسي (العربية)</label>
                  <input
                    type="text"
                    dir="rtl"
                    value={localHome.heroTitle.ar}
                    onChange={(e) => setLocalHome({ ...localHome, heroTitle: { ...localHome.heroTitle, ar: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs font-arabic"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">সাবটাইটেল (বাংলা)</label>
                  <textarea
                    rows={2}
                    value={localHome.heroSubtitle.bn}
                    onChange={(e) => setLocalHome({ ...localHome, heroSubtitle: { ...localHome.heroSubtitle, bn: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Subtitle (English)</label>
                  <textarea
                    rows={2}
                    value={localHome.heroSubtitle.en}
                    onChange={(e) => setLocalHome({ ...localHome, heroSubtitle: { ...localHome.heroSubtitle, en: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 font-arabic">العنوان الفرعي (العربية)</label>
                  <textarea
                    rows={2}
                    dir="rtl"
                    value={localHome.heroSubtitle.ar}
                    onChange={(e) => setLocalHome({ ...localHome, heroSubtitle: { ...localHome.heroSubtitle, ar: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs font-arabic"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">স্বাগতম বার্তা (বাংলা)</label>
                  <textarea
                    rows={3}
                    value={localHome.welcomeText.bn}
                    onChange={(e) => setLocalHome({ ...localHome, welcomeText: { ...localHome.welcomeText, bn: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Welcome Text (English)</label>
                  <textarea
                    rows={3}
                    value={localHome.welcomeText.en}
                    onChange={(e) => setLocalHome({ ...localHome, welcomeText: { ...localHome.welcomeText, en: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 font-arabic">رسالة الترحيب (العربية)</label>
                  <textarea
                    rows={3}
                    dir="rtl"
                    value={localHome.welcomeText.ar}
                    onChange={(e) => setLocalHome({ ...localHome, welcomeText: { ...localHome.welcomeText, ar: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs font-arabic"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  updateHomeData(localHome);
                  showNotify(t('savedSuccessfully'));
                }}
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs cursor-pointer shadow"
              >
                <Save className="w-4 h-4" />
                <span>{t('saveChanges')}</span>
              </button>
            </div>
          )}

          {/* TAB 3: ABOUT MADRASA */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-emerald-950 pb-3 border-b border-stone-100">
                {t('tab_about')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">পরিচিতি বিবরণ (বাংলা)</label>
                  <textarea
                    rows={4}
                    value={localAbout.mainStory.bn}
                    onChange={(e) => setLocalAbout({ ...localAbout, mainStory: { ...localAbout.mainStory, bn: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Main Story (English)</label>
                  <textarea
                    rows={4}
                    value={localAbout.mainStory.en}
                    onChange={(e) => setLocalAbout({ ...localAbout, mainStory: { ...localAbout.mainStory, en: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 font-arabic">عن المدرسة (العربية)</label>
                  <textarea
                    rows={4}
                    dir="rtl"
                    value={localAbout.mainStory.ar}
                    onChange={(e) => setLocalAbout({ ...localAbout, mainStory: { ...localAbout.mainStory, ar: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs font-arabic"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  updateAboutData(localAbout);
                  showNotify(t('savedSuccessfully'));
                }}
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs cursor-pointer shadow"
              >
                <Save className="w-4 h-4" />
                <span>{t('saveChanges')}</span>
              </button>
            </div>
          )}

          {/* TAB 4: AUTHORITIES (RESPONSIBLE PERSONS) */}
          {activeTab === 'authorities' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <h2 className="text-lg font-bold text-emerald-950">{t('tab_authorities')}</h2>
                <button
                  onClick={() =>
                    setEditingAuthority({
                      id: `auth-${Date.now()}`,
                      name: { bn: '', en: '', ar: '' },
                      position: { bn: '', en: '', ar: '' },
                      description: { bn: '', en: '', ar: '' },
                      order: authorities.length + 1,
                    })
                  }
                  className="inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{t('addNewItem')}</span>
                </button>
              </div>

              <div className="space-y-3">
                {authorities.map((person) => (
                  <div
                    key={person.id}
                    className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-4"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-emerald-950">{person.name.bn}</h4>
                      <p className="text-xs text-amber-800 font-semibold">{person.position.bn}</p>
                      <p className="text-xs text-stone-500 mt-1 line-clamp-1">{person.description.bn}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => setEditingAuthority(person)}
                        className="p-2 text-stone-600 hover:text-emerald-800 hover:bg-white rounded-lg border border-stone-200 cursor-pointer"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(t('confirmDelete'))) {
                            deleteAuthority(person.id);
                            showNotify('মুছে ফেলা হয়েছে');
                          }
                        }}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg border border-red-200 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Authority Modal */}
              {editingAuthority && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                    <h3 className="font-bold text-base text-emerald-950">দায়িত্বশীল ব্যক্তি সম্পাদনা</h3>
                    <div className="space-y-3 text-xs">
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="font-bold">নাম (বাংলা)</label>
                          <input
                            type="text"
                            value={editingAuthority.name.bn}
                            onChange={(e) =>
                              setEditingAuthority({
                                ...editingAuthority,
                                name: { ...editingAuthority.name, bn: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold">Name (EN)</label>
                          <input
                            type="text"
                            value={editingAuthority.name.en}
                            onChange={(e) =>
                              setEditingAuthority({
                                ...editingAuthority,
                                name: { ...editingAuthority.name, en: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold font-arabic">الاسم (AR)</label>
                          <input
                            type="text"
                            dir="rtl"
                            value={editingAuthority.name.ar}
                            onChange={(e) =>
                              setEditingAuthority({
                                ...editingAuthority,
                                name: { ...editingAuthority.name, ar: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded font-arabic"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="font-bold">পদবী (বাংলা)</label>
                          <input
                            type="text"
                            value={editingAuthority.position.bn}
                            onChange={(e) =>
                              setEditingAuthority({
                                ...editingAuthority,
                                position: { ...editingAuthority.position, bn: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold">Position (EN)</label>
                          <input
                            type="text"
                            value={editingAuthority.position.en}
                            onChange={(e) =>
                              setEditingAuthority({
                                ...editingAuthority,
                                position: { ...editingAuthority.position, en: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold font-arabic">المنصب (AR)</label>
                          <input
                            type="text"
                            dir="rtl"
                            value={editingAuthority.position.ar}
                            onChange={(e) =>
                              setEditingAuthority({
                                ...editingAuthority,
                                position: { ...editingAuthority.position, ar: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded font-arabic"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="font-bold">বিবরণ (বাংলা)</label>
                          <textarea
                            rows={2}
                            value={editingAuthority.description.bn}
                            onChange={(e) =>
                              setEditingAuthority({
                                ...editingAuthority,
                                description: { ...editingAuthority.description, bn: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold">Description (EN)</label>
                          <textarea
                            rows={2}
                            value={editingAuthority.description.en}
                            onChange={(e) =>
                              setEditingAuthority({
                                ...editingAuthority,
                                description: { ...editingAuthority.description, en: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold font-arabic">الوصف (AR)</label>
                          <textarea
                            rows={2}
                            dir="rtl"
                            value={editingAuthority.description.ar}
                            onChange={(e) =>
                              setEditingAuthority({
                                ...editingAuthority,
                                description: { ...editingAuthority.description, ar: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded font-arabic"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-3 border-t">
                      <button
                        onClick={() => setEditingAuthority(null)}
                        className="px-4 py-2 border rounded text-xs cursor-pointer"
                      >
                        {t('cancel')}
                      </button>
                      <button
                        onClick={() => {
                          saveAuthority(editingAuthority);
                          setEditingAuthority(null);
                          showNotify('সংরক্ষিত হয়েছে!');
                        }}
                        className="px-4 py-2 bg-emerald-800 text-white font-bold rounded text-xs cursor-pointer"
                      >
                        {t('save')}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: TEACHERS */}
          {activeTab === 'teachers' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <h2 className="text-lg font-bold text-emerald-950">{t('tab_teachers')}</h2>
                <button
                  onClick={() =>
                    setEditingTeacher({
                      id: `teach-${Date.now()}`,
                      name: { bn: '', en: '', ar: '' },
                      designation: { bn: '', en: '', ar: '' },
                      department: { bn: '', en: '', ar: '' },
                      qualification: { bn: '', en: '', ar: '' },
                      order: teachers.length + 1,
                    })
                  }
                  className="inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{t('addNewItem')}</span>
                </button>
              </div>

              {teachers.length === 0 ? (
                <div className="p-8 text-center bg-stone-50 rounded-xl text-stone-500 text-xs">
                  {t('noTeachersNotice')}
                </div>
              ) : (
                <div className="space-y-3">
                  {teachers.map((teacher) => (
                    <div
                      key={teacher.id}
                      className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-4"
                    >
                      <div>
                        <h4 className="font-bold text-sm text-emerald-950">{teacher.name.bn}</h4>
                        <p className="text-xs text-amber-800">{teacher.designation.bn} - {teacher.department.bn}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingTeacher(teacher)}
                          className="p-2 border rounded-lg text-stone-600 hover:text-emerald-800 cursor-pointer"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(t('confirmDelete'))) {
                              deleteTeacher(teacher.id);
                              showNotify('মুছে ফেলা হয়েছে');
                            }
                          }}
                          className="p-2 border border-red-200 rounded-lg text-red-600 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Teacher Modal */}
              {editingTeacher && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                    <h3 className="font-bold text-base text-emerald-950">শিক্ষক তথ্য সম্পাদনা</h3>
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="font-bold">ছবি লিংক (Image URL)</label>
                        <input
                          type="text"
                          value={editingTeacher.photoUrl || ''}
                          onChange={(e) => setEditingTeacher({ ...editingTeacher, photoUrl: e.target.value })}
                          placeholder="https://..."
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="font-bold">নাম (বাংলা)</label>
                          <input
                            type="text"
                            value={editingTeacher.name.bn}
                            onChange={(e) =>
                              setEditingTeacher({
                                ...editingTeacher,
                                name: { ...editingTeacher.name, bn: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold">Name (EN)</label>
                          <input
                            type="text"
                            value={editingTeacher.name.en}
                            onChange={(e) =>
                              setEditingTeacher({
                                ...editingTeacher,
                                name: { ...editingTeacher.name, en: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold font-arabic">الاسم (AR)</label>
                          <input
                            type="text"
                            dir="rtl"
                            value={editingTeacher.name.ar}
                            onChange={(e) =>
                              setEditingTeacher({
                                ...editingTeacher,
                                name: { ...editingTeacher.name, ar: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded font-arabic"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="font-bold">পদবী (বাংলা)</label>
                          <input
                            type="text"
                            value={editingTeacher.designation.bn}
                            onChange={(e) =>
                              setEditingTeacher({
                                ...editingTeacher,
                                designation: { ...editingTeacher.designation, bn: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold">Designation (EN)</label>
                          <input
                            type="text"
                            value={editingTeacher.designation.en}
                            onChange={(e) =>
                              setEditingTeacher({
                                ...editingTeacher,
                                designation: { ...editingTeacher.designation, en: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold font-arabic">المنصب (AR)</label>
                          <input
                            type="text"
                            dir="rtl"
                            value={editingTeacher.designation.ar}
                            onChange={(e) =>
                              setEditingTeacher({
                                ...editingTeacher,
                                designation: { ...editingTeacher.designation, ar: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded font-arabic"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-3 border-t">
                      <button
                        onClick={() => setEditingTeacher(null)}
                        className="px-4 py-2 border rounded text-xs cursor-pointer"
                      >
                        {t('cancel')}
                      </button>
                      <button
                        onClick={() => {
                          saveTeacher(editingTeacher);
                          setEditingTeacher(null);
                          showNotify('সংরক্ষিত হয়েছে!');
                        }}
                        className="px-4 py-2 bg-emerald-800 text-white font-bold rounded text-xs cursor-pointer"
                      >
                        {t('save')}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: DEPARTMENTS */}
          {activeTab === 'departments' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <h2 className="text-lg font-bold text-emerald-950">{t('tab_departments')}</h2>
              </div>
              <div className="space-y-3">
                {departments.map((dept) => (
                  <div key={dept.id} className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <h4 className="font-bold text-sm text-emerald-950">{dept.name.bn}</h4>
                    <p className="text-xs text-stone-600 mt-1">{dept.shortDesc.bn}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: ADMISSION */}
          {activeTab === 'admission' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-emerald-950 pb-3 border-b border-stone-100">
                {t('tab_admission')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">ভর্তি অবস্থা (বাংলা)</label>
                  <input
                    type="text"
                    value={localAdmission.status.bn}
                    onChange={(e) => setLocalAdmission({ ...localAdmission, status: { ...localAdmission.status, bn: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Status (English)</label>
                  <input
                    type="text"
                    value={localAdmission.status.en}
                    onChange={(e) => setLocalAdmission({ ...localAdmission, status: { ...localAdmission.status, en: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 font-arabic">الحالة (العربية)</label>
                  <input
                    type="text"
                    dir="rtl"
                    value={localAdmission.status.ar}
                    onChange={(e) => setLocalAdmission({ ...localAdmission, status: { ...localAdmission.status, ar: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs font-arabic"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">প্রক্রিয়া (বাংলা)</label>
                  <textarea
                    rows={3}
                    value={localAdmission.procedure.bn}
                    onChange={(e) => setLocalAdmission({ ...localAdmission, procedure: { ...localAdmission.procedure, bn: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Procedure (English)</label>
                  <textarea
                    rows={3}
                    value={localAdmission.procedure.en}
                    onChange={(e) => setLocalAdmission({ ...localAdmission, procedure: { ...localAdmission.procedure, en: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 font-arabic">إجراءات القبول (العربية)</label>
                  <textarea
                    rows={3}
                    dir="rtl"
                    value={localAdmission.procedure.ar}
                    onChange={(e) => setLocalAdmission({ ...localAdmission, procedure: { ...localAdmission.procedure, ar: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs font-arabic"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  updateAdmissionData(localAdmission);
                  showNotify(t('savedSuccessfully'));
                }}
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs cursor-pointer shadow"
              >
                <Save className="w-4 h-4" />
                <span>{t('saveChanges')}</span>
              </button>
            </div>
          )}

          {/* TAB 8: NOTICES */}
          {activeTab === 'notices' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <h2 className="text-lg font-bold text-emerald-950">{t('tab_notices')}</h2>
                <button
                  onClick={() =>
                    setEditingNotice({
                      id: `notice-${Date.now()}`,
                      title: { bn: '', en: '', ar: '' },
                      content: { bn: '', en: '', ar: '' },
                      category: { bn: 'সাধারণ', en: 'General', ar: 'عام' },
                      date: new Date().toISOString().split('T')[0],
                      isPublished: true,
                    })
                  }
                  className="inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{t('addNewItem')}</span>
                </button>
              </div>

              <div className="space-y-3">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-stone-500">
                        <span className="font-bold text-emerald-800">{notice.category.bn}</span>
                        <span>• {notice.date}</span>
                        <span className={`px-2 py-0.2 rounded ${notice.isPublished ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-200'}`}>
                          {notice.isPublished ? 'প্রকাশিত' : 'অপ্রকাশিত'}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-emerald-950 mt-1">{notice.title.bn}</h4>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => setEditingNotice(notice)}
                        className="p-2 border rounded-lg text-stone-600 hover:text-emerald-800 cursor-pointer"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(t('confirmDelete'))) {
                            deleteNotice(notice.id);
                            showNotify('মুছে ফেলা হয়েছে');
                          }
                        }}
                        className="p-2 border border-red-200 rounded-lg text-red-600 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notice Modal */}
              {editingNotice && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
                    <h3 className="font-bold text-base text-emerald-950">নোটিশ সম্পাদনা</h3>
                    <div className="space-y-3 text-xs">
                      <div className="flex items-center gap-4">
                        <div>
                          <label className="font-bold block">তারিখ</label>
                          <input
                            type="date"
                            value={editingNotice.date}
                            onChange={(e) => setEditingNotice({ ...editingNotice, date: e.target.value })}
                            className="p-2 border rounded"
                          />
                        </div>
                        <div className="flex items-center gap-2 pt-4">
                          <input
                            type="checkbox"
                            id="pub"
                            checked={editingNotice.isPublished}
                            onChange={(e) => setEditingNotice({ ...editingNotice, isPublished: e.target.checked })}
                          />
                          <label htmlFor="pub" className="font-bold">প্রকাশিত (Published)</label>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="font-bold">শিরোনাম (বাংলা)</label>
                          <input
                            type="text"
                            value={editingNotice.title.bn}
                            onChange={(e) => setEditingNotice({ ...editingNotice, title: { ...editingNotice.title, bn: e.target.value } })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold">Title (EN)</label>
                          <input
                            type="text"
                            value={editingNotice.title.en}
                            onChange={(e) => setEditingNotice({ ...editingNotice, title: { ...editingNotice.title, en: e.target.value } })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold font-arabic">العنوان (AR)</label>
                          <input
                            type="text"
                            dir="rtl"
                            value={editingNotice.title.ar}
                            onChange={(e) => setEditingNotice({ ...editingNotice, title: { ...editingNotice.title, ar: e.target.value } })}
                            className="w-full p-2 border rounded font-arabic"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="font-bold">বিবরণ (বাংলা)</label>
                          <textarea
                            rows={3}
                            value={editingNotice.content.bn}
                            onChange={(e) => setEditingNotice({ ...editingNotice, content: { ...editingNotice.content, bn: e.target.value } })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold">Content (EN)</label>
                          <textarea
                            rows={3}
                            value={editingNotice.content.en}
                            onChange={(e) => setEditingNotice({ ...editingNotice, content: { ...editingNotice.content, en: e.target.value } })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold font-arabic">المحتوى (AR)</label>
                          <textarea
                            rows={3}
                            dir="rtl"
                            value={editingNotice.content.ar}
                            onChange={(e) => setEditingNotice({ ...editingNotice, content: { ...editingNotice.content, ar: e.target.value } })}
                            className="w-full p-2 border rounded font-arabic"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-3 border-t">
                      <button
                        onClick={() => setEditingNotice(null)}
                        className="px-4 py-2 border rounded text-xs cursor-pointer"
                      >
                        {t('cancel')}
                      </button>
                      <button
                        onClick={() => {
                          saveNotice(editingNotice);
                          setEditingNotice(null);
                          showNotify('নোটিশ সংরক্ষিত হয়েছে!');
                        }}
                        className="px-4 py-2 bg-emerald-800 text-white font-bold rounded text-xs cursor-pointer"
                      >
                        {t('save')}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 9: ROUTINE */}
          {activeTab === 'routine' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <h2 className="text-lg font-bold text-emerald-950">{t('tab_routine')}</h2>
                <button
                  onClick={() =>
                    setEditingRoutine({
                      id: `rout-${Date.now()}`,
                      className: { bn: 'নূরানী', en: 'Noorani', ar: 'النورانية' },
                      subject: { bn: 'কুরআন মজিদ', en: 'Quran Majeed', ar: 'القرآن الكريم' },
                      teacher: { bn: 'উস্তাদ', en: 'Teacher', ar: 'الأستاذ' },
                      day: { bn: 'শনিবার', en: 'Saturday', ar: 'السبت' },
                      time: { bn: 'সকাল ৯:০০ - ৯:৪৫', en: '9:00 AM - 9:45 AM', ar: '٩:٠٠ - ٩:٤٥' },
                    })
                  }
                  className="inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{t('addNewItem')}</span>
                </button>
              </div>

              {routine.length === 0 ? (
                <div className="p-8 text-center bg-stone-50 rounded-xl text-stone-500 text-xs">
                  {t('noRoutine')}
                </div>
              ) : (
                <div className="space-y-3">
                  {routine.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-4"
                    >
                      <div>
                        <h4 className="font-bold text-sm text-emerald-950">
                          {item.className.bn} - {item.subject.bn} ({item.day.bn})
                        </h4>
                        <p className="text-xs text-stone-500">
                          {item.time.bn} | শিক্ষক: {item.teacher.bn}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          if (confirm(t('confirmDelete'))) {
                            deleteRoutineItem(item.id);
                            showNotify('মুছে ফেলা হয়েছে');
                          }
                        }}
                        className="p-2 border border-red-200 rounded-lg text-red-600 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Routine Modal */}
              {editingRoutine && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4">
                    <h3 className="font-bold text-base text-emerald-950">ক্লাস রুটিন যোগ/সম্পাদনা</h3>
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="font-bold">শ্রেণী (Class)</label>
                        <input
                          type="text"
                          value={editingRoutine.className.bn}
                          onChange={(e) =>
                            setEditingRoutine({
                              ...editingRoutine,
                              className: { ...editingRoutine.className, bn: e.target.value, en: e.target.value, ar: e.target.value },
                            })
                          }
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div>
                        <label className="font-bold">বিষয় (Subject)</label>
                        <input
                          type="text"
                          value={editingRoutine.subject.bn}
                          onChange={(e) =>
                            setEditingRoutine({
                              ...editingRoutine,
                              subject: { ...editingRoutine.subject, bn: e.target.value, en: e.target.value, ar: e.target.value },
                            })
                          }
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div>
                        <label className="font-bold">শিক্ষক (Teacher)</label>
                        <input
                          type="text"
                          value={editingRoutine.teacher.bn}
                          onChange={(e) =>
                            setEditingRoutine({
                              ...editingRoutine,
                              teacher: { ...editingRoutine.teacher, bn: e.target.value, en: e.target.value, ar: e.target.value },
                            })
                          }
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="font-bold">দিন (Day)</label>
                          <input
                            type="text"
                            value={editingRoutine.day.bn}
                            onChange={(e) =>
                              setEditingRoutine({
                                ...editingRoutine,
                                day: { ...editingRoutine.day, bn: e.target.value, en: e.target.value, ar: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold">সময় (Time)</label>
                          <input
                            type="text"
                            value={editingRoutine.time.bn}
                            onChange={(e) =>
                              setEditingRoutine({
                                ...editingRoutine,
                                time: { ...editingRoutine.time, bn: e.target.value, en: e.target.value, ar: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-3 border-t">
                      <button
                        onClick={() => setEditingRoutine(null)}
                        className="px-4 py-2 border rounded text-xs cursor-pointer"
                      >
                        {t('cancel')}
                      </button>
                      <button
                        onClick={() => {
                          saveRoutineItem(editingRoutine);
                          setEditingRoutine(null);
                          showNotify('রুটিন সংরক্ষিত হয়েছে!');
                        }}
                        className="px-4 py-2 bg-emerald-800 text-white font-bold rounded text-xs cursor-pointer"
                      >
                        {t('save')}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 10: RESULTS */}
          {activeTab === 'results' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <h2 className="text-lg font-bold text-emerald-950">{t('tab_results')}</h2>
                <button
                  onClick={() =>
                    setEditingResult({
                      id: `res-${Date.now()}`,
                      studentName: { bn: '', en: '', ar: '' },
                      roll: '',
                      studentId: '',
                      className: { bn: '', en: '', ar: '' },
                      examName: { bn: 'বার্ষিক পরীক্ষা', en: 'Annual Exam', ar: 'الامتحان السنوي' },
                      marks: '',
                      grade: 'A+',
                      status: { bn: 'মুমতায (A+)', en: 'Mumtaz (A+)', ar: 'ممتاز (A+)' },
                      year: '২০২৬',
                    })
                  }
                  className="inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{t('addNewItem')}</span>
                </button>
              </div>

              {results.length === 0 ? (
                <div className="p-8 text-center bg-stone-50 rounded-xl text-stone-500 text-xs">
                  {t('resultsNoticeMsg')}
                </div>
              ) : (
                <div className="space-y-3">
                  {results.map((res) => (
                    <div
                      key={res.id}
                      className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between gap-4"
                    >
                      <div>
                        <h4 className="font-bold text-sm text-emerald-950">
                          {res.studentName.bn} (Roll: {res.roll})
                        </h4>
                        <p className="text-xs text-stone-600">
                          {res.className.bn} - {res.examName.bn} | নম্বর: {res.marks} ({res.grade})
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          if (confirm(t('confirmDelete'))) {
                            deleteResult(res.id);
                            showNotify('মুছে ফেলা হয়েছে');
                          }
                        }}
                        className="p-2 border border-red-200 rounded-lg text-red-600 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Result Modal */}
              {editingResult && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4">
                    <h3 className="font-bold text-base text-emerald-950">শিক্ষার্থী ফলাফল সংযোজন</h3>
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="font-bold">শিক্ষার্থীর নাম</label>
                        <input
                          type="text"
                          value={editingResult.studentName.bn}
                          onChange={(e) =>
                            setEditingResult({
                              ...editingResult,
                              studentName: { bn: e.target.value, en: e.target.value, ar: e.target.value },
                            })
                          }
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="font-bold">রোল নম্বর (Roll)</label>
                          <input
                            type="text"
                            value={editingResult.roll}
                            onChange={(e) => setEditingResult({ ...editingResult, roll: e.target.value })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold">স্টুডেন্ট আইডি (ID)</label>
                          <input
                            type="text"
                            value={editingResult.studentId}
                            onChange={(e) => setEditingResult({ ...editingResult, studentId: e.target.value })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="font-bold">শ্রেণী (Class)</label>
                          <input
                            type="text"
                            value={editingResult.className.bn}
                            onChange={(e) =>
                              setEditingResult({
                                ...editingResult,
                                className: { bn: e.target.value, en: e.target.value, ar: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold">পরীক্ষার নাম (Exam)</label>
                          <input
                            type="text"
                            value={editingResult.examName.bn}
                            onChange={(e) =>
                              setEditingResult({
                                ...editingResult,
                                examName: { bn: e.target.value, en: e.target.value, ar: e.target.value },
                              })
                            }
                            className="w-full p-2 border rounded"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="font-bold">প্রাপ্ত নম্বর (Marks)</label>
                          <input
                            type="text"
                            value={editingResult.marks}
                            onChange={(e) => setEditingResult({ ...editingResult, marks: e.target.value })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                        <div>
                          <label className="font-bold">গ্রেড (Grade)</label>
                          <input
                            type="text"
                            value={editingResult.grade}
                            onChange={(e) => setEditingResult({ ...editingResult, grade: e.target.value })}
                            className="w-full p-2 border rounded"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-3 border-t">
                      <button
                        onClick={() => setEditingResult(null)}
                        className="px-4 py-2 border rounded text-xs cursor-pointer"
                      >
                        {t('cancel')}
                      </button>
                      <button
                        onClick={() => {
                          saveResult(editingResult);
                          setEditingResult(null);
                          showNotify('ফলাফল সংরক্ষিত হয়েছে!');
                        }}
                        className="px-4 py-2 bg-emerald-800 text-white font-bold rounded text-xs cursor-pointer"
                      >
                        {t('save')}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 11: GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <h2 className="text-lg font-bold text-emerald-950">{t('tab_gallery')}</h2>
                <button
                  onClick={() =>
                    setEditingGallery({
                      id: `gal-${Date.now()}`,
                      title: { bn: 'মাদ্রাসা পরিবেশ', en: 'Campus Environment', ar: 'بيئة المدرسة' },
                      category: { bn: 'ক্যাম্পাস', en: 'Campus', ar: 'المقر' },
                      imageUrl: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=800&q=80',
                    })
                  }
                  className="inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{t('addNewItem')}</span>
                </button>
              </div>

              {gallery.length === 0 ? (
                <div className="p-8 text-center bg-stone-50 rounded-xl text-stone-500 text-xs">
                  {t('noPhotos')}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((item) => (
                    <div key={item.id} className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                      <img src={item.imageUrl} alt="" className="w-full h-32 object-cover rounded-lg" />
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-emerald-950 truncate">{item.title.bn}</span>
                        <button
                          onClick={() => {
                            if (confirm(t('confirmDelete'))) {
                              deleteGalleryItem(item.id);
                              showNotify('মুছে ফেলা হয়েছে');
                            }
                          }}
                          className="p-1 text-red-600 hover:bg-red-50 rounded cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Gallery Modal */}
              {editingGallery && (
                <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4">
                    <h3 className="font-bold text-base text-emerald-950">গ্যালারি ছবি সংযোজন</h3>
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="font-bold">ছবির লিংক (Image URL)</label>
                        <input
                          type="text"
                          value={editingGallery.imageUrl}
                          onChange={(e) => setEditingGallery({ ...editingGallery, imageUrl: e.target.value })}
                          className="w-full p-2 border rounded"
                        />
                      </div>
                      <div>
                        <label className="font-bold">ক্যাপশন / শিরোনাম</label>
                        <input
                          type="text"
                          value={editingGallery.title.bn}
                          onChange={(e) =>
                            setEditingGallery({
                              ...editingGallery,
                              title: { bn: e.target.value, en: e.target.value, ar: e.target.value },
                            })
                          }
                          className="w-full p-2 border rounded"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-3 border-t">
                      <button
                        onClick={() => setEditingGallery(null)}
                        className="px-4 py-2 border rounded text-xs cursor-pointer"
                      >
                        {t('cancel')}
                      </button>
                      <button
                        onClick={() => {
                          saveGalleryItem(editingGallery);
                          setEditingGallery(null);
                          showNotify('ছবি সংরক্ষিত হয়েছে!');
                        }}
                        className="px-4 py-2 bg-emerald-800 text-white font-bold rounded text-xs cursor-pointer"
                      >
                        {t('save')}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 12: CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-emerald-950 pb-3 border-b border-stone-100">
                {t('tab_contact')}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">ফোন নম্বর</label>
                  <input
                    type="text"
                    value={localContact.phone}
                    onChange={(e) => setLocalContact({ ...localContact, phone: e.target.value })}
                    className="w-full p-2.5 border rounded-xl text-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">ইমেইল</label>
                  <input
                    type="email"
                    value={localContact.email}
                    onChange={(e) => setLocalContact({ ...localContact, email: e.target.value })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-stone-700 mb-1">ফেসবুক পেজ লিংক</label>
                  <input
                    type="text"
                    value={localContact.facebook}
                    onChange={(e) => setLocalContact({ ...localContact, facebook: e.target.value })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  updateContactData(localContact);
                  showNotify(t('savedSuccessfully'));
                }}
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs cursor-pointer shadow"
              >
                <Save className="w-4 h-4" />
                <span>{t('saveChanges')}</span>
              </button>
            </div>
          )}

          {/* TAB 13: SEO */}
          {activeTab === 'seo' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-emerald-950 pb-3 border-b border-stone-100">
                {t('tab_seo')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">SEO Title (বাংলা)</label>
                  <input
                    type="text"
                    value={localSEO.title.bn}
                    onChange={(e) => setLocalSEO({ ...localSEO, title: { ...localSEO.title, bn: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">SEO Title (English)</label>
                  <input
                    type="text"
                    value={localSEO.title.en}
                    onChange={(e) => setLocalSEO({ ...localSEO, title: { ...localSEO.title, en: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 font-arabic">العنوان لمحركات البحث (العربية)</label>
                  <input
                    type="text"
                    dir="rtl"
                    value={localSEO.title.ar}
                    onChange={(e) => setLocalSEO({ ...localSEO, title: { ...localSEO.title, ar: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs font-arabic"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Meta Description (বাংলা)</label>
                  <textarea
                    rows={3}
                    value={localSEO.description.bn}
                    onChange={(e) => setLocalSEO({ ...localSEO, description: { ...localSEO.description, bn: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Meta Description (English)</label>
                  <textarea
                    rows={3}
                    value={localSEO.description.en}
                    onChange={(e) => setLocalSEO({ ...localSEO, description: { ...localSEO.description, en: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1 font-arabic">الوصف لمحركات البحث (العربية)</label>
                  <textarea
                    rows={3}
                    dir="rtl"
                    value={localSEO.description.ar}
                    onChange={(e) => setLocalSEO({ ...localSEO, description: { ...localSEO.description, ar: e.target.value } })}
                    className="w-full p-2.5 border rounded-xl text-xs font-arabic"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  updateSEOData(localSEO);
                  showNotify(t('savedSuccessfully'));
                }}
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs cursor-pointer shadow"
              >
                <Save className="w-4 h-4" />
                <span>{t('saveChanges')}</span>
              </button>
            </div>
          )}

          {/* TAB 14: SYSTEM BACKUP & RESET */}
          {activeTab === 'backup' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-emerald-950 pb-3 border-b border-stone-100">
                {t('tab_system')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Export Backup */}
                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                  <h3 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                    <Download className="w-4 h-4 text-emerald-700" />
                    <span>{t('exportData')}</span>
                  </h3>
                  <p className="text-xs text-stone-600">
                    ওয়েবসাইটের যাবতীয় তথ্য (সকল ভাষা, নোটিশ, রুটিন, ফলাফল ইত্যাদি) একটি JSON ফাইলে ডাউনলোড করে রাখুন।
                  </p>
                  <button
                    onClick={() => {
                      const json = exportBackup();
                      const blob = new Blob([json], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `madrasa_data_backup_${new Date().toISOString().split('T')[0]}.json`;
                      a.click();
                      showNotify('ব্যাকআপ ডাউনলোড শুরু হয়েছে');
                    }}
                    className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>ব্যাকআপ ফাইল ডাউনলোড করুন</span>
                  </button>
                </div>

                {/* Reset to Defaults */}
                <div className="p-5 bg-amber-50/80 rounded-2xl border border-amber-200 space-y-3">
                  <h3 className="font-bold text-amber-950 text-sm flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-amber-700" />
                    <span>{t('resetDefault')}</span>
                  </h3>
                  <p className="text-xs text-amber-900">
                    ওয়েবসাইটকে তার আদি অফিসিয়াল অবস্থায় ফিরিয়ে নিয়ে যাবে।
                  </p>
                  <button
                    onClick={() => {
                      if (confirm('আপনি কি নিশ্চিত যে সকল তথ্য আদি ডিফল্ট অবস্থায় ফিরিয়ে নিতে চান?')) {
                        resetAll();
                        showNotify('সকল তথ্য ডিফল্ট অবস্থায় ফিরে এসেছে!');
                      }
                    }}
                    className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>ফ্যাক্টরি রিসেট করুন</span>
                  </button>
                </div>
              </div>

              {/* Import Backup Box */}
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
                <h3 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                  <Upload className="w-4 h-4 text-emerald-700" />
                  <span>{t('importData')}</span>
                </h3>
                <textarea
                  rows={4}
                  value={backupJsonInput}
                  onChange={(e) => setBackupJsonInput(e.target.value)}
                  placeholder="পূর্বের ডাউনলোডকৃত JSON ব্যাকআপের সম্পূর্ণ কোড এখানে পেস্ট করুন..."
                  className="w-full p-3 border rounded-xl text-xs font-mono"
                />
                <button
                  onClick={() => {
                    if (!backupJsonInput.trim()) return;
                    const ok = importBackup(backupJsonInput);
                    if (ok) {
                      showNotify('ব্যাকআপ সফলভাবে রিস্টোর হয়েছে!');
                      setBackupJsonInput('');
                    } else {
                      alert('JSON ফরম্যাট সঠিক নয়। অনুগ্রহ করে ফাইলটি যাচাই করুন।');
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>রিস্টোর কার্যকর করুন</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
