import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  activeSection: string;
  searchQuery: string;
  expandedSections: Set<string>;
  toggle: () => void;
  setOpen: (open: boolean) => void;
  setActiveSection: (section: string) => void;
  setSearchQuery: (query: string) => void;
  toggleSection: (section: string) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  activeSection: "",
  searchQuery: "",
  expandedSections: new Set(["getting-started", "api-reference", "sdk", "concepts"]),
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  setOpen: (open) => set({ isOpen: open }),
  setActiveSection: (section) => set({ activeSection: section }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleSection: (section) =>
    set((s) => {
      const next = new Set(s.expandedSections);
      if (next.has(section)) next.delete(section);
      else next.add(section);
      return { expandedSections: next };
    }),
}));
