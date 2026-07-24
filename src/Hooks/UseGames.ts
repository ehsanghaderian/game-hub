import type { FetchResponse } from "../Services/HttpService";
import { useInfiniteQuery } from "@tanstack/react-query";
import Create from "../Services/HttpService";
import useGameStore from "../Stores/GameStore";
import type Game from "../entities/Game";

const httpService = Create<Game>("games");
export const UseGames = () => {
  const gameQuery = useGameStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      httpService.GetAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
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
