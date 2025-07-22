


import { useState } from 'react';

export const Footer = () => {
  const [showMentionsLegales, setShowMentionsLegales] = useState(false);
  const [showPolitiqueConfidentialite, setShowPolitiqueConfidentialite] = useState(false);

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
                      <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src={`${import.meta.env.BASE_URL}logo_Asso.png`} alt="Logo L'Ordre du Nautilus" className="h-8 w-8 rounded-full" />
            <span className="font-bold text-xl">L'Ordre du Nautilus</span>
          </div>

          <div className="flex space-x-8 text-sm text-gray-300">
            <button
              onClick={() => setShowMentionsLegales(true)}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Mentions légales
            </button>
            <button
              onClick={() => setShowPolitiqueConfidentialite(true)}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© 2025 L'Ordre du Nautilus. Guillaume Linéatte. Tous droits réservés.</p>
        </div>
      </div>

      {/* Modal Mentions Légales */}
      {showMentionsLegales && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowMentionsLegales(false)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 shadow-2xl border border-gray-700/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-gray-400 rounded-full"></div>
                <h1 className="text-3xl font-bold text-white">Mentions légales</h1>
              </div>
              <button
                onClick={() => setShowMentionsLegales(false)}
                className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center text-white hover:text-gray-200 transition-all duration-200"
              >
                ✕
              </button>
            </div>

            <div className="space-y-8 text-sm">
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                <h2 className="text-xl font-semibold mb-4 text-gray-200 flex items-center">
                  <span className="w-6 h-6 bg-gray-400 rounded-full mr-3 flex items-center justify-center text-xs font-bold">1</span>
                  Éditeur du site
                </h2>
                <p className="text-blue-100 leading-relaxed">
                  Le présent site est édité par <strong>Guillaume Linéatte</strong>, personne physique.<br />
                  <strong>Nom :</strong> Guillaume Linéatte<br />
                  <strong>E-mail :</strong> lineatteguillaume@gmail.com<br />
                  <strong>Directeur de la publication :</strong> Guillaume Linéatte
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                <h2 className="text-xl font-semibold mb-4 text-gray-200 flex items-center">
                  <span className="w-6 h-6 bg-gray-400 rounded-full mr-3 flex items-center justify-center text-xs font-bold">2</span>
                  Hébergeur
                </h2>
                <p className="text-gray-100 leading-relaxed">
                  Le site est hébergé par :<br />
                  <strong>OVH SAS</strong><br />
                  2 rue Kellermann<br />
                  59100 Roubaix – France<br />
                  Téléphone : 1007<br />
                  Site web : <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.ovh.com</a>
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                <h2 className="text-xl font-semibold mb-4 text-gray-200 flex items-center">
                  <span className="w-6 h-6 bg-gray-400 rounded-full mr-3 flex items-center justify-center text-xs font-bold">3</span>
                  Nom du site
                </h2>
                <p className="text-gray-100 leading-relaxed">
                  <strong>L'Ordre du Nautilus</strong><br />
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site,
                  quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l'auteur.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                <h2 className="text-xl font-semibold mb-4 text-gray-200 flex items-center">
                  <span className="w-6 h-6 bg-gray-400 rounded-full mr-3 flex items-center justify-center text-xs font-bold">4</span>
                  Propriété intellectuelle
                </h2>
                <p className="text-gray-100 leading-relaxed">
                  Le contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Guillaume Linéatte, sauf mention contraire.<br />
                  Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle,
                  de ces différents éléments est strictement interdite sans l'accord préalable de l'auteur.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                <h2 className="text-xl font-semibold mb-4 text-gray-200 flex items-center">
                  <span className="w-6 h-6 bg-gray-400 rounded-full mr-3 flex items-center justify-center text-xs font-bold">5</span>
                  Données personnelles
                </h2>
                <p className="text-gray-100 leading-relaxed">
                  Ce site ne collecte aucune donnée personnelle sans le consentement des utilisateurs.<br />
                  Si des données sont collectées via formulaire (contact, newsletter, etc.), elles sont traitées dans le respect du
                  <strong> Règlement Général sur la Protection des Données (RGPD)</strong>.<br />
                  Conformément à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification et de suppression de vos données.<br />

                </p>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                <h2 className="text-xl font-semibold mb-4 text-gray-200 flex items-center">
                  <span className="w-6 h-6 bg-gray-400 rounded-full mr-3 flex items-center justify-center text-xs font-bold">6</span>
                  Cookies
                </h2>
                <p className="text-gray-100 leading-relaxed">
                  Le site peut utiliser des cookies pour améliorer l'expérience de navigation ou à des fins de statistiques.<br />
                  L'utilisateur peut configurer son navigateur pour refuser les cookies.<br />
                  En continuant à naviguer sur le site, l'utilisateur accepte l'utilisation des cookies.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                <h2 className="text-xl font-semibold mb-4 text-gray-200 flex items-center">
                  <span className="w-6 h-6 bg-gray-400 rounded-full mr-3 flex items-center justify-center text-xs font-bold">7</span>
                  Responsabilité
                </h2>
                <p className="text-gray-100 leading-relaxed">
                  L'éditeur du site décline toute responsabilité en cas d'erreur, d'interruption, de dysfonctionnement ou d'indisponibilité du site.<br />
                  L'éditeur se réserve le droit de modifier à tout moment le contenu du site sans préavis.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
                <h2 className="text-xl font-semibold mb-4 text-gray-200 flex items-center">
                  <span className="w-6 h-6 bg-gray-400 rounded-full mr-3 flex items-center justify-center text-xs font-bold">8</span>
                  Droit applicable
                </h2>
                <p className="text-gray-100 leading-relaxed">
                  Le présent site est régi par le droit français.<br />
                  En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Politique de Confidentialité */}
      {showPolitiqueConfidentialite && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowPolitiqueConfidentialite(false)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-8 shadow-2xl border border-gray-700/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-8 bg-gray-400 rounded-full"></div>
                <h1 className="text-3xl font-bold text-white">Politique de confidentialité</h1>
              </div>
              <button
                onClick={() => setShowPolitiqueConfidentialite(false)}
                className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center text-white hover:text-gray-200 transition-all duration-200"
              >
                ✕
              </button>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/20">
              <p className="text-gray-100 leading-relaxed text-sm">
                Le site L'Ordre du Nautilus, édité par Guillaume Linéatte, respecte la vie privée de ses utilisateurs et s'engage à protéger leurs données personnelles conformément au Règlement Général sur la Protection des Données (RGPD). Les données collectées via le formulaire de contact ou d'éventuelles fonctionnalités (comme une newsletter ou des outils de statistiques) sont utilisées uniquement pour répondre aux demandes, améliorer le site ou communiquer avec les utilisateurs, et ne sont jamais vendues ni transmises à des tiers sans consentement. Les informations sont conservées pour une durée limitée (au maximum 12 mois pour les messages, ou jusqu'au désabonnement pour une newsletter) et sont hébergées de manière sécurisée chez OVH. L'utilisateur dispose à tout moment d'un droit d'accès, de rectification, de suppression, d'opposition ou de portabilité de ses données, en écrivant à l'adresse e-mail de contact indiquée sur le site. L'utilisation de cookies est minimale et soumise à votre consentement, modifiable à tout moment. En continuant à naviguer, vous acceptez cette politique de confidentialité.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
