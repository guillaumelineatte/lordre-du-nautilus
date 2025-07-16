
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
              L'Ordre du Nautilus est une association dédiée à l'exploration et à la protection des écosystèmes marins. 
              Nous organisons des expéditions, des ateliers et des conférences pour sensibiliser le public à l'importance 
              de la biodiversité marine et promouvoir des actions de conservation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
