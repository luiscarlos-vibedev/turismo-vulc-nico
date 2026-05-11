import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Send, MapPin, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', mensagem: '', _honeypot: '' });
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
        setFormData({ nome: '', email: '', telefone: '', mensagem: '', _honeypot: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };
  return (
    <div className="min-h-screen bg-[#FAFBF6] selection:bg-gold selection:text-imperial">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative pt-40 pb-20 bg-white overflow-hidden border-b border-imperial/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-imperial text-4xl md:text-6xl font-serif leading-tight mb-6"
          >
            Estamos prontos para planejar sua próxima expedição.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-imperial/60 max-w-2xl mx-auto font-sans text-lg md:text-xl"
          >
            Entre em contato e descubra o que a Turismo Vulcânico preparou para você.
          </motion.p>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Lado Esquerdo: Canais de Atendimento */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-imperial text-4xl mb-12 font-serif">Nossos Contatos</h2>
              
              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="group bg-white p-8 rounded-2xl luxury-shadow flex items-center justify-between border border-gold/10 hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-[#25D366]/10 flex items-center justify-center rounded-xl">
                      <MessageSquare className="text-[#25D366]" size={32} />
                    </div>
                    <div>
                      <span className="block text-imperial/50 text-xs uppercase font-bold tracking-widest mb-1 font-sans">WhatsApp</span>
                      <p className="text-imperial text-xl font-bold font-sans">(35) 9 8434 – 1702</p>
                    </div>
                  </div>
                  <a 
                    href="https://wa.me/5535984341702" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors duration-300"
                  >
                    Chamar agora
                  </a>
                </div>

                {/* Email */}
                <div className="group bg-white p-8 rounded-2xl luxury-shadow flex items-center space-x-6 border border-gold/10 hover:border-gold/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gold/10 flex items-center justify-center rounded-xl">
                    <Mail className="text-gold" size={32} />
                  </div>
                  <div>
                    <span className="block text-imperial/50 text-xs uppercase font-bold tracking-widest mb-1 font-sans">E-mail</span>
                    <a href="mailto:contato@turismovulcanico.tur.br" className="text-imperial text-xl font-bold font-sans hover:text-gold transition-colors break-all">
                      contato@turismovulcanico.tur.br
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="group bg-white p-8 rounded-2xl luxury-shadow flex items-center space-x-6 border border-gold/10 hover:border-gold/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-pink-500/10 flex items-center justify-center rounded-xl">
                    <Instagram className="text-pink-500" size={32} />
                  </div>
                  <div>
                    <span className="block text-imperial/50 text-xs uppercase font-bold tracking-widest mb-1 font-sans">Redes Sociais</span>
                    <a 
                      href="https://www.instagram.com/turismo.vulcanico/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-imperial text-xl font-bold font-sans hover:text-gold transition-colors"
                    >
                      @turismo.vulcanico
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lado Direito: Formulário */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/40 backdrop-blur-md p-10 rounded-3xl luxury-shadow border border-white/50"
            >
              <form 
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {/* Honeypot field */}
                <input 
                  type="text" 
                  name="_honeypot" 
                  style={{display:'none'}} 
                  tabIndex={-1} 
                  autoComplete="off" 
                  value={formData._honeypot}
                  onChange={(e) => setFormData({...formData, _honeypot: e.target.value})}
                />

                <div>
                  <label className="block text-imperial text-xs uppercase font-bold tracking-widest mb-2 px-1">Seu Nome</label>
                  <input 
                    type="text" 
                    placeholder="Como podemos te chamar?"
                    className="w-full bg-white border border-imperial/20 p-4 rounded-xl focus:outline-none focus:border-gold transition-colors font-sans text-imperial placeholder:text-imperial/40"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-imperial text-xs uppercase font-bold tracking-widest mb-2 px-1">E-mail</label>
                    <input 
                      type="email" 
                      placeholder="seu@email.com"
                      className="w-full bg-white border border-imperial/20 p-4 rounded-xl focus:outline-none focus:border-gold transition-colors font-sans text-imperial placeholder:text-imperial/40"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-imperial text-xs uppercase font-bold tracking-widest mb-2 px-1">Telefone</label>
                    <input 
                      type="tel" 
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white border border-imperial/20 p-4 rounded-xl focus:outline-none focus:border-gold transition-colors font-sans text-imperial placeholder:text-imperial/40"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-imperial text-xs uppercase font-bold tracking-widest mb-2 px-1">Mensagem</label>
                  <textarea 
                    rows={4}
                    placeholder="Escreva o que você vai precisar aqui"
                    className="w-full bg-white border border-imperial/20 p-4 rounded-xl focus:outline-none focus:border-gold transition-colors font-sans resize-none text-imperial placeholder:text-imperial/40"
                    required
                    value={formData.mensagem}
                    onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl">
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                    <AlertCircle size={20} />
                    <span className="text-sm font-medium">Ocorreu um erro ao enviar sua mensagem. Tente novamente.</span>
                  </div>
                )}

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-terracotta text-white py-5 rounded-full font-sans font-black uppercase tracking-[0.2em] luxury-shadow hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    <span>{status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}</span>
                    {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Seção Mapa */}
      <section className="relative h-[500px] w-full grayscale contrast-[1.2]">
        <div className="absolute top-8 left-8 z-20 pointer-events-none">
          <div className="bg-imperial p-6 rounded-2xl luxury-shadow border border-gold/20 inline-block">
            <div className="flex items-center space-x-4">
              <MapPin className="text-gold" size={24} />
              <div>
                <h4 className="text-white font-serif uppercase tracking-widest text-sm">Onde Estamos</h4>
                <p className="text-white/60 text-xs font-sans">Poços de Caldas - MG</p>
              </div>
            </div>
          </div>
        </div>
        
        <iframe 
          src="https://www.google.com/maps?q=Poços de Caldas - MG&t=m&z=14&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Nossa Localização"
          className="grayscale lg:filter-none lg:hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
