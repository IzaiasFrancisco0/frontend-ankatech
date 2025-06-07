#Frontend - Next.js + React + TypeScript

Frontend do projeto desenvolvido com Next.js, React, TypeScript, React Hook Form, React Query, Zod e ShadCN UI, consumindo a API do backend.

---

## ⚙️ Instalação e uso

### 1. Clone o repositório
git clone https://github.com/IzaiasFrancisco0/frontend-ankatech.git
cd front

2. Instale as dependências
npm install
# ou
yarn install

3. Configure o ambiente
Crie um arquivo .env.local na raiz do projeto com a seguinte variável:
NEXT_PUBLIC_API_URL=http://localhost:5000

4. Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev

front/
├── app/                    # Páginas com roteamento App Router
│   ├── clientes/           # Página de listagem/cadastro de clientes
│   ├── ativos/             # Página de listagem de ativos
│   └── layout.tsx          # Layout base da aplicação
├── lib/                    # Funções auxiliares (ex: chamadas API)
├── styles/                 # Estilos globais
├── .env.local              # Variáveis de ambiente
├── next.config.js          # Configuração Next.js
└── tsconfig.json           # Configuração TypeScript

