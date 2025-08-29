import React from 'react';
import { ArrowLeft, Shield, Eye, Database, Lock, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
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
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Shield className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-800">Protection des données</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-gray-600">
            Comment nous protégeons et utilisons vos données personnelles
          </p>
        </div>

        {/* Contenu */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2 text-blue-600" />
              Introduction
            </h2>
            <div className="prose text-gray-700">
              <p>
                SQAVA s'engage à protéger la confidentialité de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, 
                stockons et protégeons vos informations personnelles conformément au Règlement Général 
                sur la Protection des Données (RGPD) et à la loi française.
              </p>
            </div>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Database className="w-6 h-6 mr-2 text-blue-600" />
              Données collectées
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Données que nous collectons :</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Informations de contact :</strong> nom, prénom, adresse email, numéro de téléphone</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Informations professionnelles :</strong> type d'activité, besoins spécifiques</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Communications :</strong> messages envoyés via nos formulaires de contact</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Utilisation des données */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Utilisation de vos données
            </h2>
            <div className="prose text-gray-700">
              <p className="mb-4">Nous utilisons vos données personnelles pour :</p>
              <ul className="space-y-2">
                <li>• Répondre à vos demandes de devis et questions</li>
                <li>• Vous fournir nos services de création de sites web</li>
                <li>• Améliorer notre site web et nos services</li>
                <li>• Vous envoyer des informations sur nos services (avec votre consentement)</li>
                <li>• Respecter nos obligations légales</li>
              </ul>
            </div>
          </section>

          {/* Base légale */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Base légale du traitement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Consentement</h4>
                <p className="text-blue-800 text-sm">Pour l'envoi de communications marketing</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Intérêt légitime</h4>
                <p className="text-green-800 text-sm">Pour répondre à vos demandes et améliorer nos services</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Exécution du contrat</h4>
                <p className="text-purple-800 text-sm">Pour la fourniture de nos services</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Obligation légale</h4>
                <p className="text-orange-800 text-sm">Pour respecter nos obligations comptables et fiscales</p>
              </div>
            </div>
          </section>

          {/* Partage des données */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Partage de vos données
            </h2>
            <div className="prose text-gray-700">
              <p>
                Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
                sauf dans les cas suivants :
              </p>
              <ul className="mt-4 space-y-2">
                <li>• Avec votre consentement explicite</li>
                <li>• Pour respecter une obligation légale</li>
                <li>• Avec nos prestataires de services (hébergement, email) sous contrat de confidentialité</li>
                <li>• En cas de fusion, acquisition ou vente d'actifs</li>
              </ul>
            </div>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-2 text-blue-600" />
              Sécurité des données
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Chiffrement SSL</h4>
                    <p className="text-gray-600 text-sm">Toutes les communications sont chiffrées</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accès restreint</h4>
                    <p className="text-gray-600 text-sm">Seules les personnes autorisées ont accès</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Vos droits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">Droit d'accès</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Droit de rectification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="font-medium">Droit d'effacement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span className="font-medium">Droit à la portabilité</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="font-medium">Droit d'opposition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                  <span className="font-medium">Droit de limitation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                  <span className="font-medium">Retrait du consentement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                  <span className="font-medium">Réclamation CNIL</span>
                </div>
              </div>
            </div>
          </section>

          {/* Conservation */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Conservation des données
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 mb-4">
                Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Demandes de devis :</strong> 3 ans après le dernier contact</li>
                <li>• <strong>Clients :</strong> 10 ans après la fin du contrat (obligations comptables)</li>
                <li>• <strong>Cookies :</strong> 13 mois maximum</li>
                <li>• <strong>Données de navigation :</strong> 25 mois</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Exercer vos droits
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 mb-4">
                Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité, contactez-nous :
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">contact@sqava.fr</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700">+33 7 68 17 60 68</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Nous nous engageons à répondre à votre demande dans un délai d'un mois.
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

export default PrivacyPolicy;