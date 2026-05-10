"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-1 flex-col min-w-0">
        <Header />
        <main className="flex-1 px-4 py-8 md:px-8 lg:px-12 max-w-4xl">
          {children}
        </main>
        <footer className="border-t border-border-dim px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-muted">
            <p>Lumoxic AI - Photon Computing Platform</p>
            <p>Built with Next.js. Deployed on GitHub Pages.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
