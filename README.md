# Turismo Vulcânico - Agência de Turismo

Projeto desenvolvido para a agência **Turismo Vulcânico**, focada em turismo sustentável, passeios privativos e transfers na região de Poços de Caldas - MG.

## 🚀 Tecnologias

- **Frontend:** React 19, Vite, TypeScript, Tailwind CSS v4, Framer Motion
- **Backend/API:** Vercel Serverless Functions
- **E-mails:** Resend API

## 💻 Instalação e Execução

**Pré-requisitos:** Node.js (v18+)

1. Clone o repositório e instale as dependências:
   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto seguindo o modelo do `.env.example`:
   ```bash
   RESEND_API_KEY="sua_chave_aqui"
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Para gerar o build de produção:
   ```bash
   npm run build
   ```

## 🔒 Segurança e Deploy
O projeto está otimizado e configurado para deploy seguro na **Vercel**, contando com validações em servidor (Honeypot, CORS, Security Headers) para máxima segurança.
