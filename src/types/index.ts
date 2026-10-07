export type Language = 'bn' | 'en' | 'ar';

export interface MultiLangString {
  bn: string;
  en: string;
  ar: string;
}

export interface SiteInfo {
  name: MultiLangString;
  type: MultiLangString;
  address: MultiLangString;
  phone: string;
  email: string;
  facebook: string;
  developer: string;
  developerUrl?: string;
}

export interface HeroButton {
  label: MultiLangString;
  link: string;
  variant: 'primary' | 'secondary' | 'outline';
}

export interface HomeContent {
  bismillah: MultiLangString;
  heroTitle: MultiLangString;
  heroSubtitle: MultiLangString;
  welcomeHeading: MultiLangString;
  welcomeText: MultiLangString;
  primaryButton: HeroButton;
  secondaryButton: HeroButton;
  announcementTicker?: MultiLangString;
}

export interface AboutContent {
  title: MultiLangString;
  subtitle: MultiLangString;
  mainStory: MultiLangString;
  visionTitle: MultiLangString;
  visionText: MultiLangString;
  missionTitle: MultiLangString;
  missionText: MultiLangString;
  curriculumOverview: MultiLangString;
  locationInfo: MultiLangString;
}

export interface AuthorityPerson {
  id: string;
  name: MultiLangString;
  position: MultiLangString;
  description: MultiLangString;
  phone?: string;
  email?: string;
  photoUrl?: string;
  order: number;
}

export interface Teacher {
  id: string;
  name: MultiLangString;
  designation: MultiLangString;
  department: MultiLangString;
  qualification: MultiLangString;
  photoUrl?: string;
  phone?: string;
  order: number;
}

export interface Department {
  id: string;
  name: MultiLangString;
  shortDesc: MultiLangString;
  duration: MultiLangString;
  features: MultiLangString[];
  order: number;
}

export interface AdmissionInfo {
  status: MultiLangString; // e.g. "ভর্তি চলছে" / "Admission Open" / "القبول مفتوح"
  session: MultiLangString;
  procedure: MultiLangString;
  requirements: MultiLangString[];
  documentsRequired: MultiLangString[];
  notes: MultiLangString;
  contactPrompt: MultiLangString;
}

export interface Notice {
  id: string;
  title: MultiLangString;
  content: MultiLangString;
  date: string;
  category: MultiLangString;
  isPublished: boolean;
  isImportant?: boolean;
}

export interface RoutineItem {
  id: string;
  className: MultiLangString;
  subject: MultiLangString;
  teacher: MultiLangString;
  day: MultiLangString;
  time: MultiLangString;
  room?: string;
}

export interface ExamResult {
  id: string;
  studentName: MultiLangString;
  roll: string;
  studentId: string;
  className: MultiLangString;
  examName: MultiLangString;
  marks: string;
  grade: string;
  status: MultiLangString; // 'মুমতায (A+)', 'জায়্যিদ জিদ্দান', etc.
  year: string;
}

export interface GalleryItem {
  id: string;
  title: MultiLangString;
  category: MultiLangString;
  imageUrl: string;
  date?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  facebook: string;
  address: MultiLangString;
  officeHours: MultiLangString;
  emergencyContact?: string;
}

export interface SEOData {
  title: MultiLangString;
  description: MultiLangString;
  keywords: MultiLangString;
  ogTitle: MultiLangString;
  ogDescription: MultiLangString;
}

export type PageId =
  | 'home'
  | 'about'
  | 'education'
  | 'departments'
  | 'authorities'
  | 'teachers'
  | 'admission'
  | 'notices'
  | 'routine'
  | 'results'
  | 'gallery'
  | 'contact'
  | 'admin';
