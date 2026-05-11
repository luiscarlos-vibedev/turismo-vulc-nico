import React from 'react';
import { motion } from 'motion/react';
import { 
  Coffee, 
  Wine, 
  Droplet, 
  Mountain, 
  Waves, 
  LandPlot, 
  ChevronRight,
  Sun,
  Wind,
  Layers
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MUNICIPALITIES = [
  "Águas da Prata (SP)",
  "Andradas (MG)",
  "Botelhos (MG)",
  "Caldas (MG)",
  "Campestre (MG)",
  "Espírito Santo do Pinhal (SP)",
  "Ibitiúra de Minas (MG)",
  "Santa Rita de Caldas (MG)",
  "Santo Antônio do Jardim (SP)",
  "São João da Boa Vista (SP)",
  "São Roque da Fartura (SP)",
  "São Sebastião da Grama (SP)"
];

const SectionHeading = ({ subtitle, title, light = false, className = "mb-16", noSpacer = false }) => (
  <div className={`text-center ${className}`}>
    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-gold uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold mb-1 block leading-none">
      {subtitle}
    </motion.span>
    <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className={`text-4xl md:text-5xl font-serif leading-[1.1] mt-4 ${light ? 'text-white' : 'text-imperial'}`}>
      {title}
    </motion.h2>
    {!noSpacer && <div className="w-20 h-1 bg-gold mt-6 mx-auto" />}
  </div>
);

const Region = () => {
  return (
    <div className="min-h-screen bg-terracotta selection:bg-gold selection:text-white">
      <Navbar />

      {/* 1. Hero Section (Impacto Geológico) */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden pt-20">
        <img 
          src="https://i.imgur.com/cvqwyuI.jpeg"
          alt="Região Vulcânica"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
          style={{ filter: 'brightness(0.5)' }}
        />
        <div 
          className="absolute inset-0 z-10" 
          style={{ backgroundColor: 'rgba(26, 36, 33, 0.4)' }}
        />
        
        <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4 block"
          >
            Região Vulcânica
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl text-white font-serif font-black leading-tight mb-6"
          >
            O Coração da Caldeira: <br />
            Onde a Terra Ganha Vida.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto font-sans"
          >
            Explore um destino singular moldado pelo fogo há 80 milhões de anos.
          </motion.p>
        </div>
      </section>

      {/* 2. O Solo da Prosperidade (Seção de Terroir) */}
      <section className="py-24 bg-white text-imperial">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Ribeirão das Neves & Mantiqueira</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-imperial">O Solo da Prosperidade</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-sans">
              O fenômeno da <strong className="text-gold">Intrusão Alcalina</strong> transformou esta região em um dos terroirs mais cobiçados do Brasil. O solo vulcânico, rico em minerais raros, confere uma identidade única a tudo o que brota desta terra.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Café */}
            <motion.div 
              whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
              viewport={{ once: true }}
              className="bg-terracotta text-white luxury-shadow rounded-sm flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 p-10"
            >
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform duration-500">
                <Coffee className="text-gold" size={28} />
              </div>
              <h3 className="text-xl mb-4 font-serif uppercase tracking-wider text-white">Cafés Especiais</h3>
              <p className="text-white/80 font-sans leading-relaxed text-sm">
                A combinação de altitude e solo mineral resulta em grãos com doçura natural e acidez vibrante, premiados nos maiores concursos internacionais.
              </p>
            </motion.div>

            {/* Vinhos */}
            <motion.div 
              whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-terracotta text-white luxury-shadow rounded-sm flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 p-10"
            >
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform duration-500">
                <Wine className="text-gold" size={28} />
              </div>
              <h3 className="text-xl mb-4 font-serif uppercase tracking-wider text-white">Vinhos Vulcânicos</h3>
              <p className="text-white/80 font-sans leading-relaxed text-sm">
                A técnica da dupla poda somada ao terroir vulcânico permite a elaboração de vinhos estruturados, elegantes e com mineralidade única.
              </p>
            </motion.div>

            {/* Azeites */}
            <motion.div 
              whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-terracotta text-white luxury-shadow rounded-sm flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 p-10"
            >
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform duration-500">
                <Droplet className="text-gold" size={28} />
              </div>
              <h3 className="text-xl mb-4 font-serif uppercase tracking-wider text-white">Azeites de Altitude</h3>
              <p className="text-white/80 font-sans leading-relaxed text-sm">
                Nossas oliveiras extraem do solo vulcânico a complexidade necessária para produzir azeites extravirgens de baixíssima acidez e frescor inigualável.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mapa das 12 Joias (Lista Interativa) */}
      <section className="py-24 bg-terracotta text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <LandPlot className="w-full h-full scale-[2]" />
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
              <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Distribuição Geográfica</span>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight italic">Cidades <br /><span className="text-gold not-italic">Integradas.</span></h2>
              <p className="text-white/80 font-sans leading-relaxed">
                Cada um desses municípios compartilha a herança geológica da Mantiqueira, oferecendo paisagens exuberantes e uma cultura de hospitalidade sem igual.
              </p>
              
              {/* Highlight Card: Poços de Caldas */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="mt-12 bg-black/20 border border-gold/30 p-8 rounded-2xl luxury-shadow shadow-2xl"
              >
                <div className="flex items-center space-x-4 mb-6 text-gold">
                  <Mountain size={32} />
                  <h4 className="text-2xl font-serif uppercase tracking-tighter">poços de caldas</h4>
                </div>
                <div className="space-y-4 font-sans text-sm">
                  <div className="flex justify-between border-b border-gold/10 pb-2">
                    <span className="text-white/50 uppercase tracking-tighter">Altitude Máxima</span>
                    <span className="font-bold">1.686 metros</span>
                  </div>
                  <div className="flex justify-between border-b border-gold/10 pb-2">
                    <span className="text-white/50 uppercase tracking-tighter">Ativo Geológico</span>
                    <span className="font-bold">Águas Sulfurosas</span>
                  </div>
                  <div className="flex justify-between border-b border-gold/10 pb-2">
                    <span className="text-white/50 uppercase tracking-tighter">Especialidade</span>
                    <span className="font-bold">Termalismo e Gastronomia</span>
                  </div>
                </div>
                <p className="mt-6 text-white/70 italic text-sm leading-relaxed">
                  "O epicentro da caldeira vulcânica, onde a história se encontra com o poder curativo das águas."
                </p>
              </motion.div>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-12 gap-y-6 w-full">
              {MUNICIPALITIES.map((city, idx) => (
                <motion.div 
                  key={city}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 group cursor-default"
                >
                  <div className="w-2 h-2 bg-gold rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-lg font-sans font-medium text-white/90 group-hover:text-gold transition-colors tracking-tight">
                    {city}
                  </span>
                </motion.div>
              ))}
              
              <div className="sm:col-span-2 mt-12 p-8 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white/20 transition-colors">
                <div className="flex items-center space-x-6">
                  <Wind className="text-gold" size={40} />
                  <div>
                    <h5 className="text-xl font-serif">Ar puro e Clima de Montanha</h5>
                    <p className="text-white/40 text-sm font-sans uppercase tracking-[0.1em]">Experiências em toda a Região Vulcânica</p>
                  </div>
                </div>
                <ChevronRight className="text-gold group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. O Legado Cultural (Seção Imersiva) */}
      <section className="relative py-48 w-full flex items-center overflow-hidden">
        <img 
          src="https://turismovulcanico.tur.br/wp-content/uploads/2025/05/1.jpg"
          alt="Patrimônio Regional"
          loading="lazy"
          width="1920"
          height="1080"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terracotta via-transparent to-terracotta" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <SectionHeading 
            subtitle="Nosso Patrimônio" 
            title="O Legado Cultural" 
            light 
            noSpacer
          />
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-2xl md:text-4xl font-serif text-gold-light italic leading-relaxed"
          >
            "Hospitalidade mineira e tradições vibrantes que preservam um patrimônio singular."
          </motion.p>
          <div className="mt-16 flex flex-wrap justify-center gap-12">
            {[
              { icon: <Layers size={24} />, label: "Arquitetura" },
              { icon: <Sun size={24} />, label: "Festas Populares" },
              { icon: <Waves size={24} />, label: "Artesanato" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <div className="text-gold p-4 border border-gold/30 rounded-full">{item.icon}</div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Region;
