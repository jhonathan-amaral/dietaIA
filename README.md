## 🥗 NutriTrack (Sugestão) 🍎

Este projeto é um aplicativo móvel desenvolvido com Expo e React Native, focado em rastreamento nutricional, considerando a estrutura de pastas.

## 📱 Tecnologias Utilizadas:

- React Native
- Expo
- TypeScript
- Axios
- ReactQuery
- React HookForm
- Zod
- Zustand

### 📁 app/

Contém o código-fonte principal do aplicativo.

- `_layout.tsx`: Define o layout base da aplicação.
- `index.tsx` 🚀: Ponto de entrada principal do aplicativo.
- `create/`: Tela ou fluxo de criação, possivelmente de refeições ou alimentos.
  - `index.tsx`: Componente principal da tela de criação.
- `nutrition/`: Seção relacionada a informações nutricionais.
  - `index.tsx`: Componente principal da tela de nutrição.
- `step/`: Potencialmente um fluxo passo-a-passo, talvez para cadastro de alimentos ou refeições.
  - `index.tsx`: Componente principal do fluxo passo-a-passo.

### 📁 components/

Componentes reutilizáveis da interface.

- `header/`: Componente de cabeçalho.
  - `header.tsx`: Componente principal do cabeçalho.
- `input/`: Componentes de entrada de dados.
  - `index.tsx`: Componente de input de texto.
  - `select.tsx`: Componente de seleção (dropdown).

### 📁 services/

Lógica de comunicação com serviços externos.

- `api.ts`: Implementação da comunicação com a API.

### 📁 store/

Gerenciamento de estado da aplicação.

- `data.ts`: Define a estrutura e funções relacionadas aos dados da aplicação.

### 📁 assets/

Imagens, fontes e outros recursos visuais.

- `fonts/`: Pasta para arquivos de fontes.
- `images/`: Pasta para arquivos de imagens.

### 📄 Arquivos da raiz

- `app.json`: Configurações principais da aplicação Expo.
- `babel.config.js`: Configurações do Babel para transpilação do código.
- `package-lock.json`, `package.json` 📦: Gerenciamento de dependências.
- `tsconfig.json`: Configurações do compilador TypeScript.
- `types/`: Definições de tipos adicionais.
- `scripts/`: Pasta para scripts auxiliares.

## Observações Adicionais

- A pasta `nutrition/` sugere um foco em informações nutricionais.
- A presença de um fluxo passo-a-passo (`step/`) pode indicar um processo guiado para o usuário.
