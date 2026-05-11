import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, Phone, Mail, ChevronRight, 
  ChevronLeft, ShieldCheck, HeartHandshake, Leaf,
  ChevronDown, MapPin, ExternalLink,
  CheckCircle, AlertCircle, Loader2, Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LOGO_URL } from '../constants/assets';

// --- Assets Data ---
const HERO_IMAGES = [
  { 
    url: "https://i.imgur.com/FCWHzW9.jpeg", 
    title: "Turismo Vulcânico: Vivendo emoções, criando memórias!",
    subtitle: "Viva o requinte arquitetônico de Poços de Caldas com roteiros exclusivos."
  },
  { 
    url: "https://i.imgur.com/hTsUo2M.jpeg", 
    title: "Histórias que o Tempo não Apagou",
    subtitle: "Explore os segredos da caldeira vulcânica com especialistas apaixonados."
  },
  { 
    url: "https://i.imgur.com/9hWL62k.png", 
    title: "O Sabor Autêntico da Vida no Campo",
    subtitle: "Conecte-se com as raízes mineiras em vivências rurais inesquecíveis."
  },
  { 
    url: "https://i.imgur.com/YCCMU3U.jpeg", 
    title: "Uma Jornada para os Seus Sentidos",
    subtitle: "Saboreie o melhor da produção local: cafés, vinhos e queijos premiados."
  },
  { 
    url: "https://i.imgur.com/SzXWDXP.jpeg", 
    title: "Sua Dose Diária de Adrenalina",
    subtitle: "Desafie seus limites no coração de um vulcão extinto."
  },
];

const GALLERY_IMAGES = [
  "https://turismovulcanico.tur.br/wp-content/uploads/2025/05/1.jpg",
  "https://turismovulcanico.tur.br/wp-content/uploads/2025/05/4.jpg",
  "https://turismovulcanico.tur.br/wp-content/uploads/2025/05/2.jpg",
  "https://turismovulcanico.tur.br/wp-content/uploads/2025/05/8.jpg",
  "https://turismovulcanico.tur.br/wp-content/uploads/2025/05/3.jpg",
  "https://turismovulcanico.tur.br/wp-content/uploads/2025/05/7.jpg",
  "https://turismovulcanico.tur.br/wp-content/uploads/2025/05/11.png",
  "https://turismovulcanico.tur.br/wp-content/uploads/2025/05/12.png",
  "https://turismovulcanico.tur.br/wp-content/uploads/2025/05/13.png",
  "https://turismovulcanico.tur.br/wp-content/uploads/2025/05/15.png",
  "https://turismovulcanico.tur.br/wp-content/uploads/2025/05/17.png",
  "https://turismovulcanico.tur.br/wp-content/uploads/2025/05/57.png"
];

const FAQS = [
  { q: "Como faço para reservar um passeio ou transfer pelo site?", a: "1- Clique em 'Consulte disponibilidade'.\n2- Converse conosco para definir o dia e horário do seu passeio ou transfer.\n3- Defina seu método de pagamento (cartão de crédito ou PIX).\n4- Após pagamento, envie os dados pessoais solicitados e receba a confirmação da sua reserva." },
  { q: "Quais são os métodos de pagamento aceitos?", a: "Aceitamos os seguintes métodos de pagamento: cartão de crédito (Visa, Mastercard, American Express, Elo, Dinners, Hipercard). Além disso, oferecemos a opção de pagamento via PIX e parcelamos em até 3 vezes no cartão de crédito." },
  { q: "Posso cancelar ou alterar minha reserva?", a: "Sim, você pode cancelar ou alterar sua reserva até 24 horas antes do horário de partida do passeio ou traslado. Para cancelamentos ou alterações após esse período, entre em contato conosco para obter assistência." },
  { q: "Quais são as políticas de cancelamento?", a: "Após a reserva dos serviços solicitados, caso você desista de um ou mais serviços, por qualquer motivo, você pode ainda obter o reembolso integral ou parcial dos valores pagos, conforme as situações abaixo.\n\nSe o consumidor exercitar o direito de arrependimento conforme previsto em lei, os valores eventualmente pagos, a qualquer título, durante o prazo de reflexão, serão devolvidos, em até 10 dias úteis, monetariamente atualizados.\n\n- Cancelamento solicitado até 7 dias após a compra: Reembolso de 100%, exceto quando o serviço está a menos de 7 dias da sua realização.\n- Cancelamento solicitado após 7 dias da compra: Reembolso de 50%.\n- Cancelamento solicitado com menos de 7 dias da data de execução do serviço: Não haverá reembolso.\n\nLei nº 8.078, de 11 de setembro de 1990 emenda em 5 de agosto de 2004 Capítulo VI artigo 49 do Código de defesa do consumidor." },
  { q: "Quais são os horários de partida e chegada dos passeios e transfers?", a: "Como os transfers são privativos, os horários serão previamente combinados com os viajantes, garantindo maior flexibilidade e comodidade. Da mesma forma, nos passeios privativos, os horários de saída e retorno também são ajustados de acordo com a preferência do grupo, proporcionando uma experiência personalizada e tranquila." },
  { q: "Os passeios incluem Guias de Turismo?", a: "Nossos passeios incluem Guias de Turismo credenciados no Ministério do Turismo, exceto pelas atividades de aventura, que são realizados por condutores de turismo experientes." },
  { q: "Os transfers e passeios são compartilhados ou privativos?", a: "Todos os nossos passeios são privativos, garantindo uma experiência exclusiva, personalizada e mais confortável para você e seu grupo." },
  { q: "Posso solicitar um transfer para um local específico que não esteja listado no site?", a: "Sim, você pode solicitar um transfer para um local específico que não esteja listado no site. Entre em contato conosco para obter assistência." },
  { q: "Há algum custo adicional, como taxas de entrada em atrações turísticas?", a: "Alguns passeios privativos não incluem os valores de ingressos, visitas, degustações e experiências. Essas informações estão disponíveis na página de detalhes de cada passeio em nosso site." },
  { q: "Os transfers e passeios incluem seguro?", a: "Sim, nossos transfers e passeios incluem seguro para todos os passageiros." },
  { q: "Há alguma recomendação especial para os passeios, como roupas ou calçados adequados?", a: "Recomendamos que você use roupas e calçados confortáveis durante os passeios. Além disso, traga protetor solar, chapéu e água para se manter hidratado durante o passeio. Há recomendações específicas dependendo do passeio. Atente-se às informações descritas." }
];

