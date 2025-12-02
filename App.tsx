import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Sidebar } from './components/Sidebar';
import { OverviewView } from './components/OverviewView';
import { ProjectsView } from './components/ProjectsView';
import { MembersView } from './components/MembersView';
import { WarningsView } from './components/WarningsView';
import { loadAllData } from './services/dataService';
import { DashboardData, TabType } from './types';
import { WifiOff, Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      console.log("🚀 Iniciando carregamento do Dashboard...");
      try {
        const dashboardData = await loadAllData();
        
        if (mounted) {
          setData(dashboardData);
          setLoading(false);
          console.log("✅ Dados carregados no estado da aplicação.");
        }
      } catch (e) {
        console.error("Erro não tratado no App.tsx:", e);
        if (mounted) setLoading(false);
      }
    }

    fetchData();

    return () => { mounted = false; };
  }, []);

  // Helper para título dinâmico
  const getPageTitle = (tab: TabType) => {
    switch (tab) {
      case 'overview': return 'Visão Geral';
      case 'projects': return 'Gestão de Projetos';
      case 'members': return 'Quadro de Membros';
      case 'warnings': return 'Controle de Advertências';
      default: return 'Dashboard';
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background text-accent flex-col gap-4">
        <Loader2 size={48} className="animate-spin" />
        <span className="text-sm font-display tracking-widest animate-pulse">CARREGANDO DADOS...</span>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 ml-20 lg:ml-64 flex flex-col min-h-screen">
        {/* Top Status Bar */}
        <header className="h-20 bg-surface/50 backdrop-blur-md sticky top-0 z-20 px-8 flex items-center justify-between border-b border-gray-800">
           {/* Dynamic Page Title */}
           <div className="flex flex-col">
              <h1 className="text-xl font-display text-white tracking-wide">
                {getPageTitle(activeTab)}
              </h1>
              <span className="text-xs text-gray-400 font-medium">
                 {data.isOfflineMode ? 'Modo de Demonstração (Offline)' : 'Conectado ao Firebase Realtime'}
              </span>
           </div>
           
           <div className="flex items-center gap-4">
              {data.isOfflineMode ? (
                 <div className="flex items-center gap-2 px-3 py-1 bg-red-900/30 border border-red-500/50 rounded-full text-red-400 text-xs font-bold animate-pulse">
                    <WifiOff size={14} />
                    OFFLINE
                 </div>
              ) : (
                <div className="flex items-center gap-2 px-3 py-1 bg-green-900/30 border border-green-500/50 rounded-full text-green-400 text-xs font-bold shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    ONLINE
                 </div>
              )}
              
              <div className="w-8 h-8 rounded-full bg-surfaceLight border border-gray-600 flex items-center justify-center text-xs font-bold text-accent shadow-lg">
                ADM
              </div>
           </div>
        </header>

        {/* Content Area */}
        <div className="p-6 lg:p-8 flex-1 overflow-y-auto">
          {activeTab === 'overview' && <OverviewView data={data} />}
          {activeTab === 'projects' && <ProjectsView data={data} />}
          {activeTab === 'members' && <MembersView data={data} />}
          {activeTab === 'warnings' && <WarningsView data={data} />}
        </div>
      </main>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element to mount to");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);