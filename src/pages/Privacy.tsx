import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#FAFBF6] text-imperial">
      <Navbar />
      <div className="container mx-auto px-6 py-40 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-deep-green">Política de Privacidade</h1>
        <div className="space-y-8 font-sans leading-relaxed text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gold">1. Quais dados coletamos</h2>
            <p>Coletamos dados pessoais fornecidos diretamente por você quando entra em contato conosco ou preenche nossos formulários. Estes dados incluem: <strong>Nome, E-mail e Telefone</strong>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gold">2. Finalidade do uso</h2>
            <p>Seus dados são utilizados exclusivamente para:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Responder a solicitações de orçamento e dúvidas sobre nossos passeios e transfers.</li>
              <li>Confirmar agendamentos e organizar as atividades reservadas.</li>
              <li>Melhorar a prestação de nossos serviços e o atendimento ao cliente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gold">3. Prazo de retenção</h2>
            <p>Armazenamos seus dados pelo tempo necessário para cumprir as finalidades para as quais foram coletados, respeitando as obrigações legais de retenção de registros, ou até que você solicite sua exclusão.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gold">4. Compartilhamento de dados</h2>
            <p>Para garantir a operação do nosso site e a comunicação eficiente, seus dados podem ser processados por fornecedores de tecnologia terceirizados, incluindo:</p>
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Vercel:</strong> Hospedagem do nosso site.</li>
              <li><strong>Resend:</strong> Serviço de envio de e-mails de formulários de contato.</li>
              <li><strong>Google:</strong> Analytics (quando aplicável) e serviços integrados.</li>
            </ul>
            <p className="mt-2">Esses parceiros tratam as informações seguindo rígidos padrões de segurança e privacidade.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gold">5. Seus direitos (Titular dos Dados)</h2>
            <p>Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), você tem os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Acesso aos dados coletados.</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Exclusão dos dados tratados com o seu consentimento.</li>
              <li>Portabilidade dos dados a outro fornecedor de serviço.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gold">6. Contato do Encarregado (DPO) e Como exercer seus direitos</h2>
            <p>Se você deseja exercer qualquer um dos seus direitos ou tirar dúvidas sobre como tratamos seus dados, entre em contato conosco:</p>
            <p className="mt-4"><strong>Responsável:</strong> Sharlene de Carvalho Morais</p>
            <p><strong>E-mail:</strong> <a href="mailto:contato@turismovulcanico.tur.br" className="text-deep-green font-bold">contato@turismovulcanico.tur.br</a></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
