"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/store/sidebar";

const navigation = [
  {
    title: "Getting Started",
    id: "getting-started",
    items: [
      { label: "Introduction", href: "/" },
      { label: "Installation", href: "/#installation" },
      { label: "Quick Start", href: "/#quickstart" },
    ],
  },
  {
    title: "API Reference",
    id: "api-reference",
    items: [
      { label: "Overview", href: "/api-reference" },
      { label: "Authentication", href: "/api-reference#auth" },
      { label: "Endpoints", href: "/api-reference#endpoints" },
      { label: "Error Codes", href: "/api-reference#errors" },
    ],
  },
  {
    title: "SDK Guide",
    id: "sdk",
    items: [
      { label: "Overview", href: "/sdk" },
      { label: "Python SDK", href: "/sdk#python" },
      { label: "TypeScript SDK", href: "/sdk#typescript" },
      { label: "Configuration", href: "/sdk#config" },
    ],
  },
  {
    title: "Concepts",
    id: "concepts",
    items: [
      { label: "Overview", href: "/concepts" },
      { label: "Photon Computing", href: "/concepts#photon" },
      { label: "Binary Bounce Engine", href: "/concepts#bbe" },
      { label: "LNBE Architecture", href: "/concepts#lnbe" },
    ],
  },
  {
    title: "Changelog",
    id: "changelog",
    items: [{ label: "Version History", href: "/changelog" }],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, setOpen, searchQuery, setSearchQuery, expandedSections, toggleSection } =
    useSidebarStore();

  const filtered = navigation
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => (searchQuery ? section.items.length > 0 : true));

  const isActive = (href: string) => {
    const base = href.split("#")[0] || "/";
    return pathname === base;
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 flex-shrink-0 border-r border-border-dim bg-deep-space overflow-y-auto transition-transform lg:sticky lg:top-0 lg:z-0 lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center gap-3 border-b border-border-dim px-5 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-cyan/10 border border-neon-cyan/20">
            <svg className="h-5 w-5 text-neon-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <span className="text-sm font-bold text-text-primary">Lumoxic AI</span>
            <span className="ml-2 rounded-full bg-neon-cyan/10 px-2 py-0.5 text-[10px] font-medium text-neon-cyan border border-neon-cyan/20">
              Docs
            </span>
          </div>
          <button onClick={() => setOpen(false)} className="ml-auto rounded-md p-1.5 text-text-muted hover:text-text-primary lg:hidden">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-4 py-3">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border-dim bg-surface py-2 pl-10 pr-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-neon-cyan/40 focus:ring-1 focus:ring-neon-cyan/20"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <nav className="px-3 pb-6">
          {filtered.map((section) => (
            <div key={section.id} className="mb-1">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex w-full items-center justify-between rounded-md px-2 py-2 text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-text-secondary"
              >
                {section.title}
                <svg
                  className={`h-3.5 w-3.5 transition-transform ${expandedSections.has(section.id) ? "rotate-90" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {expandedSections.has(section.id) && (
                <div className="ml-2 border-l border-border-dim pl-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                        isActive(item.href)
                          ? "bg-neon-cyan/10 text-neon-cyan font-medium"
                          : "text-text-secondary hover:text-text-primary hover:bg-surface-hover"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-auto border-t border-border-dim px-5 py-4">
          <a href="https://lumoxicai.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-text-muted hover:text-neon-cyan transition-colors">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            lumoxicai.me
          </a>
          <p className="mt-2 text-[10px] text-text-muted/60">v2.4.0</p>
        </div>
      </aside>
    </>
  );
}
