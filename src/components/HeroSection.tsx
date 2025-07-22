
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}banner.jpg)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-700/70"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Explorez les profondeurs du TCG avec
          <br />
                      <span className="text-blue-300">L'Ordre du Nautilus</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-blue-100"
        >
          Rejoignez notre communauté passionnée de jeux de cartes !
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
                      <Button
            onClick={() => {
              const targetElement = document.getElementById('apropos');
              if (targetElement) {
                const navHeight = 64;
                const targetPosition = targetElement.offsetTop - navHeight;
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-200"
          >
            En savoir plus
          </Button>
        </motion.div>
      </div>

    </section>
  );
};
