import { Users, Award, Clock, HeartHandshake, Star, Zap, ArrowRight } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const titleAnimation = useScrollAnimation();
  const featuresAnimation = useStaggeredAnimation(4, 150);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Éléments décoratifs animés */}
      <div className="absolute top-10 right-10 opacity-10">
        <Star className="w-32 h-32 text-blue-500 animate-spin" style={{ animationDuration: '20s' }} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <Zap className="w-24 h-24 text-teal-500 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={titleAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block animate-bounce-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              SQAVA, votre partenaire digital <span className="text-shimmer">de confiance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animate-delay-300">
              Qui sommes-nous et pourquoi nous choisir pour votre présence digitale
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Fondateur */}
          <div
            ref={featuresAnimation.ref}
            className={`bg-white rounded-2xl shadow-lg p-8 card-hover transition-all duration-800 ${
              featuresAnimation.visibleItems[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Quentin Bourgois</h3>
                <p className="text-blue-600 font-semibold">Fondateur & Développeur</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Formation</h4>
                  <p className="text-gray-600">
                    Étudiant en école d'ingénieur au CESI de Lille, spécialisé en informatique et nouvelles
                    technologies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expertise</h4>
                  <p className="text-gray-600">
                    Passionné par le développement web moderne, je maîtrise les dernières technologies pour créer des
                    sites performants et attractifs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Localisation</h4>
                  <p className="text-gray-600">
                    Basé à Amiens, je comprends les enjeux des entreprises locales et leur besoin de se démarquer dans
                    leur région.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-8 card-hover transition-all duration-800 ${
              featuresAnimation.visibleItems[1] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Notre Mission</h3>
                <p className="text-orange-600 font-semibold">Votre réussite digitale</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>SQAVA</strong> est né d'une conviction simple : chaque entreprise locale mérite un site web professionnel
                qui reflète la qualité de ses services.
              </p>

              <p className="text-gray-700 leading-relaxed">
                En tant qu'étudiant ingénieur, j'apporte une approche <strong>moderne et technique</strong> tout en gardant un
                contact <strong>humain et personnalisé</strong> avec chaque client.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Mon objectif ? Vous accompagner dans votre transformation digitale avec des solutions <strong>sur-mesure</strong>,
                des <strong>tarifs transparents</strong> et un <strong>support réactif</strong>.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-800 font-medium italic">
                  "Votre succès est ma priorité. Ensemble, donnons à votre entreprise la visibilité qu'elle mérite !"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation vers la page suivante */}
        <div className="text-center mt-12">
          <a
            href="/offres"
            className="inline-flex items-center px-8 py-4 btn-gradient text-white text-lg font-semibold rounded-lg shadow-lg hover-glow group"
          >
            <span className="mr-2">Découvrir nos offres</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
