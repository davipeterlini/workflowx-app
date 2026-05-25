const GOOGLE_CLIENT_ID =
  (window as any).__ENV__?.VITE_GOOGLE_CLIENT_ID ||
  import.meta.env.VITE_GOOGLE_CLIENT_ID ||
  "";

export const config = {
  googleClientId: GOOGLE_CLIENT_ID,
  apiTimeout: 30000,
  maxRetries: 3,
};