export const APP_NAME = "WorkFlowX";
export const APP_VERSION = "0.1.0";

export const DEFAULT_LLM_SETTINGS = {
  baseUrl: "https://generativelanguage.googleapis.com",
  apiKey: "",
  model: "gemini-2.0-flash",
};

export const ROUTES = [
  { path: "/", label: "Home", icon: "Home" },
  { path: "/chat", label: "AI Chat", icon: "MessageSquare" },
  { path: "/planner", label: "Planner", icon: "Calendar" },
  { path: "/tasks", label: "Tasks", icon: "CheckSquare" },
  { path: "/learning", label: "Learning", icon: "GraduationCap" },
  { path: "/news", label: "News", icon: "Newspaper" },
  { path: "/automations", label: "Automations", icon: "Zap" },
  { path: "/productivity", label: "Productivity", icon: "TrendingUp" },
  { path: "/settings", label: "Settings", icon: "Settings" },
] as const;

export const EMBEDDED_APPS = {
  planner: "https://planner.ciandt.com",
  tasks: "https://taskflow.ciandt.com",
  news: "https://ai-market-pulse.ciandt.com",
} as const;