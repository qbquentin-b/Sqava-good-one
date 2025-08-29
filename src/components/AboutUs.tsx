// placeholder for AboutUs.tsximport React from 'react';
import {
    User,
    Heart,
    Lightbulb,
    Target,
    ArrowRight
  } from 'lucide-react';
  import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';
  
  const AboutUs = () => {
    const titleAnimation = useScrollAnimation();
    const valuesAnimation = useStaggeredAnimation(3, 200);
  
    const values = [
      {
        icon: <Heart className="w-8 h-8 text-white" />,
        title: 'Experts locaux',
        description: 'Spécialisés dans les entreprises locales',
        gradient: 'from-blue-500 to-blue-600',
      },
      {
        icon: <Lightbulb className="w-8 h-8 text-white" />,
        title: 'Qualité garantie',
        description: 'Design professionnel et moderne',
        gradient: 'from-teal-500 to-teal-600',
      },
      {
        icon: <Target className="w-8 h-8 text-white" />,
        title: 'Délais courts',
        description: 'Votre site en ligne rapidement',
        gradient: 'from-purple-500 to-purple-600',
      },
    ];
  
    return (
      <section id="apropos" className="py-20 bg-white relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-teal-200 rounded-full opacity-15 animate-float animate-delay-500"></div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={titleAnimation.ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleAnimation.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              À propos de <span className="text-shimmer">SQAVA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animate-delay-300">
              Une approche personnalisée et humaine pour votre présence digitale
            </p>
          </div>
  
          <div
            ref={valuesAnimation.ref}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center group card-hover transition-all duration-700 ${
                  valuesAnimation.visibleItems[index]
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 animate-pulse-glow icon-bounce`}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
  
          {/* Navigation vers la page suivante */}
          <div className="text-center mt-12">
            <a
              href="/offres"
              aria-label="Voir les offres SQAVA"
              className="inline-flex items-center px-8 py-4 btn-gradient text-white text-lg font-semibold rounded-lg shadow-lg hover-glow group"
            >
              <span className="mr-2">Voir nos offres</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  