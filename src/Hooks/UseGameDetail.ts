import { useQuery } from "@tanstack/react-query";
import Create from "../Services/HttpService";
import type { Game } from "../entities/Game";

const httpService = Create<Game>("games");
export const useGameDetail = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => httpService.Get(slug),
  });
};
