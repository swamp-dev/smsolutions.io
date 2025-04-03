import React, { useState } from 'react';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Approach from './components/sections/Approach';
import Contact from './components/sections/Contact';
import { Logo } from './components/Logo';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#how-we-work', label: 'How We Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="relative">
      <div className="bg-grid-white"></div>
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Logo />
              <span className="text-xl font-bold text-white">
                SM Solutions
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </div>
            <button 
              className="md:hidden p-2 text-gray-300 hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'translate-x-full'}`}>
        <button 
          onClick={closeMobileMenu}
          className="absolute top-6 right-6 p-2 text-gray-300 hover:text-primary transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-menu-link"
              onClick={closeMobileMenu}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <main className={isMobileMenuOpen ? 'pointer-events-none' : ''}>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Contact />
      </main>

      <footer className="bg-gray-950 py-8">
        <div className="container text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SM Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
