import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO_URL } from '../constants/assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicial', path: '/', isHash: true },
    { name: 'Quem Somos', path: '/quem-somos', isHash: false },
    { name: 'Região', path: '/regiao', isHash: false },
    { name: 'Passeios', path: '/passeios', isHash: false },
    { name: 'Contato', path: '/contato', isHash: false },
  ];

  const handleNavClick = (path: string, isHash: boolean) => {
    setIsOpen(false);
    if (isHash && isHome) {
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 main-header ${scrolled ? 'glass-header py-3 shadow-lg' : 'header-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="relative z-10 block" onClick={() => window.scrollTo(0, 0)}>
          <img src={LOGO_URL} alt="Turismo Vulcânico" className={`h-14 md:h-18 transition-all duration-500 hover:scale-105 ${scrolled || !isHome ? 'brightness-100' : 'brightness-0 invert'}`} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              onClick={() => handleNavClick(item.path, item.isHash)}
              className={`transition-colors duration-500 font-medium text-sm border-b-2 border-transparent hover:border-gold uppercase tracking-widest relative group ${scrolled || !isHome ? 'text-imperial' : 'text-white'}`}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/5535984341702" 
            className="bg-terracotta text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-500 luxury-shadow uppercase tracking-tighter text-xs font-bold"
          >
            Reservar Agora
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden ${scrolled || !isHome ? 'text-imperial' : 'text-white'}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-imperial border-b border-gold/20 p-6 flex flex-col space-y-4"
          >
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-white hover:text-gold transition-colors font-medium text-lg border-b border-white/5 pb-2"
                onClick={() => handleNavClick(item.path, item.isHash)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/5535984341702" 
              className="bg-terracotta text-white px-6 py-4 rounded-xl text-center font-bold uppercase"
              onClick={() => setIsOpen(false)}
            >
              Falar com Agente
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
