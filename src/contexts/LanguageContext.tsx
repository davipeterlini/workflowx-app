import React, { createContext, useContext, useState, useCallback } from "react";

type Language = "en" | "pt-BR";

interface LanguageContextType {
  language: Language;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "app.name": "WorkFlowX",
    "nav.home": "Home",
    "nav.chat": "AI Chat",
    "nav.planner": "Planner",
    "nav.tasks": "Tasks",
    "nav.learning": "Learning",
    "nav.news": "News",
    "nav.automations": "Automations",
    "nav.productivity": "Productivity",
    "nav.settings": "Settings",
    "auth.signIn": "Sign in with Google",
    "auth.signingIn": "Signing in...",
    "auth.signOut": "Sign out",
    "home.welcome": "Welcome to WorkFlowX",
    "home.subtitle": "Your all-in-one productivity platform",
    "home.features": "Features",
    "home.chatFeature": "AI Chat",
    "home.chatDesc": "Chat with Gemini AI powered by Google",
    "home.plannerFeature": "Planner",
    "home.plannerDesc": "Integrated planning tool",
    "home.tasksFeature": "Tasks",
    "home.tasksDesc": "Manage your tasks efficiently",
    "home.newsFeature": "News",
    "home.newsDesc": "AI-powered market insights",
    "settings.title": "Settings",
    "settings.llmConfig": "LLM Configuration",
    "settings.baseUrl": "Base URL",
    "settings.apiKey": "API Key",
    "settings.model": "Model",
    "settings.save": "Save Settings",
    "settings.saved": "Settings saved!",
    "chat.placeholder": "Type your message...",
    "chat.send": "Send",
    "coming.soon": "Coming soon",
    "placeholder.learning": "Learning module coming soon",
    "placeholder.automations": "Automations coming soon",
    "placeholder.productivity": "Productivity tools coming soon",
  },
  "pt-BR": {
    "app.name": "WorkFlowX",
    "nav.home": "Inicio",
    "nav.chat": "Chat IA",
    "nav.planner": "Planejador",
    "nav.tasks": "Tarefas",
    "nav.learning": "Aprendizado",
    "nav.news": "Noticias",
    "nav.automations": "Automacoes",
    "nav.productivity": "Produtividade",
    "nav.settings": "Configuracoes",
    "auth.signIn": "Entrar com Google",
    "auth.signingIn": "Entrando...",
    "auth.signOut": "Sair",
    "home.welcome": "Bem-vindo ao WorkFlowX",
    "home.subtitle": "Sua plataforma de produtividade tudo-em-um",
    "home.features": "Funcionalidades",
    "home.chatFeature": "Chat IA",
    "home.chatDesc": "Converse com IA Gemini powered by Google",
    "home.plannerFeature": "Planejador",
    "home.plannerDesc": "Ferramenta de planejamento integrada",
    "home.tasksFeature": "Tarefas",
    "home.tasksDesc": "Gerencie suas tarefas com eficiencia",
    "home.newsFeature": "Noticias",
    "home.newsDesc": "Insights de mercado com IA",
    "settings.title": "Configuracoes",
    "settings.llmConfig": "Configuracao LLM",
    "settings.baseUrl": "URL Base",
    "settings.apiKey": "Chave API",
    "settings.model": "Modelo",
    "settings.save": "Salvar Configuracoes",
    "settings.saved": "Configuracoes salvas!",
    "chat.placeholder": "Digite sua mensagem...",
    "chat.send": "Enviar",
    "coming.soon": "Em breve",
    "placeholder.learning": "Modulo de aprendizado em breve",
    "placeholder.automations": "Automacoes em breve",
    "placeholder.productivity": "Ferramentas de produtividade em breve",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};