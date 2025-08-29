import React from 'react';
import { DollarSign, Clock, Wrench, Users, CheckCircle, Zap } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const WhyUs = () => {
  const titleAnimation = useScrollAnimation();
  const reasonsAnimation = useStaggeredAnimation(4, 150);
  const benefitsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const reasons = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Tarifs clairs',
      description: 'Pas de frais cachés, tout est transparent dès le départ',
      gradient: 'from-green-500 to-emerald-500',
      delay: 'animate-delay-100'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Délais rapides',
      description: 'Votre site en ligne en quelques semaines seulement',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 'animate-delay-200'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Maintenance dispo',
      description: 'Support technique et mises à jour incluses',
      gradient: 'from-purple-500 to-violet-500',
      delay: 'animate-delay-300'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Accompagnement humain',
      description: 'À votre écoute à chaque étape, je vous accompagne personnellement tout au long du projet.',
      gradient: 'from-pink-500 to-rose-500',
      delay: 'animate-delay-400'
    }
  ];

  const benefits = [
    'Sites optimisés pour mobile',
    'Référencement SEO inclus',
    'Hébergement sécurisé',
    'Formation personnalisée',
    'Support technique réactif',
    'Mises à jour régulières'
  ];

  return (
    <section id="pourquoi" className="py-20 bg-white relative overflow-hidden">
      {/* Éléments décoratifs animés */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-100 rounded-full opacity-40 animate-float animate-delay-300"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-100 rounded-full opacity-25 animate-float animate-delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleAnimation.ref} className={`text-center mb-16 transition-all duration-1000 ${titleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full shadow-lg mb-6 animate-bounce-in">
            <Zap className="w-5 h-5 text-blue-600 mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">Nos avantages</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
            Pourquoi nous <span className="text-shimmer">choisir ?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animate-delay-300">
            Nous mettons tout en œuvre pour votre réussite digitale
          </p>
        </div>

        <div ref={reasonsAnimation.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`text-center group card-hover transition-all duration-700 ${reasonsAnimation.visibleItems[index] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 animate-pulse-glow icon-bounce`}>
                <div className="text-white">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section avantages supplémentaires */}
        <div ref={benefitsAnimation.ref} className={`bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 transition-all duration-800 ${benefitsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ce qui est <span className="text-shimmer">inclus</span> dans tous nos packs
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 animate-slide-in-left stagger-item hover-lift p-3 rounded-lg hover:bg-white/50 transition-all duration-300`}
              >
                <div className="w-6 h-6 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action animé */}
        <div ref={ctaAnimation.ref} className={`text-center mt-12 transition-all duration-800 ${ctaAnimation.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 btn-gradient text-white text-lg font-semibold rounded-lg shadow-lg hover-glow group"
          >
            <span className="mr-2">Demander un devis</span>
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;