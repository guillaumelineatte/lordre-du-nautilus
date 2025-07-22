
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
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
    { name: 'Événements', href: '#evenements' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={`${import.meta.env.BASE_URL}logo_Asso.png`} alt="Logo L'Ordre du Nautilus" className="h-8 w-8 rounded-full"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            <span className="font-bold text-xl text-gray-900 hidden sm:block">L'Ordre du Nautilus</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full">
              <a href="https://discord.gg/TzeZVMJVFG" target="_blank">Rejoindre</a>
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
                        className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium text-left py-2 text-lg"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-col space-y-3 pt-6 border-t">
                    <Button asChild className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full w-full">
                      <a href="/rejoindre">Rejoindre</a>
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
