import React, { useState } from 'react';

import { Menu, X, Globe, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo animé */}
          <div className="flex items-center space-x-2 animate-slide-in-left">
            <img 
              src="/logo_sqava.png" 
              alt="SQAVA Logo" 
              className="h-10 w-auto animate-pulse-glow hover-rotate"
            />
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8 animate-fade-in animate-delay-200">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">
              Accueil
            </a>
            <a href="/a-propos" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">
              À propos
            </a>
            <a href="/offres" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">
              Nos Offres
            </a>
            <a href="/pourquoi-nous-choisir" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">
              Pourquoi nous choisir
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button animé */}
          <div className="hidden md:block animate-slide-in-right">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-2 btn-gradient text-white rounded-lg hover-glow font-semibold group"
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span>Devis gratuit</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 animate-spin" style={{ animationDuration: '0.3s' }} />
            ) : (
              <Menu className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 animate-slide-up">
            <nav className="flex flex-col space-y-4 px-4">
              <a 
                href="/" 
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </a>
              <a 
                href="/a-propos" 
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </a>
              <a 
                href="/offres" 
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Nos Offres
              </a>
              <a 
                href="/pourquoi-nous-choisir" 
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pourquoi nous choisir
              </a>
              <a 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2 btn-gradient text-white rounded-lg hover-glow font-semibold mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Devis gratuit
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;