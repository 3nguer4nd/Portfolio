import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-dark text-gray-200">
      {/* Navigation */}
      <nav className="bg-dark-light shadow-md border-b border-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Mon Portfolio</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setCurrentPage('home')} 
                className={`${currentPage === 'home' ? 'text-primary' : 'text-gray-300'} hover:text-primary-light transition-colors`}
              >
                Accueil
              </button>
              <button 
                onClick={() => setCurrentPage('skills')} 
                className={`${currentPage === 'skills' ? 'text-primary' : 'text-gray-300'} hover:text-primary-light transition-colors`}
              >
                Compétences
              </button>
              <button 
                onClick={() => setCurrentPage('projects')} 
                className={`${currentPage === 'projects' ? 'text-primary' : 'text-gray-300'} hover:text-primary-light transition-colors`}
              >
                Projets
              </button>
              <button 
                onClick={() => setCurrentPage('contact')} 
                className={`${currentPage === 'contact' ? 'text-primary' : 'text-gray-300'} hover:text-primary-light transition-colors`}
              >
                Contact
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                className="text-gray-300 hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-light border-t border-dark-lighter">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                onClick={() => {
                  setCurrentPage('home');
                  setMobileMenuOpen(false);
                }} 
                className={`${currentPage === 'home' ? 'bg-primary text-white' : 'text-gray-300'} block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                Accueil
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('skills');
                  setMobileMenuOpen(false);
                }} 
                className={`${currentPage === 'skills' ? 'bg-primary text-white' : 'text-gray-300'} block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                Compétences
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('projects');
                  setMobileMenuOpen(false);
                }} 
                className={`${currentPage === 'projects' ? 'bg-primary text-white' : 'text-gray-300'} block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                Projets
              </button>
              <button 
                onClick={() => {
                  setCurrentPage('contact');
                  setMobileMenuOpen(false);
                }} 
                className={`${currentPage === 'contact' ? 'bg-primary text-white' : 'text-gray-300'} block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;