import type { GameQuery } from "../App";
import type { FetchResponse } from "../Services/HttpService";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      httpService.GetAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sort,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
};
