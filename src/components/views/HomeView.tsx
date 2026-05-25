import React from "react";
import { MessageSquare, Calendar, CheckSquare, Newspaper, Sparkles, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { View } from "@/types";

interface HomeViewProps {
  onNavigate: (view: View) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const features = [
    {
      id: "chat" as View,
      icon: MessageSquare,
      title: t("home.chatFeature"),
      description: t("home.chatDesc"),
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "blue",
    },
    {
      id: "planner" as View,
      icon: Calendar,
      title: t("home.plannerFeature"),
      description: t("home.plannerDesc"),
      gradient: "from-violet-500/20 to-purple-500/20",
      borderColor: "violet",
    },
    {
      id: "tasks" as View,
      icon: CheckSquare,
      title: t("home.tasksFeature"),
      description: t("home.tasksDesc"),
      gradient: "from-emerald-500/20 to-green-500/20",
      borderColor: "green",
    },
    {
      id: "news" as View,
      icon: Newspaper,
      title: t("home.newsFeature"),
      description: t("home.newsDesc"),
      gradient: "from-amber-500/20 to-orange-500/20",
      borderColor: "amber",
    },
  ];

  const quickActions = [
    { id: "learning", icon: Sparkles, label: t("nav.learning") },
    { id: "automations", icon: Zap, label: t("nav.automations") },
    { id: "productivity", icon: TrendingUp, label: t("nav.productivity") },
  ];

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Hero section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-heading tracking-tight">
          {t("home.welcome")}
        </h1>
        <p className="text-xl text-white/50 font-body">
          {t("home.subtitle")}
        </p>
      </div>

      {/* Feature cards */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-white/80 mb-6 font-heading">{t("home.features")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => onNavigate(feature.id)}
                className={`
                  group relative overflow-hidden
                  bg-gradient-to-br ${feature.gradient}
                  rounded-2xl p-6 text-left
                  border border-${feature.borderColor}-500/20
                  hover:border-${feature.borderColor}-500/40
                  transition-all duration-300
                  hover:scale-[1.02] hover:shadow-xl
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-${feature.borderColor}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className={`text-${feature.borderColor}-400`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 font-heading">{feature.title}</h3>
                  <p className="text-sm text-white/50 font-body">{feature.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="text-lg font-semibold text-white/80 mb-6 font-heading">Quick Access</h2>
        <div className="flex flex-wrap gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => onNavigate(action.id as View)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};