// placeholder for LegalNotice.tsximport React from 'react';
import { ArrowLeft, Building, Mail, Phone, MapPin } from 'lucide-react';

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bouton retour */}
        <div className="mb-8">
          <a 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </a>
        </div>

        {/* Titre */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mentions Légales
          </h1>
          <p className="text-gray-600">
            Informations légales concernant le site SQAVA
          </p>
        </div>

        {/* Contenu */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          
          {/* Éditeur du site */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Building className="w-6 h-6 mr-2 text-blue-600" />
              Éditeur du site
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">SQAVA</p>
              <p className="text-gray-600">Création de sites web professionnels</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                  <span>Somme, France</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-gray-500 mr-2" />
                  <span>+33 7 68 17 60 68</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-gray-500 mr-2" />
                  <span>contact@sqava.fr</span>
                </div>
              </div>
            </div>
          </section>

          {/* Hébergement */}
<section>
  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
    Hébergement
  </h2>
  <div className="bg-gray-50 p-4 rounded-lg space-y-1">
    <p>Ce site est hébergé par :</p>
    <p className="font-semibold mt-2">o2switch</p>
    <p className="text-gray-600">SAS au capital de 100 000 €</p>
    <p className="text-gray-600">222-224 Boulevard Gustave Flaubert</p>
    <p className="text-gray-600">63000 Clermont-Ferrand – France</p>
    <p className="text-gray-600">SIRET : 510 909 80700024</p>
    <p className="text-gray-600">RCS Clermont-Ferrand</p>
    <p className="text-gray-600">TVA intracommunautaire : FR35510909807</p>
    <p className="text-gray-600">Site web : <a href="https://www.o2switch.fr" className="text-blue-600 hover:underline">https://www.o2switch.fr</a></p>
    <p className="text-gray-600">Téléphone : 04 44 44 60 40</p>
  </div>
</section>


          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Propriété intellectuelle
            </h2>
            <div className="prose text-gray-700">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="mt-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                sauf autorisation expresse du directeur de la publication.
              </p>
            </div>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Protection des données personnelles
            </h2>
            <div className="prose text-gray-700">
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@sqava.fr
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cookies
            </h2>
            <div className="prose text-gray-700">
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
              </p>
              <p className="mt-4">
                Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté de leur présence. 
                Cependant, certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Limitation de responsabilité
            </h2>
            <div className="prose text-gray-700">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, 
                mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>
              <p className="mt-4">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                merci de bien vouloir le signaler par email à contact@sqava.fr en décrivant le problème de la manière la plus précise possible.
              </p>
            </div>
          </section>

        </div>

        {/* Date de mise à jour */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          Dernière mise à jour : Janvier 2025
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;