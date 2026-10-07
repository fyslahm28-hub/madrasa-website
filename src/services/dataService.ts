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

import { defaultSiteInfo, defaultSEOData } from '../data/siteData';
import { defaultHomeData } from '../data/homeData';
import { defaultAboutData } from '../data/aboutData';
import { defaultAuthoritiesData } from '../data/authoritiesData';
import { defaultTeachersData } from '../data/teachersData';
import { defaultDepartmentsData } from '../data/departmentsData';
import { defaultAdmissionData } from '../data/admissionData';
import { defaultNoticesData } from '../data/noticesData';
import { defaultRoutineData } from '../data/routineData';
import { defaultResultsData } from '../data/resultsData';
import { defaultGalleryData } from '../data/galleryData';
import { defaultContactData } from '../data/contactData';

const STORAGE_KEYS = {
  SITE_INFO: 'madrasa_site_info_v1',
  SEO_DATA: 'madrasa_seo_data_v1',
  HOME_DATA: 'madrasa_home_data_v1',
  ABOUT_DATA: 'madrasa_about_data_v1',
  AUTHORITIES: 'madrasa_authorities_v1',
  TEACHERS: 'madrasa_teachers_v1',
  DEPARTMENTS: 'madrasa_departments_v1',
  ADMISSION: 'madrasa_admission_v1',
  NOTICES: 'madrasa_notices_v1',
  ROUTINE: 'madrasa_routine_v1',
  RESULTS: 'madrasa_results_v1',
  GALLERY: 'madrasa_gallery_v1',
  CONTACT: 'madrasa_contact_v1',
};

// Event listener mechanism for cross-component reactive sync
type Listener = () => void;
const listeners: Set<Listener> = new Set();

export const subscribeToDataChanges = (listener: Listener): (() => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const notifyListeners = () => {
  listeners.forEach((listener) => {
    try {
      listener();
    } catch (e) {
      console.error('Error notifying data listener', e);
    }
  });
};

function readItem<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (e) {
    console.error(`Error reading key ${key} from storage`, e);
    return fallback;
  }
}

function writeItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    notifyListeners();
  } catch (e) {
    console.error(`Error writing key ${key} to storage`, e);
  }
}

