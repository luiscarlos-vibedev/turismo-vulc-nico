import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Calendar, Tag, ChevronRight, Filter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Category = 'Todos' | 'Cultural' | 'Rural & Gastronômico' | 'Bem-Estar' | 'Aventura' | 'Transfers';

interface Tour {
  id: string;
  title: string;
  category: Category;
  duration: string;
  availability: string;
  price: string;
  imageUrl: string;
  description?: string;
}

const TOURS_DATA: Tour[] = [
  // --- CULTURAL ---
  {
    id: 'tour-cultural',
    title: 'Tour Cultural',
    category: 'Cultural',
    duration: 'Aprox 5h',
    availability: 'Qua, Qui, Sex e Sab.',
    price: 'A partir de R$ 385,00',
    imageUrl: 'https://i.postimg.cc/5Nk44kVT/14.webp',
    description: 'Valor por veículo para até 4 pessoas'
  },
  {
    id: 'city-tour',
    title: 'City Tour em Poços de Caldas',
    category: 'Cultural',
    duration: 'Aprox 5h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 400,00',
    imageUrl: 'https://i.postimg.cc/y89wMfYh/2-1.webp',
    description: 'Valor por veículo para até 4 pessoas'
  },
  {
    id: 'passeio-a-pe',
    title: 'Passeio a pé + Degustação de Queijos',
    category: 'Cultural',
    duration: 'Aprox 5h',
    availability: 'Qua, Qui, Sex e Sab.',
    price: 'A partir de R$ 70,00',
    imageUrl: 'https://i.postimg.cc/5NQGzPzm/99.webp',
    description: 'Valor por pessoa'
  },
  {
    id: 'caldas',
    title: 'Caldas',
    category: 'Cultural',
    duration: 'Aprox 4 h e 30 min',
    availability: 'Seg, Ter, Qua, Qui, Sex.',
    price: 'A partir de R$ 499,00',
    imageUrl: 'https://i.postimg.cc/4xQTKLCq/33-1.webp',
    description: 'Valor por veículo para até 4 pessoas'
  },

  // --- RURAL & GASTRONÔMICO ---
  {
    id: 'fazenda-santa-maria',
    title: 'Fazenda Santa Maria',
    category: 'Rural & Gastronômico',
    duration: 'Aprox 4 h',
    availability: 'Sáb e Dom.',
    price: 'A partir de R$ 435,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/16.png',
    description: 'Valor por veículo para até 4 pessoas'
  },
  {
    id: 'casa-geraldo',
    title: 'Casa Geraldo + Delícias da Kaká',
    category: 'Rural & Gastronômico',
    duration: 'Aprox 5 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 554,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/24-1.png',
    description: 'Valor por veículo para até 4 pessoas'
  },
  {
    id: 'stella-valentino',
    title: 'Vinícola Stella Valentino',
    category: 'Rural & Gastronômico',
    duration: 'Aprox 4 h e 30 min',
    availability: 'Todos os dias',
    price: 'A partir de R$ 554,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/124.png',
    description: 'Valor por veículo para até 4 pessoas'
  },
  {
    id: 'cachaca-amago',
    title: 'Cachaça Âmago + Restaurante Fazenda do Osório',
    category: 'Rural & Gastronômico',
    duration: 'Aprox 5 h',
    availability: 'Sáb e Dom.',
    price: 'A partir de R$ 455,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/1735157871676c686fe3436-107.png',
    description: 'Valor por veículo para até 4 pessoas'
  },
  {
    id: 'toca-kanya',
    title: 'Toca do Kaynã',
    category: 'Rural & Gastronômico',
    duration: 'Aprox 5 h',
    availability: 'Ter, Qua, Qui, Sex, Sáb e Dom.',
    price: 'A partir de R$ 624,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/76-1.png',
    description: 'Valor por veículo para até 4 pessoas'
  },
  {
    id: 'leiteria-santa-paula',
    title: 'Leiteria Santa Paula',
    category: 'Rural & Gastronômico',
    duration: 'Aprox 4 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 547,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/65.png',
    description: 'Valor por veículo para até 4 pessoas'
  },
  {
    id: 'laticinio-montezuma',
    title: 'Laticínio Montezuma',
    category: 'Rural & Gastronômico',
    duration: 'Aprox 5 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 535,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/77.png',
    description: 'Valor por veículo para até 4 pessoas'
  },
  {
    id: 'fazenda-irarema',
    title: 'Fazenda Irarema',
    category: 'Rural & Gastronômico',
    duration: 'Aprox 4 h',
    availability: 'Sáb e Dom.',
    price: 'A partir de R$ 435,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/39-1.png',
    description: 'Valor por veículo para até 4 pessoas'
  },

  // --- BEM-ESTAR ---
  {
    id: 'relax-total',
    title: 'Relax Total – Yoga + Banho de imersão em Pocinhos do Rio Verde + Café',
    category: 'Bem-Estar',
    duration: 'Aprox 4 h',
    availability: 'Qua, Qui, Sex, Sáb e Dom.',
    price: 'A partir de R$ 499,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/216-1.png',
    description: 'Valor por veículo para até 4 pessoas'
  },

  // --- AVENTURA ---
  {
    id: 'sup-adventure',
    title: 'Standup Paddle',
    category: 'Aventura',
    duration: 'Aprox 1 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 139,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/180.png',
    description: 'Valor por pessoa'
  },
  {
    id: 'caiaque',
    title: 'Caiaque',
    category: 'Aventura',
    duration: 'Aprox 1 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 139,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/172.png',
    description: 'Valor por pessoa'
  },
  {
    id: 'cachoeira-7-quedas',
    title: 'Cachoeira 7 Quedas Mineira',
    category: 'Aventura',
    duration: 'Aprox 6 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 139,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/173.png',
    description: 'Valor por pessoa'
  },
  {
    id: 'trilha-lajeado',
    title: 'Trilha Lajeado das Orquíedeas',
    category: 'Aventura',
    duration: 'Aprox 5 h e 30 min',
    availability: 'Todos os dias',
    price: 'A partir de R$ 125,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/174.png',
    description: 'Valor por pessoa'
  },
  {
    id: 'trilho-trem',
    title: 'Travessia Trilho do Trem',
    category: 'Aventura',
    duration: 'Aprox 6 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 219,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/196.png',
    description: 'Valor por pessoa'
  },
  {
    id: 'coqueiro-torto',
    title: 'Cachoeira do Coqueiro Torto',
    category: 'Aventura',
    duration: 'Aprox 2 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 239,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/176.png',
    description: 'Valor por pessoa'
  },
  {
    id: 'rafting',
    title: 'Rafting Corredeiras do Rio Pardo',
    category: 'Aventura',
    duration: 'Aprox 5 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 150,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/178.png',
    description: 'Valor por pessoa'
  },
  {
    id: 'trilha-pedra-branca',
    title: 'Trilha Pedra Branca com Cajarana',
    category: 'Aventura',
    duration: 'Aprox 5 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 120,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/209-1.png',
    description: 'Valor por pessoa'
  },

  // --- TRANSFERS ---
  {
    id: 'transfer-viracopos-4',
    title: 'Transfer Viracopos x Poços de Caldas - Carro até 4 pax',
    category: 'Transfers',
    duration: 'Aprox 2 h e 30 min',
    availability: 'Todos os dias',
    price: 'A partir de R$ 624,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/190cbdd7-8848-4af6-8b34-4c7a5d9d22d1-e1748178653197.jpg',
    description: 'Ida ou Volta'
  },
  {
    id: 'transfer-viracopos-6',
    title: 'Transfer Viracopos x Poços de Caldas - Carro até 6 pax',
    category: 'Transfers',
    duration: 'Aprox 2 h e 30 min',
    availability: 'Todos os dias',
    price: 'A partir de R$ 910,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/17346570776764c4356610b-spin.png',
    description: 'Ida ou Volta'
  },
  {
    id: 'transfer-viracopos-van-15',
    title: 'Transfer Viracopos x Poços de Caldas - Van de 15 lugares',
    category: 'Transfers',
    duration: 'Aprox 2 h e 30 min',
    availability: 'Todos os dias',
    price: 'A partir de R$ 1.300,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/1-1.jpg',
    description: 'Ida ou Volta'
  },
  {
    id: 'transfer-viracopos-van-18',
    title: 'Transfer Viracopos x Poços de Caldas - Van de 18 lugares',
    category: 'Transfers',
    duration: 'Aprox 2 h e 30 min',
    availability: 'Todos os dias',
    price: 'A partir de R$ 1.560,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/okok.png',
    description: 'Ida ou Volta'
  },
  {
    id: 'transfer-guarulhos-4',
    title: 'Transfer Guarulhos x Poços de Caldas - Carro até 4 pax',
    category: 'Transfers',
    duration: 'Aprox 4 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 910,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/190cbdd7-8848-4af6-8b34-4c7a5d9d22d1-e1748178653197.jpg',
    description: 'Ida ou Volta'
  },
  {
    id: 'transfer-guarulhos-6',
    title: 'Transfer Guarulhos x Poços de Caldas - Carro até 6 pax',
    category: 'Transfers',
    duration: 'Aprox 4 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 1.300,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/17346570776764c4356610b-spin.png',
    description: 'Ida ou Volta'
  },
  {
    id: 'transfer-guarulhos-van-15',
    title: 'Transfer Guarulhos x Poços de Caldas - Van de 15 lugares',
    category: 'Transfers',
    duration: 'Aprox 4 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 1.820,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/1-1.jpg',
    description: 'Ida ou Volta'
  },
  {
    id: 'transfer-guarulhos-van-18',
    title: 'Transfer Guarulhos x Poços de Caldas - Van de 18 lugares',
    category: 'Transfers',
    duration: 'Aprox 4 h',
    availability: 'Todos os dias',
    price: 'A partir de R$ 2.080,00',
    imageUrl: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/okok.png',
    description: 'Ida ou Volta'
  }
];

