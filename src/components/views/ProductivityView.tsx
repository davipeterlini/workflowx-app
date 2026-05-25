import React from "react";
import { TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ProductivityView: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 flex items-center justify-center animate-pulse">
          <TrendingUp size={40} className="text-emerald-400" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-3 font-heading">{t("coming.soon")}</h2>
      <p className="text-white/50 max-w-md font-body">{t("placeholder.productivity")}</p>
    </div>
  );
};