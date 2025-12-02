# CEFET Jr. – People Analytics Dashboard

Dashboard de People Analytics criado no **Google AI Studio** e desenvolvido em **React + TypeScript**, consumindo dados em tempo real do **Firebase Realtime Database**.  
O objetivo é consolidar todos os dados da área de Gestão de Pessoas da **CEFET Jr.** em um painel **claro, rápido e fácil de ler** por qualquer pessoa da empresa.

---

## 🎯 Objetivo do projeto

Quando entrei na diretoria de Pessoas, um dos grandes desafios era **organizar dados espalhados em várias planilhas** (presença, projetos, advertências, PDI, avaliações etc.) de um jeito que fosse:

- fácil de entender;
- seguro do ponto de vista de dados sensíveis;
- acessível para qualquer membro da empresa.

Este dashboard nasce justamente para resolver isso: **um único lugar** para acompanhar os principais indicadores de Pessoas.

---

## 🧩 Funcionalidades principais

### 🔎 Visão Geral (Overview)
- eNPS global da empresa (0–100%).
- Média da **PCO** (Pesquisa de Clima Organizacional) em escala de 0 a 4.
- **Taxa média de presença** em treinamentos/eventos.
- Média das notas de **AVD** (Avaliação de Desempenho).
- Gráfico de evolução da PCO ao longo dos períodos.

### 📂 Projetos
- Contagem de:
  - projetos **ativos** (em andamento),
  - projetos **finalizados**,
  - projetos **cancelados**.
- Cálculo do **NPS médio** dos projetos finalizados.
- Tabela de projetos com ordenação por:
  - status,
  - cliente,
  - NPS,
  - período,
  - tipo de projeto.
- Visão pensada para apoiar decisões da Diretoria de Projetos e da área de Pessoas.

### 👥 Membros
- Busca por nome dos membros.
- Filtro por **cargo** (trainee, consultor, gerente, diretor etc.).
- KPIs de:
  - quantidade total de membros,
  - taxa média de presença,
  - média de pontos de advertência restantes.
- Lista de membros com:
  - nome,
  - cargo,
  - taxa de presença,
  - pontos de advertência (0–50),
  - participação em projetos / alocações.
- Cores diferentes para o "nível de risco" das advertências, de acordo com os pontos restantes.

### ⚠️ Advertências (Warnings)
- **Total de pontos de advertência** distribuídos.
- **Porcentagem de membros sem advertências** (0 pontos perdidos).
- Agrupamento por **cargo**, mostrando quais cargos concentram mais pontos perdidos.
- Estrutura de dados preparada para usar tanto o resumo agregado (`advertencias/resumo`) quanto o histórico detalhado (`advertencias/historico`).

---

## 🏗️ Arquitetura do projeto

Principais arquivos e pastas:

- `App.tsx` – estrutura principal da aplicação e navegação entre abas (Overview, Projetos, Membros, Advertências).
- `components/OverviewView.tsx` – tela com os KPIs globais e a evolução da PCO.
- `components/ProjectsView.tsx` – análise dos projetos, NPS médio e tabela de projetos.
- `components/MembersView.tsx` – listagem de membros com filtros, busca e KPIs de presença/advertências.
- `components/WarningsView.tsx` – visão consolidada das advertências.
- `components/KPICard.tsx` – componente reutilizável para exibir indicadores em forma de cards.
- `services/dataService.ts` – camada de acesso e tratamento dos dados:
  - leitura no Firebase,
  - limpeza e normalização dos campos,
  - agregações (médias, totais, séries históricas).
- `constants.ts` – configurações globais, incluindo:
  - `BASE_URL` do Realtime Database,
  - mocks de dados para modo offline.
- `types.ts` – tipagens TypeScript para membros, projetos, séries históricas e estrutura do dashboard.

---

## 🧪 Stack utilizada

- **Frontend**
  - [React](https://react.dev/) (com Vite)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/) para build e dev server
  - [Recharts](https://recharts.org/) para gráficos
  - [lucide-react](https://lucide.dev/) para ícones

- **Backend / Dados**
  - **Firebase Realtime Database** como fonte de dados
  - Dados enviados a partir de **planilhas do Google Sheets** via **Google Apps Script** (presença, projetos, advertências, PDI etc.)

- **IA**
  - Protótipo inicial gerado no **Google AI Studio**, depois refinado manualmente.

---

## 🚀 Como rodar o projeto localmente

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/cefet-jr-people-analytics.git
cd cefet-jr-people-analytics

# 2. Instalar dependências
npm install

# 3. (Opcional) Configurar chave da API do Gemini
# Crie o arquivo .env.local na raiz do projeto e adicione:
# VITE_GEMINI_API_KEY=SUAS_CHAVE_AQUI

# 4. Ajustar a URL do Firebase, se necessário
# Em constants.ts:
# export const BASE_URL = "https://seu-banco.firebaseio.com";

# 5. Rodar o servidor de desenvolvimento
npm run dev
