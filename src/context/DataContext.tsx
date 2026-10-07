import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
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
import { DataService, subscribeToDataChanges } from '../services/dataService';
import { useLanguage } from './LanguageContext';

interface DataContextType {
  siteInfo: SiteInfo;
  seoData: SEOData;
  homeData: HomeContent;
  aboutData: AboutContent;
  authorities: AuthorityPerson[];
  teachers: Teacher[];
  departments: Department[];
  admissionData: AdmissionInfo;
  notices: Notice[];
  routine: RoutineItem[];
  results: ExamResult[];
  gallery: GalleryItem[];
  contactData: ContactInfo;

  // Actions
  updateSiteInfo: (info: SiteInfo) => void;
  updateSEOData: (seo: SEOData) => void;
  updateHomeData: (home: HomeContent) => void;
  updateAboutData: (about: AboutContent) => void;
  saveAuthority: (person: AuthorityPerson) => void;
  deleteAuthority: (id: string) => void;
  saveTeacher: (teacher: Teacher) => void;
  deleteTeacher: (id: string) => void;
  saveDepartment: (dept: Department) => void;
  deleteDepartment: (id: string) => void;
  updateAdmissionData: (adm: AdmissionInfo) => void;
  saveNotice: (notice: Notice) => void;
  deleteNotice: (id: string) => void;
  saveRoutineItem: (item: RoutineItem) => void;
  deleteRoutineItem: (id: string) => void;
  saveResult: (result: ExamResult) => void;
  deleteResult: (id: string) => void;
  saveGalleryItem: (item: GalleryItem) => void;
  deleteGalleryItem: (id: string) => void;
  updateContactData: (contact: ContactInfo) => void;
  resetAll: () => void;
  exportBackup: () => string;
  importBackup: (json: string) => boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();

  const [siteInfo, setSiteInfo] = useState<SiteInfo>(() => DataService.getSiteInfo());
  const [seoData, setSEOData] = useState<SEOData>(() => DataService.getSEOData());
  const [homeData, setHomeData] = useState<HomeContent>(() => DataService.getHomeData());
  const [aboutData, setAboutData] = useState<AboutContent>(() => DataService.getAboutData());
  const [authorities, setAuthorities] = useState<AuthorityPerson[]>(() => DataService.getAuthorities());
  const [teachers, setTeachers] = useState<Teacher[]>(() => DataService.getTeachers());
  const [departments, setDepartments] = useState<Department[]>(() => DataService.getDepartments());
  const [admissionData, setAdmissionData] = useState<AdmissionInfo>(() => DataService.getAdmissionData());
  const [notices, setNotices] = useState<Notice[]>(() => DataService.getNotices());
  const [routine, setRoutine] = useState<RoutineItem[]>(() => DataService.getRoutine());
  const [results, setResults] = useState<ExamResult[]>(() => DataService.getResults());
  const [gallery, setGallery] = useState<GalleryItem[]>(() => DataService.getGallery());
  const [contactData, setContactData] = useState<ContactInfo>(() => DataService.getContactData());

  const refreshFromService = useCallback(() => {
    setSiteInfo(DataService.getSiteInfo());
    setSEOData(DataService.getSEOData());
    setHomeData(DataService.getHomeData());
    setAboutData(DataService.getAboutData());
    setAuthorities(DataService.getAuthorities());
    setTeachers(DataService.getTeachers());
    setDepartments(DataService.getDepartments());
    setAdmissionData(DataService.getAdmissionData());
    setNotices(DataService.getNotices());
    setRoutine(DataService.getRoutine());
    setResults(DataService.getResults());
    setGallery(DataService.getGallery());
    setContactData(DataService.getContactData());
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeToDataChanges(() => {
      refreshFromService();
    });
    return unsubscribe;
  }, [refreshFromService]);

  // Dynamically sync title and meta description based on selected language and SEO settings
  useEffect(() => {
    const currentTitle = seoData.title[language] || seoData.title.bn || siteInfo.name[language] || siteInfo.name.bn;
    const currentDesc = seoData.description[language] || seoData.description.bn;
    if (currentTitle) {
      document.title = currentTitle;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && currentDesc) {
      metaDesc.setAttribute('content', currentDesc);
    }
  }, [language, seoData, siteInfo]);