export const DataService = {
  // Site Info
  getSiteInfo(): SiteInfo {
    return readItem<SiteInfo>(STORAGE_KEYS.SITE_INFO, defaultSiteInfo);
  },
  saveSiteInfo(data: SiteInfo): void {
    writeItem(STORAGE_KEYS.SITE_INFO, data);
  },

  // SEO
  getSEOData(): SEOData {
    return readItem<SEOData>(STORAGE_KEYS.SEO_DATA, defaultSEOData);
  },
  saveSEOData(data: SEOData): void {
    writeItem(STORAGE_KEYS.SEO_DATA, data);
  },

  // Home Content
  getHomeData(): HomeContent {
    return readItem<HomeContent>(STORAGE_KEYS.HOME_DATA, defaultHomeData);
  },
  saveHomeData(data: HomeContent): void {
    writeItem(STORAGE_KEYS.HOME_DATA, data);
  },

  // About Content
  getAboutData(): AboutContent {
    return readItem<AboutContent>(STORAGE_KEYS.ABOUT_DATA, defaultAboutData);
  },
  saveAboutData(data: AboutContent): void {
    writeItem(STORAGE_KEYS.ABOUT_DATA, data);
  },

  // Authorities
  getAuthorities(): AuthorityPerson[] {
    return readItem<AuthorityPerson[]>(STORAGE_KEYS.AUTHORITIES, defaultAuthoritiesData);
  },
  saveAuthority(person: AuthorityPerson): void {
    const current = this.getAuthorities();
    const index = current.findIndex((p) => p.id === person.id);
    if (index >= 0) {
      current[index] = person;
    } else {
      current.push(person);
    }
    writeItem(STORAGE_KEYS.AUTHORITIES, current);
  },
  deleteAuthority(id: string): void {
    const current = this.getAuthorities().filter((p) => p.id !== id);
    writeItem(STORAGE_KEYS.AUTHORITIES, current);
  },

  // Teachers
  getTeachers(): Teacher[] {
    return readItem<Teacher[]>(STORAGE_KEYS.TEACHERS, defaultTeachersData);
  },
  saveTeacher(teacher: Teacher): void {
    const current = this.getTeachers();
    const index = current.findIndex((t) => t.id === teacher.id);
    if (index >= 0) {
      current[index] = teacher;
    } else {
      current.push(teacher);
    }
    writeItem(STORAGE_KEYS.TEACHERS, current);
  },
  deleteTeacher(id: string): void {
    const current = this.getTeachers().filter((t) => t.id !== id);
    writeItem(STORAGE_KEYS.TEACHERS, current);
  },

  // Departments
  getDepartments(): Department[] {
    return readItem<Department[]>(STORAGE_KEYS.DEPARTMENTS, defaultDepartmentsData);
  },
  saveDepartment(dept: Department): void {
    const current = this.getDepartments();
    const index = current.findIndex((d) => d.id === dept.id);
    if (index >= 0) {
      current[index] = dept;
    } else {
      current.push(dept);
    }
    writeItem(STORAGE_KEYS.DEPARTMENTS, current);
  },
  deleteDepartment(id: string): void {
    const current = this.getDepartments().filter((d) => d.id !== id);
    writeItem(STORAGE_KEYS.DEPARTMENTS, current);
  },

  // Admission
  getAdmissionData(): AdmissionInfo {
    return readItem<AdmissionInfo>(STORAGE_KEYS.ADMISSION, defaultAdmissionData);
  },
  saveAdmissionData(data: AdmissionInfo): void {
    writeItem(STORAGE_KEYS.ADMISSION, data);
  },

  // Notices
  getNotices(): Notice[] {
    return readItem<Notice[]>(STORAGE_KEYS.NOTICES, defaultNoticesData);
  },
  saveNotice(notice: Notice): void {
    const current = this.getNotices();
    const index = current.findIndex((n) => n.id === notice.id);
    if (index >= 0) {
      current[index] = notice;
    } else {
      current.unshift(notice);
    }
    writeItem(STORAGE_KEYS.NOTICES, current);
  },
  deleteNotice(id: string): void {
    const current = this.getNotices().filter((n) => n.id !== id);
    writeItem(STORAGE_KEYS.NOTICES, current);
  },

  // Routine
  getRoutine(): RoutineItem[] {
    return readItem<RoutineItem[]>(STORAGE_KEYS.ROUTINE, defaultRoutineData);
  },
  saveRoutineItem(item: RoutineItem): void {
    const current = this.getRoutine();
    const index = current.findIndex((r) => r.id === item.id);
    if (index >= 0) {
      current[index] = item;
    } else {
      current.push(item);
    }
    writeItem(STORAGE_KEYS.ROUTINE, current);
  },
  deleteRoutineItem(id: string): void {
    const current = this.getRoutine().filter((r) => r.id !== id);
    writeItem(STORAGE_KEYS.ROUTINE, current);
  },

  // Results
  getResults(): ExamResult[] {
    return readItem<ExamResult[]>(STORAGE_KEYS.RESULTS, defaultResultsData);
  },
  saveResult(result: ExamResult): void {
    const current = this.getResults();
    const index = current.findIndex((res) => res.id === result.id);
    if (index >= 0) {
      current[index] = result;
    } else {
      current.unshift(result);
    }
    writeItem(STORAGE_KEYS.RESULTS, current);
  },
  deleteResult(id: string): void {
    const current = this.getResults().filter((res) => res.id !== id);
    writeItem(STORAGE_KEYS.RESULTS, current);
  },

  // Gallery
  getGallery(): GalleryItem[] {
    return readItem<GalleryItem[]>(STORAGE_KEYS.GALLERY, defaultGalleryData);
  },
  saveGalleryItem(item: GalleryItem): void {
    const current = this.getGallery();
    const index = current.findIndex((g) => g.id === item.id);
    if (index >= 0) {
      current[index] = item;
    } else {
      current.unshift(item);
    }
    writeItem(STORAGE_KEYS.GALLERY, current);
  },
  deleteGalleryItem(id: string): void {
    const current = this.getGallery().filter((g) => g.id !== id);
    writeItem(STORAGE_KEYS.GALLERY, current);
  },

  // Contact
  getContactData(): ContactInfo {
    return readItem<ContactInfo>(STORAGE_KEYS.CONTACT, defaultContactData);
  },
  saveContactData(data: ContactInfo): void {
    writeItem(STORAGE_KEYS.CONTACT, data);
  },

  // Reset to Defaults
  resetAll(): void {
    Object.values(STORAGE_KEYS).forEach((k) => {
      localStorage.removeItem(k);
    });
    notifyListeners();
  },

  // Export full backup
  exportAll(): string {
    const backup = {
      siteInfo: this.getSiteInfo(),
      seoData: this.getSEOData(),
      homeData: this.getHomeData(),
      aboutData: this.getAboutData(),
      authorities: this.getAuthorities(),
      teachers: this.getTeachers(),
      departments: this.getDepartments(),
      admission: this.getAdmissionData(),
      notices: this.getNotices(),
      routine: this.getRoutine(),
      results: this.getResults(),
      gallery: this.getGallery(),
      contact: this.getContactData(),
      exportedAt: new Date().toISOString(),
    };
    return JSON.stringify(backup, null, 2);
  },

  // Import full backup
  importAll(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString);
      if (data.siteInfo) writeItem(STORAGE_KEYS.SITE_INFO, data.siteInfo);
      if (data.seoData) writeItem(STORAGE_KEYS.SEO_DATA, data.seoData);
      if (data.homeData) writeItem(STORAGE_KEYS.HOME_DATA, data.homeData);
      if (data.aboutData) writeItem(STORAGE_KEYS.ABOUT_DATA, data.aboutData);
      if (data.authorities) writeItem(STORAGE_KEYS.AUTHORITIES, data.authorities);
      if (data.teachers) writeItem(STORAGE_KEYS.TEACHERS, data.teachers);
      if (data.departments) writeItem(STORAGE_KEYS.DEPARTMENTS, data.departments);
      if (data.admission) writeItem(STORAGE_KEYS.ADMISSION, data.admission);
      if (data.notices) writeItem(STORAGE_KEYS.NOTICES, data.notices);
      if (data.routine) writeItem(STORAGE_KEYS.ROUTINE, data.routine);
      if (data.results) writeItem(STORAGE_KEYS.RESULTS, data.results);
      if (data.gallery) writeItem(STORAGE_KEYS.GALLERY, data.gallery);
      if (data.contact) writeItem(STORAGE_KEYS.CONTACT, data.contact);
      notifyListeners();
      return true;
    } catch (e) {
      console.error('Failed to parse and import backup JSON', e);
      return false;
    }
  },
};
