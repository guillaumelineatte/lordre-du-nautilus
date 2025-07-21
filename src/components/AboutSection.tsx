
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">À propos de nous</h2>
          <div className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            <p>
            L'Ordre du Nautilus est une association passionnée dédiée à l’univers des jeux de cartes à collectionner (TCG),
            tels que Magic: Yu-Gi-Oh!, Pokémon, Lorcana, One Piece Card Game, Altered et bien d’autres.
            Fondée par et pour les joueurs, notre objectif est de créer un espace convivial où débutants comme compétiteurs
            peuvent se rencontrer, échanger, s'améliorer et surtout, partager leur passion commune. Que vous soyez un
            vétéran des tournois ou que vous découvriez à peine votre premier deck, vous trouverez chez nous une communauté
            bienveillante, des événements réguliers, des conseils, et surtout, beaucoup de bonne humeur.
            Rejoignez-nous pour faire vivre l’esprit du jeu, du fair-play et de la stratégie !
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
