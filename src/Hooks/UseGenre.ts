import { UseGenres } from "./UseGenres";

export const UseGenre = (genreId?: number | null) => {
  const { data: genres } = UseGenres();
  return genres?.results.find((genre) => genre.id === genreId);
};
