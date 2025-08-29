import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Check } from 'lucide-react';

const CookieManager = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Toujours activé
    analytics: false,
    functional: false
  });

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Délai pour laisser la page se charger
      setTimeout(() => setShowBanner(true), 2000);
    } else {
      // Charger les préférences sauvegardées
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      functional: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      functional: false
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type: string) => {
    if (type === 'necessary') return; // Ne peut pas être désactivé
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowSettings(false)} />
      )}

      {/* Bannière principale */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 animate-slide-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start space-x-3 flex-1">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Nous utilisons des cookies
                </h3>
                <p className="text-sm text-gray-600">
                  Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser notre trafic. 
                  Vous pouvez personnaliser vos préférences ou accepter tous les cookies.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-center lg:justify-end">
              <button
                onClick={() => setShowSettings(true)}
                className="px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center flex-1 sm:flex-none justify-center"
              >
                <Settings className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Personnaliser
              </button>
              <button
                onClick={handleRejectAll}
                className="px-3 py-2 text-xs sm:text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex-1 sm:flex-none"
              >
                Refuser
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-3 py-2 text-xs sm:text-sm btn-gradient text-white rounded-lg hover-glow flex-1 sm:flex-none"
              >
                Accepter tout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Panneau de paramètres */}
      {showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 max-h-96 overflow-y-auto animate-slide-up">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Paramètres des cookies
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Cookies nécessaires */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Cookies nécessaires
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies analytiques */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Cookies analytiques
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ces cookies nous aident à comprendre comment vous utilisez notre site (Google Analytics).
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.analytics ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
              </div>

              {/* Cookies fonctionnels */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Cookies fonctionnels
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ces cookies permettent d'améliorer les fonctionnalités du site (préférences, langue).
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('functional')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors duration-200 ${
                      preferences.functional ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={handleRejectAll}
                className="px-6 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Refuser tout
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 text-sm btn-gradient text-white rounded-lg hover-glow"
              >
                Sauvegarder mes préférences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieManager;