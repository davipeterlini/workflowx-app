import React, { useState } from "react";
import { Save, Globe, Key, Cpu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/contexts/ToastContext";
import { storage } from "@/services/storage";
import type { LLMSettings } from "@/types";
import { DEFAULT_LLM_SETTINGS } from "@/constants";

export const SettingsView: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { showToast } = useToast();
  const [settings, setSettings] = useState<LLMSettings>(() =>
    storage.get("llm_settings", DEFAULT_LLM_SETTINGS)
  );

  const handleSave = () => {
    storage.set("llm_settings", settings);
    showToast(t("settings.saved"), "success");
  };

  const handleClearHistory = () => {
    localStorage.removeItem("workflowx_chat_messages");
    showToast("Chat history cleared", "success");
  };

  return (
    <div className="p-6 lg:p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-8 font-heading">{t("settings.title")}</h1>

      {/* LLM Configuration */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white/80 mb-4 font-heading flex items-center gap-2">
          <Cpu size={20} className="text-blue-400" />
          {t("settings.llmConfig")}
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-white/60 mb-2 font-body">
              {t("settings.baseUrl")}
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input
                type="text"
                value={settings.baseUrl}
                onChange={(e) => setSettings({ ...settings, baseUrl: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="https://generativelanguage.googleapis.com"
              />
            </div>
            <p className="text-xs text-white/40 mt-2">
              Supports Google Gemini API or LiteLLM proxy endpoints
            </p>
          </div>

          <div>
            <label className="block text-sm text-white/60 mb-2 font-body">
              {t("settings.apiKey")}
            </label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input
                type="password"
                value={settings.apiKey}
                onChange={(e) => setSettings({ ...settings, apiKey: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="Enter your API key"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/60 mb-2 font-body">
              {t("settings.model")}
            </label>
            <input
              type="text"
              value={settings.model}
              onChange={(e) => setSettings({ ...settings, model: e.target.value })}
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors"
              placeholder="gemini-2.0-flash"
            />
            <p className="text-xs text-white/40 mt-2">
              Default: gemini-2.0-flash. Other options: gemini-1.5-pro, gemini-pro
            </p>
          </div>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-medium hover:opacity-90 transition-all"
          >
            <Save size={18} />
            {t("settings.save")}
          </button>
        </div>
      </section>

      {/* Language */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-white/80 mb-4 font-heading">Language</h2>
        <div className="flex gap-3">
          <button
            onClick={() => setLanguage("en")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              language === "en"
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "bg-white/[0.03] text-white/60 hover:text-white border border-white/[0.08]"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("pt-BR")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              language === "pt-BR"
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "bg-white/[0.03] text-white/60 hover:text-white border border-white/[0.08]"
            }`}
          >
            Portugues
          </button>
        </div>
      </section>

      {/* Data */}
      <section>
        <h2 className="text-lg font-semibold text-white/80 mb-4 font-heading">Data</h2>
        <button
          onClick={handleClearHistory}
          className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-white hover:bg-white/[0.06] transition-all text-sm"
        >
          Clear Chat History
        </button>
      </section>
    </div>
  );
};