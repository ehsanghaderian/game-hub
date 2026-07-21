import type { GameQuery } from "../App";
import type { FetchResponse } from "../Services/HttpService";
import { useQuery } from "@tanstack/react-query";
import Create from "../Services/HttpService";

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

const httpService = Create<Game>("games");
export const UseGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      httpService.GetAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sort,
          search: gameQuery.searchText,
        },
      }),
  });
};
