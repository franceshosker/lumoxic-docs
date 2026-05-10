"use client";

import { useState } from "react";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  badge?: string;
  badgeColor?: "cyan" | "blue" | "purple" | "green" | "yellow" | "red";
}

const badgeColors = {
  cyan: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
  blue: "bg-neon-blue/10 text-neon-blue border-neon-blue/20",
  purple: "bg-neon-purple/10 text-neon-purple border-neon-purple/20",
  green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  yellow: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function Collapsible({
  title,
  children,
  defaultOpen = false,
  badge,
  badgeColor = "cyan",
}: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-border-dim rounded-lg overflow-hidden my-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-surface-hover"
      >
        <div className="flex items-center gap-3">
          <svg
            className={`h-4 w-4 text-text-muted transition-transform ${open ? "rotate-90" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-sm font-medium text-text-primary">{title}</span>
          {badge && (
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${badgeColors[badgeColor]}`}>
              {badge}
            </span>
          )}
        </div>
      </button>
      {open && (
        <div className="border-t border-border-dim px-4 py-3 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}
