
export interface Member {
  id: string;
  nome: string;
  cargo: string;
  email?: string;
  advertencias: number;
  taxaPresenca: number; // 0-100
  projetos: string[];
  alocacoes: string;
}

export interface ProjectIDP {
  id: string;
  nome: string;
  nps: number;
  ces: number;
  idp: number; // Indice de Desempenho do Projeto
  status: 'Ativo' | 'Concluído' | 'Em Negociação';
  lider: string;
}

export interface TimeSeriesPoint {
  periodo: string;
  valor: number;
}

// Aggregated Data Context
export interface DashboardData {
  members: Member[];
  projects: ProjectIDP[];
  pcoHistory: TimeSeriesPoint[];
  avdHistory: TimeSeriesPoint[];
  allocations?: any[]; // Campo para armazenar dados brutos de alocações se necessário
  isOfflineMode: boolean;
  lastUpdated: Date;
}

export type TabType = 'overview' | 'projects' | 'members' | 'warnings';
