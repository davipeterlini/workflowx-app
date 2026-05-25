export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface LLMSettings {
  baseUrl: string;
  apiKey: string;
  model: string;
}

export type AppRoute =
  | "/"
  | "/chat"
  | "/planner"
  | "/tasks"
  | "/learning"
  | "/news"
  | "/automations"
  | "/productivity"
  | "/settings";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  accessToken?: string;
}

export type View =
  | "home"
  | "chat"
  | "planner"
  | "tasks"
  | "learning"
  | "news"
  | "automations"
  | "productivity"
  | "settings";

export interface ToastMessage {
  id: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
}