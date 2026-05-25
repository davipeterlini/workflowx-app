import React from "react";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LearningView: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center animate-pulse">
          <GraduationCap size={40} className="text-amber-400" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-3 font-heading">{t("coming.soon")}</h2>
      <p className="text-white/50 max-w-md font-body">{t("placeholder.learning")}</p>
    </div>
  );
};