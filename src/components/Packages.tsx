import { useState } from 'react';
import { Check, Star, Crown, Zap, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Packages = () => {
  const titleAnimation = useScrollAnimation();
  const bonusAnimation = useScrollAnimation();
  const [currentPackage, setCurrentPackage] = useState(0);

  const packages = [
    {
      name: 'Pack Essentiel',
      price: '780',
      monthly: '20',
      description: 'L\'essentiel pour une présence professionnelle en ligne',
      subtitle: 'Site vitrine responsive, design propre et contenu optimisé pour les pros locaux.',
      features: [
        'Jusqu\'à 5 pages (Accueil, Prestations, À propos, Contact, etc.)',
        'Design personnalisé aux couleurs de l\'activité',
        'Formulaire de contact avec envoi par e-mail',
        'Carte Google Maps intégrée',
        'Réseaux sociaux cliquables',
        'Mentions légales & politique de confidentialité',
        'Bandeau cookies RGPD + gestion du consentement',
        'Menu classique (PDF ou HTML simple pour les restaurants)',
        'Optimisation mobile & SEO local basique',
        'Hébergement inclus pendant 1 an (puis ~80€/an)',
        '+ Option sur mesure (+?€)'
      ],
      icon: <Zap className="w-6 h-6" />,
      popular: false,
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50'
    },
    {
      name: 'Pack Avancé',
      price: '1020',
      monthly: '30',
      description: 'Un site plus puissant pour attirer et convertir davantage',
      subtitle: 'Le bon équilibre entre design, performance, outils de réservation et suivi du trafic.',
      features: [
        'Tout du Pack Essentiel',
        'Module de réservation en ligne sur mesure',
        'Galerie photo ou menu interactif',
        'Optimisation SEO complète',
        'Intégration Google Analytics + Pixel Meta',
        'Formation personnalisée (30 min)',
        '+ Amélioration de vos réseaux sociaux (+120€)',
        '+ Automatisation e-mail/CRM (+90€)',
        '+ Intégration vidéo (+60€)',
        '+ Langue supplémentaire (+50€)',
        '+ Option sur mesure (+?€)'
      ],
      icon: <Star className="w-6 h-6" />,
      popular: true,
      gradient: 'from-blue-500 to-purple-500',
      bgGradient: 'from-blue-50 to-purple-50'
    },
    {
      name: 'Pack Premium',
      price: '1490',
      monthly: '36',
      description: 'Une solution web complète et évolutive, pour les pros exigeants',
      subtitle: 'Conçu pour piloter toute votre communication digitale et automatiser vos outils métier.',
      features: [
        'Tout du Pack Avancé',
        'Référencement local avancé (GMB + netlinking)',
        'Système de réservation 100% sur-mesure',
        'Affichage d\'avis clients intégré',
        'Blog / Section actualités',
        '+ Amélioration de vos réseaux sociaux (+100€)',
        '+ Automatisation e-mail/CRM (+80€)',
        '+ Intégration vidéo (+50€)',
        '+ Langue supplémentaire (+40€)',
        '+ Option sur mesure (+?€)'
      ],
      icon: <Crown className="w-6 h-6" />,
      popular: false,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  const nextPackage = () => {
    setCurrentPackage((prev) => (prev + 1) % packages.length);
  };

  const prevPackage = () => {
    setCurrentPackage((prev) => (prev - 1 + packages.length) % packages.length);
  };

  return (
    <section id="offres" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Éléments décoratifs animés */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-200 rounded-full opacity-15 animate-float animate-delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleAnimation.ref} className={`text-center mb-16 transition-all duration-1000 ${titleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6 animate-bounce-in">
            <Sparkles className="w-5 h-5 text-yellow-500 mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">Choisissez votre formule</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
            Nos <span className="text-shimmer">Offres</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animate-delay-300">
            Trois formules adaptées à vos besoins et votre budget
          </p>
        </div>

        {/* Version Desktop - Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Version Mobile/Tablet - Carrousel horizontal */}
        <div className="lg:hidden relative">
          <div className="relative overflow-hidden">
            {/* Carrousel avec flèches intégrées */}
            <div className="relative overflow-hidden">
              {/* Flèche gauche */}
              <button
                onClick={prevPackage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 z-30 mt-8"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              
              {/* Flèche droite */}
              <button
                onClick={nextPackage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 z-30 mt-8"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              {/* Carrousel */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentPackage * 100}%)` }}
                >
                  {packages.map((pkg, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4 pt-8">
                      <PackageCard pkg={pkg} index={index} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center mt-6 space-x-2">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPackage(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentPackage ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Section bonus animée */}
        <div ref={bonusAnimation.ref} className={`mt-16 text-center transition-all duration-800 ${bonusAnimation.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full shadow-lg animate-pulse-glow">
            <Sparkles className="w-5 h-5 mr-2 animate-spin" />
            <span className="font-semibold">Devis gratuit et sans engagement !</span>
          </div>
        </div>

        {/* Navigation vers la page suivante */}
        <div className="text-center mt-12">
          <a
            href="/pourquoi-nous-choisir"
            className="inline-flex items-center px-8 py-4 btn-gradient text-white text-lg font-semibold rounded-lg shadow-lg hover-glow group"
          >
            <span className="mr-2">Pourquoi nous choisir ?</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Composant PackageCard séparé pour éviter la duplication
const PackageCard = ({ pkg, index }: { pkg: any; index: number }) => (
  <div
    className={`relative bg-white rounded-2xl shadow-lg flex flex-col ${
      pkg.popular ? 'ring-2 ring-blue-500 scale-105' : ''
    }`}
  >
    {pkg.popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-in animate-delay-400">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">
          ⭐ Le plus populaire
        </div>
      </div>
    )}

    {/* Gradient background overlay */}
    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>

    <div className="p-8 relative z-10 flex-grow flex flex-col">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${pkg.gradient} text-white mb-4 animate-pulse-glow icon-bounce`}>
        {pkg.icon}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {pkg.name}
      </h3>
      <p className="text-gray-600 mb-4">{pkg.description}</p>
      <p className="text-sm text-gray-500 mb-6">{pkg.subtitle}</p>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-shimmer">{pkg.price}€</span>
          <span className="text-gray-500 ml-2">TTC + {pkg.monthly}€/mois</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {pkg.features.map((feature: string, featureIndex: number) => (
          <li key={featureIndex} className={`flex items-start animate-slide-in-left stagger-item`}>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 ${
              feature.startsWith('+') 
                ? 'bg-gradient-to-br from-orange-400 to-orange-600' 
                : 'bg-gradient-to-br from-teal-400 to-teal-600 animate-pulse'
            }`}>
              {feature.startsWith('+') ? (
                <span className="text-white text-xs font-bold">+</span>
              ) : (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <span className="text-gray-700 text-sm hover:text-gray-900 transition-colors duration-200">{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="p-8 pt-0">
      <a
        className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg font-semibold transition-all duration-300 group ${
          pkg.popular
            ? 'btn-gradient text-white hover-glow'
            : `bg-gradient-to-r ${pkg.gradient} text-white hover:opacity-90 hover-lift`
        }`}
      >
        
      </a>
    </div>
  </div>
);

export default Packages;