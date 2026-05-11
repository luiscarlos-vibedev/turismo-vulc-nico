import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, Clock, Calendar, Users, MapPin, 
  CheckCircle2, AlertCircle, Info, ChevronRight,
  CreditCard, Wallet, Camera, ShieldAlert
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const toursData = {
  'tour-cultural': {
    id: 'tour-cultural',
    title: 'Tour Cultural',
    subtitle: 'Histórias que o tempo não apagou',
    heroImage: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/12-2.png',
    pricePix: 'R$ 385,00',
    priceCredit: 'R$ 435,00 (até 3x)',
    duration: 'Aprox. 5h',
    type: 'Passeio Privativo',
    days: 'Qua, Qui, Sex e Sáb',
    description: 'Neste passeio, você irá conhecer a rica história de Poços de Caldas, visitando locais que contam como a cidade nasceu e se desenvolveu, a partir de suas águas termais!',
    itinerary: [
      'Parque José Affonso Junqueira',
      'Thermas Antônio Carlos',
      'Museu Histórico e Geográfico',
      'Basílica Nossa Senhora da Saúde',
      'IMS – Instituto Moreira Salles',
      'Rotina Café Galeria'
    ],
    details: [
      {
        title: 'Parque José Affonso Junqueira',
        text: 'Construído como parte integrante do Complexo Hidrotermal e Hoteleiro, o parque tinham a função de complementar os tratamentos pelas águas termais. O local destaca-se por seu valor paisagístico e exuberante vegetação, com árvores de grande porte, plantas ornamentais e arbustos variados.'
      },
      {
        title: 'Thermas Antônio Carlos',
        text: 'Inaugurada em 1931, esta imponente construção em estilo neorromânico foi considerada, na época, o maior balneário da América Latina. Em seu interior, encontra-se o Museu do Termalismo.'
      },
      {
        title: 'Museu Histórico e Geográfico',
        text: 'Instalado em um encantador casarão do século XIX, o espaço abriga um rico acervo dedicado a preservar e contar a história de Poços de Caldas e sua coleção de rochas.'
      },
      {
        title: 'Basílica Nossa Senhora da Saúde',
        text: 'Inaugurada em 1947, a construção se destaca por sua impressionante arquitetura que combina elementos do estilo gótico e românico. Em 1954, foi elevada à categoria de Basílica.'
      },
      {
        title: 'IMS – Instituto Moreira Salles',
        text: 'O Instituto oferece aos visitantes uma rica experiência cultural, com exposições, uma sala de cinema e uma programação diversificada voltada para a promoção da arte.'
      },
      {
        title: 'Rotina Café Galeria',
        text: 'Um espaço acolhedor que combina café e arte em perfeita harmonia. Oferece um ambiente único onde os visitantes podem desfrutar de cafés especiais e exposições.'
      }
    ],
    included: [
      'Guia de Turismo credenciado',
      'Transporte em veículo privativo (Sedan ou SUV)',
      'Saída e retorno da sua hospedagem',
      'Seguro de passageiros'
    ],
    notIncluded: [
      'Alimentos e bebidas',
      'Despesas de caráter pessoal',
      'Ingressos em museus ou atrações (quando houver)'
    ],
    importantNotes: [
      'Valores por veículo para até 4 pessoas',
      'Consulte disponibilidade via WhatsApp',
      'Transporte em veículo Sedan ou SUV privativo',
      'Obrigatório uso de cadeirinha para crianças até 7 anos e meio'
    ],
    cancellationPolicy: `Qualquer solicitação de cancelamento deve ser enviada ao e-mail: contato@turismovulcanico.tur.br. De acordo com o Art. 49 do CDC, o cliente tem até 7 dias para arrependimento com reembolso integral (desde que o serviço seja após este prazo). Multa de 50% para cancelamentos com até 48h de antecedência. Multa de 100% para cancelamentos em prazo inferior a 48h.`
  },
  'city-tour': {
    id: 'city-tour',
    title: 'City Tour Poços de Caldas',
    subtitle: 'Descubra os encantos da cidade',
    heroImage: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/5.png',
    pricePix: 'R$ 400,00',
    priceCredit: 'R$ 452,00 (até 3x)',
    duration: 'Aprox. 5h',
    type: 'Passeio Privativo',
    days: 'Todos os dias',
    description: 'Descubra os encantos de Poços de Caldas, explorando suas paisagens de tirar o fôlego e visitando atrações que celebram a arte, a cultura e a gastronomia local. Entre cachoeiras, parques e monumentos históricos!',
    itinerary: [
      'Parque do Cristo',
      'Fonte dos Amores',
      'Véu das Noivas ou Cascata das Antas',
      'Loja de cosméticos Raízes (Água Termal)',
      'Fábrica de Cristais Cá d’Oro (Murano)',
      'Mercado Municipal'
    ],
    details: [
      {
        title: 'Parque do Cristo',
        text: 'Um dos principais cartões-postais de Poços de Caldas, o parque proporciona uma vista panorâmica deslumbrante da cidade. O espaço conta com atividades de aventura, food trucks e o charmoso Mercado Cristo.'
      },
      {
        title: 'Fonte dos Amores',
        text: 'Lugar repleto de romantismo e charme, conhecido por suas águas cristalinas, lendas encantadoras e pela bela escultura do casal apaixonado de Giulio Starace.'
      },
      {
        title: 'Véu das Noivas & Cascata das Antas',
        text: 'Impressionantes quedas d’água rodeadas pela vegetação local. A Cascata das Antas abriga as ruínas da primeira usina hidrelétrica da cidade (1898).'
      },
      {
        title: 'Loja Raízes (Cosméticos)',
        text: 'Produtos exclusivos feitos com a renomada água termal da região, proporcionando cuidados especiais para a pele e bem-estar.'
      },
      {
        title: 'Cá d’Oro (Cristais)',
        text: 'Conheça o processo artesanal de produção dos cristais tipo Murano, tradição e arte que encantam visitantes desde 1965.'
      },
      {
        title: 'Mercado Municipal',
        text: 'Espaço vibrante que reúne o melhor da culinária e cultura local, com produtos típicos, artesanatos e tradições da região.'
      }
    ],
    included: [
      'Guia de Turismo credenciado',
      'Transporte em veículo privativo (Sedan ou SUV)',
      'Saída e retorno da sua hospedagem',
      'Seguro de passageiros'
    ],
    notIncluded: [
      'Alimentos e bebidas',
      'Despesas de caráter pessoal',
      'Ingressos dos atrativos (Fonte e Cachoeiras)'
    ],
    importantNotes: [
      'Valores por veículo para até 4 pessoas',
      'Ingressos da Fonte e Cachoeiras (aprox. R$15 cada)',
      'Transporte Sedan ou SUV privativo',
      'Obrigatório uso de cadeirinha para crianças'
    ],
    cancellationPolicy: `Solicitação via e-mail: contato@turismovulcanico.tur.br. Multa de 50% com 48h de antecedência. Multa de 100% em prazo inferior a 48h ou No Show.`
  },
  'passeio-a-pe': {
    id: 'passeio-a-pe',
    title: 'Passeio a pé + Degustação',
    subtitle: 'Sabores e Histórias no Centro',
    heroImage: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/102.png',
    pricePix: 'R$ 70,00 a R$ 333,00',
    priceCredit: 'R$ 79,00 a R$ 377,00',
    duration: 'Aprox. 4h',
    type: 'Passeio em Grupo/Privativo',
    days: 'Qua, Qui, Sex e Sáb',
    description: 'Um mergulho nos aspectos históricos e culturais que moldaram Poços de Caldas. O passeio termina com uma deliciosa degustação de queijos artesanais mineiros na Maturare!',
    itinerary: [
      'Parque José Affonso Junqueira',
      'Praça Pedro Sanches',
      'Fonte Pedro Botelho / Thermas',
      'Basílica Nossa Senhora da Saúde',
      'Praça dos Macacos / Balneário',
      'Degustação na Queijaria Maturare'
    ],
    details: [
      {
        title: 'Parque José Affonso Junqueira',
        text: 'Local onde Poços de Caldas começou. Passamos pelo centro histórico contemplando o Palace Hotel e Palace Casino.'
      },
      {
        title: 'Praça Pedro Sanches',
        text: 'Revela toda sua beleza com o coreto e o monumento "Minas ao Brasil" do italiano Giulio Starace.'
      },
      {
        title: 'Fonte Pedro Botelho & Thermas',
        text: 'Sinta a água sulfurosa saindo da fonte e aprecie a arquitetura neorromânica do balneário, outrora o maior da América Latina.'
      },
      {
        title: 'Basílica Nossa Senhora da Saúde',
        text: 'Arquitetura eclética com influência gótica e neorromânica. Entenda o motivo de Poços se diferenciar na religiosidade.'
      },
      {
        title: 'Praça dos Macacos',
        text: 'Local agradável com fonte termal e o Balneário Dr. Mário Mourão, muito frequentado pelos moradores locais.'
      },
      {
        title: 'Degustação na Queijaria Maturare',
        text: 'Finalize apreciando os melhores queijos de Minas, vinhos e doces de pequenos produtores parceiros.'
      }
    ],
    included: [
      'Guia de Turismo credenciado',
      'Degustação de queijos artesanais',
      'Seguro de passageiros'
    ],
    notIncluded: [
      'Transporte (passeio é realizado a pé)',
      'Alimentos e bebidas extras',
      'Despesas de caráter pessoal'
    ],
    importantNotes: [
      'Valor por pessoa (tabela progressiva)',
      'Ponto de encontro no centro histórico',
      'Início geralmente no período da tarde',
      'Até 8 pessoas por grupo'
    ],
    cancellationPolicy: `Qualquer solicitação via e-mail. Reembolso integral conforme lei dentro de 7 dias após compra, exceto se o serviço for em menos de 7 dias.`
  },
  'caldas': {
    id: 'caldas',
    title: 'Caldas: História e Tradição',
    subtitle: 'A cidade mais antiga da região',
    heroImage: 'https://turismovulcanico.tur.br/wp-content/uploads/2025/05/33-2.png',
    pricePix: 'R$ 499,00',
    priceCredit: 'R$ 564,00 (até 3x)',
    duration: 'Aprox. 4h 30min',
    type: 'Passeio Privativo',
    days: 'Seg a Sex',
    description: 'Descubra os encantos da bucólica cidade de Caldas! Tradição em uvas, vinhos, natureza exuberante, águas termais e artesanato secular em palha de milho.',
    itinerary: [
      'Fábrica de farinha de milho',
      'Cascata Antônio Monteiro',
      'Balneário de Pocinhos do Rio Verde',
      'Igreja Matriz N. Sra. do Patrocínio',
      'Loja de artesanato ArteCaldas'
    ],
    details: [
      {
        title: 'Fábrica de Farinha de Milho',
        text: 'Visite uma tradicional fábrica e conheça de perto todo o processo de produção desta iguaria regional.'
      },
      {
        title: 'Cascata Antônio Monteiro',
        text: 'Caldas é rica em belezas naturais; visitaremos esta cachoeira para contemplar a natureza magnífica ao entorno.'
      },
      {
        title: 'Balneário de Pocinhos do Rio Verde',
        text: 'Parque agradável com três fontes de águas termais famosas por suas propriedades medicinais.'
      },
      {
        title: 'Igreja Matriz N. Sra. do Patrocínio',
        text: 'Arquitetura preservada que guarda o quadro "Anunciação" do artista sueco Fredrik Westin (Séc. XIX).'
      },
      {
        title: 'Artesanato em Palha (ArteCaldas)',
        text: 'Associação de mulheres que mantém a tradição secular do artesanato em palha de milho com diversos produtos típicos.'
      }
    ],
    included: [
      'Guia de Turismo credenciado',
      'Transporte em veículo privativo (Sedan ou SUV)',
      'Saída e retorno da sua hospedagem',
      'Seguro de passageiros'
    ],
    notIncluded: [
      'Alimentos e bebidas',
      'Visita na fábrica de farinha (R$30/pessoa)',
      'Despesas de caráter pessoal'
    ],
    importantNotes: [
      'Valores por veículo para até 4 pessoas',
      'Consulte disponibilidade via WhatsApp',
      'Saídas de manhã ou à tarde',
      'Uso obrigatório de cadeirinha para crianças'
    ],
    cancellationPolicy: `Cancelamento via e-mail: contato@turismovulcanico.tur.br. Multa de 50% entre 7 dias e 48h da data. Multa de 100% com menos de 48h.`
  }
};

