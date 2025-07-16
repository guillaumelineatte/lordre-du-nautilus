
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Triangle, Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = 64;
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Activités', href: '#activites' },
    { name: 'Adhésion', href: '#adhesion' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Triangle className="h-6 w-6 text-teal-600" />
            <span className="font-bold text-xl text-gray-900 hidden sm:block">L'Ordre du Nautilus</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full">
              Rejoindre
            </Button>
            <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50 rounded-full">
              Faire un don
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium text-left py-2 text-lg"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex flex-col space-y-3 pt-6 border-t">
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full w-full">
                      Rejoindre
                    </Button>
                    <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50 rounded-full w-full py-3">
                      Faire un don
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
