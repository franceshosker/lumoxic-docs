"use client";

import { useState } from "react";

interface Tab {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
  defaultTab?: string;
}

export default function TabSwitcher({ tabs, defaultTab }: TabSwitcherProps) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.value || "");

  return (
    <div className="my-4">
      <div className="flex border-b border-border-dim">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`px-4 py-2.5 text-sm font-medium transition-all border-b-2 -mb-px ${
              active === tab.value
                ? "border-neon-cyan text-neon-cyan"
                : "border-transparent text-text-muted hover:text-text-secondary hover:border-border-dim"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="animate-fade-in">
        {tabs.find((t) => t.value === active)?.content}
      </div>
    </div>
  );
}
