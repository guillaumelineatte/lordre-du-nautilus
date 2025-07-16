
import { Triangle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Triangle className="h-6 w-6 text-teal-400" />
            <span className="font-bold text-xl">L'Ordre du Nautilus</span>
          </div>
          
          <div className="flex space-x-8 text-sm text-gray-300">
            <a href="#" className="hover:text-teal-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© 2024 L'Ordre du Nautilus. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
