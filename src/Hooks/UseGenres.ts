import { UseData } from "./UseData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const UseGenres = () => UseData<Genre>("genres");