  const updateSiteInfo = (info: SiteInfo) => {
    DataService.saveSiteInfo(info);
    setSiteInfo(info);
  };

  const updateSEOData = (seo: SEOData) => {
    DataService.saveSEOData(seo);
    setSEOData(seo);
  };

  const updateHomeData = (home: HomeContent) => {
    DataService.saveHomeData(home);
    setHomeData(home);
  };

  const updateAboutData = (about: AboutContent) => {
    DataService.saveAboutData(about);
    setAboutData(about);
  };

  const saveAuthority = (person: AuthorityPerson) => {
    DataService.saveAuthority(person);
    setAuthorities(DataService.getAuthorities());
  };

  const deleteAuthority = (id: string) => {
    DataService.deleteAuthority(id);
    setAuthorities(DataService.getAuthorities());
  };

  const saveTeacher = (teacher: Teacher) => {
    DataService.saveTeacher(teacher);
    setTeachers(DataService.getTeachers());
  };

  const deleteTeacher = (id: string) => {
    DataService.deleteTeacher(id);
    setTeachers(DataService.getTeachers());
  };

  const saveDepartment = (dept: Department) => {
    DataService.saveDepartment(dept);
    setDepartments(DataService.getDepartments());
  };

  const deleteDepartment = (id: string) => {
    DataService.deleteDepartment(id);
    setDepartments(DataService.getDepartments());
  };

  const updateAdmissionData = (adm: AdmissionInfo) => {
    DataService.saveAdmissionData(adm);
    setAdmissionData(adm);
  };

  const saveNotice = (notice: Notice) => {
    DataService.saveNotice(notice);
    setNotices(DataService.getNotices());
  };

  const deleteNotice = (id: string) => {
    DataService.deleteNotice(id);
    setNotices(DataService.getNotices());
  };

  const saveRoutineItem = (item: RoutineItem) => {
    DataService.saveRoutineItem(item);
    setRoutine(DataService.getRoutine());
  };

  const deleteRoutineItem = (id: string) => {
    DataService.deleteRoutineItem(id);
    setRoutine(DataService.getRoutine());
  };

  const saveResult = (res: ExamResult) => {
    DataService.saveResult(res);
    setResults(DataService.getResults());
  };

  const deleteResult = (id: string) => {
    DataService.deleteResult(id);
    setResults(DataService.getResults());
  };

  const saveGalleryItem = (item: GalleryItem) => {
    DataService.saveGalleryItem(item);
    setGallery(DataService.getGallery());
  };

  const deleteGalleryItem = (id: string) => {
    DataService.deleteGalleryItem(id);
    setGallery(DataService.getGallery());
  };

  const updateContactData = (contact: ContactInfo) => {
    DataService.saveContactData(contact);
    setContactData(contact);
  };

  const resetAll = () => {
    DataService.resetAll();
    refreshFromService();
  };

  const exportBackup = () => {
    return DataService.exportAll();
  };

  const importBackup = (json: string) => {
    const success = DataService.importAll(json);
    if (success) {
      refreshFromService();
    }
    return success;
  };

  return (
    <DataContext.Provider
      value={{
        siteInfo,
        seoData,
        homeData,
        aboutData,
        authorities,
        teachers,
        departments,
        admissionData,
        notices,
        routine,
        results,
        gallery,
        contactData,
        updateSiteInfo,
        updateSEOData,
        updateHomeData,
        updateAboutData,
        saveAuthority,
        deleteAuthority,
        saveTeacher,
        deleteTeacher,
        saveDepartment,
        deleteDepartment,
        updateAdmissionData,
        saveNotice,
        deleteNotice,
        saveRoutineItem,
        deleteRoutineItem,
        saveResult,
        deleteResult,
        saveGalleryItem,
        deleteGalleryItem,
        updateContactData,
        resetAll,
        exportBackup,
        importBackup,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
