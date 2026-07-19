import type { GameQuery } from "../App";
import { UseData } from "./UseData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
  metacritic: number;
  rating_top: number;
}

export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}

export const UseGames = (gameQuery: GameQuery) =>
  UseData<Game>(
    "games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sort,
        search: gameQuery.searchText,
      },
    },
    [gameQuery],
  );
