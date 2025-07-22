
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const galleryImages = [
     {
       title: "Tournoi Win-A-Mat Yu-Gi-Oh! au Warpzone",
       image: `${import.meta.env.BASE_URL}assets/gallery/photoWarp2.jpg`
     },
     {
       title: "Tournoi Yu-Gi-Oh! au Warpzone",
       image: `${import.meta.env.BASE_URL}assets/gallery/photoWarp.jpg`
     },
    // {
    //   title: "Conférence sur la conservation des océans",
    //   image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // },
    // {
    //   title: "Écosystème de récifs coralliens",
    //   image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // },
    // {
    //   title: "Plongée en eaux profondes",
    //   image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // },
    // {
    //   title: "Formation de plongeurs",
    //   image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // },
    // {
    //   title: "Exploration sous-marine",
    //   image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // },
    // {
    //   title: "Conservation marine",
    //   image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // },
    // {
    //   title: "Équipement de plongée",
    //   image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // },
    // {
    //   title: "Écosystème marin",
    //   image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // },
    // {
    //   title: "Formation théorique",
    //   image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // },
    // {
    //   title: "Sortie en mer",
    //   image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    // }
  ];

  return (
    <section id="galerie" ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Galerie</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(showAll ? galleryImages : galleryImages.slice(0, 8)).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold text-sm">{item.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!showAll && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <button
                onClick={() => setShowAll(true)}
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 transform hover:scale-105"
              >
                Voir plus de photos
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Gallery item"
            className="max-w-4xl max-h-[80vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
};