const TourDetail = () => {
  const { slug } = useParams();
  const tour = toursData[slug as keyof typeof toursData];

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Passeio não encontrado</h1>
          <Link to="/passeios" className="text-gold font-bold">Voltar para Passeios</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFBF6] font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end">
        <img 
          src={tour.heroImage}
          alt={tour.title}
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFBF6] via-[#FAFBF6]/20 to-black/40" />
        
        <div className="container mx-auto px-6 relative z-10 pb-12">
          <Link to="/passeios" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors font-bold uppercase tracking-widest text-xs">
            <ChevronLeft size={16} />
            <span>Todos os Passeios</span>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-black text-imperial leading-tight"
          >
            {tour.title}
          </motion.h1>
          <p className="text-gold text-lg md:text-xl font-medium mt-2 italic">{tour.subtitle}</p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Sidebar de Preços e Ação */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-32 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-50">
                    <div className="flex items-center space-x-3 text-deep-green font-bold">
                      <Wallet size={20} className="text-gold" />
                      <span>Pagamento via PIX</span>
                    </div>
                    <span className="text-2xl font-black text-imperial">{tour.pricePix}</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-50">
                    <div className="flex items-center space-x-3 text-gray-500 font-medium">
                      <CreditCard size={20} className="text-gold/50" />
                      <span>Cartão de Crédito</span>
                    </div>
                    <span className="text-lg font-bold text-gray-700">{tour.priceCredit}</span>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Clock size={18} className="text-gold" />
                    <strong>Duração:</strong> {tour.duration}
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Users size={18} className="text-gold" />
                    <strong>Tipo:</strong> {tour.type}
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Calendar size={18} className="text-gold" />
                    <strong>Ocorre:</strong> {tour.days}
                  </div>
                </div>

                <a 
                  href={`https://wa.me/5535984341702?text=Olá! Gostaria de consultar disponibilidade para o ${tour.title}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-gold hover:bg-gold-light text-imperial py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center space-x-3 transition-all shadow-lg hover:-translate-y-1"
                >
                  <span>Reservar via WhatsApp</span>
                  <ChevronRight size={18} />
                </a>
                <p className="text-[10px] text-center text-gray-400 uppercase font-bold tracking-tighter">
                  Sujeito a disponibilidade de data
                </p>
              </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="lg:col-span-2 order-2 lg:order-1 space-y-16">
              
              {/* Descrição */}
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-black text-deep-green flex items-center space-x-3">
                  <div className="w-8 h-1 bg-gold rounded-full" />
                  <span>Sobre o Passeio</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-sans leading-relaxed italic">
                  {tour.description}
                </p>
              </div>

              {/* Roteiro */}
              <div className="space-y-8">
                <h3 className="text-2xl font-serif font-black text-deep-green flex items-center space-x-3">
                  <div className="w-8 h-1 bg-gold rounded-full" />
                  <span>Roteiro do Tour</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-8 h-8 bg-champagne text-gold rounded-lg flex items-center justify-center font-black text-sm">
                        {index + 1}
                      </div>
                      <span className="font-bold text-imperial text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Incluso / Não Incluso */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-deep-green/5 p-8 rounded-[2rem] border border-deep-green/10">
                  <h4 className="text-imperial font-black uppercase tracking-widest text-xs mb-6 flex items-center space-x-2">
                    <CheckCircle2 size={16} className="text-deep-green" />
                    <span>Incluso</span>
                  </h4>
                  <ul className="space-y-4">
                    {tour.included.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start space-x-3 font-medium">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-terracotta/5 p-8 rounded-[2rem] border border-terracotta/10">
                  <h4 className="text-imperial font-black uppercase tracking-widest text-xs mb-6 flex items-center space-x-2">
                    <AlertCircle size={16} className="text-terracotta" />
                    <span>Não Incluso</span>
                  </h4>
                  <ul className="space-y-4">
                    {tour.notIncluded.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start space-x-3 font-medium">
                        <div className="w-1.5 h-1.5 bg-terracotta rounded-full mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fotos Extras / Saiba Mais */}
              <div className="space-y-8">
                <h3 className="text-2xl font-serif font-black text-deep-green flex items-center space-x-3">
                  <div className="w-8 h-1 bg-gold rounded-full" />
                  <span>Saiba Mais sobre os Pontos</span>
                </h3>
                <div className="space-y-6">
                  {tour.details.map((detail, index) => (
                    <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                      <h4 className="font-serif text-xl text-imperial font-bold">{detail.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm font-sans">{detail.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Políticas e Notas */}
              <div className="space-y-8 pt-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center space-x-2 text-gold italic">
                      <ShieldAlert size={20} />
                      <span className="font-black uppercase tracking-widest text-xs">Observações Importantes</span>
                    </div>
                    <ul className="space-y-2">
                      {tour.importantNotes.map((note, i) => (
                        <li key={i} className="text-xs text-gray-500 flex items-center space-x-2">
                          <span>•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center space-x-2 text-gold italic">
                      <Info size={20} />
                      <span className="font-black uppercase tracking-widest text-xs">Política de Cancelamento</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-relaxed uppercase font-bold tracking-tighter">
                      {tour.cancellationPolicy}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourDetail;
