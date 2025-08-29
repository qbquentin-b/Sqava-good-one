// placeholder for Hero.tsximport React from 'react';
import { ArrowRight, CheckCircle, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-100 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200 rounded-full opacity-30 animate-float animate-delay-300"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-25 animate-float animate-delay-500"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-teal-300 rounded-full opacity-20 animate-float animate-delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge animé */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8 animate-bounce-in">
            <Sparkles className="w-5 h-5 text-yellow-500 mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">Création de sites web professionnels</span>
            <Zap className="w-5 h-5 text-blue-500 ml-2 animate-pulse animate-delay-200" />
          </div>

          {/* Titre principal avec animation */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block animate-slide-in-left">Votre site pro,</span>
            <span className="block text-shimmer animate-slide-in-right animate-delay-200">
              créé sur-mesure
            </span>
            <span className="block animate-slide-in-left animate-delay-400">par SQAVA</span>
          </h1>

          {/* Sous-titre animé */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in animate-delay-600">
            Restaurants, coiffeurs, artisans… Donnez une image professionnelle à votre activité.
          </p>

          {/* CTA Principal avec animation spéciale */}
          <div className="mb-12 animate-scale-in animate-delay-800">
            <a
              href="/a-propos"
              className="inline-flex items-center px-8 py-4 btn-gradient text-white text-lg font-semibold rounded-lg shadow-lg hover-glow group"
            >
              <span className="mr-2">Découvrir SQAVA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Points forts avec animations échelonnées */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 animate-slide-up animate-delay-300 stagger-item">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center animate-pulse-glow">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-700 font-semibold">Tarifs transparents</span>
            </div>
            <div className="flex items-center justify-center space-x-2 animate-slide-up animate-delay-400 stagger-item">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center animate-pulse-glow animate-delay-200">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-700 font-semibold">Livraison rapide</span>
            </div>
            <div className="flex items-center justify-center space-x-2 animate-slide-up animate-delay-500 stagger-item">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center animate-pulse-glow animate-delay-400">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-700 font-semibold">Support inclus</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;