import React, { useState, lazy, Suspense } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { LoginScreen } from "./components/auth/LoginScreen";
import { HomeView } from "./components/views/HomeView";
import { ChatView } from "./components/views/ChatView";
import { SettingsView } from "./components/views/SettingsView";
import { PlannerView } from "./components/views/PlannerView";
import { TasksView } from "./components/views/TasksView";
import { NewsView } from "./components/views/NewsView";
import { LearningView } from "./components/views/LearningView";
import { AutomationsView } from "./components/views/AutomationsView";
import { ProductivityView } from "./components/views/ProductivityView";
import { useAuth } from "./contexts/AuthContext";
import { config } from "./config";
import type { View } from "./types";
import { Menu } from "lucide-react";

const App: React.FC = () => {
  const { user, isLoading } = useAuth();
  const [currentView, setCurrentView] = useState<View>("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <HomeView onNavigate={setCurrentView} />;
      case "chat":
        return <ChatView />;
      case "settings":
        return <SettingsView />;
      case "planner":
        return <PlannerView />;
      case "tasks":
        return <TasksView />;
      case "news":
        return <NewsView />;
      case "learning":
        return <LearningView />;
      case "automations":
        return <AutomationsView />;
      case "productivity":
        return <ProductivityView />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <GoogleOAuthProvider clientId={config.googleClientId}>
      <div className="flex h-screen bg-slate-950 text-white overflow-hidden">
        <Sidebar
          currentView={currentView}
          onViewChange={setCurrentView}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-slate-900/80 backdrop-blur-xl border-b border-white/[0.08]">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg hover:bg-white/10 text-white/60"
            >
              <Menu size={24} />
            </button>
            <span className="font-bold text-white">WorkFlowX</span>
            <div className="w-10" />
          </div>

          <Header />
          <main className="flex-1 overflow-auto">
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
                </div>
              }
            >
              {renderView()}
            </Suspense>
          </main>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;