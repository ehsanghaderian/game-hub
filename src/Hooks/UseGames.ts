import { UseData } from "./UseData";
import type { Genre } from "./UseGenres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
  metacritic: number;
}

export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}

export const UseGames = (selectedGenre: Genre | null) =>
  UseData<Game>("games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
