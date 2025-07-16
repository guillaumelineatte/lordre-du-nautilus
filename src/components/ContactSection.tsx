
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-12">Contact</h2>
          
          <div className="flex justify-center space-x-8 mb-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center group"
            >
              <div className="bg-blue-600 p-4 rounded-full mb-2 group-hover:bg-blue-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </div>
              <span className="text-sm">Facebook</span>
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center group"
            >
              <div className="bg-blue-400 p-4 rounded-full mb-2 group-hover:bg-blue-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </div>
              <span className="text-sm">Twitter</span>
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center group"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full mb-2 group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                <Instagram className="h-6 w-6" />
              </div>
              <span className="text-sm">Instagram</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
