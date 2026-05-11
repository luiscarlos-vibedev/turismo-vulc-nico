import React from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_URL, CADASTUR_URL } from '../constants/assets';

const Footer = () => {
  return (
    <footer className="bg-terracotta pt-16 pb-8 text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start">
          {/* Col 1: Sobre */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={LOGO_URL} alt="Turismo Vulcânico" className="h-12 mb-6 brightness-0 invert" />
            <p className="font-sans text-sm leading-relaxed opacity-80 max-w-xs mb-6">
              Transformamos viagens em vivências enriquecedoras. Descubra a história e a natureza exuberante de Poços de Caldas.
            </p>
            <img 
              src={CADASTUR_URL} 
              alt="Cadastur" 
              className="h-10 opacity-90 hover:opacity-100 transition-opacity" 
            />
          </div>

          {/* Col 2: Links Úteis */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-xl mb-6">Links Úteis</h4>
            <ul className="font-sans space-y-3 text-sm">
              <li><Link to="/" onClick={() => window.scrollTo(0,0)} className="hover:opacity-70 transition-opacity">Início</Link></li>
              <li><Link to="/quem-somos" onClick={() => window.scrollTo(0,0)} className="hover:opacity-70 transition-opacity">Quem Somos</Link></li>
              <li><Link to="/regiao" onClick={() => window.scrollTo(0,0)} className="hover:opacity-70 transition-opacity">Região</Link></li>
              <li><Link to="/passeios" className="hover:opacity-70 transition-opacity">Passeios</Link></li>
              <li><Link to="/contato" onClick={() => window.scrollTo(0,0)} className="hover:opacity-70 transition-opacity">Contato</Link></li>
              <li><Link to="/privacidade" onClick={() => window.scrollTo(0,0)} className="hover:opacity-70 transition-opacity">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Col 3: Contatos */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-xl mb-6">Contatos</h4>
            <div className="font-sans space-y-4 text-sm">
              <div className="flex items-center space-x-3 justify-center md:justify-start group">
                <Phone size={18} className="opacity-70" />
                <a href="https://wa.me/5535984341702" className="group-hover:opacity-70 transition-opacity font-bold">(35) 98434-1702</a>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start group">
                <Mail size={18} className="opacity-70" />
                <a href="mailto:contato@turismovulcanico.tur.br" className="group-hover:opacity-70 transition-opacity break-all">contato@turismovulcanico.tur.br</a>
              </div>
            </div>
          </div>

          {/* Col 4: Siga-nos */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-xl mb-6">Redes Sociais</h4>
            <a 
              href="https://www.instagram.com/turismo.vulcanico/" 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Instagram da Turismo Vulcânico"
            >
              <Instagram size={20} strokeWidth={1} />
            </a>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-widest opacity-60">
          <span>© {new Date().getFullYear()} Turismo Vulcânico. Todos os direitos reservados.</span>
          <div className="flex items-center mt-6 md:mt-0 space-x-8">
            <span className="opacity-80">Desenvolvido por MarketsPire Agência.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
