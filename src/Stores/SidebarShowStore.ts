import { create } from "zustand";

interface SidebarShowStore {
  showSidebar: boolean;
  setShowSideBar: (show: boolean) => void;
}

const useSidebarShowStore = create<SidebarShowStore>((set) => ({
  showSidebar: false,
  setShowSideBar: (show: boolean) => set(() => ({ showSidebar: show })),
}));

export default useSidebarShowStore;
