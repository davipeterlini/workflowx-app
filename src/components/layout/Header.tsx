import React from "react";
import { useAuth } from "@/contexts/AuthContext";

export const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="h-14 bg-slate-900/80 backdrop-blur-xl border-b border-white/[0.08] flex items-center px-6 justify-between flex-shrink-0">
      <h1 className="text-lg font-bold text-white font-heading tracking-tight">WorkFlowX</h1>
      {user && (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {user.avatar && (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full border border-white/10"
              />
            )}
            <span className="text-sm text-white/60 hidden sm:block">{user.email}</span>
          </div>
          <button
            onClick={signOut}
            className="text-sm text-white/40 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
          >
            Sign out
          </button>
        </div>
      )}
    </header>
  );
};