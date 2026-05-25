import React from "react";
import {
  Home,
  MessageSquare,
  Calendar,
  CheckSquare,
  GraduationCap,
  Newspaper,
  Zap,
  TrendingUp,
  Settings,
  X,
} from "lucide-react";
import type { View } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const iconMap = {
  Home,
  MessageSquare,
  Calendar,
  CheckSquare,
  GraduationCap,
  Newspaper,
  Zap,
  TrendingUp,
  Settings,
};

const navItems: { id: View; icon: keyof typeof iconMap; labelKey: string }[] = [
  { id: "home", icon: "Home", labelKey: "nav.home" },
  { id: "chat", icon: "MessageSquare", labelKey: "nav.chat" },
  { id: "planner", icon: "Calendar", labelKey: "nav.planner" },
  { id: "tasks", icon: "CheckSquare", labelKey: "nav.tasks" },
  { id: "learning", icon: "GraduationCap", labelKey: "nav.learning" },
  { id: "news", icon: "Newspaper", labelKey: "nav.news" },
  { id: "automations", icon: "Zap", labelKey: "nav.automations" },
  { id: "productivity", icon: "TrendingUp", labelKey: "nav.productivity" },
  { id: "settings", icon: "Settings", labelKey: "nav.settings" },
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onViewChange,
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:relative z-50 lg:z-auto
          w-64 lg:w-56 h-full
          bg-slate-900/80 backdrop-blur-xl
          border-r border-white/[0.08]
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white lg:hidden"
        >
          <X size={20} />
        </button>

        {/* Logo area */}
        <div className="p-4 border-b border-white/[0.08] lg:hidden">
          <span className="font-bold text-white text-lg">WorkFlowX</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onViewChange(item.id);
                  onClose?.();
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 mb-1
                  ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500/20 to-violet-500/20 text-white border border-blue-500/30"
                      : "text-white/50 hover:text-white hover:bg-white/[0.05]"
                  }
                `}
              >
                <Icon size={18} className={isActive ? "text-blue-400" : ""} />
                <span className="font-medium">{t(item.labelKey)}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />
                )}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};