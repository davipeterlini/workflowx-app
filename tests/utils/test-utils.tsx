import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { LanguageProvider } from "../../src/contexts/LanguageContext";
import { ToastProvider } from "../../src/contexts/ToastContext";
import { AuthProvider } from "../../src/contexts/AuthContext";

const mockUser = {
  id: "1",
  name: "Test User",
  email: "test@example.com",
  avatar: "https://example.com/avatar.jpg",
  accessToken: "mock-token",
};

const AllProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId="test-client-id">
      <LanguageProvider>
        <ToastProvider>
          <AuthProvider>{children}</AuthProvider>
        </ToastProvider>
      </LanguageProvider>
    </GoogleOAuthProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

export const mockSignedInUser = mockUser;

export const mockAuthContext = (overrides = {}) => {
  const defaultContext = {
    user: mockUser,
    isLoading: false,
    signIn: () => {},
    signOut: () => {},
  };
  return { ...defaultContext, ...overrides };
};