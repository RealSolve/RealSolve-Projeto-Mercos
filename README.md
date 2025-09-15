# Mercos Dashboard

Sistema de gestão comercial completo baseado no layout do Mercos.

## 🚀 Funcionalidades

- **Dashboard Principal**: Gráficos de vendas, métricas em tempo real e indicadores de performance
- **Gestão de Clientes**: Cadastro e acompanhamento de clientes
- **Controle de Pedidos**: Gerenciamento completo de pedidos com status
- **Catálogo de Produtos**: Gestão de produtos e estoque
- **Relatórios**: Geração de relatórios de vendas e análises
- **Portal do Cliente**: Portal B2B para clientes fazerem pedidos online
- **Agenda**: Sistema de agendamento de reuniões e compromissos
- **Painel de Controle**: Visão geral das atividades do sistema

## 🛠️ Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização moderna
- **Radix UI** - Componentes acessíveis
- **Recharts** - Gráficos e visualizações
- **Lucide React** - Ícones modernos
- **Vercel Analytics** - Análise de performance

## 📦 Instalação

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/RealSolve/mercos-dashboard.git
cd mercos-dashboard
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
# ou
yarn install
# ou
pnpm install
\`\`\`

3. Execute o projeto:
\`\`\`bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
\`\`\`

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push na branch main

### Outros provedores

O projeto é compatível com qualquer provedor que suporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📁 Estrutura do Projeto

\`\`\`
├── app/
│   ├── dashboard/
│   │   ├── agenda/          # Página da agenda
│   │   ├── clientes/        # Gestão de clientes
│   │   ├── painel/          # Painel de controle
│   │   ├── pedidos/         # Controle de pedidos
│   │   ├── produtos/        # Catálogo de produtos
│   │   ├── portal/          # Portal do cliente
│   │   ├── relatorios/      # Relatórios
│   │   ├── layout.tsx       # Layout do dashboard
│   │   └── page.tsx         # Dashboard principal
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout raiz
│   └── page.tsx             # Página inicial
├── components/
│   ├── ui/                  # Componentes base (shadcn/ui)
│   ├── dashboard-header.tsx # Header do dashboard
│   ├── dashboard-sidebar.tsx# Sidebar de navegação
│   ├── dashboard-content.tsx# Conteúdo principal
│   ├── sales-chart.tsx      # Gráfico de vendas
│   ├── metrics-cards.tsx    # Cards de métricas
│   └── circular-progress.tsx# Progresso circular
└── lib/
    └── utils.ts             # Utilitários
\`\`\`

## 🎨 Personalização

O projeto utiliza Tailwind CSS v4 com sistema de design tokens. Para personalizar:

1. **Cores**: Edite as variáveis CSS em `app/globals.css`
2. **Componentes**: Modifique os componentes em `components/ui/`
3. **Layout**: Ajuste o layout em `components/dashboard-*`

## 📊 Dados

Atualmente o projeto utiliza dados mockados para demonstração. Para integrar com dados reais:

1. Configure sua API ou banco de dados
2. Substitua os dados mockados nos componentes
3. Implemente autenticação se necessário

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte, entre em contato:
- Email: backend.realsolv@gmail.com
- GitHub: [@RealSolve](https://github.com/RealSolve)

---

Desenvolvido com ❤️ pela equipe RealSolve
