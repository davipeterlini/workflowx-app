import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";

// Mock @react-oauth/google BEFORE importing components
vi.mock("@react-oauth/google", () => ({
  useGoogleLogin: () => vi.fn(),
  useGoogleOAuth: () => ({ clientId: "test-client-id" }),
  googleLogout: vi.fn(),
  GoogleOAuthProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Now import components
import { render, screen } from "../utils/test-utils";
import { Header } from "../../src/components/layout/Header";

// Mock localStorage
const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

describe("Header", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocalStorage.getItem.mockReturnValue(null);
  });

  it("renders the app name", () => {
    render(<Header />);
    expect(screen.getByText(/WorkFlowX/i)).toBeInTheDocument();
  });
});