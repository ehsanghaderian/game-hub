import { UseData } from "./UseData";

export interface Genre {
  id: number;
  name: string;
}

export const UseGenres = () => UseData<Genre>("genres");
