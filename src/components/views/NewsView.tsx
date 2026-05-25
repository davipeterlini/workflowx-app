import React, { useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import { EMBEDDED_APPS } from "@/constants";

export const NewsView: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08]">
        <h2 className="text-lg font-semibold text-white font-heading">News</h2>
        <a
          href={EMBEDDED_APPS.news}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-white text-sm transition-all"
        >
          <ExternalLink size={14} />
          Open in new tab
        </a>
      </div>

      {/* iFrame */}
      <div className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
            <div className="flex items-center gap-3 text-white/50">
              <Loader2 className="animate-spin" size={24} />
              <span>Loading News...</span>
            </div>
          </div>
        )}
        <iframe
          src={EMBEDDED_APPS.news}
          className="w-full h-full border-0"
          onLoad={() => setIsLoading(false)}
          title="AI Market Pulse"
        />
      </div>
    </div>
  );
};