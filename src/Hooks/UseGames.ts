import { UseData } from "./UseData";
import type { Genre } from "./UseGenres";
import type { Platform } from "./UsePlatforms";

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

export const UseGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
) =>
  UseData<Game>(
    "games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id],
  );
