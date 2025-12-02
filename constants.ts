import { DashboardData, Member, ProjectIDP, TimeSeriesPoint } from './types';

export const BASE_URL = "https://teste-ac992-default-rtdb.firebaseio.com";

// --- MOCK DATA FOR FALLBACK ---

const MOCK_MEMBERS: Member[] = [
  { id: '1', nome: 'Ana Silva', cargo: 'Consultor', email: 'ana.silva@cefetjr.com', advertencias: 0, taxaPresenca: 95, projetos: ['Site Institucional'], alocacoes: 'Dev Front-end' },
  { id: '2', nome: 'Bruno Costa', cargo: 'Gerente', email: 'bruno.costa@cefetjr.com', advertencias: 1, taxaPresenca: 88, projetos: ['App Delivery', 'Sistema Interno'], alocacoes: 'Scrum Master' },
  { id: '3', nome: 'Carla Dias', cargo: 'Diretor', email: 'carla.dias@cefetjr.com', advertencias: 0, taxaPresenca: 100, projetos: [], alocacoes: 'Diretoria' },
  { id: '4', nome: 'Daniel Souza', cargo: 'Trainee', email: 'daniel.s@cefetjr.com', advertencias: 0, taxaPresenca: 92, projetos: ['Pesquisa de Mercado'], alocacoes: 'Analista' },
  { id: '5', nome: 'Eduardo Lima', cargo: 'Consultor', email: 'eduardo.l@cefetjr.com', advertencias: 2, taxaPresenca: 75, projetos: ['App Delivery'], alocacoes: 'Dev Back-end' },
  { id: '6', nome: 'Fernanda Rocha', cargo: 'Consultor', email: 'fernanda.r@cefetjr.com', advertencias: 0, taxaPresenca: 98, projetos: ['Site Institucional'], alocacoes: 'Designer' },
  { id: '7', nome: 'Gabriel Alves', cargo: 'Trainee', email: 'gabriel.a@cefetjr.com', advertencias: 0, taxaPresenca: 85, projetos: ['Pesquisa de Mercado'], alocacoes: 'Coletor de Dados' },
  { id: '8', nome: 'Helena Martins', cargo: 'Gerente', email: 'helena.m@cefetjr.com', advertencias: 0, taxaPresenca: 96, projetos: ['Consultoria Financeira'], alocacoes: 'Gerente de Contas' },
  { id: '9', nome: 'Igor Pereira', cargo: 'Consultor', email: 'igor.p@cefetjr.com', advertencias: 3, taxaPresenca: 60, projetos: [], alocacoes: 'Afastado' },
  { id: '10', nome: 'Julia Santos', cargo: 'Consultor', email: 'julia.s@cefetjr.com', advertencias: 0, taxaPresenca: 94, projetos: ['Consultoria Financeira'], alocacoes: 'Analista Financeiro' },
];

const MOCK_PROJECTS: ProjectIDP[] = [
  { id: 'p1', nome: 'App Delivery', nps: 85, ces: 4.2, idp: 9.5, status: 'Ativo', lider: 'Bruno Costa' },
  { id: 'p2', nome: 'Site Institucional', nps: 92, ces: 4.8, idp: 9.8, status: 'Ativo', lider: 'Ana Silva' },
  { id: 'p3', nome: 'Pesquisa de Mercado', nps: 78, ces: 3.9, idp: 8.5, status: 'Em Negociação', lider: 'Daniel Souza' },
  { id: 'p4', nome: 'Sistema Interno', nps: 60, ces: 3.5, idp: 7.0, status: 'Concluído', lider: 'Bruno Costa' },
  { id: 'p5', nome: 'Consultoria Financeira', nps: 100, ces: 5.0, idp: 10.0, status: 'Ativo', lider: 'Helena Martins' },
];

const MOCK_PCO_SERIES: TimeSeriesPoint[] = [
  { periodo: 'Jan', valor: 70 },
  { periodo: 'Fev', valor: 75 },
  { periodo: 'Mar', valor: 72 },
  { periodo: 'Abr', valor: 85 },
  { periodo: 'Mai', valor: 90 },
  { periodo: 'Jun', valor: 88 },
];

const MOCK_AVD_SERIES: TimeSeriesPoint[] = [
  { periodo: '2023.1', valor: 8.2 },
  { periodo: '2023.2', valor: 8.5 },
  { periodo: '2024.1', valor: 8.8 },
  { periodo: '2024.2', valor: 9.1 },
];

export const MOCK_FULL_DATA: DashboardData = {
  members: MOCK_MEMBERS,
  projects: MOCK_PROJECTS,
  pcoHistory: MOCK_PCO_SERIES,
  avdHistory: MOCK_AVD_SERIES,
  isOfflineMode: true,
  lastUpdated: new Date()
};