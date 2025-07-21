
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BsFacebook, BsInstagram, BsDiscord } from 'react-icons/bs';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-900 text-white">
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
              href="https://www.facebook.com/profile.php?id=100094749211452&sk=reels_tab" target="_blank"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center group"
            >
                              <div className="p-4 rounded-full mb-2 transition-colors">
                  <BsFacebook className="h-6 w-6 text-[#1877F2]" />
                </div>
              <span className="text-sm">Facebook</span>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/lordredunautilus/" target="_blank"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center group"
            >
                              <div className="p-4 rounded-full mb-2 transition-colors">
                  <BsInstagram className="h-6 w-6 text-[#1DA1F2]" />
                </div>
              <span className="text-sm">Instagram</span>
            </motion.a>

            <motion.a
              href="https://discord.com/invite/TzeZVMJVFG" target="_blank"
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center group"
            >
                              <div className="p-4 rounded-full mb-2 transition-colors">
                  <BsDiscord className="h-6 w-6 text-[#5865F2]" />
                </div>
              <span className="text-sm">Discord</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
