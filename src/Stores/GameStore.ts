import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort?: string;
  searchText?: string;
}

export interface GameStore {
  gameQuery: GameQuery;
  setGenreId: (selectedGenreId: number) => void;
  setPlatformId: (selectedPlatformId: number) => void;
  setSort: (selectedSort: string) => void;
  setSearch: (searchText: string) => void;
}

const useGameStore = create<GameStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),

  setPlatformId: (platformId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),

  setSort: (sort: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sort } })),

  setSearch: (searchText: string) => set(() => ({ gameQuery: { searchText } })),
}));

export default useGameStore;