const REVIEWS = [
  "https://i.imgur.com/EytV0Dj.png",
  "https://i.imgur.com/G4fD74G.png",
  "https://i.imgur.com/t5emhCw.png",
  "https://i.imgur.com/8RlxjH7.png"
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: { opacity: 0, scale: 1.05, filter: "blur(10px)" },
    center: { zIndex: 1, opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { zIndex: 0, opacity: 0, scale: 1.05, filter: "blur(10px)" },
  };

  return (
    <section id="inicial" className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 1.5, ease: "easeOut" },
            filter: { duration: 1.2, ease: "easeInOut" }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <img 
            src={HERO_IMAGES[index].url} 
            alt={HERO_IMAGES[index].title} 
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            width="1920"
            height="1080"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-[10%] relative z-20 mt-12 md:mt-16">
        <AnimatePresence mode="wait">
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <span className="text-gold font-sans text-lg md:text-xl font-medium tracking-[0.2em] mb-4 block uppercase font-bold">
              {HERO_IMAGES[index].subtitle}
            </span>
            <h1 className="text-4xl md:text-[64px] leading-tight md:leading-[1.1] font-serif text-white mb-10">
              {HERO_IMAGES[index].title}
            </h1>
            
            <motion.a 
              href="https://wa.me/5535984341702"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-terracotta text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm relative group overflow-hidden luxury-shadow"
            >
              <span className="relative z-10">AGENDAR EXPEDIÇÃO</span>
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-[100%]" />
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[10%] flex items-center space-x-6 z-30">
        <button onClick={() => setIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)} className="text-white/50 hover:text-gold transition-colors">
          <ChevronLeft size={32} />
        </button>
        <div className="flex space-x-2">
          {HERO_IMAGES.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? 'w-10 bg-gold' : 'w-2 bg-white/20'}`} />
          ))}
        </div>
        <button onClick={() => setIndex((prev) => (prev + 1) % HERO_IMAGES.length)} className="text-white/50 hover:text-gold transition-colors">
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

const SectionHeading = ({ subtitle, title, light = false, className = "mb-16 px-4", noSpacer = false, titleClassName = "" }) => (
  <div className={`text-center ${className}`}>
    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-gold uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold mb-1 block leading-none">
      {subtitle}
    </motion.span>
    <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className={`text-4xl md:text-5xl font-serif leading-[1.1] md:leading-[1.1] mt-4 ${light ? 'text-white' : 'text-imperial'} ${titleClassName}`}>
      {title}
    </motion.h2>
    {!noSpacer && <div className={`w-20 h-1 bg-gold mt-6 ${className.includes('text-left') ? 'mr-auto' : className.includes('text-right') ? 'ml-auto' : 'mx-auto'}`} />}
  </div>
);

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(REVIEWS.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const items = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  const next = () => { setIsTransitioning(true); setIndex((prev) => prev + 1); };
  const prev = () => { setIsTransitioning(true); setIndex((prev) => prev - 1); };

  const onAnimationComplete = () => {
    if (index >= REVIEWS.length * 2) { setIsTransitioning(false); setIndex(index - REVIEWS.length); }
    else if (index < REVIEWS.length) { setIsTransitioning(false); setIndex(index + REVIEWS.length); }
  };

  const visibleItems = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  return (
    <div className="relative group max-w-6xl mx-auto">
      <div className="overflow-hidden px-4 py-10">
        <motion.div 
          className="flex"
          animate={{ x: `-${index * (100 / visibleItems)}%` }}
          transition={isTransitioning ? { type: "spring", stiffness: 300, damping: 30 } : { duration: 0 }}
          onAnimationComplete={onAnimationComplete}
        >
          {items.map((img, i) => (
            <div key={i} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
              <motion.div whileHover={{ y: -10, scale: 1.02 }} className="overflow-hidden rounded-3xl luxury-shadow bg-white/5 border border-white/10 transition-all duration-500 hover:border-gold/30">
                <img src={img} alt={`Depoimento ${i + 1}`} className="w-full h-auto object-cover" loading="lazy" width="400" height="200" />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 w-12 h-12 rounded-full bg-white/10 hover:bg-gold text-white hover:text-imperial transition-all flex items-center justify-center z-20 backdrop-blur-md border border-white/10 shadow-xl">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 w-12 h-12 rounded-full bg-white/10 hover:bg-gold text-white hover:text-imperial transition-all flex items-center justify-center z-20 backdrop-blur-md border border-white/10 shadow-xl">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const Home = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: 'Não informado', mensagem: '', _honeypot: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ nome: '', email: '', telefone: 'Não informado', mensagem: '', _honeypot: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />

      {/* --- QUEM SOMOS --- */}
      <section id="quem-somos" className="py-24 bg-white text-imperial overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
              <img src="https://turismovulcanico.tur.br/wp-content/uploads/2025/05/1.jpg" alt="Turismo" className="rounded-2xl luxury-shadow relative z-10 w-full h-[450px] lg:h-[600px] object-cover" loading="lazy" width="800" height="600" />
              <div className="absolute -bottom-6 -right-6 bg-gold p-6 sm:p-8 rounded-2xl luxury-shadow z-20 text-imperial text-center">
                <span className="block text-3xl sm:text-4xl font-serif font-bold">2+</span>
                <span className="uppercase text-[10px] tracking-widest font-bold">Anos de Histórias</span>
              </div>
            </motion.div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-24">
              <SectionHeading subtitle="Sobre Nós" title="Experiências conectadas à essência local" className="text-left px-0 mb-1" titleClassName="-ml-1" noSpacer />
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg max-w-2xl">
                <p>A Naativa Turismo criou a marca <strong>Turismo Vulcânico</strong>, com o objetivo de proporcionar experiências inesquecíveis em Poços de Caldas e região. Com foco no turismo sustentável e na valorização das riquezas naturais e culturais, oferecem roteiros cuidadosamente planejados para conectar visitantes à história, cultura e natureza locais.</p>
                <p>Liderada por Sharlene de Carvalho Morais, profissional apaixonada e experiente, a Turismo Vulcânico transforma cada viagem em uma vivência autêntica e enriquecedora. Explore as maravilhas da região com quem entende e valoriza suas raízes!</p>
                <div className="pt-4">
                  <Link to="/quem-somos" className="inline-flex items-center space-x-2 text-gold font-bold uppercase tracking-widest text-sm hover:text-imperial transition-colors group">
                    <span>Conheça Nossa História</span>
                    <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: <HeartHandshake className="text-gold" size={32} />, title: "Atendimento Humano", desc: "Suporte especializado focado em você." },
                  { icon: <ShieldCheck className="text-gold" size={32} />, title: "Experiência Garantida", desc: "Segurança e diversão em cada roteiro." },
                  { icon: <Leaf className="text-gold" size={32} />, title: "Propósito", desc: "Valorizamos a cultura e natureza regional." }
                ].map((item, i) => (
                  <motion.div key={i} viewport={{ once: true }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} whileHover={{ y: -5 }} className="p-6 bg-champagne/30 rounded-2xl border border-gold/10 text-center flex flex-col items-center">
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BANNER MEIO --- */}
      <div className="relative h-64 overflow-hidden">
        <img src="https://turismovulcanico.tur.br/wp-content/uploads/2025/05/banner-meio.png" alt="Vista Panorâmica" className="w-full h-full object-cover" loading="lazy" width="1920" height="400" />
        <div className="absolute inset-0 bg-imperial/40 backdrop-blur-[2px]" />
      </div>

      {/* --- REGIAO --- */}
      <section id="regiao" className="py-24 bg-deep-green overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 flex flex-col items-center text-center">
              <div className="mb-6 w-full">
                <span className="block text-gold font-bold tracking-[0.4em] uppercase text-xs mb-1">O Destino</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-1">Poços de Caldas:</h2>
                <p className="text-xl md:text-2xl text-gold font-medium leading-tight max-w-lg mx-auto">Onde a natureza e o passado vulcânico criam experiências únicas</p>
              </div>
              <div className="space-y-6 text-white/95 leading-relaxed text-lg max-w-2xl">
                <p>Poços de Caldas é um destino único no sul de Minas Gerais, onde no passado ocorreu o fenômeno conhecido como intrusão alcalina, que gerou uma caldeira vulcânica. Esse passado geológico criou paisagens incríveis e deu origem às famosas águas termais, ricas em propriedades terapêuticas.</p>
                <p>Além das belezas naturais e arquitetônicas da cidade, a região em seu entorno é rica, com produção de cafés especiais, vinhos, cervejas, cachaças, azeites, queijos e artesanato. Poços de Caldas e região são perfeitos para relaxar e se conectar com a natureza e com a cultura local de forma única. Venha descobrir!</p>
                <div className="flex items-center justify-center space-x-4 text-gold font-bold uppercase tracking-widest pt-4">
                  <MapPin size={22} /><span className="text-[12px]">Serra da Mantiqueira, MG</span>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 w-full max-w-2xl">
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white/5 aspect-video bg-black">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/l0_ssePBgA0?rel=0" title="Poços" allowFullScreen loading="lazy"></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- GALERIA --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Galeria" title="Conexão com a Natureza" />
          <div className="masonry-grid">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="masonry-item relative group overflow-hidden rounded-xl bg-gray-900">
                <img src={img} alt={`Galeria ${i}`} className="w-full h-full object-cover transition-all group-hover:scale-110" loading="lazy" width="600" height="400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DEPOIMENTOS --- */}
      <section className="py-24 bg-imperial relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading subtitle="Avaliações" title="Experiências Reais" light />
          <TestimonialCarousel />
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading subtitle="FAQ" title="Dúvidas Frequentes" />
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-gold/10 overflow-hidden text-imperial">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gold/5 transition-colors">
                  <span className="font-bold text-lg">{faq.q}</span>
                  <ChevronDown className="text-gold transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="p-6 pt-0 text-gray-600 leading-relaxed font-light whitespace-pre-wrap">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTATO --- */}
      <section id="contato" className="py-24 bg-white text-imperial">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden luxury-shadow">
            <div className="lg:col-span-2 bg-imperial p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-serif mb-6 text-gold">Fale Conosco</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Dúvidas sobre nossos roteiros ou disponibilidade? Entre em contato por um de nossos canais oficiais ou preencha o formulário ao lado. Será um prazer atendê-lo!
                </p>
                <div className="space-y-6">
                  <a href="tel:35984341702" className="flex items-center space-x-4"><Phone size={18} className="text-gold" /><span>(35) 98434-1702</span></a>
                  <a href="mailto:contato@turismovulcanico.tur.br" className="flex items-center space-x-4"><Mail size={18} className="text-gold" /><span className="break-all">contato@turismovulcanico.tur.br</span></a>
                </div>
              </div>
              <div className="flex space-x-4 pt-10"><Instagram className="text-gold" /></div>
            </div>
            <div className="lg:col-span-3 bg-white p-12">
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mb-8">Envie sua mensagem</p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="_honeypot" 
                  style={{display:'none'}} 
                  tabIndex={-1} 
                  autoComplete="off" 
                  value={formData._honeypot}
                  onChange={(e) => setFormData({...formData, _honeypot: e.target.value})}
                />
                <input type="text" className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none" placeholder="Nome" required value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} />
                <input type="email" className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none" placeholder="E-mail" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <textarea rows={4} className="w-full border-b border-gray-200 py-3 focus:border-gold outline-none resize-none" placeholder="Mensagem" required value={formData.mensagem} onChange={(e) => setFormData({...formData, mensagem: e.target.value})} />
                
                {status === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl">
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">Mensagem enviada com sucesso!</span>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                    <AlertCircle size={20} />
                    <span className="text-sm font-medium">Erro ao enviar. Tente novamente.</span>
                  </div>
                )}

                <button disabled={status === 'loading'} className="w-full bg-terracotta text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:brightness-110 transition-all luxury-shadow disabled:opacity-70 flex justify-center items-center gap-2">
                  <span>{status === 'loading' ? 'Enviando...' : 'Enviar'}</span>
                  {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* WhatsApp Floating */}
      <a href="https://wa.me/5535984341702" className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform" aria-label="Fale conosco no WhatsApp">
        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt="Ícone do WhatsApp" className="w-8 h-8 brightness-0 invert" width="32" height="32" />
      </a>
    </div>
  );
}

export default Home;
