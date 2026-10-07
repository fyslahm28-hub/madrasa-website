/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { DataProvider } from './context/DataContext';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Page components
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/EducationPage';
import { DepartmentsPage } from './pages/DepartmentsPage';
import { AuthoritiesPage } from './pages/AuthoritiesPage';
import { TeachersPage } from './pages/TeachersPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { NoticesPage } from './pages/NoticesPage';
import { RoutinePage } from './pages/RoutinePage';
import { ResultsPage } from './pages/ResultsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const { isRTL, language } = useLanguage();

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen flex flex-col bg-stone-50 text-slate-800 ${
        isRTL ? 'font-arabic' : language === 'bn' ? 'font-bengali' : 'font-sans'
      }`}
    >
      {/* Navigation Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'education' && <EducationPage />}
        {currentPage === 'departments' && <DepartmentsPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'authorities' && <AuthoritiesPage />}
        {currentPage === 'teachers' && <TeachersPage />}
        {currentPage === 'admission' && <AdmissionPage />}
        {currentPage === 'notices' && <NoticesPage />}
        {currentPage === 'routine' && <RoutinePage />}
        {currentPage === 'results' && <ResultsPage />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'admin' && <AdminPage />}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <DataProvider>
        <AppContent />
      </DataProvider>
    </LanguageProvider>
  );
}