const CATEGORIES: Category[] = ['Todos', 'Cultural', 'Rural & Gastronômico', 'Bem-Estar', 'Aventura', 'Transfers'];

const Tours = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  const filteredTours = activeCategory === 'Todos' 
    ? TOURS_DATA 
    : TOURS_DATA.filter(tour => tour.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAFBF6]">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-imperial/60 z-10" />
        <img 
          src="https://turismovulcanico.tur.br/wp-content/uploads/2025/05/banner-meio.png" 
          alt="Banner Passeios" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-2 text-gold font-bold uppercase tracking-widest text-[10px] mb-6"
          >
            <span>Início</span>
            <ChevronRight size={14} />
            <span className="text-white">Nossas Experiências</span>
          </motion.nav>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl text-white font-serif mb-4"
          >
            Experiências Vulcânicas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 max-w-2xl mx-auto font-sans"
          >
            Selecione a categoria que mais combina com seu estilo de viagem e descubra roteiros exclusivos em Poços de Caldas.
          </motion.p>
        </div>
      </section>

      {/* --- FILTERS --- */}
      <section className="z-40 bg-[#FAFBF6]/95 backdrop-blur-sm border-b border-gray-100 py-6">
        <div className="container mx-auto px-6 overflow-x-auto scrollbar-hide">
          <div className="flex items-center space-x-4 min-w-max pb-2">
            <div className="flex items-center space-x-2 text-imperial mr-4 border-r border-gray-200 pr-4">
              <Filter size={18} />
              <span className="font-bold opacity-60 uppercase tracking-tighter text-xs">Filtrar:</span>
            </div>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-bold uppercase tracking-tighter text-xs transition-all duration-300 border ${
                  activeCategory === cat 
                  ? 'bg-terracotta text-white border-terracotta shadow-lg' 
                  : 'bg-white text-imperial border-gray-200 hover:border-terracotta hover:text-terracotta'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- GRID --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredTours.map((tour) => (
                <motion.div
                  key={tour.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] group flex flex-col border border-gray-100/50"
                >
                  {/* Image Slot - Proporção exata do original */}
                  <Link to={`/passeios/${tour.id}`} className="relative aspect-[496/329] overflow-hidden block">
                    <img 
                      src={tour.imageUrl} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-md text-imperial px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center space-x-1 shadow-sm">
                        <Tag size={10} className="text-terracotta" />
                        <span>{tour.category}</span>
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-imperial px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Ver Detalhes
                      </span>
                    </div>
                  </Link>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <Link to={`/passeios/${tour.id}`}>
                      <h3 className="text-xl text-imperial mb-1 font-bold font-serif group-hover:text-terracotta transition-colors">
                        {tour.title}
                      </h3>
                    </Link>
                    
                    {tour.description ? (
                      <p className="text-sm text-gray-400 mb-6 font-sans">
                        {tour.description}
                      </p>
                    ) : (
                      <div className="h-6 mb-6" /> /* Spacer if no description */
                    )}
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3 text-imperial font-bold text-sm">
                        <Clock size={18} className="text-imperial" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-imperial font-bold text-sm">
                        <Calendar size={18} className="text-imperial" />
                        <span>{tour.availability}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-imperial">
                        <img src="https://cdn-icons-png.flaticon.com/128/2331/2331713.png" alt="Preço" className="w-5 h-5 opacity-80" />
                        <span className="opacity-70">A partir de</span>
                        <span className="font-black text-emerald-800 text-lg">{tour.price.replace('A partir de ', '')}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <Link 
                        to={`/passeios/${tour.id}`}
                        className="bg-white text-[#054128] border-2 border-[#054128] py-3 rounded-lg font-bold text-xs text-center hover:bg-emerald-50 transition-all uppercase tracking-widest"
                      >
                        Detalhes
                      </Link>
                      <a 
                        href={`https://wa.me/5535984341702?text=Olá! Gostaria de consultar disponibilidade para o passeio: ${tour.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#054128] text-white py-3 rounded-lg font-bold text-xs text-center hover:bg-emerald-900 transition-all shadow-md uppercase tracking-widest"
                      >
                        Reservar
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
