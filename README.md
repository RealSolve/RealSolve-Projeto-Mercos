# Mercos-Inspired Site

Projeto frontend inspirado no design Mercos, construído com **Next.js**, **Tailwind CSS**, Radix UI e outras bibliotecas modernas. O site possui autenticação JWT, é totalmente responsivo e tem uma estrutura modular para facilitar manutenção e evolução.

---

## Índice

- [Visão Geral](#visão-geral)  
- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Estrutura de Pastas](#estrutura-de-pastas)  
- [Pré-requisitos](#pré-requisitos)  
- [Instalação e Execução Local](#instalação-e-execução-local)  
- [Scripts Disponíveis](#scripts-disponíveis)  
- [Deploy / Produção](#deploy--produção)  
- [Autenticação JWT & Middleware](#autenticação-jwt--middleware)  
- [Responsividade](#responsividade)  
- [Possíveis Melhorias Futuras](#possíveis-melhorias-futuras)  
- [Autor](#autor)  
- [Licença](#licença)

---

## Visão Geral

Este é um site frontend moderno inspirado no estilo Mercos. Ele usa Next.js (com App Router), Tailwind CSS, componentes Radix UI, validação com Zod, contextos e hooks personalizados. Ele conta com autenticação via JWT para proteger rotas ou funcionalidades privadas, e é responsivo, adaptando-se bem para mobile, tablet e desktop.

---

## Tecnologias Utilizadas

- Next.js (versão recente, com App Router)  
- React  
- TypeScript  
- Tailwind CSS (e plugins relacionados como animações etc.)  
- Radix UI para componentes de interface com acessibilidade e estilo moderno  
- React Hook Form + Zod para validação de formulários  
- Hooks customizados: `use-mobile`, `use-toast`  
- Context API para autenticação (`auth-context`)  
- Utilitários em `lib` (`auth.ts`, `utils.ts`)  
- CSS global em `styles/globals.css`  

---

## Estrutura de Pastas

```text
MERCOS-INSPIRED-SITE/
├── .next/                       # geração de build / cache do Next.js
├── app/                         # rotas com o novo App Router do Next.js
├── components/                  # componentes de UI reutilizáveis
├── contexts/
│   └── auth-context.tsx         # contexto de autenticação
├── hooks/
│   ├── use-mobile.ts            # hook para detectar dispositivo mobile
│   └── use-toast.ts             # hook para mostrar toasts/alertas
├── lib/
│   ├── auth.ts                  # lógica de autenticação / auxiliares JWT
│   └── utils.ts                 # utilitários gerais
├── public/                      # arquivos estáticos (imagens etc.)
├── styles/
│   └── globals.css              # estilos globais Tailwind / reset etc.
├── middleware.ts                # middleware para rotas protegidas / autenticação
├── next.config.js               # configurações do Next.js
├── tsconfig.json                # configurações TypeScript
├── package.json
├── postcss.config.mjs
└── outros arquivos de configuração (.gitignore etc.)

Pré-requisitos

Node.js instalado (versão compatível, recomenda-se usar versão recente, como >= 16 ou 18)

npm ou outro gerenciador de pacotes (yarn, pnpm)

Git para clonar o repositório

Instalação e Execução Local
# clonar repositório
git clone <URL-do-teu-repositorio>

# entrar na pasta do projeto
cd MERCOS-INSPIRED-SITE

# instalar dependências
npm install
# ou se usar yarn / pnpm
# yarn install
# pnpm install

# rodar em modo de desenvolvimento
npm run dev
# ou
yarn dev

# abrir no navegador
# normalmente em http://localhost:3000

# para produção / build otimizado
npm run build
npm run start

| Script  | Descrição                                             |
| ------- | ----------------------------------------------------- |
| `dev`   | Executa servidor de desenvolvimento com hot-reload    |
| `build` | Gera build otimizado para produção                    |
| `start` | Inicia a aplicação já construída para produção        |
| `lint`  | Executa ferramentas de lint para checar estilo/código |

Deploy / Produção

Para colocar em produção:

Usar plataforma compatível com Next.js (ex: Vercel, Netlify, etc.)

Configurar variáveis de ambiente necessárias para autenticação JWT (secret, tempo de expiração)

Certificar que middleware, rotas protegidas e configurações de segurança (HTTPS, cookies seguras etc.) estejam corretamente definidas

Verificar performance, bundling, otimização de imagens, carregamento etc.

Autenticação JWT & Middleware

Este projeto inclui autenticação via JSON Web Token (JWT), utilizada para:

Login / logout de usuário

Protegir rotas ou ações que não devem ser acessíveis sem autenticação

Verificar o token em middleware (middleware.ts) para redirecionar ou bloquear acessos não autorizados

Possíveis detalhes que você deve garantir:

Armazenar o token de forma segura (por exemplo cookies HttpOnly, ou outro método seguro)

Verificar assinatura do token, tempo de expiração, validade antes de aceitar requests

Rotas públicas vs rotas privadas — definir claramente no middleware quais rotas não exigem autenticação

Responsividade

O site é responsivo, ou seja:

Layout adaptado para diferentes larguras de tela: mobile, tablet, desktop

Uso de hooks ou lógica para detectar mobile (use-mobile) para ajustar comportamentos específicos quando no celular

CSS Tailwind configurado para breakpoints responsivos

Componentes UI devem reagir bem quando reduzidos ou expandidos (menus, imagens, navegabilidade etc.)

Possíveis Melhorias Futuras

Implementar testes (unitários / integração)

Internacionalização (i18n)

Recurso de Refresh Token para JWT, para melhorar segurança e experiência de usuário

Documentar componentes (storybooks ou similar)

Monitoramento / analytics mais aprofundado

Suporte offline / caching para melhorar performance em redes instáveis

Autor
AlanSous4 github

Licença

Este projeto está licenciado sob a licença MIT (ou outra de sua escolha).
Veja o arquivo LICENSE para mais detalhes.
