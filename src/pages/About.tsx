import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-[#FAFBF6] text-[#2D2926] font-sans">
      <Navbar />

      {/* --- HERO --- */}
      <section className="relative h-[72vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://i.imgur.com/hTsUo2M.jpeg"
          alt="Turismo Vulcânico Hero"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-[48px] text-white font-serif font-black leading-tight max-w-3xl mx-auto drop-shadow-2xl"
          >
            Turismo Vulcânico: Uma jornada única em Poços de Caldas e região.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-base md:text-lg font-sans mt-6 max-w-2xl mx-auto drop-shadow-lg leading-[1.6]"
          >
            Vivencie experiências autênticas, conectadas com a natureza, a história e a essência da nossa terra.
          </motion.p>
        </div>
      </section>

      {/* --- SEÇÃO 01: A NAATIVA --- */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="bg-white p-12 md:p-20 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-champagne text-gold rounded-full text-[10px] font-bold uppercase tracking-widest">
                O Manifesto
              </div>
              <h2 className="text-4xl md:text-5xl text-deep-green font-serif leading-tight font-black">
                Muito além do turismo, uma vivência transformadora.
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-sans italic">
                <p>
                  A marca <strong>Turismo Vulcânico</strong> nasceu do desejo de valorizar o patrimônio natural e cultural de <strong>Poços de Caldas</strong>, uma região marcada por sua <strong>origem geológica única</strong>. Formada por antigas atividades vulcânicas que deixaram como legado águas termais, rochas exuberantes e uma biodiversidade sem igual, nossa iniciativa convida você a ir além do tradicional.
                </p>
                <p>
                  Cada roteiro é planejado com carinho pela <strong>NAATIVA Turismo</strong> para proporcionar experiências conscientes e responsáveis, despertando a curiosidade e o encantamento através do respeito às nossas raízes.
                </p>
              </div>
            </div>
            <div className="flex-1 relative group">
              <div className="absolute -inset-4 bg-gold/10 rounded-[2rem] blur-2xl group-hover:bg-gold/20 transition-all duration-700" />
              <img 
                src="https://turismovulcanico.tur.br/wp-content/uploads/2025/05/1.jpg" 
                alt="Exploração Técnica" 
                loading="lazy"
                width="800"
                height="1000"
                className="relative rounded-[2rem] shadow-2xl w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 02: VALORES --- */}
      <section className="py-24 bg-terracotta text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: BookOpen, 
                title: "Base Geológica", 
                desc: "Nossa expertise técnica sobre o vulcanismo regional traduz complexos geológicos em histórias fascinantes para nossos visitantes." 
              },
              { 
                icon: ShieldCheck, 
                title: "Compromisso Real", 
                desc: "Com guias credenciados e mais de uma década de experiência, garantimos que sua conexão com a natureza seja segura e profissional." 
              },
              { 
                icon: Star, 
                title: "Roteiros Imersivos", 
                desc: "Valorizamos o território e a cultura local, oferecendo acessos privilegiados que fogem do turismo de massa." 
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-serif text-white">{value.title}</h3>
                <p className="font-sans text-white/80 leading-relaxed max-w-xs">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BLOCO DA ESPECIALISTA --- */}
      <section className="py-32 bg-[#FAFBF6]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
            <div className="relative z-10 border-8 border-white shadow-2xl rounded-2xl overflow-hidden aspect-[3/4]">
              <img 
                src="https://turismovulcanico.tur.br/wp-content/uploads/2025/05/cropped-7fd820dc-c103-476e-9e69-22790e8f753d.jpg" 
                alt="Sharlene Antunes" 
                loading="lazy"
                width="600"
                height="800"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-deep-green text-white p-6 rounded-2xl shadow-xl z-20">
              <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1 italic">Condutora Especialista</p>
              <p className="font-serif text-xl border-l-2 border-gold pl-4 font-black">Sharlene Antunes</p>
            </div>
          </div>
          
          <div className="flex-[1.5] space-y-8">
            <SectionHeader subtitle="Condução Técnica" title="Conectando História, Natureza e Emoções" />
            <div className="space-y-6 text-lg text-gray-700 font-sans leading-relaxed">
              <p>
                Idealizada por <strong>Sharlene de Carvalho Morais</strong>, guia de turismo credenciada e apaixonada por Poços de Caldas, a <strong>NAATIVA Turismo</strong> une o conhecimento técnico à sensibilidade de quem vive e valoriza a região.
              </p>
              <p>
                Graduada em Marketing e pós-graduanda em Turismo, Hospitalidade e Gestão Pública, <strong>Sharlene</strong> acredita que o turismo deve ser uma ponte de educação e inspiração. Com ela, você não apenas visita um destino, mas compreende o cuidado com o meio ambiente e o fortalecimento das comunidades locais.
              </p>
              <div className="pt-6 flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-deep-green font-bold text-sm bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                  <ShieldCheck size={16} className="text-gold" />
                  <span>Cadastur: Guia Regional</span>
                </div>
                <div className="flex items-center space-x-2 text-deep-green font-bold text-sm bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                  <Star size={16} className="text-gold" />
                  <span>Especialista em Vulcanismo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-imperial leading-tight max-w-3xl mx-auto">
            Vivencie a história, sinta a natureza e leve na bagagem memórias inesquecíveis.
          </h2>
          <a 
            href="https://wa.me/5535984341702"
            className="inline-flex items-center space-x-3 bg-gold hover:bg-gold-light text-imperial px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-xl hover:-translate-y-1"
          >
            <span>Conversar no WhatsApp</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
};

const SectionHeader = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <div className="space-y-4">
    <div className="flex items-center space-x-3">
      <div className="w-8 h-[2px] bg-gold" />
      <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] italic">{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-serif text-imperial font-black leading-tight">{title}</h2>
  </div>
);

export default About;
